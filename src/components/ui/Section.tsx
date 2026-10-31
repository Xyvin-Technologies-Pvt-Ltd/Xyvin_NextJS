import { cn } from "@/lib/cn";
import Container from "./Container";

type Tone = "white" | "paper" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-white",
  paper: "bg-paper",
  navy: "bg-navy-900 text-white",
};

interface SectionProps {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  "aria-labelledby"?: string;
}

export default function Section({ id, tone = "white", className, containerClassName, children, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", tones[tone], className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
