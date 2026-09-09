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
} as const;

export const mailto = `mailto:${site.email}`;

export type NavLink = {
  label: string;
  href: string;
};

/** Primary navigation shown in the header. */
export const mainNav: NavLink[] = [
  { label: "Vision", href: "/vision" },
  { label: "Nos offres", href: "/#offres" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nous rejoindre", href: "/nous-rejoindre" },
];

/** Links shown in the footer. */
export const footerNav: NavLink[] = [
  { label: "Vision", href: "/vision" },
  { label: "Nos offres", href: "/#offres" },
  { label: "Modules IA", href: "/#modules" },
  { label: "Hexgate", href: site.hexgateUrl },
  { label: "Nous rejoindre", href: "/nous-rejoindre" },
  { label: "Contact", href: mailto },
];

/** True for links that leave the site (external URLs and mailto/tel). */
export function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href);
}
