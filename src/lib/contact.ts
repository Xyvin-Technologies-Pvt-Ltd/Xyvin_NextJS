import { contactServiceOptions } from "@/data/services";

export interface ContactInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const CONTACT_LIMITS = {
  name: 100,
  email: 200,
  phone: 30,
  company: 120,
  message: 5000,
} as const;

// Submissions faster than this are almost certainly bots.
export const MIN_FILL_TIME_MS = 3000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export function normalizeContact(raw: Record<string, unknown>): ContactInput {
  return {
    name: clean(raw.name, CONTACT_LIMITS.name),
    email: clean(raw.email, CONTACT_LIMITS.email),
    phone: clean(raw.phone, CONTACT_LIMITS.phone),
    company: clean(raw.company, CONTACT_LIMITS.company),
    service: clean(raw.service, 100),
    message: clean(raw.message, CONTACT_LIMITS.message),
  };
}

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  if (input.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(input.email)) errors.email = "Please enter a valid email address.";
  if (input.phone && !/^[+()\d\s-]{6,}$/.test(input.phone))
    errors.phone = "Please enter a valid phone number.";
  if (input.service && !contactServiceOptions.includes(input.service))
    errors.service = "Please choose a service from the list.";
  if (input.message.length < 10)
    errors.message = "Please tell us a little about your project (at least 10 characters).";
  return errors;
}
