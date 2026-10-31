import Image from "next/image";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { caseStudies, getProject } from "@/data/projects";
import siteConfig from "@/data/site_config";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";

interface Props {
  params: Promise<{ slug: string }>;
}

// Case study pages exist only for projects with `caseStudy` filled in (src/data/projects.ts).
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) return {};
  return pageMetadata({
    title: `${project.title} case study`,
    description: project.description,
    path: `${siteConfig.routes.work}/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();
  const { challenge, solution, results, quote, gallery = [] } = project.caseStudy;

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Work", href: siteConfig.routes.work }, { label: project.title }]}
        title={project.title}
        intro={project.description}
      >
        {project.link && (
          <ButtonLink href={project.link} variant="secondary" arrow>
            Visit the live site
          </ButtonLink>
        )}
      </PageHeader>

      <Section>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-line bg-paper">
          <Image src={project.image} alt={`${project.title} screenshot`} fill priority sizes="100vw" className="object-cover" />
        </div>

        {results.length > 0 && (
          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            {results.map((r) => (
              <div key={r.label} className="flex flex-col-reverse border-l-2 border-accent pl-4">
                <dt className="text-sm text-muted">{r.label}</dt>
                <dd className="font-display text-3xl font-semibold">{r.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-display-md">The challenge</h2>
            <p className="mt-4 text-lg text-navy-800">{challenge}</p>
          </div>
          <div>
            <h2 className="text-display-md">What we built</h2>
            <p className="mt-4 text-lg text-navy-800">{solution}</p>
          </div>
        </div>

        {quote && (
          <figure className="mt-16 border-l-2 border-accent pl-6">
            <blockquote className="font-display text-2xl leading-snug text-navy-900">&ldquo;{quote.text}&rdquo;</blockquote>
            <figcaption className="mt-4 text-muted">
              {quote.name}, {quote.role}
            </figcaption>
          </figure>
        )}

        {gallery.length > 0 && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
                <Image src={img} alt={`${project.title} screen ${i + 1}`} fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </Section>
      <CtaBand />
    </>
  );
}
