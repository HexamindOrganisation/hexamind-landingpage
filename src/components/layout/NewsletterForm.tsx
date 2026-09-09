"use client";

import { useState, type FormEvent } from "react";

/**
 * Presentational newsletter sign-up. There is no backend yet — on submit it
 * just acknowledges. Wire it to an email provider (or a route handler) later.
 */
export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-6 max-w-sm text-sm text-mid">
        Merci ! Nous vous tiendrons informé.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex max-w-sm gap-2">
      <input
        type="email"
        required
        placeholder="votre@email.com"
        aria-label="Votre adresse email"
        className="flex-1 rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink placeholder:text-dim focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
      >
        S&rsquo;abonner
      </button>
    </form>
  );
}
