"use client";

import { useMemo } from "react";
import siteConfig from "@/data/site_config";
import Globe from "@/components/ui/Globe";

export default function HeroGlobe() {
  const countries = siteConfig.clientCountries;
  const markers = useMemo(
    () => countries.map((c) => ({ lat: c.lat, lon: c.lon, id: c.iso })),
    [countries]
  );

  return (
    <div className="mx-auto w-full max-w-[520px] lg:max-w-none">
      <Globe theme="light" markers={markers} className="lg:-mr-4" />
      <p className="sr-only">Countries where Xyvin has clients: {countries.map((c) => c.name).join(", ")}.</p>
    </div>
  );
}
