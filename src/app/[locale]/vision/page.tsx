import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLink } from "@/components/ui/Button";
import { Disclosure } from "@/components/ui/Disclosure";
import { MitStats } from "@/components/sections/MitStats";
import { ContactCta } from "@/components/sections/ContactCta";
import { localizedAlternates } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.vision" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates(locale, "/vision"),
  };
}

const bLight = {
  b: (chunks: ReactNode) => (
    <strong className="font-semibold text-foreground">{chunks}</strong>
  ),
};
const bDark = {
  b: (chunks: ReactNode) => (
    <strong className="font-semibold text-cream">{chunks}</strong>
  ),
};

export default async function VisionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("vision");

  const forces = t.raw("defi.forces") as string[];
  const constraints = t.raw("defi.constraints") as string[];
  const obstacles = t.raw("obstacles.items") as {
    n: string;
    title: string;
    tags: string[];
    body: string;
  }[];
  const layers = t.raw("proposition.layers") as {
    n: string;
    title: string;
    body: string;
  }[];
  const accompagnement = t.raw("accompagnement.items") as string[];

  return (
    <>
      {/* Intro */}
      <Section>
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="mt-4 max-w-[24ch] text-balance font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
          {t("h1")}
        </h1>
        <div className="mt-8 max-w-3xl space-y-6 text-body-lg text-muted-foreground">
          <p>{t.rich("intro1", bLight)}</p>
          <p>{t.rich("intro2", bLight)}</p>
        </div>
        <MitStats className="mt-12 max-w-3xl" />
      </Section>

      {/* Le défi */}
      <Section tone="ink">
        <SectionHeader tone="dark" eyebrow={t("defi.eyebrow")} title={t("defi.title")} />
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-serif text-xl text-accent-bright">
              {t("defi.forcesTitle")}
            </h3>
            <ul className="space-y-3 text-cream/85">
              {forces.map((_, i) => (
                <li key={i}>{t.rich(`defi.forces.${i}`, bDark)}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-serif text-xl text-accent-bright">
              {t("defi.constraintsTitle")}
            </h3>
            <ul className="space-y-3 text-cream/85">
              {constraints.map((_, i) => (
                <li key={i}>{t.rich(`defi.constraints.${i}`, bDark)}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Trois obstacles */}
      <Section>
        <SectionHeader eyebrow={t("obstacles.eyebrow")} title={t("obstacles.title")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {obstacles.map((o) => (
            <div
              key={o.n}
              className="flex flex-col rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl font-bold text-primary">
                  {o.n}
                </span>
                <h3 className="font-serif text-2xl text-foreground">{o.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {o.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold leading-snug text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* La proposition Hexamind */}
      <Section tone="ink">
        <SectionHeader
          tone="dark"
          eyebrow={t("proposition.eyebrow")}
          title={t("proposition.title")}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {layers.map((l) => (
            <div
              key={l.n}
              className="rounded-3xl border border-cream/15 bg-cream/5 p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl font-bold text-accent-bright">
                  {l.n}
                </span>
                <h3 className="font-serif text-xl text-cream">{l.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream/80">{l.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl leading-relaxed text-cream/85">
          {t.rich("proposition.buildRun", bDark)}
        </p>

        <div className="mt-10 max-w-4xl rounded-3xl border border-cream/15 bg-cream/5 p-8">
          <h3 className="font-serif text-2xl text-cream">
            {t("proposition.banking.title")}
          </h3>
          <p className="mt-3 leading-relaxed text-cream/85">
            {t("proposition.banking.intro")}
          </p>
          <Disclosure
            tone="dark"
            className="mt-4"
            summaryClassName="font-semibold text-cream hover:text-white"
            summary={<span>{t("proposition.banking.disclosure")}</span>}
          >
            <div className="space-y-4">
              <p className="leading-relaxed text-cream/85">
                {t("proposition.banking.p1")}
              </p>
              <p className="leading-relaxed text-cream/85">
                {t("proposition.banking.p2")}
              </p>
              <Image
                src="/vision/cas-usage-bancaire.png"
                alt={t("proposition.banking.imgAlt")}
                width={945}
                height={450}
                className="h-auto w-full rounded-lg bg-cream/10"
              />
            </div>
          </Disclosure>
        </div>
      </Section>

      {/* Notre accompagnement */}
      <Section>
        <SectionHeader
          eyebrow={t("accompagnement.eyebrow")}
          title={t("accompagnement.title")}
        />
        <ul className="mt-8 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
          {accompagnement.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <ArrowLink href="/offres" className="mt-10">
          {t("accompagnement.link")}
        </ArrowLink>
      </Section>

      <ContactCta />
    </>
  );
}
