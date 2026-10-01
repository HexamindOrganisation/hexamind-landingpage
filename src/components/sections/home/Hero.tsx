import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { HexgateIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function Hero() {
  const t = useTranslations("home.hero");
  const frameworks = t.raw("frameworks") as string[];

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
          className="max-w-[18ch] text-balance font-serif font-bold tracking-[-0.01em] text-foreground"
          style={{ fontSize: "clamp(40px,6.6vw,92px)", lineHeight: 1 }}
        >
          {t.rich("h1", {
            hl: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
        </h1>

        <p className="mt-8 max-w-[60ch] text-[19px] leading-[1.65] text-muted-foreground">
          {t.rich("lead", {
            b: (chunks) => (
              <span className="font-semibold text-foreground">{chunks}</span>
            ),
          })}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <a
            href={site.hexgateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-[26px] py-[15px] text-base font-semibold text-white shadow-[0_10px_26px_-10px_rgb(11_18_32_/_0.5)] transition duration-200 hover:-translate-y-0.5 hover:bg-foreground"
          >
            <HexgateIcon width={20} height={20} className="text-accent-bright" />
            {t("ctaHexgate")} <span aria-hidden className="text-white/70">↗</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-card px-[26px] py-[15px] text-base font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-white"
          >
            {t("ctaPrimary")} <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-[34px] flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[13px] text-dim">
          <span className="text-muted-foreground">{t("worksWith")}</span>
          {frameworks.map((f) => (
            <span key={f}>{f}</span>
          ))}
          <span className="rounded-md border border-border px-2.5 py-[5px] text-[11px] tracking-[0.12em] text-muted-foreground">
            {t("license")}
          </span>
        </div>
      </Container>
    </section>
  );
}
