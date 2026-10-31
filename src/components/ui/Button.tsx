import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "text";

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  onDark?: boolean;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  track?: "booking";
  trackLocation?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-[15px] font-semibold transition-colors focus-visible:outline-offset-4";

const variants = (variant: Variant, onDark?: boolean) => {
  switch (variant) {
    case "primary":
      return "bg-accent px-5 py-3 text-navy-900 hover:bg-accent-hover";
    case "secondary":
      return onDark
        ? "border border-white/30 px-5 py-3 text-white hover:border-white"
        : "border border-navy-900/20 px-5 py-3 text-navy-900 hover:border-navy-900";
    case "text":
      return onDark
        ? "text-white underline-offset-4 hover:underline"
        : "text-navy-900 underline-offset-4 hover:underline";
  }
};

export default function ButtonLink({
  href,
  variant = "primary",
  onDark,
  arrow,
  className,
  children,
  track,
  trackLocation,
}: ButtonLinkProps) {
  const classes = cn(base, variants(variant, onDark), className);
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </>
  );
  const data = { "data-track": track, "data-track-location": trackLocation };

  if (/^(https?:|mailto:|tel:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...data}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...data}>
      {content}
    </Link>
  );
}
