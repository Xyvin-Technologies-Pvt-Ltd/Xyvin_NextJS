"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export interface GlobeMarker {
  lat: number;
  lon: number;
  id?: string;
}

export interface GlobeFocus {
  lat: number;
  lon: number;
}

interface GlobeProps {
  markers: GlobeMarker[];
  focus?: GlobeFocus | null;
  className?: string;
}

// three.js is heavy and browser-only: load it in its own chunk, client-side.
const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), { ssr: false });

/** Glowing dot globe. Designed for dark backgrounds. */
export default function Globe({ markers, focus, className }: GlobeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    // Only fetch the globe chunk once it is about to be seen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNearViewport(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={cn("relative aspect-square w-full select-none", className)}>
      {/* The canvas overhangs the square so the halo isn't clipped; drags are taken by the square. */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-[14%] transition-[opacity,transform] duration-1000 ease-out",
          ready ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        {nearViewport && (
          <GlobeCanvas
            markers={markers}
            focus={focus}
            dragTargetRef={wrapperRef}
            onReady={() => setReady(true)}
          />
        )}
      </div>
    </div>
  );
}

