import { pageMetadata } from "@/lib/metadata";
import siteConfig, { countriesServed } from "@/data/site_config";
import team from "@/data/team_data";
import advisors from "@/data/advisory_board_data";
import testimonials from "@/data/testimonials";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlobalPresence from "@/components/sections/GlobalPresence";
import LogoStrip from "@/components/ui/LogoStrip";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ButtonLink from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import PersonCard from "@/components/sections/PersonCard";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet the team and advisors behind Xyvin Technologies, a software development company in Kochi, India, building web platforms, apps and AI tools for clients worldwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "About" }]}
        title="A product engineering team from Kochi, building for clients worldwide"
        intro={`We're designers, engineers and product people who build web platforms, mobile apps, ERP systems and AI tools for clients in ${countriesServed} countries.`}
      />

      {/* Draft story for review: adjust to your own words. */}
      <Section aria-labelledby="story-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="story-heading" className="text-display-lg">
              Our story
            </h2>
          </div>
          <div className="space-y-5 text-lg text-navy-800 lg:col-span-7">
            <p>
              Xyvin started in Kochi, India, with a simple belief: businesses deserve software that fits the way they
              work, built by a team that sticks around after launch.
            </p>
            <p>
              Today we work with clients across India, the Middle East, Europe, Asia-Pacific and the United States,
              including trade associations, consumer brands, healthcare providers and software companies. Whether you
              bring a rough idea or an existing system that needs work, you get the same care.
            </p>
            <p>
              We keep teams small, show working software early, and tell you plainly what something will take, even
              when it&apos;s not what you hoped to hear.
            </p>
          </div>
        </div>
      </Section>

      <GlobalPresence
        title="Based in India, working worldwide"
        intro="Our team works from Kochi, with a presence in Dubai. We share the working day with the Middle East and Asia-Pacific, overlap with European mornings, and schedule calls around clients in the Americas."
      />

      <Section aria-labelledby="leadership-heading">
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

      <Section id="advisors" tone="paper" aria-labelledby="advisors-heading">
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

      <Section aria-labelledby="testimonials-heading">
        <SectionHeading id="testimonials-heading" label="Clients" title="What people say about working with us" />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="clients-heading">
        <SectionHeading id="clients-heading" title="Clients and partners" />
        <LogoStrip limit={18} />
      </Section>

      <CtaBand />
    </>
  );
}
