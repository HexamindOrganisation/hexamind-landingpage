import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  // Both languages are prefixed: /fr/… and /en/… ( / redirects to /fr ).
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
