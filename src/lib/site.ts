/**
 * Central site configuration.
 * Edit copy, links and contact details here rather than inside components.
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

export type NavLink = {
  label: string;
  href: string;
};

/** Primary navigation shown in the header. */
export const mainNav: NavLink[] = [
  { label: "Vision", href: "/vision" },
  { label: "Nos offres", href: "/offres" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nous rejoindre", href: "/nous-rejoindre" },
];

/** Footer — "Explorer" column. */
export const footerExplore: NavLink[] = [
  { label: "Vision", href: "/vision" },
  { label: "Nos offres", href: "/offres" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nous rejoindre", href: "/nous-rejoindre" },
];

/** Footer — "Contact" column. */
export const footerContact: NavLink[] = [
  { label: "Nous contacter", href: "/contact" },
  { label: "LinkedIn", href: site.linkedinUrl },
  { label: "Mentions légales", href: "/mentions-legales" },
];

/** True for links that leave the site (external URLs and mailto/tel). */
export function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href);
}
