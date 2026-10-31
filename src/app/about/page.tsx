import { pageMetadata } from "@/lib/metadata";
import siteConfig from "@/data/site_config";
import team from "@/data/team_data";
import advisors from "@/data/advisory_board_data";
import testimonials from "@/data/testimonials";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Stats from "@/components/ui/Stats";
import LogoStrip from "@/components/ui/LogoStrip";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ButtonLink from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import PersonCard from "@/components/sections/PersonCard";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet the team and advisors behind Xyvin Technologies, a software company in Kochi building web platforms, ERP systems and AI automation for clients in India and the GCC.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "About" }]}
        title="A software team from Kochi, working across India and the GCC"
        intro={`${siteConfig.name} builds web platforms, mobile apps, ERP systems and AI automation for businesses, industry associations and startups.`}
      />

      {/* Draft story for review: replace with your own words (how Xyvin started, what you believe, who you serve best). */}
      <Section aria-labelledby="story-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="story-heading" className="text-display-lg">
              Our story
            </h2>
          </div>
          <div className="space-y-5 text-lg text-navy-800 lg:col-span-7">
            <p>
              Xyvin started in Kochi with a simple idea: growing businesses deserve software that fits the way they
              work, built by a team that stays around after launch.
            </p>
            <p>
              Today we work with trade associations like KSSIA and ITCC, consumer brands like Double Horse and myG, and
              service businesses across the GCC.
            </p>
            <p>
              Our team covers product design, web and mobile development, and AI. We keep projects small and focused,
              show working software early, and are honest about what something will take.
            </p>
          </div>
        </div>
        <Stats className="mt-16" />
      </Section>

      <Section tone="paper" aria-labelledby="leadership-heading">
        <SectionHeading
          id="leadership-heading"
          label="Leadership"
          title="The people who run Xyvin"
          action={
            <ButtonLink href={`mailto:${siteConfig.careersEmail}?subject=Careers`} variant="secondary" className="bg-white">
              Join our team
            </ButtonLink>
          }
        />
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <PersonCard
              key={person.id}
              name={person.avatar_name}
              role={person.designation}
              image={person.img}
              linkedin={person.linkedin}
            />
          ))}
        </div>
      </Section>

      <Section id="advisors" aria-labelledby="advisors-heading">
        <SectionHeading
          id="advisors-heading"
          label="Advisory board"
          title="Advisors"
          intro="Industry leaders who guide our strategy and hold us to a high standard."
        />
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((a) => (
            <PersonCard
              key={a.id}
              name={a.name}
              role={a.designation}
              company={a.company}
              image={a.img}
              linkedin={a.linkedin}
              bio={a.bio}
              tags={a.expertise}
            />
          ))}
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="testimonials-heading">
        <SectionHeading id="testimonials-heading" label="Clients" title="What people say about working with us" />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </Section>

      <Section aria-labelledby="clients-heading">
        <SectionHeading id="clients-heading" title="Clients and partners" />
        <LogoStrip limit={18} />
      </Section>

      <CtaBand />
    </>
  );
}
