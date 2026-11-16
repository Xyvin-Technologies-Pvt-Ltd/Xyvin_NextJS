import { NextResponse } from "next/server";
import { Resend } from "resend";
import { MIN_FILL_TIME_MS, normalizeContact, validateContact } from "@/lib/contact";
import { checkFormToken, createFormToken } from "@/lib/contact-token";
import { screenContact } from "@/lib/spam";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Best-effort rate limit per server instance: 5 submissions per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 1000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/** Issues the signed form token. The contact form fetches this when it mounts. */
export function GET() {
  return NextResponse.json({ token: createFormToken() }, { headers: { "Cache-Control": "no-store" } });
}

/** Cloudflare Turnstile check. Only enforced when TURNSTILE_SECRET_KEY is set. */
async function passesTurnstile(token: unknown, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== "string" || !token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token, ...(ip !== "unknown" ? { remoteip: ip } : {}) }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("Turnstile verification failed:", err);
    return false;
  }
}

// A normal-looking success for bots, so they don't learn to adapt.
const fakeSuccess = () => NextResponse.json({ ok: true });

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Spam traps: a hidden field humans never fill, and a server-signed "form opened at"
  // token (missing/forged = posted without loading the page; too fresh = filled by a bot).
  if (body.website) return fakeSuccess();
  const token = checkFormToken(body.token);
  if (!token.valid || token.ageMs < MIN_FILL_TIME_MS) return fakeSuccess();
  if (token.expired) {
    return NextResponse.json(
      { ok: false, error: "This page has been open a long time. Please refresh it and try again." },
      { status: 400 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (!(await passesTurnstile(body.turnstileToken, ip))) {
    return NextResponse.json(
      { ok: false, error: "We couldn't verify you're human. Please try again." },
      { status: 400 }
    );
  }

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  const input = normalizeContact(body);
  const errors = validateContact(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const verdict = screenContact(input);
  if (verdict.block) {
    console.info("Contact form: dropped spam", { reasons: verdict.reasons });
    return fakeSuccess();
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact form is not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return NextResponse.json({ ok: false, error: "Could not send your message." }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Name", input.name],
    ["Email", input.email],
    ["Phone", input.phone || "-"],
    ["Company", input.company || "-"],
    ["Service", input.service || "-"],
  ];
  if (verdict.suspect) rows.push(["Spam check", verdict.reasons.join("; ")]);
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${input.message}`;
  const html = `
    <h2 style="font-family:sans-serif">New enquiry from the website</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#555">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`
        )
        .join("")}
    </table>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(input.message)}</p>`;

  const subjectName = input.name.replace(/[\r\n]+/g, " ");
  const subjectCompany = input.company ? ` (${input.company.replace(/[\r\n]+/g, " ")})` : "";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((addr) => addr.trim()),
      replyTo: input.email,
      subject: `${verdict.suspect ? "[Possible spam] " : ""}New enquiry: ${subjectName}${subjectCompany}`,
      text,
      html,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: "Could not send your message." }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ ok: false, error: "Could not send your message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
