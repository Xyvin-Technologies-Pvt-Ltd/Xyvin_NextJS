"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import projects, { projectCategories, type ProjectCategory } from "@/data/projects";
import { industriesWithProjects } from "@/data/industries";
import siteConfig from "@/data/site_config";
import ProjectCard from "@/components/ui/ProjectCard";
import { cn } from "@/lib/cn";

type TypeFilter = "All" | ProjectCategory;

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
        active ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white text-navy-800 hover:border-navy-900"
      )}
    >
      {children}
    </button>
  );
}

export default function WorkGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialIndustry = searchParams.get("industry");
  const [industry, setIndustry] = useState<string>(
    industriesWithProjects.some((i) => i.slug === initialIndustry) ? (initialIndustry as string) : "all"
  );
  const [type, setType] = useState<TypeFilter>("All");

  const chooseIndustry = (slug: string) => {
    setIndustry(slug);
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") params.delete("industry");
    else params.set("industry", slug);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const industrySlugs =
    industry === "all" ? null : new Set(industriesWithProjects.find((i) => i.slug === industry)?.projectSlugs ?? []);
  const visible = projects.filter(
    (p) => (!industrySlugs || industrySlugs.has(p.slug)) && (type === "All" || p.category === type)
  );

  return (
    <>
      <div className="mb-10 space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span id="industry-filter-label" className="w-20 shrink-0 text-sm font-medium text-muted">
            Industry
          </span>
          <div role="group" aria-labelledby="industry-filter-label" className="flex flex-wrap gap-2">
            <Chip active={industry === "all"} onClick={() => chooseIndustry("all")}>
              All
            </Chip>
            {industriesWithProjects.map((i) => (
              <Chip key={i.slug} active={industry === i.slug} onClick={() => chooseIndustry(i.slug)}>
                {i.name}
              </Chip>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span id="type-filter-label" className="w-20 shrink-0 text-sm font-medium text-muted">
            Type
          </span>
          <div role="group" aria-labelledby="type-filter-label" className="flex flex-wrap gap-2">
            {(["All", ...projectCategories] as TypeFilter[]).map((t) => (
              <Chip key={t} active={type === t} onClick={() => setType(t)}>
                {t}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>

      {visible.length > 0 ? (
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-line bg-paper p-10 text-center">
          <p className="text-lg text-navy-900">No projects match both filters yet.</p>
          <p className="mt-2 text-muted">
            We may still have relevant experience.{" "}
            <Link href={siteConfig.routes.contact} className="font-semibold text-navy-900 underline underline-offset-4">
              Ask us
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
}
