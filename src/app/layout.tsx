import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex",
  display: "swap",
});

const description =
  "Hexamind vous accompagne dans vos projets de transformation IA : conseil, développement sur mesure et modules d'IA propriétaires (Hexgate, Pascal, zeAgent, Fastprop).";

export const metadata: Metadata = {
  metadataBase: new URL("https://hexamind.ai"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: site.name,
  keywords: [
    "IA",
    "intelligence artificielle",
    "transformation IA",
    "agents IA",
    "conseil IA",
    "développement IA",
    "LLM",
    "Hexgate",
    "Hexamind",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/",
    title: `${site.name} — ${site.tagline}`,
    description,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hexamind.ai/#organization",
      name: site.name,
      url: "https://hexamind.ai",
      logo: "https://hexamind.ai/logo-owl.png",
      description,
      email: site.email,
      sameAs: [site.linkedinUrl],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://hexamind.ai/#website",
      url: "https://hexamind.ai",
      name: site.name,
      inLanguage: "fr-FR",
      publisher: { "@id": "https://hexamind.ai/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${hanken.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-sable font-sans text-ink antialiased">
        {/* Enables scroll-reveal animations; content is visible without it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
