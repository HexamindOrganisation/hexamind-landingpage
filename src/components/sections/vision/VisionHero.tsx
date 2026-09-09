import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function VisionHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24">
      {/* Decorative dotted field, faded toward the top-right corner. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-[460px] w-[720px] opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-teal) 1.3px, transparent 1.3px)",
          backgroundSize: "12px 12px",
          maskImage:
            "radial-gradient(50% 56% at 96% 4%, #000 0%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(50% 56% at 96% 4%, #000 0%, transparent 76%)",
        }}
      />

      <Container className="relative">
        <Eyebrow>VISION</Eyebrow>
        <h1 className="mt-[26px] max-w-[24ch] text-balance font-serif text-hero font-medium tracking-[-0.01em] text-ink">
          Une IA utile, modeste et maîtrisée.
        </h1>
        <p className="mt-7 max-w-[70ch] text-body-lg text-mid">
          Nous vous accompagnons dans vos projets de transformation IA en
          conseil, en développement sur mesure et grâce à nos propres modules
          d&rsquo;IA.
        </p>
      </Container>
    </section>
  );
}
