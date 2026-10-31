import { pageMetadata } from "@/lib/metadata";
import projects from "@/data/projects";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import WorkGrid from "@/components/sections/WorkGrid";

export const metadata = pageMetadata({
  title: "Our Work",
  description:
    "Websites, platforms, portals and apps Xyvin Technologies has built for clients in India, the Middle East, Europe and Australia.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Work" }]}
        title="Our work"
        intro={`A selection of ${projects.length} projects for clients in India, the Middle East, Europe and Australia: member portals, online stores, mobile apps and business platforms.`}
      />
      <Section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">
          All projects
        </h2>
        <WorkGrid />
      </Section>
      <CtaBand title="Want results like these?" />
    </>
  );
}
