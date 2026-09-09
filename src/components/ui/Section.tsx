import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type SectionTone = "sable" | "panel" | "ink" | "teal";

const toneClass: Record<SectionTone, string> = {
  sable: "bg-sable text-ink",
  panel: "bg-panel text-ink",
  ink: "bg-ink text-cream",
  teal: "bg-teal text-cream",
};

/**
 * Full-width band with a page-width inner container. `tone` sets the surface
 * and default text colour; `containerClassName` overrides the default padding.
 */
export function Section({
  tone = "sable",
  id,
  className,
  containerClassName,
  children,
}: {
  tone?: SectionTone;
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn(toneClass[tone], "scroll-mt-20", className)}>
      <Container className={cn("py-20 md:py-28", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
