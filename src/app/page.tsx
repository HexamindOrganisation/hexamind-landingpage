import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactCta } from "@/components/sections/ContactCta";
import { mailto } from "@/lib/site";

/**
 * Placeholder home page. The full homepage design has not landed yet — this
 * keeps `/` branded and routes visitors to the finished Vision page.
 */
export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24">
        <Container>
          <Eyebrow>ACCUEIL</Eyebrow>
          <h1 className="mt-[26px] max-w-[20ch] text-balance font-serif text-hero font-medium tracking-[-0.01em] text-ink">
            We make AI work for you.
          </h1>
          <p className="mt-7 max-w-[62ch] text-body-lg text-mid">
            Conseil, développement sur mesure et modules d&rsquo;IA
            propriétaires. La page d&rsquo;accueil est en cours de préparation —
            découvrez notre vision en attendant.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/vision"
              className="inline-flex items-center gap-[10px] rounded-xl bg-accent px-6 py-[14px] text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-accent-ink"
            >
              Découvrir notre vision <span aria-hidden>→</span>
            </Link>
            <a
              href={mailto}
              className="inline-flex items-center rounded-xl border border-line bg-panel px-6 py-[14px] text-[15px] font-medium text-ink transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-white"
            >
              Nous contacter
            </a>
          </div>
        </Container>
      </section>

      {/* Anchor targets referenced by the nav until these sections are built. */}
      <div id="offres" className="scroll-mt-24" />
      <div id="modules" className="scroll-mt-24" />

      <ContactCta />
    </>
  );
}
