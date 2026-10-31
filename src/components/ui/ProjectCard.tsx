import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import siteConfig from "@/data/site_config";

// Project tile: links to the case study when there is one, otherwise to the live site.
export default function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const href = project.caseStudy ? `${siteConfig.routes.work}/${project.slug}` : project.link;
  const external = !project.caseStudy && Boolean(project.link);

  const body = (
    <>
      <div className="relative aspect-[10/11] overflow-hidden rounded-lg border border-line bg-paper">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          priority={priority}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{project.category}</p>
          <h3 className="mt-1 text-lg">{project.title}</h3>
          <p className="mt-1 text-[15px] text-muted">{project.description}</p>
        </div>
        {href && (
          <ArrowUpRight
            size={20}
            aria-hidden="true"
            className="mt-1 shrink-0 text-navy-400 transition-colors group-hover:text-navy-900"
          />
        )}
      </div>
    </>
  );

  if (!href) return <article>{body}</article>;

  return (
    <article>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
          {body}
          <span className="sr-only"> (opens the live site in a new tab)</span>
        </a>
      ) : (
        <Link href={href} className="group block">
          {body}
        </Link>
      )}
    </article>
  );
}
