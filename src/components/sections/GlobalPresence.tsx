import siteConfig, { continentsServed, countriesServed } from "@/data/site_config";
import { COUNTRY_PATHS, WORLD_VIEWBOX } from "@/data/world_map";
import { project } from "@/lib/geo";
import Container from "@/components/ui/Container";
import PresenceMap, { type PresencePoint } from "./PresenceMap";

interface Props {
  title?: string;
  intro?: string;
}

// Dark "global presence" band: world map with numbered pins and country tabs.
export default function GlobalPresence({ title = "Our global presence", intro }: Props) {
  const countries = siteConfig.clientCountries;
  const points: PresencePoint[] = countries.map((c) => {
    const { x, y } = project(c.lon, c.lat);
    return {
      name: c.name,
      label: "short" in c && c.short ? c.short : c.name,
      iso: c.iso,
      x,
      y,
      stem: c.stem,
      path: COUNTRY_PATHS[c.iso],
      clients: c.clients,
    };
  });

  return (
    <section aria-labelledby="presence-heading" className="bg-navy-950 py-16 text-white sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="presence-heading" className="text-display-lg text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg font-medium uppercase tracking-wide text-navy-200">
            {continentsServed} continents · {countriesServed} countries · One team in Kochi
          </p>
          {intro && <p className="mt-4 text-lg text-navy-200">{intro}</p>}
        </div>
        <div className="mt-10 sm:mt-14">
          <PresenceMap points={points} width={WORLD_VIEWBOX.width} height={WORLD_VIEWBOX.height} />
        </div>
        <p className="sr-only">Countries where Xyvin has clients: {countries.map((c) => c.name).join(", ")}.</p>
      </Container>
    </section>
  );
}
