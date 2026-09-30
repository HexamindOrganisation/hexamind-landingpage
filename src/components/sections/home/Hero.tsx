import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { HexgateIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function Hero() {
  const t = useTranslations("home.hero");

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
      {/* Clay dotted field */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-10 h-[620px] w-[900px] opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1.3px,transparent 1.3px)",
          backgroundSize: "11px 11px",
          maskImage:
            "radial-gradient(58% 62% at 92% 8%,#000 0%,rgba(0,0,0,.5) 45%,transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(58% 62% at 92% 8%,#000 0%,rgba(0,0,0,.5) 45%,transparent 78%)",
        }}
      />
      {/* Plum dotted field */}
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
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-4">
          <span className="h-px w-[34px] bg-primary" />
          <span className="font-mono text-[13px] font-medium tracking-[0.22em] text-primary">
            {t("eyebrow")}
          </span>
        </div>

        <h1
          className="max-w-[16ch] text-balance font-serif font-bold tracking-[-0.01em] text-foreground"
          style={{ fontSize: "clamp(52px,7.2vw,100px)", lineHeight: 1 }}
        >
          We make <span className="text-primary">AI work</span> for you.
        </h1>

        <p className="mt-8 max-w-[60ch] text-[19px] leading-[1.65] text-muted-foreground">
          {t.rich("lead", {
            b: (chunks) => (
              <span className="font-semibold text-foreground">{chunks}</span>
            ),
          })}
        </p>

        <div className="mt-12 grid max-w-[720px] divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <Link href="/offres" className="group block pb-7 sm:pb-0 sm:pr-10">
            <span className="font-mono text-[12px] font-medium tracking-[0.2em] text-primary">
              {t("ctaServicesLabel")}
            </span>
            <span className="mt-3 flex items-center gap-2.5 text-[22px] font-semibold text-foreground transition-colors group-hover:text-primary">
              {t("ctaServices")}
              <span aria-hidden className="text-primary transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
            <span className="mt-2 block max-w-[32ch] text-[15px] leading-relaxed text-muted-foreground">
              {t("ctaServicesHint")}
            </span>
          </Link>
          <a
            href={site.hexgateUrl}
            target="_blank"
            rel="noreferrer"
            className="group block pt-7 sm:pl-10 sm:pt-0"
          >
            <span className="font-mono text-[12px] font-medium tracking-[0.2em] text-primary">
              {t("ctaHexgateLabel")}
            </span>
            <span className="mt-3 flex items-center gap-2.5 text-[22px] font-semibold text-foreground transition-colors group-hover:text-primary">
              <HexgateIcon width={24} height={24} className="text-primary" />
              {t("ctaHexgate")}
              <span aria-hidden className="text-primary transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </span>
            <span className="mt-2 block max-w-[32ch] text-[15px] leading-relaxed text-muted-foreground">
              {t("ctaHexgateHint")}
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
