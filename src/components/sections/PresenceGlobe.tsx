"use client";

import { useMemo, useState } from "react";
import siteConfig from "@/data/site_config";
import Globe from "@/components/ui/Globe";
import { cn } from "@/lib/cn";

export default function PresenceGlobe() {
  const countries = siteConfig.clientCountries;
  const [active, setActive] = useState(0);
  const current = countries[active];

  const markers = useMemo(
    () =>
      countries.map((c) => ({
        lat: c.lat,
        lon: c.lon,
        id: c.iso,
      })),
    [countries]
  );

  const focus = useMemo(
    () => ({ lat: current.lat, lon: current.lon }),
    [current.lat, current.lon]
  );

  return (
    <div>
      <div role="group" aria-label="Choose a country" className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
        <ul className="flex min-w-max gap-x-6 gap-y-3 sm:flex-wrap sm:justify-center sm:gap-x-8">
          {countries.map((c, i) => (
            <li key={c.iso}>
              <button
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "border-b-2 pb-1.5 text-sm font-semibold uppercase tracking-wide transition-colors",
                  i === active ? "border-accent text-white" : "border-transparent text-navy-300 hover:text-white"
                )}
              >
                {"short" in c && c.short ? c.short : c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-xl sm:mt-14">
        <Globe theme="dark" markers={markers} focus={focus} />
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
