import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/sections/ContactForm";
import { LinkedInIcon, MailIcon, MapPinIcon } from "@/components/ui/icons";
import { localizedAlternates } from "@/lib/metadata";
import { mailto, site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.contact" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h1 className="mt-4 font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
            {t("h1")}
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            {t("intro")}
          </p>
          <ul className="mt-10 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <MailIcon className="text-primary" />
              <a href={mailto} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="text-primary" />
              {t("locationLine")}
            </li>
            <li className="flex items-center gap-3">
              <LinkedInIcon className="text-primary" width={18} height={18} />
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                {t("linkedin")}
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
