import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Disclosure } from "@/components/ui/Disclosure";
import { localizedAlternates } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.offres" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates(locale, "/offres"),
  };
}

type ConseilOffer = {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  intro: string;
  items: string[];
  deliverables: string[];
  forWho: string;
};

type Mode = {
  n: string;
  title: string;
  principle: string;
  billing: string;
  advantages: string[];
};

// Per-module presentation extras (links, preview) — copy comes from messages.
const MODULE_IDS = ["hexgate", "pascal", "zeagent", "fastprop"] as const;

export default async function OffresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("offres");
  const dm = await getTranslations("devModes");
  const m = await getTranslations("modules");

  const offers = t.raw("conseil.offers") as ConseilOffer[];
  const modes = dm.raw("modes") as Mode[];

  return (
    <>
      {/* Intro */}
      <Section containerClassName="pb-8 pt-20 md:pb-10 md:pt-28">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="mt-4 max-w-[24ch] text-balance font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
          {t("h1")}
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">
          {t("intro")}
        </p>
      </Section>

      {/* Conseil */}
      <Section id="conseil" containerClassName="py-8 md:py-12">
        <Eyebrow>{t("conseil.eyebrow")}</Eyebrow>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.id}
              id={o.id}
              className="flex flex-col rounded-3xl border border-border bg-card p-8"
            >
              <div className="font-serif text-3xl text-foreground">{o.name}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-primary">
                {o.tagline}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {o.intro}
              </p>
              <Disclosure
                className="mt-6 border-t border-border pt-5"
                summaryClassName="text-sm font-semibold text-foreground"
                summary={<span>{t("conseil.more")}</span>}
              >
                <p className="text-sm text-dim">{o.duration}</p>
                <div className="mt-4">
                  <h4 className="font-serif text-lg text-foreground">
                    {t("conseil.contenu")}
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {o.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary">•</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <h4 className="font-serif text-lg text-foreground">
                    {t("conseil.livrables")}
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {o.deliverables.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-clay">•</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">
                  <strong className="text-foreground">{t("conseil.pourQui")}</strong>{" "}
                  {o.forWho}
                </p>
              </Disclosure>
            </div>
          ))}
        </div>
      </Section>

      {/* Développement */}
      <Section id="developpement">
        <SectionHeader
          eyebrow={dm("eyebrow")}
          title={dm("title")}
          intro={dm("intro")}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {modes.map((mode) => (
            <div
              key={mode.n}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl font-bold text-primary">
                  {mode.n}
                </span>
                <h3 className="font-serif text-2xl text-foreground">{mode.title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">{dm("principleLabel")}</strong>{" "}
                {mode.principle}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">{dm("billingLabel")}</strong>{" "}
                {mode.billing}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                {mode.advantages.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Modules IA */}
      <Section id="modules" tone="ink">
        <SectionHeader tone="dark" eyebrow={m("eyebrow")} title={m("title")} />
        <div className="mt-14 space-y-10">
          {MODULE_IDS.map((id) => {
            const benefits = m.raw(`${id}.benefits`) as string[];
            return (
              <article
                key={id}
                id={id}
                className="grid gap-8 border-t border-cream/15 pt-10 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <div className="font-serif text-5xl text-cream">
                    {m(`${id}.name`)}
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-wider text-accent-bright">
                    {m(`${id}.tagline`)}
                  </p>
                  {id === "hexgate" ? (
                    <span className="mt-4 inline-block rounded-md border border-cream/35 px-2.5 py-[5px] font-mono text-[10.5px] font-medium tracking-[0.12em] text-cream/80">
                      {m("badge")}
                    </span>
                  ) : null}
                </div>
                <div className="space-y-6 lg:col-span-8">
                  <p className="text-lg leading-relaxed text-cream/85">
                    {m(`${id}.body`)}
                  </p>
                  <ul className="space-y-2 text-sm text-cream/80">
                    {benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-accent-bright">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {id === "hexgate" ? (
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://hexgate.ai"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-primary px-[22px] py-3 text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgb(0_0_0_/_0.6)]"
                      >
                        {m("cloudButton")}
                      </a>
                      <a
                        href="https://github.com/HexamindOrganisation/hexgate"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-cream/35 px-[22px] py-3 text-[15px] text-cream transition-colors hover:border-cream hover:bg-cream/10"
                      >
                        {m("githubButton")}
                      </a>
                    </div>
                  ) : null}
                  {id === "pascal" ? (
                    <a
                      href="https://youtu.be/7bV8kuzNmWg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={m("pascalPreviewAlt")}
                      className="group block overflow-hidden rounded-lg border border-cream/10"
                    >
                      <Image
                        src="/modules/pascal-preview.png"
                        alt={m("pascalPreviewAlt")}
                        width={1920}
                        height={1064}
                        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-16">
          <Button href="/contact">{m("demoButton")} →</Button>
        </div>
      </Section>
    </>
  );
}
