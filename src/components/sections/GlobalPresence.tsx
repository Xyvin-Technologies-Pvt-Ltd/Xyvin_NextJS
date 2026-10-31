import siteConfig, { continentsServed, countriesServed } from "@/data/site_config";
import Container from "@/components/ui/Container";
import PresenceGlobe from "./PresenceGlobe";

interface Props {
  title?: string;
  intro?: string;
}

// Dark "global presence" band: country tabs that rotate a globe to each client country.
export default function GlobalPresence({ title = "Our global presence", intro }: Props) {
  const countries = siteConfig.clientCountries;

  return (
    <section aria-labelledby="presence-heading" className="bg-navy-950 py-16 text-white sm:py-24">
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
