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

        <div className="mt-10 grid max-w-[720px] gap-4 sm:grid-cols-2">
          <Link
            href="/offres"
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-primary p-6 text-white shadow-[0_18px_40px_-20px_rgb(37_99_235_/_0.7)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary-deep"
          >
            <span className="flex items-center justify-between gap-4">
              <span className="text-lg font-semibold">{t("ctaServices")}</span>
              <span
                aria-hidden
                className="flex size-8 flex-none items-center justify-center rounded-full bg-white/15 transition duration-200 group-hover:translate-x-0.5 group-hover:bg-white/25"
              >
                →
              </span>
            </span>
            <span className="mt-2 text-sm leading-relaxed text-white/80">
              {t("ctaServicesHint")}
            </span>
          </Link>
          <a
            href={site.hexgateUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-ink p-6 text-white shadow-[0_18px_40px_-20px_rgb(11_18_32_/_0.8)] transition duration-200 hover:-translate-y-0.5"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-200 group-hover:opacity-100"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(96 165 250 / 0.12) 1px,transparent 1px),linear-gradient(90deg,rgb(96 165 250 / 0.12) 1px,transparent 1px)",
                backgroundSize: "16px 16px",
                maskImage: "radial-gradient(120% 120% at 100% 0%,#000,transparent 75%)",
                WebkitMaskImage: "radial-gradient(120% 120% at 100% 0%,#000,transparent 75%)",
              }}
            />
            <span className="relative flex items-center justify-between gap-4">
              <span className="flex items-center gap-2.5 text-lg font-semibold">
                <HexgateIcon width={22} height={22} className="text-accent-bright" />
                {t("ctaHexgate")}
              </span>
              <span
                aria-hidden
                className="flex size-8 flex-none items-center justify-center rounded-full bg-white/10 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white/20"
              >
                ↗
              </span>
            </span>
            <span className="relative mt-2 text-sm leading-relaxed text-white/70">
              {t("ctaHexgateHint")}
            </span>
          </a>
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
