import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  id?: string;
  label?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  onDark?: boolean;
  className?: string;
  action?: React.ReactNode;
}

// Plain, left-aligned section heading. The optional label is small text, not a pill badge.
export default function SectionHeading({ id, label, title, intro, onDark, className, action }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-2xl">
        {label && (
          <p className={cn("mb-3 text-sm font-medium", onDark ? "text-navy-200" : "text-muted")}>{label}</p>
        )}
        <h2 id={id} className={cn("text-display-lg", onDark && "text-white")}>
          {title}
        </h2>
        {intro && (
          <p className={cn("mt-4 text-lg", onDark ? "text-navy-100" : "text-muted")}>{intro}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
