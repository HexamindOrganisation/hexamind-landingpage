import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { SmartLink } from "@/components/ui/SmartLink";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { footerContact, footerExplore, site, type NavItem } from "@/lib/site";

function FooterColumn({ title, links }: { title: string; links: NavItem[] }) {
  const t = useTranslations("footer.links");
  return (
    <div>
      <h4 className="font-serif text-lg text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((item) => (
          <li key={item.key}>
            <SmartLink
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {t(item.key)}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft bg-background">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 text-foreground">
            <Image
              src="/logo-owl.png"
              alt=""
              width={36}
              height={40}
              className="h-9 w-9 object-contain"
            />
            <span className="font-serif text-2xl font-medium leading-none">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {site.tagline} {t("blurb")}
          </p>
          <NewsletterForm />
        </div>

        <FooterColumn title={t("exploreTitle")} links={footerExplore} />
        <FooterColumn title={t("contactTitle")} links={footerContact} />
      </Container>

      <div className="border-t border-line-soft">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 font-mono text-[12.5px] text-muted-foreground md:flex-row">
          <p>
            © {year} {site.name}. {t("rights")}
          </p>
          <p>{t("location")}</p>
        </Container>
      </div>
    </footer>
  );
}
