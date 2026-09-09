# Hexamind — Landing page

Marketing site for [Hexamind](https://hexamind.ai), built with the Next.js App
Router. This is an early work in progress: the **Vision** page is designed, and
the remaining pages are branded placeholders while their designs land.

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
│   ├── page.tsx              # / — placeholder home
│   ├── vision/               # /vision — the designed page
│   ├── qui-sommes-nous/      # /qui-sommes-nous — placeholder
│   └── nous-rejoindre/       # /nous-rejoindre — placeholder
├── components/
│   ├── layout/               # Header, Footer
│   ├── sections/             # page sections (ContactCta, PagePlaceholder, vision/*)
│   └── ui/                   # primitives (Container, Eyebrow, SmartLink)
└── lib/
    ├── site.ts               # nav links, contact details, site config
    └── utils.ts              # small helpers (cn)
public/
└── logo-owl.png              # full-size logo
design/
└── Hexamind - Vision.html    # original Claude Design export (source of truth)
```

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
