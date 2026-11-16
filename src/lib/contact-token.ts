// Server-only (uses node:crypto and the server secret).
import { createHmac, timingSafeEqual } from "node:crypto";

// Signed "form opened at" token. The browser can't forge it, so bots that POST straight
// to /api/contact (skipping the page) or replay old tokens are caught, and the
// minimum-fill-time check can't be faked by sending a made-up elapsed time.

const MAX_AGE_MS = 24 * 60 * 60 * 1000;

const secret = () => process.env.CONTACT_FORM_SECRET || process.env.RESEND_API_KEY || "dev-only-secret";

const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("base64url");

export function createFormToken(now = Date.now()) {
  const ts = String(now);
  return `${ts}.${sign(ts)}`;
}

export type TokenCheck = { valid: false } | { valid: true; ageMs: number; expired: boolean };

export function checkFormToken(token: unknown, now = Date.now()): TokenCheck {
  if (typeof token !== "string") return { valid: false };
  const [ts, sig] = token.split(".");
  if (!ts || !sig || !/^\d{13}$/.test(ts)) return { valid: false };
  const enc = new TextEncoder();
  const expected = enc.encode(sign(ts));
  const given = enc.encode(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return { valid: false };
  const ageMs = now - Number(ts);
  if (ageMs < 0) return { valid: false };
  return { valid: true, ageMs, expired: ageMs > MAX_AGE_MS };
}
