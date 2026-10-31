"use client";

import { useCallback, useMemo, useState } from "react";
import siteConfig, { continentsServed, countriesServed } from "@/data/site_config";
import Globe, { nearestCountryIndex } from "@/components/ui/Globe";
import { cn } from "@/lib/cn";

export default function HeroGlobe() {
  const countries = siteConfig.clientCountries;
  const markers = useMemo(
    () =>
      countries.map((c) => ({
        lat: c.lat,
        lon: c.lon,
        id: c.iso,
      })),
    [countries]
  );

  const [facingIndex, setFacingIndex] = useState(0);

  const onPhiChange = useCallback(
    (phi: number) => {
      const next = nearestCountryIndex(phi, countries);
      setFacingIndex((prev) => (prev === next ? prev : next));
    },
    [countries]
  );

  const facing = countries[facingIndex];

  return (
    <div className="mx-auto w-full max-w-[520px] lg:max-w-none">
      <Globe theme="light" markers={markers} onPhiChange={onPhiChange} className="lg:-mr-4" />
      <p className="mt-4 text-center text-sm text-muted">
        {countriesServed} countries · {continentsServed} continents · Built in Kochi
      </p>
      <div
        aria-live="polite"
        className="mt-3 min-h-[3.25rem] text-center transition-opacity duration-300"
      >
        <p className="font-display text-lg font-semibold text-navy-900">{facing.name}</p>
        {facing.clients.length > 0 && (
          <p className={cn("mt-1 text-sm text-muted")}>
            Clients include {facing.clients.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
