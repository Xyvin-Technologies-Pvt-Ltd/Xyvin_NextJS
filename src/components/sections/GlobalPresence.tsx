import siteConfig, { continentsServed, countriesServed } from "@/data/site_config";
import Container from "@/components/ui/Container";
import Starfield from "@/components/ui/Starfield";
import PresenceGlobe from "./PresenceGlobe";

interface Props {
  title?: string;
  intro?: string;
}

// Dark "global presence" band: country tabs that rotate a globe to each client country.
export default function GlobalPresence({ title = "Our global presence", intro }: Props) {
  const countries = siteConfig.clientCountries;

  return (
    <section
      aria-labelledby="presence-heading"
      className="relative isolate overflow-hidden bg-navy-950 py-16 text-white sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_45%_at_50%_62%,rgba(14,116,144,0.25),transparent_70%)]"
      />
      <Starfield className="-z-10" density={0.8} />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="presence-heading" className="text-display-lg text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg font-medium uppercase tracking-wide text-navy-200">
            {continentsServed} continents · {countriesServed} countries · One team
          </p>
          {intro && <p className="mt-4 text-lg text-navy-200">{intro}</p>}
        </div>
        <div className="mt-10 sm:mt-14">
          <PresenceGlobe />
        </div>
        <p className="sr-only">Countries where Xyvin has clients: {countries.map((c) => c.name).join(", ")}.</p>
      </Container>
    </section>
  );
}
