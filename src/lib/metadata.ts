import type { Metadata } from "next";

/**
 * Canonical + hreflang alternates for a page.
 * `path` is the route without the locale prefix, e.g. "" (home) or "/vision".
 */
export function localizedAlternates(
  locale: string,
  path = "",
): Metadata["alternates"] {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      fr: `/fr${path}`,
      en: `/en${path}`,
      "x-default": `/fr${path}`,
    },
  };
}
