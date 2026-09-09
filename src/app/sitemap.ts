import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE = "https://hexamind.ai";

const paths: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/vision", priority: 0.8 },
  { path: "/offres", priority: 0.8 },
  { path: "/qui-sommes-nous", priority: 0.7 },
  { path: "/nous-rejoindre", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
  { path: "/mentions-legales", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return paths.flatMap(({ path, priority }) =>
    routing.locales.map((locale) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${BASE}/${l}${path}`]),
        ),
      },
    })),
  );
}
