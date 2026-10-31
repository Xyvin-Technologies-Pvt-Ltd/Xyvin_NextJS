// Sends a GA4 event. Does nothing until the visitor has accepted analytics
// (GA is only loaded after consent, so window.gtag won't exist before that).

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

// Maps a clicked link to an analytics event, so phone/email/WhatsApp/booking
// clicks are tracked everywhere without wiring each link by hand.
export function eventForLink(anchor: HTMLAnchorElement): { name: string; params: EventParams } | null {
  const href = anchor.getAttribute("href") || "";
  const location = anchor.dataset.trackLocation;
  if (href.startsWith("tel:")) return { name: "phone_click", params: { location } };
  if (href.startsWith("mailto:")) return { name: "email_click", params: { location } };
  if (/wa\.me|whatsapp\.com/.test(href)) return { name: "whatsapp_click", params: { location } };
  if (anchor.dataset.track === "booking") return { name: "booking_click", params: { location } };
  return null;
}
