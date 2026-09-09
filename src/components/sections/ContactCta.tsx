import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Full-width teal call-to-action band. Reused across pages. */
export function ContactCta() {
  return (
    <section id="contact" className="bg-teal py-24 md:py-28">
      <Reveal>
        <Container className="flex flex-wrap items-center justify-between gap-10">
        <div className="min-w-0">
          <Eyebrow tone="cream">TRAVAILLONS ENSEMBLE</Eyebrow>
          <h2 className="mt-[22px] font-serif text-h2-lg font-semibold text-cream">
            Une question, un projet ?
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex flex-none items-center gap-3 rounded-full bg-cream px-8 py-[17px] text-[17px] font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_34px_-16px_rgb(0_0_0_/_0.45)]"
        >
          Nous contacter <span aria-hidden>→</span>
        </Link>
      </Container>
      </Reveal>
    </section>
  );
}
