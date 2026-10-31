"use client";

import { useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import siteConfig, { whatsappUrl } from "@/data/site_config";
import { contactServiceOptions } from "@/data/services";
import { CONTACT_LIMITS, ContactErrors, ContactInput, normalizeContact, validateContact } from "@/lib/contact";
import { trackEvent } from "@/lib/track";
import { cn } from "@/lib/cn";

const emptyForm: ContactInput = { name: "", email: "", phone: "", company: "", service: "", message: "" };

const inputClass =
  "mt-2 block w-full rounded-md border border-navy-200 bg-white px-4 py-3 text-[16px] text-navy-900 placeholder:text-navy-300 focus:border-navy-900 focus:outline-none focus:ring-1 focus:ring-navy-900 aria-[invalid=true]:border-red-700";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: keyof ContactInput;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy-900">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactInput>(emptyForm);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const startedAt = useRef(Date.now());

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactInput]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const a11y = (id: keyof ContactInput) => ({
    id,
    name: id,
    value: form[id],
    onChange,
    "aria-invalid": Boolean(errors[id]),
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");
    const clientErrors = validateContact(normalizeContact({ ...form }));
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      const first = Object.keys(clientErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot, elapsedMs: Date.now() - startedAt.current }),
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok && result.ok) {
        trackEvent("generate_lead", { service: form.service || "Not specified" });
        setForm(emptyForm);
        setErrors({});
        setStatus("success");
      } else if (result.errors) {
        setErrors(result.errors);
        setStatus("idle");
      } else {
        setServerError(result.error || "Could not send your message.");
        setStatus("error");
      }
    } catch {
      setServerError("Could not send your message.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-line bg-white p-8 sm:p-10">
        <CheckCircle2 size={36} aria-hidden="true" className="text-navy-900" />
        <h3 className="mt-4 text-2xl">Thanks, your message is on its way</h3>
        <p className="mt-2 text-muted">We&apos;ll get back to you {siteConfig.responseTime}.</p>
        <button
          type="button"
          onClick={() => {
            startedAt.current = Date.now();
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-navy-900 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-lg border border-line bg-white p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name}>
          <input type="text" autoComplete="name" maxLength={CONTACT_LIMITS.name} className={inputClass} {...a11y("name")} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input type="email" autoComplete="email" maxLength={CONTACT_LIMITS.email} className={inputClass} {...a11y("email")} />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input type="tel" autoComplete="tel" maxLength={CONTACT_LIMITS.phone} className={inputClass} {...a11y("phone")} />
        </Field>
        <Field id="company" label="Company" error={errors.company}>
          <input
            type="text"
            autoComplete="organization"
            maxLength={CONTACT_LIMITS.company}
            className={inputClass}
            {...a11y("company")}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field id="service" label="What do you need help with?" error={errors.service}>
            <select className={inputClass} {...a11y("service")}>
              <option value="">Choose a service</option>
              {contactServiceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="message" label="Project details" required error={errors.message}>
            <textarea
              rows={6}
              maxLength={CONTACT_LIMITS.message}
              placeholder="What are you trying to achieve? Any timeline or budget in mind?"
              className={inputClass}
              {...a11y("message")}
            />
          </Field>
        </div>
      </div>

      {/* Spam trap: hidden from people, often filled by bots. */}
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {status === "error" && (
        <div role="alert" className="mt-6 flex gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-[15px] text-red-800">
          <AlertCircle size={20} aria-hidden="true" className="mt-0.5 shrink-0" />
          <p>
            {serverError} Please try again, or reach us on{" "}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="underline">
              WhatsApp
            </a>{" "}
            or at{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-[15px] font-semibold text-navy-900 hover:bg-accent-hover",
            status === "sending" && "cursor-wait opacity-80"
          )}
        >
          {status === "sending" && <Loader2 size={18} aria-hidden="true" className="animate-spin" />}
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p className="text-sm text-muted">
          We only use your details to reply. See our{" "}
          <a href={siteConfig.routes.privacy} className="underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
