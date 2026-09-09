/* eslint-disable @next/next/no-html-link-for-pages */
import "./globals.css";

// Global fallback for requests that don't match a locale. In practice the
// middleware redirects everything to a locale, so the localized
// app/[locale]/not-found.tsx handles the common 404 case.
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className="bg-background text-foreground">
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            fontFamily: "system-ui, sans-serif",
            textAlign: "center",
            padding: 24,
          }}
        >
          <h1 style={{ fontSize: 40, fontWeight: 700, margin: 0 }}>404</h1>
          <p style={{ margin: 0, opacity: 0.7 }}>Page introuvable · Page not found</p>
          <p style={{ margin: 0, display: "flex", gap: 16 }}>
            <a href="/fr">Accueil</a>
            <a href="/en">Home</a>
          </p>
        </main>
      </body>
    </html>
  );
}
