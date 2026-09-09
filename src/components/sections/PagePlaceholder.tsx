import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * Lightweight scaffold for pages that are linked from the nav but not yet
 * designed. Keeps the brand language and avoids 404s while the design lands.
 */
export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <section className="pb-28 pt-24">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-[26px] max-w-[24ch] text-balance font-serif text-h2-lg font-medium text-ink">
          {title}
        </h1>
        <p className="mt-6 max-w-[60ch] text-body-lg text-mid">{description}</p>
        <p className="mt-8 font-mono text-[13px] uppercase tracking-[0.14em] text-dim">
          Page en construction
        </p>
      </Container>
    </section>
  );
}
