import Image from "next/image";
import heroImage from "@/assets/img/kssia 1.png";
import { pageMetadata } from "@/lib/metadata";
import siteConfig, { bookingHref } from "@/data/site_config";
import { featuredProjects } from "@/data/projects";
import { clientTestimonials } from "@/data/testimonials";
import ButtonLink from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Stats from "@/components/ui/Stats";
import LogoStrip from "@/components/ui/LogoStrip";
import ProjectCard from "@/components/ui/ProjectCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CtaBand from "@/components/ui/CtaBand";
import ServiceList from "@/components/sections/ServiceList";
import ProcessSteps from "@/components/sections/ProcessSteps";

export const metadata = pageMetadata({
  description:
    "Xyvin Technologies builds custom software, web platforms, mobile apps, ERP systems and AI automation for growing businesses in India and the GCC.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="pb-16 pt-32 sm:pb-24 sm:pt-40">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="text-display-xl">
              Custom software, web &amp; AI automation for growing businesses
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
              A Kochi and Dubai team that designs, builds and supports web platforms, mobile apps and ERP systems for organisations across India and the GCC, including GOEC, KSSIA and Khedmah.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={bookingHref} track="booking" trackLocation="hero">
                Book a free consultation
              </ButtonLink>
              <ButtonLink href={siteConfig.routes.work} variant="secondary" arrow>
                See our work
              </ButtonLink>
            </div>
            <Stats className="mt-12" />
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-line bg-paper">
              <Image
                src={heroImage}
                alt="Member portal Xyvin built for KSSIA, shown on a laptop and phone"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="clients-heading" className="pb-16 sm:pb-24">
        <Container>
          <h2 id="clients-heading" className="mb-6 text-base font-medium text-muted">
            Trusted by businesses and associations across India and the GCC
          </h2>
          <LogoStrip />
        </Container>
      </section>

      <Section tone="paper" aria-labelledby="services-heading">
        <SectionHeading
          id="services-heading"
          label="What we do"
          title="Software that fits how your business works"
          intro="Six services, one team. Most clients start with one project and grow from there."
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
          title="Recent projects"
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

      <Section tone="paper" aria-labelledby="process-heading">
        <SectionHeading
          id="process-heading"
          label="How we work"
          title="A clear process, with no surprises"
          intro="You see working software every two weeks and always know what's next."
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
