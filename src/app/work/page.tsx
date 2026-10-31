import { pageMetadata } from "@/lib/metadata";
import projects from "@/data/projects";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import WorkGrid from "@/components/sections/WorkGrid";

export const metadata = pageMetadata({
  title: "Our Work",
  description:
    "Websites, platforms, portals and apps Xyvin Technologies has built for clients such as GOEC, KSSIA, Khedmah and Double Horse.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Work" }]}
        title="Our work"
        intro={`${projects.length} projects for businesses, associations and startups across India, the GCC and beyond: member portals, e-commerce stores, mobile apps and business platforms.`}
      />
      <Section>
        <WorkGrid />
      </Section>
      <CtaBand title="Want results like these?" />
    </>
  );
}
