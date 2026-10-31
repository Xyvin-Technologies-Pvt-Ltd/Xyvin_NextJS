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
import HeroGlobe from "@/components/sections/HeroGlobe";
import IndustryGrid from "@/components/sections/IndustryGrid";

export const metadata = pageMetadata({
  description: `Xyvin Technologies designs, builds and supports web platforms, mobile apps, ERP systems and AI tools for businesses worldwide. Clients in ${countriesServed} countries.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h1 className="text-display-xl">
              We design and build software for businesses{" "}
              <span className="relative inline-block whitespace-nowrap">
                around the world
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4"
                >
                  <path
                    d="M3 10 C 70 3, 140 2, 205 6 S 275 11, 297 5"
                    fill="none"
                    stroke="#f2a93b"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted sm:text-xl">
              Web platforms, mobile apps, ERP systems and AI tools, from first idea to long after launch. One
              accountable team in Kochi, India, working with clients in {countriesServed} countries.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={bookingHref} track="booking" trackLocation="hero">
                Book a free consultation
              </ButtonLink>
              <ButtonLink href={siteConfig.routes.work} variant="secondary" arrow>
                See our work
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <HeroGlobe />
          </div>
        </Container>
      </section>

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

      <Section aria-labelledby="industries-heading">
        <SectionHeading
          id="industries-heading"
          label="Industries"
          title="Industries we serve"
          intro="Some of the sectors we build for, with real projects behind each."
        />
        <IndustryGrid />
      </Section>

      <Section tone="paper" aria-labelledby="work-heading">
        <SectionHeading
          id="work-heading"
          label="Selected work"
          title="Recent work"
          intro="Websites, platforms and apps we've shipped for clients in India, the Middle East, Europe, Singapore and Australia."
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

      <Section aria-labelledby="why-heading">
        <SectionHeading
          id="why-heading"
          label="Why Xyvin"
          title="What working with us is like"
          intro="No surprises. Here is what you can expect from the first call onwards."
        />
        <WhyXyvin />
      </Section>

      <Section tone="paper" aria-labelledby="process-heading">
        <SectionHeading
          id="process-heading"
          label="How we work"
          title="How a project runs"
          intro="Clear steps, honest estimates and working software every two weeks."
        />
        <ProcessSteps />
      </Section>

      <Section aria-labelledby="testimonials-heading">
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
