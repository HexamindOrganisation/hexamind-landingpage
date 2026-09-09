import type { MetadataRoute } from "next";

const BASE = "https://hexamind.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/vision", priority: 0.8 },
    { path: "/offres", priority: 0.8 },
    { path: "/qui-sommes-nous", priority: 0.7 },
    { path: "/nous-rejoindre", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/mentions-legales", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
