"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo.svg";
import { cn } from "@/lib/cn";

const MIN_MS = 700; // long enough not to flash
const MAX_MS = 3000; // never hold the site hostage

type Phase = "loading" | "done" | "leaving" | "gone";

/**
 * Full-screen splash on the first (hard) page load. Rendered in the server HTML so it
 * covers the page instantly; client-side navigations never show it again.
 * If JS never runs, the `site-loader` CSS failsafe fades it out after a few seconds.
 */
export default function SiteLoader() {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    const started = performance.now();
    let finished = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, MIN_MS - (performance.now() - started));
      timers.push(
        setTimeout(() => {
          setPhase("done"); // bar snaps to 100%
          timers.push(setTimeout(() => setPhase("leaving"), 250));
          timers.push(setTimeout(() => setPhase("gone"), 950));
        }, wait)
      );
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    timers.push(setTimeout(finish, MAX_MS));

    return () => {
      window.removeEventListener("load", finish);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "site-loader fixed inset-0 z-[100] flex items-center justify-center bg-navy-950 transition-opacity duration-700 ease-out",
        phase === "leaving" && "pointer-events-none opacity-0"
      )}
    >
      <span className="sr-only">Loading</span>
      {/* Soft cyan bloom */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_65%)] motion-safe:animate-pulse"
      />

      <div
        className={cn(
          "relative flex flex-col items-center transition-transform duration-700 ease-out",
          phase === "leaving" && "scale-110"
        )}
      >
        <div className="site-loader-logo">
          <Image src={logo} alt="" width={96} height={96} priority className="brightness-0 invert" />
        </div>

        <div aria-hidden="true" className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <div
            className={cn(
              "h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-accent",
              phase === "loading" ? "site-loader-bar" : "w-full transition-[width] duration-200"
            )}
          />
        </div>
      </div>
    </div>
  );
}
