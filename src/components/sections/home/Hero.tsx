import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { HexgateIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function Hero() {
  const t = useTranslations("home.hero");
  const disciplines = t.raw("disciplines") as string[];

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

        <div className="mt-10 grid max-w-[640px] gap-6 sm:grid-cols-2">
          <div>
            <Link
              href="/offres"
              className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-[26px] py-[15px] text-base font-semibold text-white shadow-[0_10px_26px_-10px_rgb(43_38_32_/_0.4)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary-deep"
            >
              {t("ctaServices")} <span aria-hidden>→</span>
            </Link>
            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
              {t("ctaServicesHint")}
            </p>
          </div>
          <div>
            <a
              href={site.hexgateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-[26px] py-[15px] text-base font-semibold text-white shadow-[0_10px_26px_-10px_rgb(11_18_32_/_0.5)] transition duration-200 hover:-translate-y-0.5 hover:bg-foreground"
            >
              <HexgateIcon width={20} height={20} className="text-accent-bright" />
              {t("ctaHexgate")} <span aria-hidden className="text-white/70">↗</span>
            </a>
            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
              {t("ctaHexgateHint")}
            </p>
          </div>
        </div>

        <div className="mt-[34px] flex flex-wrap gap-6 font-mono text-[13px] text-dim">
          {disciplines.map((d, i) => (
            <span key={d} className="flex items-center gap-6">
              {i > 0 && <span className="text-muted-foreground opacity-55">/</span>}
              <span>{d}</span>
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
