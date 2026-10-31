import Image from "next/image";
import Link from "next/link";
import { getProject, type Project } from "@/data/projects";
import siteConfig from "@/data/site_config";

// Projects shown in the homepage hero, chosen to span regions and project types.
const HERO_PROJECTS: { slug: string; label: string }[] = [
  { slug: "goec", label: "EV charging app" },
  { slug: "azavista", label: "Event software" },
  { slug: "basari-opticals", label: "Eyewear store" },
  { slug: "khedmah", label: "Services app" },
];

function Tile({ project, label, priority }: { project: Project; label: string; priority?: boolean }) {
  return (
    <figure className="relative m-0 overflow-hidden rounded-lg border border-line bg-paper shadow-[0_1px_2px_rgba(3,19,49,0.06)]">
      <div className="relative aspect-[10/11]">
        <Image
          src={project.image}
          alt={`${project.title}: ${label}`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 45vw, 22vw"
          className="object-cover"
        />
      </div>
      <figcaption className="absolute bottom-3 left-3 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-navy-900">
        {project.title} <span className="text-muted">· {label}</span>
      </figcaption>
    </figure>
  );
}

export default function HeroCollage() {
  const tiles = HERO_PROJECTS.map((t) => ({ ...t, project: getProject(t.slug) })).filter(
    (t): t is { slug: string; label: string; project: Project } => Boolean(t.project)
  );
  const left = tiles.filter((_, i) => i % 2 === 0);
  const right = tiles.filter((_, i) => i % 2 === 1);

  return (
    <Link href={siteConfig.routes.work} aria-label="See our work" className="group block">
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        <div className="flex flex-col gap-4 sm:gap-5">
          {left.map((t, i) => (
            <Tile key={t.slug} project={t.project} label={t.label} priority={i === 0} />
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:mt-16 sm:gap-5">
          {right.map((t, i) => (
            <Tile key={t.slug} project={t.project} label={t.label} priority={i === 0} />
          ))}
        </div>
      </div>
    </Link>
  );
}
