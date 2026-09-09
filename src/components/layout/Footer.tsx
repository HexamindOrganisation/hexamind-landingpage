import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SmartLink } from "@/components/ui/SmartLink";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { footerContact, footerExplore, site } from "@/lib/site";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-serif text-lg text-ink">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-mid">
        {links.map((item) => (
          <li key={item.href}>
            <SmartLink
              href={item.href}
              className="transition-colors hover:text-accent-ink"
            >
              {item.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft bg-sable">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 text-ink">
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
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mid">
            {site.tagline} Une IA utile, maîtrisée et déployée en production — du
            conseil aux modules logiciels.
          </p>
          <NewsletterForm />
        </div>

        <FooterColumn title="Explorer" links={footerExplore} />
        <FooterColumn title="Contact" links={footerContact} />
      </Container>

      <div className="border-t border-line-soft">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 font-mono text-[12.5px] text-dim md:flex-row">
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>
          <p>{site.location}</p>
        </Container>
      </div>
    </footer>
  );
}
