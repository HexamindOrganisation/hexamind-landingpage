"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { mailto, mainNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-sable/85 backdrop-blur-md">
      <Container className="flex flex-wrap items-center gap-x-8 gap-y-5 py-[18px]">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <Image
            src="/logo-owl.png"
            alt=""
            width={30}
            height={33}
            priority
            className="h-[33px] w-[30px] object-contain"
          />
          <span className="font-serif text-[23px] font-medium leading-none">
            {site.name}
          </span>
        </Link>

        <nav className="ml-auto flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] text-mid">
          {mainNav.map((item) => {
            const target = item.href.split("#")[0];
            const active = item.href.startsWith("/") && pathname === target;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap transition-colors hover:text-ink",
                  active ? "font-semibold text-accent-ink" : "font-normal",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-none items-center gap-3">
          <a
            href={site.hexgateUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-[10px] border border-line bg-panel px-4 py-[9px] text-sm font-medium text-ink transition-colors hover:border-blue hover:bg-white hover:text-blue-strong"
          >
            Hexgate
          </a>
          <a
            href={mailto}
            className="rounded-[10px] bg-accent px-[18px] py-[10px] text-sm font-semibold text-white shadow-[0_6px_18px_-8px_rgb(15_31_74_/_0.5)] transition duration-200 hover:-translate-y-px hover:bg-accent-ink active:translate-y-px"
          >
            Nous contacter
          </a>
        </div>
      </Container>
    </header>
  );
}
