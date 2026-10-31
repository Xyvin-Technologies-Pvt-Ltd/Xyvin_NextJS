"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { ACCENT_RGB, KOCHI, locationToAngles, lerpPhi } from "@/lib/globe-utils";

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
  theme: "light" | "dark";
  markers: GlobeMarker[];
  focus?: GlobeFocus | null;
  className?: string;
}

const INITIAL = locationToAngles(20, 60);

const THEMES: Record<
  GlobeProps["theme"],
  Pick<COBEOptions, "dark" | "baseColor" | "glowColor" | "mapBrightness" | "diffuse">
> = {
  light: {
    dark: 0,
    baseColor: [0.59, 0.65, 0.75],
    glowColor: [1, 1, 1],
    mapBrightness: 6,
    diffuse: 1.2,
  },
  dark: {
    dark: 1,
    baseColor: [0.39, 0.47, 0.6],
    glowColor: [0.12, 0.19, 0.32],
    mapBrightness: 6,
    diffuse: 1.2,
  },
};

function toCobeMarkers(markers: GlobeMarker[], now: number, reducedMotion: boolean) {
  const pulse = reducedMotion ? 1 : 0.72 + 0.28 * Math.sin(now * 0.004);
  const hubPulse = reducedMotion ? 1 : 0.65 + 0.35 * Math.sin(now * 0.005);

  const hub = {
    location: KOCHI,
    size: 0.09 * hubPulse,
    color: ACCENT_RGB,
    id: "kochi",
  };

  const client = markers.map((m) => ({
    location: [m.lat, m.lon] as [number, number],
    size: 0.055 * pulse,
    color: ACCENT_RGB,
    id: m.id,
  }));

  return [hub, ...client];
}

function toCobeArcs(markers: GlobeMarker[]) {
  return markers.map((m, i) => ({
    from: KOCHI,
    to: [m.lat, m.lon] as [number, number],
    color: ACCENT_RGB,
    id: m.id ?? `arc-${i}`,
  }));
}

export default function Globe({ theme, markers, focus, className }: GlobeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  const phiRef = useRef(INITIAL.phi);
  const thetaRef = useRef(INITIAL.theta);
  const targetPhiRef = useRef<number | null>(null);
  const dragRef = useRef<{ startX: number; startPhi: number } | null>(null);
  const autoPauseUntilRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const visibleRef = useRef(true);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const sizeRef = useRef(400);
  const focusRef = useRef(focus);
  const markersRef = useRef(markers);

  focusRef.current = focus;
  markersRef.current = markers;

  const markerKey = useMemo(
    () => markers.map((m) => `${m.lat},${m.lon},${m.id ?? ""}`).join("|"),
    [markers]
  );

  useEffect(() => {
    if (!focus) {
      targetPhiRef.current = null;
      return;
    }
    const { phi: focusPhi } = locationToAngles(focus.lat, focus.lon);
    targetPhiRef.current = focusPhi;
    autoPauseUntilRef.current = performance.now() + 8000;
  }, [focus?.lat, focus?.lon, focus]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const readSize = () => {
      const rect = wrapper.getBoundingClientRect();
      sizeRef.current = Math.max(200, Math.round(rect.width));
    };
    readSize();

    const themeOpts = THEMES[theme];
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = sizeRef.current;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: w,
      height: w,
      phi: phiRef.current,
      theta: thetaRef.current,
      mapSamples: 16000,
      mapBrightness: themeOpts.mapBrightness,
      baseColor: themeOpts.baseColor,
      markerColor: ACCENT_RGB,
      glowColor: themeOpts.glowColor,
      markers: toCobeMarkers(markersRef.current, performance.now(), reducedMotionRef.current),
      arcs: toCobeArcs(markersRef.current),
      arcColor: ACCENT_RGB,
      arcWidth: 0.4,
      arcHeight: 0.25,
      markerElevation: 0.02,
      diffuse: themeOpts.diffuse,
      dark: themeOpts.dark,
      scale: 1,
      offset: [0, 0],
    });

    globeRef.current = globe;
    setReady(true);

    const resizeObserver = new ResizeObserver(() => {
      readSize();
    });
    resizeObserver.observe(wrapper);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry?.isIntersecting ?? true;
      },
      { rootMargin: "100px" }
    );
    visibilityObserver.observe(wrapper);

    let frame = 0;
    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!visibleRef.current || !globeRef.current) return;

      const now = performance.now();
      const reduced = reducedMotionRef.current;
      if (targetPhiRef.current !== null) {
        const t = reduced ? 1 : 0.08;
        phiRef.current = lerpPhi(phiRef.current, targetPhiRef.current, t);
        if (Math.abs(phiRef.current - targetPhiRef.current) < 0.002) {
          phiRef.current = targetPhiRef.current;
        }
      } else if (!reduced && now > autoPauseUntilRef.current && !dragRef.current) {
        phiRef.current += 0.004;
      }

      const size = sizeRef.current;
      const m = markersRef.current;
      globeRef.current.update({
        phi: phiRef.current,
        theta: thetaRef.current,
        width: size,
        height: size,
        markers: toCobeMarkers(m, now, reduced),
        arcs: toCobeArcs(m),
        ...themeOpts,
        markerColor: ACCENT_RGB,
        arcColor: ACCENT_RGB,
      });
    };
    tick();

    const onPointerDown = (e: PointerEvent) => {
      dragRef.current = { startX: e.clientX, startPhi: phiRef.current };
      targetPhiRef.current = null;
      canvas.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current) return;
      const delta = (e.clientX - dragRef.current.startX) / 200;
      phiRef.current = dragRef.current.startPhi + delta;
      autoPauseUntilRef.current = performance.now() + 3000;
    };

    const endDrag = (e: PointerEvent) => {
      if (!dragRef.current) return;
      dragRef.current = null;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
      autoPauseUntilRef.current = performance.now() + 3000;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.style.cursor = "default";
    canvas.style.touchAction = "none";

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", endDrag);
      canvas.removeEventListener("pointercancel", endDrag);
      globe.destroy();
      globeRef.current = null;
      setReady(false);
    };
  }, [theme, markerKey]);

  return (
    <div ref={wrapperRef} className={cn("relative aspect-square w-full cursor-default", className)}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn(
          "h-full w-full transition-opacity duration-500",
          ready ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}