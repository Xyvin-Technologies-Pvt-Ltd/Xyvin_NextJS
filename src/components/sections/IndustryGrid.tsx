import Link from "next/link";
import { ArrowRight } from "lucide-react";
import industries from "@/data/industries";
import siteConfig from "@/data/site_config";

export default function IndustryGrid() {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4">
      {industries.map((industry) => {
        const hasProjects = industry.projectSlugs.length > 0;
        const href = hasProjects ? `${siteConfig.routes.work}?industry=${industry.slug}` : siteConfig.routes.contact;
        return (
          <li key={industry.slug} className="bg-white">
            <Link href={href} className="group flex h-full flex-col p-4 hover:bg-paper sm:p-6">
              <h3 className="text-base sm:text-lg">{industry.name}</h3>
              <p className="mt-2 hidden flex-1 text-[15px] text-muted sm:block">{industry.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-navy-900 sm:pt-5">
                {hasProjects ? "See projects" : "Talk to us"}
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        );
      })}
      <li className="bg-navy-900">
        <Link href={siteConfig.routes.contact} className="group flex h-full flex-col p-4 hover:bg-navy-800 sm:p-6">
          <h3 className="text-base text-white sm:text-lg">Another industry?</h3>
          <p className="mt-2 hidden flex-1 text-[15px] text-navy-200 sm:block">
            We&apos;d like to hear about it. Most of what we build carries across sectors.
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-white sm:pt-5">
            Talk to us
            <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </li>
    </ul>
  );
}
