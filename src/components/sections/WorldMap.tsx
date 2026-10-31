import siteConfig from "@/data/site_config";
import { COUNTRY_PATHS, PROJECTION, WORLD_VIEWBOX } from "@/data/world_map";
import { cn } from "@/lib/cn";

// Equal Earth projection (same formula and parameters used to generate the map data).
const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = Math.sqrt(3) / 2;
function project(lon: number, lat: number) {
  const lambda = (lon * Math.PI) / 180;
  const l = Math.asin(M * Math.sin((lat * Math.PI) / 180));
  const l2 = l * l, l6 = l2 * l2 * l2;
  const x = (lambda * Math.cos(l)) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)));
  const y = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2));
  return { x: PROJECTION.translateX + PROJECTION.scale * x, y: PROJECTION.translateY - PROJECTION.scale * y };
}

// Static world map: grey base image plus highlighted client countries. Renders on the server, no JS.
export default function WorldMap({ className, showList = true }: { className?: string; showList?: boolean }) {
  const countries = siteConfig.clientCountries;
  const { width, height } = WORLD_VIEWBOX;

  return (
    <figure className={cn("m-0", className)}>
      <div className="relative w-full" style={{ aspectRatio: `${width} / ${height}` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/world-map.svg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full" />
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label={`World map highlighting countries where Xyvin has clients: ${countries.map((c) => c.name).join(", ")}`}
        >
          {countries.map((c) =>
            COUNTRY_PATHS[c.iso] ? (
              <path key={`shape-${c.iso}`} d={COUNTRY_PATHS[c.iso]} className="fill-navy-900" stroke="#fff" strokeWidth={0.6} />
            ) : null
          )}
          {countries.map((c) => {
            const { x, y } = project(c.lon, c.lat);
            return (
              <g key={`pin-${c.iso}`}>
                <title>{c.name}</title>
                <circle cx={x} cy={y} r={8} className="fill-accent" stroke="#fff" strokeWidth={2.5} />
              </g>
            );
          })}
        </svg>
      </div>
      {showList && (
        <figcaption className="mt-5 text-[15px] text-muted">
          <span className="font-semibold text-navy-900">Clients in {countries.length}+ countries: </span>
          {countries.map((c) => c.name).join(", ")}
        </figcaption>
      )}
    </figure>
  );
}
