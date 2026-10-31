"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import siteConfig from "@/data/site_config";
import { eventForLink, trackEvent } from "@/lib/track";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const STORAGE_KEY = "xyvin-analytics-consent";

type Consent = "granted" | "denied" | null;

// Shows a small consent notice and loads Google Analytics only after "Accept".
// Renders nothing when NEXT_PUBLIC_GA_ID is not set.
export default function ConsentBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "granted" || saved === "denied") setConsent(saved);
    setReady(true);
  }, []);

  // Track phone, email, WhatsApp and booking clicks anywhere on the site.
  useEffect(() => {
    if (consent !== "granted") return;
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const match = eventForLink(anchor);
      if (match) trackEvent(match.name, match.params);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  if (!GA_ID) return null;

  const choose = (value: "granted" | "denied") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 z-[10000] max-w-md rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-lg sm:right-auto"
        >
          <p className="m-0 mb-3 leading-relaxed">
            We use cookies to understand how visitors use this site, so we can improve it. See our{" "}
            <Link href={siteConfig.routes.privacy} className="underline">
              privacy policy
            </Link>
            .
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="rounded-md bg-[#031331] px-4 py-2 font-medium text-white"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="rounded-md border border-slate-300 px-4 py-2 font-medium text-slate-700"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
