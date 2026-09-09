import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hexamind.ai/sitemap.xml",
    host: "https://hexamind.ai",
  };
}
