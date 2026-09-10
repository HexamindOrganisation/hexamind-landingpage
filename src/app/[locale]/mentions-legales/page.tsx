import type { Metadata } from "next";
import { Fragment } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { localizedAlternates } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.mentions" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates(locale, "/mentions-legales"),
  };
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-foreground">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("mentions");
  const editeurLines = t.raw("editeur.lines") as string[];

  return (
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="mt-4 font-serif text-h2-lg font-semibold text-foreground">
          {t("h1")}
        </h1>

        <div className="mt-12 space-y-10">
          <LegalSection title={t("editeur.title")}>
            <p>
              {editeurLines.map((line, i) => (
                <Fragment key={line}>
                  {i === 0 ? (
                    <strong className="text-foreground">{line}</strong>
                  ) : (
                    line
                  )}
                  {i < editeurLines.length - 1 && <br />}
                </Fragment>
              ))}
            </p>
          </LegalSection>

          <LegalSection title={t("pi.title")}>
            <p>{t("pi.body")}</p>
          </LegalSection>

          <LegalSection title={t("data.title")}>
            <p>{t("data.body1")}</p>
            <p className="mt-3">{t("data.body2")}</p>
          </LegalSection>

          <LegalSection title={t("cookies.title")}>
            <p>{t("cookies.body")}</p>
          </LegalSection>

          <LegalSection title={t("responsabilite.title")}>
            <p>{t("responsabilite.body")}</p>
          </LegalSection>
        </div>
      </div>
    </Section>
  );
}
