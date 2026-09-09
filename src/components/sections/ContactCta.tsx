import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Full-width clay call-to-action band. Reused across pages. */
export function ContactCta() {
  const t = useTranslations("contactCta");
  return (
    <section id="contact" className="bg-clay py-24 md:py-28">
      <Reveal>
        <Container className="flex flex-wrap items-center justify-between gap-10">
          <div className="min-w-0">
            <Eyebrow tone="cream">{t("eyebrow")}</Eyebrow>
            <h2 className="mt-[22px] font-serif text-h2-lg font-semibold text-cream">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex flex-none items-center gap-3 rounded-full bg-cream px-8 py-[17px] text-[17px] font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_34px_-16px_rgb(0_0_0_/_0.45)]"
          >
            {t("button")} <span aria-hidden>→</span>
          </Link>
        </Container>
      </Reveal>
    </section>
  );
}
