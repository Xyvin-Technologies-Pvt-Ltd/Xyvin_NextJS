import { pageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import ServiceList from "@/components/sections/ServiceList";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TechList from "@/components/sections/TechList";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Custom software, web development, mobile apps, ERP systems, API integration and AI automation, designed and built by Xyvin Technologies for clients worldwide.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Services" }]}
        title="Services"
      />
      <Section aria-labelledby="services-list">
        <h2 id="services-list" className="sr-only">
          Our services
        </h2>
        <ServiceList />
      </Section>
      <Section tone="paper" aria-labelledby="process-heading">
        <SectionHeading id="process-heading" label="How we work" title="From first call to launch, and beyond" />
        <ProcessSteps />
      </Section>
      <Section aria-labelledby="tech-heading">
        <SectionHeading
          id="tech-heading"
          label="Technology"
          title="Tools we work with"
          intro="We pick the stack that suits your project and your team, not the other way round."
        />
        <TechList />
      </Section>
      <CtaBand />
    </>
  );
}
