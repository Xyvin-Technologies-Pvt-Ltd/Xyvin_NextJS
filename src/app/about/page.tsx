import ProtectedEmail from "@/components/ui/ProtectedEmail";
import { encodeEmail } from "@/lib/email-obfuscation";
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
    "Meet the team and advisors behind Xyvin Technologies, building web platforms, apps and AI tools for clients worldwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "About" }]}
        title="A product engineering team building for clients worldwide"
        intro={`We're designers, engineers and product people who build web platforms, mobile apps, ERP systems and AI tools for clients in ${countriesServed} countries.`}
      />

      <Section aria-labelledby="story-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="story-heading" className="text-display-lg">
              Our story
            </h2>
          </div>
          <div className="space-y-5 text-lg text-navy-800 lg:col-span-7">
            <p>
              Xyvin was founded in Trivandrum by Ashin Amanulla on a simple belief: businesses deserve software that
              fits the way they work, built by a team that stays with them long after launch. As the company grew,
              Afsal Edathil and Adithya Vishnu joined as co-founders to help shape that vision and carry it forward.
            </p>
            <p>
              Today, from Trivandrum and Kochi in India and from the UAE, we build custom software for energy and EV
              technology, education and learning management systems, ERP, AI automation and agentic AI, and cloud
              platforms designed to scale. Our clients span India, the Middle East, Europe, Asia-Pacific and the United
              States, from trade associations and consumer brands to healthcare providers and software companies.
            </p>
            <p>
              Whether you bring a rough idea or an existing system that needs work, you get the same care. We keep
              teams small, show working software early, and tell you plainly what something will take.
            </p>
          </div>
        </div>
      </Section>

      <GlobalPresence
        title="Based in India, working worldwide"
        intro="We have a presence in India and Dubai. We work around all time zones for clients in the Middle East, Asia-Pacific, Europe, the Americas and beyond."
      />

      <Section aria-labelledby="leadership-heading">
        <SectionHeading
          id="leadership-heading"
          label="Leadership"
          title="The people who run Xyvin"
          action={
            <ProtectedEmail
              encoded={encodeEmail(siteConfig.careersEmail)}
              subject="Careers"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/20 bg-white px-5 py-3 text-[15px] font-semibold text-navy-900 transition-colors hover:border-navy-900"
            >
              Join our team
            </ProtectedEmail>
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
        <LogoStrip limit={18} columns={6} />
      </Section>

      <CtaBand />
    </>
  );
}
