import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Disclosure } from "@/components/ui/Disclosure";
import { ContactCta } from "@/components/sections/ContactCta";
import { localizedAlternates } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.rejoindre" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates(locale, "/nous-rejoindre"),
  };
}

type Job = {
  title: string;
  location: string;
  sections: { title: string; items: string[] }[];
};

export default async function NousRejoindrePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("rejoindre");

  const reasons = t.raw("reasons.items") as { title: string; body: string }[];
  const jobs = t.raw("jobs.list") as Job[];

  return (
    <>
      {/* Intro */}
      <Section>
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="mt-4 max-w-[24ch] text-balance font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
          {t("h1")}
        </h1>
      </Section>

      {/* Pourquoi nous rejoindre */}
      <Section tone="ink">
        <SectionHeader
          tone="dark"
          eyebrow={t("reasons.eyebrow")}
          title={t("reasons.title")}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl border border-cream/10 bg-cream/5 p-10"
            >
              <h3 className="font-serif text-2xl text-cream">{r.title}</h3>
              <p className="mt-4 leading-relaxed text-cream/80">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Postes ouverts */}
      <Section>
        <SectionHeader eyebrow={t("jobs.eyebrow")} title={t("jobs.title")} />
        <div className="mt-12 max-w-4xl divide-y divide-border border-y border-border">
          {jobs.map((job) => (
            <Disclosure
              key={job.title}
              className="py-2"
              summaryClassName="py-6"
              summary={
                <div className="text-left">
                  <div className="font-serif text-2xl text-foreground">
                    {job.title}
                  </div>
                  <div className="mt-1 text-sm text-dim">{job.location}</div>
                </div>
              }
              contentClassName="space-y-6 pb-8"
            >
              {job.sections.map((s) => (
                <div key={s.title}>
                  <h4 className="font-serif text-lg text-primary">{s.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-clay">•</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Disclosure>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
