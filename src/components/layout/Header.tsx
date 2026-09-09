"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/icons";
import { mainNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-foreground" onClick={() => setOpen(false)}>
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

        {/* Desktop nav */}
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
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Hexamind"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedInIcon />
          </a>
          <a
            href={site.hexgateUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-blue hover:bg-white hover:text-blue-strong"
          >
            Hexgate
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-[0_6px_18px_-8px_rgb(15_31_74_/_0.5)] transition duration-200 hover:-translate-y-px hover:bg-primary-deep"
          >
            Nous contacter
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Menu"
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
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile panel */}
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
                {item.label}
              </Link>
            ))}
            <a
              href={site.hexgateUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="text-base text-foreground"
            >
              Hexgate
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              Nous contacter
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
