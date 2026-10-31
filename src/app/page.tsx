import { pageMetadata } from "@/lib/metadata";
import siteConfig, { bookingHref, countriesServed } from "@/data/site_config";
import { featuredProjects } from "@/data/projects";
import { clientTestimonials } from "@/data/testimonials";
import ButtonLink from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import LogoStrip from "@/components/ui/LogoStrip";
import ProjectCard from "@/components/ui/ProjectCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CtaBand from "@/components/ui/CtaBand";
import ServiceList from "@/components/sections/ServiceList";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyXyvin from "@/components/sections/WhyXyvin";
import GlobalPresence from "@/components/sections/GlobalPresence";

export const metadata = pageMetadata({
  description: `Xyvin Technologies designs, builds and supports web platforms, mobile apps, ERP systems and AI tools for businesses worldwide. Clients in ${countriesServed} countries.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="pb-16 pt-36 sm:pb-24 sm:pt-44">
        <Container>
          <h1 className="max-w-4xl text-display-xl">We design and build software for businesses around the world</h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <p className="text-lg text-muted sm:text-xl lg:col-span-7">
              Web platforms, mobile apps, ERP systems and AI tools, from first idea to long after launch. One
              accountable team in Kochi, India, working with clients in {countriesServed} countries.
            </p>
            <div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
              <ButtonLink href={bookingHref} track="booking" trackLocation="hero">
                Book a free consultation
              </ButtonLink>
              <ButtonLink href={siteConfig.routes.work} variant="secondary" arrow>
                See our work
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <GlobalPresence />

      <section aria-labelledby="clients-heading" className="py-16 sm:py-24">
        <Container>
          <h2 id="clients-heading" className="mb-6 text-base font-medium text-muted">
            Trusted by startups, brands and associations across four continents
          </h2>
          <LogoStrip />
        </Container>
      </section>

      <Section tone="paper" aria-labelledby="services-heading">
        <SectionHeading
          id="services-heading"
          label="What we do"
          title="Everything you need to build and run a digital product"
          intro="Design, development and support under one roof, so you work with one accountable team instead of juggling freelancers and agencies."
          action={
            <ButtonLink href={siteConfig.routes.services} variant="text" arrow>
              All services
            </ButtonLink>
          }
        />
        <ServiceList />
      </Section>

      <Section aria-labelledby="work-heading">
        <SectionHeading
          id="work-heading"
          label="Selected work"
          title="Recent work"
          intro="Platforms, online stores and apps we've shipped for clients in India, the Middle East, Europe and Australia."
          action={
            <ButtonLink href={siteConfig.routes.work} variant="text" arrow>
              See all work
            </ButtonLink>
          }
        />
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="why-heading">
        <SectionHeading
          id="why-heading"
          label="Why Xyvin"
          title="What working with us is like"
          intro="No surprises. Here is what you can expect from the first call onwards."
        />
        <WhyXyvin />
      </Section>

      <Section aria-labelledby="process-heading">
        <SectionHeading
          id="process-heading"
          label="How we work"
          title="How a project runs"
          intro="Clear steps, honest estimates and working software every two weeks."
        />
        <ProcessSteps />
      </Section>

      <Section tone="paper" aria-labelledby="testimonials-heading">
        <SectionHeading id="testimonials-heading" label="Clients" title="What our clients say" />
        <div className="grid gap-6 md:grid-cols-2">
          {clientTestimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
