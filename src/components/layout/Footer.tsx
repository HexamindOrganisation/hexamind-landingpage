import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SmartLink } from "@/components/ui/SmartLink";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft pb-10 pt-14">
      <Container className="flex flex-wrap items-center gap-8">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <Image
            src="/logo-owl.png"
            alt=""
            width={26}
            height={29}
            className="h-[29px] w-[26px] object-contain"
          />
          <span className="font-serif text-xl font-medium leading-none">
            {site.name}
          </span>
        </Link>

        <nav className="ml-auto flex flex-wrap gap-x-[26px] gap-y-3 text-[14.5px] text-mid">
          {footerNav.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        <div className="flex w-full flex-wrap gap-4 border-t border-line-soft pt-[26px] font-mono text-[12.5px] leading-relaxed text-dim">
          <span>
            © {year} {site.name} · {site.tagline}
          </span>
          <span className="ml-auto">
            {site.location} · {site.email}
          </span>
        </div>
      </Container>
    </footer>
  );
}
