"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export interface PresencePoint {
  name: string;
  label: string;
  iso: string;
  x: number;
  y: number;
  stem: number;
  path?: string;
  clients: string[];
}

interface Props {
  points: PresencePoint[];
  width: number;
  height: number;
}

const PIN_R = 15;

// Interactive part of the global presence map: country tabs, highlighted country, numbered pins.
export default function PresenceMap({ points, width, height }: Props) {
  const [active, setActive] = useState(0);
  const current = points[active];

  return (
    <div>
      <div role="group" aria-label="Choose a country" className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
        <ul className="flex min-w-max gap-x-6 gap-y-3 sm:flex-wrap sm:justify-center sm:gap-x-8">
          {points.map((p, i) => (
            <li key={p.iso}>
              <button
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "border-b-2 pb-1.5 text-sm font-semibold uppercase tracking-wide transition-colors",
                  i === active ? "border-accent text-white" : "border-transparent text-navy-300 hover:text-white"
                )}
              >
                {p.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-10 w-full sm:mt-20" style={{ aspectRatio: `${width} / ${height}` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/world-map.svg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full" />
        <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          {points.map((p, i) =>
            p.path ? (
              <path
                key={`c-${p.iso}`}
                d={p.path}
                className={cn("transition-colors duration-300", i === active ? "fill-navy-100" : "fill-navy-600")}
                stroke="#2c3f68"
                strokeWidth={0.7}
              />
            ) : null
          )}

          {points.map((p, i) => {
            const isActive = i === active;
            const top = p.y - p.stem;
            return (
              <g
                key={`p-${p.iso}`}
                onClick={() => setActive(i)}
                className="cursor-pointer"
              >
                <title>{p.name}</title>
                {/* Pin stem and number: hidden on small screens, where they'd be too small to read */}
                <g className="hidden sm:inline">
                  <line
                    x1={p.x}
                    y1={top + PIN_R}
                    x2={p.x}
                    y2={p.y}
                    strokeWidth={2}
                    strokeDasharray="5 4"
                    className={isActive ? "stroke-accent" : "stroke-navy-300"}
                  />
                  <circle cx={p.x} cy={top} r={PIN_R + 7} className={isActive ? "fill-accent/25" : "fill-white/10"} />
                  <circle cx={p.x} cy={top} r={PIN_R} className={isActive ? "fill-accent" : "fill-navy-400"} />
                  <text
                    x={p.x}
                    y={top + 5}
                    textAnchor="middle"
                    className={cn("text-[14px] font-semibold", isActive ? "fill-navy-900" : "fill-white")}
                  >
                    {i + 1}
                  </text>
                </g>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isActive ? 6 : 4.5}
                  className={cn("sm:hidden", isActive ? "fill-accent" : "fill-navy-200")}
                />
                <circle cx={p.x} cy={p.y} r={4} className={cn("hidden sm:inline", isActive ? "fill-accent" : "fill-navy-300")} />
              </g>
            );
          })}
        </svg>
      </div>

      <div aria-live="polite" className="mt-6 min-h-[3.5rem] text-center sm:mt-8">
        <p className="font-display text-xl font-semibold text-white">{current.name}</p>
        {current.clients.length > 0 && (
          <p className="mt-1 text-[15px] text-navy-200">Clients include {current.clients.join(", ")}</p>
        )}
      </div>
    </div>
  );
}
