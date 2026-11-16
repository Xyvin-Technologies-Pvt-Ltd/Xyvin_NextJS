"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  speed: number;
  phase: number;
  tint: string;
}

const TINTS = ["#ffffff", "#ffffff", "#ffffff", "#cffafe", "#bfdbfe"];

/** Twinkling 2D-canvas starfield that fills its (positioned) parent. */
export default function Starfield({ className, density = 1 }: { className?: string; density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let stars: Star[] = [];
    let w = 0;
    let h = 0;

    const seed = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(900, Math.round(((w * h) / 2200) * density));
      stars = Array.from({ length: count }, () => {
        const big = Math.random() < 0.06;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: big ? 0.9 + Math.random() * 0.8 : 0.3 + Math.random() * 0.6,
          a: big ? 0.7 + Math.random() * 0.3 : 0.15 + Math.random() * 0.55,
          speed: 0.6 + Math.random() * 2,
          phase: Math.random() * Math.PI * 2,
          tint: TINTS[Math.floor(Math.random() * TINTS.length)] ?? "#ffffff",
        };
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const alpha = reducedMotion ? s.a : s.a * (0.55 + 0.45 * Math.sin(t * s.speed + s.phase));
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fillStyle = s.tint;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (s.r > 0.9) {
          ctx.globalAlpha = Math.max(0, alpha * 0.15);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    seed();
    draw(0);
    const ro = new ResizeObserver(() => {
      seed();
      draw(performance.now() / 1000);
    });
    ro.observe(canvas);
    if (reducedMotion) return () => ro.disconnect();

    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry?.isIntersecting ?? true));
    io.observe(canvas);

    let frame = 0;
    let last = 0;
    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      if (!visible || document.hidden || now - last < 33) return; // ~30fps is plenty for twinkle
      last = now;
      draw(now / 1000);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }, [density]);

  return (
    <canvas ref={canvasRef} aria-hidden="true" className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} />
  );
}
