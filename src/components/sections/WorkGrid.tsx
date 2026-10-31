"use client";

import { useState } from "react";
import projects, { projectCategories } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { cn } from "@/lib/cn";

const filters = ["All", ...projectCategories] as const;

export default function WorkGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div role="group" aria-label="Filter projects by type" className="mb-10 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
              active === filter
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-line bg-white text-navy-800 hover:border-navy-900"
            )}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 3} />
        ))}
      </div>
    </>
  );
}
