import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import services, { getService } from "@/data/services";
import { getProject, type Project } from "@/data/projects";
import siteConfig, { bookingHref } from "@/data/site_config";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import CtaBand from "@/components/ui/CtaBand";
import ProcessSteps from "@/components/sections/ProcessSteps";
import StructuredData from "@/components/seo/StructuredData";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: `${service.summary} ${service.description}`.slice(0, 158),
    path: `${siteConfig.routes.services}/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.relatedProjects.map(getProject).filter((p): p is Project => Boolean(p));
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <StructuredData type="service" data={service} />
      <PageHeader
        breadcrumb={[{ label: "Services", href: siteConfig.routes.services }, { label: service.title }]}
        title={service.title}
        intro={service.summary}
      >
        <ButtonLink href={bookingHref} track="booking" trackLocation="service_header">
          Book a free consultation
        </ButtonLink>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-display-md">Overview</h2>
            <p className="mt-4 text-lg text-navy-800">{service.description}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-line bg-paper p-6 sm:p-8">
              <h2 className="text-xl">What we deliver</h2>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px]">
                    <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-navy-900" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="paper" aria-labelledby="related-heading">
          <SectionHeading id="related-heading" label="Examples" title={`${service.title} projects`} />
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      )}

      <Section aria-labelledby="process-heading">
        <SectionHeading id="process-heading" label="How we work" title="What working with us looks like" />
        <ProcessSteps />
      </Section>

      <Section tone="paper" aria-labelledby="other-heading">
        <h2 id="other-heading" className="text-xl">
          Other services
        </h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {others.map((s) => (
            <li key={s.slug}>
              <ButtonLink href={`${siteConfig.routes.services}/${s.slug}`} variant="secondary" className="bg-white">
                {s.title}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
