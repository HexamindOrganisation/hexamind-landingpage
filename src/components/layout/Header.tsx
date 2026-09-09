"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/icons";
import { mainNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("languageSwitcher");

  return (
    <div
      className={cn("flex items-center gap-1 font-mono text-xs", className)}
      aria-label={t("label")}
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-border">/</span>}
          <Link
            href={pathname}
            locale={loc}
            aria-current={loc === locale ? "true" : undefined}
            className={cn(
              "uppercase transition-colors",
              loc === locale
                ? "font-semibold text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t(loc)}
          </Link>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-foreground"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-owl.png"
            alt=""
            width={30}
            height={33}
            priority
            className="h-8 w-8 object-contain"
          />
          <span className="font-serif text-xl font-medium leading-none">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "text-[15px] font-medium transition-colors hover:text-primary",
                isActive(item.href) ? "text-primary" : "text-muted-foreground",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t("linkedinAria")}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedInIcon />
          </a>
          <a
            href={site.hexgateUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-white hover:text-primary"
          >
            {t("hexgate")}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-[0_6px_18px_-8px_rgb(43_38_32_/_0.4)] transition duration-200 hover:-translate-y-px hover:bg-primary-deep"
          >
            {t("contact")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={t("menuAria")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden
            className="size-6"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line-soft bg-background md:hidden">
          <Container className="flex flex-col gap-3 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "text-base",
                  isActive(item.href) ? "text-primary" : "text-foreground",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t("contact")}
            </Link>
            <LanguageSwitcher className="mt-2" />
          </Container>
        </div>
      ) : null}
    </header>
  );
}
