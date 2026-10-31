import siteConfig from "@/data/site_config";
import { cn } from "@/lib/cn";

// The one stats strip used across the site. Numbers come from site_config.ts.
export default function Stats({ onDark, className }: { onDark?: boolean; className?: string }) {
  return (
    <dl className={cn("grid grid-cols-3 gap-4 sm:gap-6", className)}>
      {siteConfig.stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse border-l-2 border-accent pl-3 sm:pl-4">
          <dt className={cn("text-xs sm:text-sm", onDark ? "text-navy-200" : "text-muted")}>{stat.label}</dt>
          <dd className={cn("font-display text-2xl font-semibold sm:text-3xl", onDark ? "text-white" : "text-navy-900")}>
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
