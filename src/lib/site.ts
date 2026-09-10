/**
 * Central site configuration.
 * Link labels live in the message catalogs (src/messages/*.ts); here we keep
 * the structure (message key + locale-agnostic href).
 */
export const site = {
  name: "Hexamind",
  tagline: "We make AI work for you.",
  email: "hello@hexamind.ai",
  location: "Paris",
  hexgateUrl: "https://hexgate.ai",
  linkedinUrl:
    "https://www.linkedin.com/search/results/all/?keywords=hexamind%20%3A%20l%27ia%20utile%20et%20ma%C3%AEtris%C3%A9e&origin=RICH_QUERY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A74674214",
} as const;

export const mailto = `mailto:${site.email}`;

export type NavItem = {
  /** Key under the `nav` / `footer.links` message namespaces. */
  key: string;
  /** Locale-agnostic href — the locale prefix is added by the i18n <Link>. */
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { key: "vision", href: "/vision" },
  { key: "offres", href: "/offres" },
  { key: "qui", href: "/qui-sommes-nous" },
  { key: "rejoindre", href: "/nous-rejoindre" },
];

export const footerExplore: NavItem[] = [
  { key: "vision", href: "/vision" },
  { key: "offres", href: "/offres" },
  { key: "qui", href: "/qui-sommes-nous" },
  { key: "rejoindre", href: "/nous-rejoindre" },
];

export const footerContact: NavItem[] = [
  { key: "contact", href: "/contact" },
  { key: "linkedin", href: site.linkedinUrl, external: true },
  { key: "mentions", href: "/mentions-legales" },
];

/** True for links that leave the site (external URLs and mailto/tel). */
export function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href);
}
