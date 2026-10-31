import siteConfig, { bookingHref } from "@/data/site_config";
import ButtonLink from "./Button";
import Container from "./Container";

interface CtaBandProps {
  title?: string;
  text?: string;
}

export default function CtaBand({
  title = "Tell us what you're building",
  text = `Share a few details and we'll reply ${siteConfig.responseTime} with questions, ideas and next steps. Wherever you are, we'll find a time that works.`,
}: CtaBandProps) {
  return (
    <section className="bg-navy-900 py-16 text-white sm:py-20" aria-labelledby="cta-heading">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="text-display-md text-white">
            {title}
          </h2>
          <p className="mt-3 text-lg text-navy-100">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={bookingHref} track="booking" trackLocation="cta_band">
            Book a free consultation
          </ButtonLink>
          <ButtonLink href={siteConfig.routes.work} variant="secondary" onDark>
            See our work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
