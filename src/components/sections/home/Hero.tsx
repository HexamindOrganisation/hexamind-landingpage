import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-24 md:pb-28 md:pt-28"
    >
      {/* Grid backdrop, faded from the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line-soft) 1px,transparent 1px),linear-gradient(90deg,var(--color-line-soft) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(80% 60% at 50% 0%,#000,transparent)",
          WebkitMaskImage: "radial-gradient(80% 60% at 50% 0%,#000,transparent)",
        }}
      />
      {/* Teal dotted field */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-10 h-[620px] w-[900px] opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-clay) 1.3px,transparent 1.3px)",
          backgroundSize: "11px 11px",
          maskImage:
            "radial-gradient(58% 62% at 92% 8%,#000 0%,rgba(0,0,0,.5) 45%,transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(58% 62% at 92% 8%,#000 0%,rgba(0,0,0,.5) 45%,transparent 78%)",
        }}
      />
      {/* Vermilion dotted field */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-16 h-[520px] w-[760px] opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-accent-bright) 1.3px,transparent 1.3px)",
          backgroundSize: "13px 13px",
          maskImage: "radial-gradient(40% 44% at 100% 0%,#000 0%,transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(40% 44% at 100% 0%,#000 0%,transparent 72%)",
        }}
      />

      <Container className="relative">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 font-mono text-[13px] text-muted-foreground">
          <span
            className="size-[7px] flex-none rounded-full bg-green"
            style={{ animation: "hx-dot 2.2s ease-in-out infinite" }}
          />
          <span>
            IA <span className="font-bold text-foreground">déployée en production</span>,
            pas juste un prototype
          </span>
        </div>

        {/* Eyebrow */}
        <div className="mb-5 mt-[34px] flex items-center gap-4">
          <span className="h-px w-[34px] bg-primary" />
          <span className="font-mono text-[13px] font-medium tracking-[0.22em] text-primary">
            HEXAMIND
          </span>
        </div>

        <h1
          className="max-w-[16ch] text-balance font-serif font-bold tracking-[-0.01em] text-foreground"
          style={{ fontSize: "clamp(52px,7.2vw,100px)", lineHeight: 1 }}
        >
          We make <span className="text-primary">AI work</span> for you.
        </h1>

        <p className="mt-8 max-w-[60ch] text-[19px] leading-[1.65] text-muted-foreground">
          Nous vous accompagnons dans vos projets de transformation IA en
          conseil, en développement sur mesure et grâce à nos propres modules
          d&rsquo;IA.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-[26px] py-[15px] text-base font-semibold text-white shadow-[0_10px_26px_-10px_rgb(15_31_74_/_0.5)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary-deep"
          >
            Discuter de votre projet <span aria-hidden>→</span>
          </Link>
          <Link
            href="/vision"
            className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-card px-[26px] py-[15px] text-base font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-white"
          >
            Découvrir notre vision
          </Link>
          <code className="ml-1 rounded-xl border border-border bg-card px-[18px] py-[13px] font-mono text-sm text-muted-foreground">
            <span className="text-dim">$</span> pip install{" "}
            <span className="text-primary">hexgate</span>
          </code>
        </div>

        <div className="mt-[34px] flex flex-wrap gap-6 font-mono text-[13px] text-dim">
          <span>CONSEIL</span>
          <span className="text-muted-foreground opacity-55">/</span>
          <span>DÉVELOPPEMENT</span>
          <span className="text-muted-foreground opacity-55">/</span>
          <span>MODULES IA PROPRIÉTAIRES</span>
        </div>
      </Container>
    </section>
  );
}
