import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <Section containerClassName="py-28 md:py-36">
      <Eyebrow>{t("eyebrow")}</Eyebrow>
      <h1 className="mt-4 font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-lg text-body-lg text-muted-foreground">
        {t("body")}
      </p>
      <Button href="/" className="mt-10">
        {t("button")} →
      </Button>
    </Section>
  );
}
