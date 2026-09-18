import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactCta } from "@/components/sections/ContactCta";
import { localizedAlternates } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.qui" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates(locale, "/qui-sommes-nous"),
  };
}

type Member = {
  img: string;
  name: string;
  role: string;
  fullRole: string;
  bio: string[];
};

export default async function QuiSommesNousPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("qui");

  const values = t.raw("values.items") as { title: string; body: string }[];
  const members = t.raw("team.members") as Member[];

  return (
    <>
      {/* Intro */}
      <Section>
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="mt-4 max-w-[24ch] text-balance font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
          {t("h1")}
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">
          {t("intro")}
        </p>
      </Section>

      {/* Nos valeurs */}
      <Section tone="ink">
        <SectionHeader
          tone="dark"
          eyebrow={t("values.eyebrow")}
          title={t("values.title")}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-cream/10 bg-cream/5 p-10"
            >
              <h3 className="font-serif text-2xl text-cream">{v.title}</h3>
              <p className="mt-4 leading-relaxed text-cream/80">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* L'équipe */}
      <Section>
        <SectionHeader eyebrow={t("team.eyebrow")} title={t("team.title")} />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((mbr) => (
            <div
              key={mbr.name}
              className="flex flex-col items-center rounded-3xl border border-border bg-card p-6 text-center"
            >
              <div className="size-28 overflow-hidden rounded-full bg-muted ring-1 ring-border">
                <Image
                  src={mbr.img}
                  alt={mbr.name}
                  width={192}
                  height={192}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {mbr.name}
              </h3>
              <div className="mt-1 text-sm font-semibold text-primary">
                {mbr.role}
              </div>
              <div className="text-xs text-muted-foreground">{mbr.fullRole}</div>
              <div className="mt-4 space-y-0.5 text-[13px] leading-relaxed text-muted-foreground">
                {mbr.bio.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {t.rich("team.note", {
            b: (chunks: ReactNode) => (
              <span className="font-semibold text-foreground">{chunks}</span>
            ),
          })}
        </p>
      </Section>

      <ContactCta />
    </>
  );
}
