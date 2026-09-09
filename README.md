# Hexamind — Landing page

Marketing site for [Hexamind](https://hexamind.ai), built with the Next.js App
Router.

The **content** (page structure and copy) was ported from the previous website
(a Lovable/Vite project) with no content loss; the **design** follows the newer
Claude Design direction. The original design export lives in `design/` for
reference.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens live in
  [`src/app/globals.css`](src/app/globals.css)
- Fonts via `next/font/google`: Hanken Grotesk, Playfair Display, JetBrains Mono

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, metadata, Header + Footer shell
│   ├── globals.css           # Tailwind import + design tokens (@theme)
│   ├── icon.png              # favicon (owl mark)
│   ├── page.tsx              # /                — home
│   ├── vision/               # /vision
│   ├── offres/               # /offres          — conseil, développement, modules IA
│   ├── qui-sommes-nous/      # /qui-sommes-nous — valeurs, équipe
│   ├── nous-rejoindre/       # /nous-rejoindre  — raisons, postes ouverts
│   ├── contact/              # /contact         — formulaire (mailto)
│   ├── mentions-legales/     # /mentions-legales
│   └── not-found.tsx         # 404
├── components/
│   ├── layout/               # Header, Footer, NewsletterForm
│   ├── sections/             # ContactCta, ContactForm, MitStats
│   └── ui/                   # Container, Eyebrow, Section, SectionHeader,
│                             #   Button, Disclosure, SmartLink, icons
└── lib/
    ├── site.ts               # nav links, contact details, site config
    └── utils.ts              # small helpers (cn)
public/
├── logo-owl.png              # logo
├── clients/  team/  vision/  modules/   # content images
design/
└── Hexamind - Vision.html    # original Claude Design export (design reference)
```

## Content notes

- **Mentions légales** — the "Hébergeur" section still names Lovable. Update it
  to your new host (Vercel) before going live.
- **Contact form** and **newsletter** are front-end only. The contact form opens
  the visitor's mail client (`mailto:`); the newsletter just acknowledges. Wire
  both to a backend / email provider when ready.

## Design system

The palette, typography scale and fonts are defined once as Tailwind theme
tokens in [`src/app/globals.css`](src/app/globals.css) and consumed through
semantic utilities (`bg-sable`, `text-ink`, `text-accent`, `font-serif`,
`text-hero`, …). Change a token there and it updates everywhere.

Copy, navigation and contact details are centralized in
[`src/lib/site.ts`](src/lib/site.ts).

## Adding a page

1. Create `src/app/<route>/page.tsx` and export `metadata` + a default component.
2. Compose from existing sections/primitives, or add new ones under
   `src/components/`.
3. Add the route to `mainNav` / `footerNav` in `src/lib/site.ts` if it should
   appear in navigation.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset is auto-detected as **Next.js** — no configuration needed.
4. Deploy. Vercel builds every push and gives you a preview URL per branch.
