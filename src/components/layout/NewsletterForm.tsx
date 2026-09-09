"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

/**
 * Presentational newsletter sign-up. No backend yet — on submit it just
 * acknowledges. Wire it to an email provider (or a route handler) later.
 */
export function NewsletterForm() {
  const t = useTranslations("newsletter");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-6 max-w-sm text-sm text-muted-foreground">{t("thanks")}</p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex max-w-sm gap-2">
      <input
        type="email"
        required
        placeholder={t("placeholder")}
        aria-label={t("ariaLabel")}
        className="flex-1 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-deep"
      >
        {t("submit")}
      </button>
    </form>
  );
}
