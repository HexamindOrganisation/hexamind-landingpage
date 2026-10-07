import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HexgateIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function Hexgate() {
  const t = useTranslations("modules");
  const h = useTranslations("home.hexgate");
  // "Pillar: detail" strings, shown as a card title + body.
  const pillars = (t.raw("hexgate.benefits") as string[]).map((b) => {
    const i = b.indexOf(":");
    const body = b.slice(i + 1).trim();
    return { title: b.slice(0, i).trim(), body: body[0].toUpperCase() + body.slice(1) };
  });
  const steps = t.raw("hexgate.steps") as { name: string; body: string }[];

  return (
    <section id="hexgate" className="scroll-mt-20 bg-ink py-24 md:py-28">
      <Reveal>
        <Container>
          {/* Header */}
          <Eyebrow tone="cream">{h("eyebrow")}</Eyebrow>
          <h2 className="mt-[26px] max-w-[26ch] text-balance font-serif text-h2 font-semibold leading-[1.05] text-cream">
            <span className="flex items-center gap-[0.3em] text-accent-bright">
              <HexgateIcon className="size-[0.95em] shrink-0" />
              {t("hexgate.name")}
            </span>
            {h("title")}
          </h2>
          <p className="mt-6 max-w-[68ch] text-body-lg leading-[1.7] text-cream/85">
            {t("hexgate.bodyShort")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.hexgateUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-[22px] py-3 text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgb(0_0_0_/_0.6)]"
            >
              {t("cloudButton")}
            </a>
            <a
              href={site.hexgateRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/35 px-[22px] py-3 text-[15px] text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              {t("githubButton")}
            </a>
            <span className="ml-1 rounded-md border border-cream/35 px-2.5 py-[5px] font-mono text-[10.5px] font-medium tracking-[0.12em] text-cream/80">
              {t("badge")}
            </span>
          </div>

          {/* Three pillars */}
          <div data-stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-cream/10 bg-cream/5 p-7"
              >
                <h3 className="font-serif text-xl font-semibold text-cream">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream/75">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          {/* Product showcase: code + policy editor | audit dashboard */}
          <div data-stagger className="mt-14 grid items-start gap-5 lg:grid-cols-2">
            <div className="grid gap-5">
              <div
                className="overflow-hidden rounded-xl border border-cream/20"
                style={{ background: "#0A1636" }}
              >
                <div className="flex items-center gap-2 border-b border-cream/10 px-3.5 py-[11px]">
                  <span className="size-[9px] rounded-full bg-[#F87171]" />
                  <span className="size-[9px] rounded-full bg-[#FBBF24]" />
                  <span className="size-[9px] rounded-full bg-[#34D399]" />
                  <span className="ml-2 font-mono text-[12.5px] text-cream/55">
                    agent.py
                  </span>
                </div>
                <pre className="overflow-x-auto p-[18px] font-mono text-[12.5px] leading-[1.8] text-[#DCE3EE]">
                  <span className="text-[#C99BF5]">from</span> hexgate{" "}
                  <span className="text-[#C99BF5]">import</span>{" "}
                  <span className="text-[#8FC0FF]">HexgateRunner</span>
                  {"\n\n"}runner ={" "}
                  <span className="text-[#8FC0FF]">HexgateRunner</span>()
                  {"\n"}
                  <span className="text-cream/50">{t("codeComment")}</span>
                </pre>
              </div>
              <figure className="overflow-hidden rounded-xl border border-cream/15">
                <Image
                  src="/hexgate/policy-editor.png"
                  alt={t("editorAlt")}
                  width={1256}
                  height={542}
                  className="h-auto w-full"
                />
              </figure>
            </div>
            <figure className="overflow-hidden rounded-xl border border-cream/15">
              <Image
                src="/hexgate/audit-dashboard.png"
                alt={t("dashboardAlt")}
                width={1256}
                height={1162}
                className="h-auto w-full"
              />
            </figure>
          </div>

          {/* Define → Fetch → Enforce → Report → Improve, as on hexgate.ai */}
          <div className="mt-16 border-t border-cream/20 pt-11">
            <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-cream/70">
              {h("stepsTitle")}
            </h3>
            <ol data-stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, i) => (
                <li key={step.name}>
                  <span className="font-mono text-[13px] text-accent-warm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-2 font-serif text-xl font-semibold text-cream">
                    {step.name}
                  </div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-cream/75">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-11">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-[30px] py-4 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-14px_rgb(0_0_0_/_0.65)]"
            >
              {t("demoButton")} <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
