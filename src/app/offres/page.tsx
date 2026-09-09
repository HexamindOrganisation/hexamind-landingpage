import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Disclosure } from "@/components/ui/Disclosure";

export const metadata: Metadata = {
  title: "Nos offres",
  description:
    "Conseil, développement et modules IA : nos offres pour faire de l'IA un succès dans votre organisation.",
};

const conseilOffers = [
  {
    id: "startai",
    name: "STARTAI",
    tagline: "Audit IA & Diagnostic de Maturité",
    duration: "1 à 3 semaines · Forfait fermé",
    intro:
      "L'étape préalable indispensable pour prioriser les initiatives à fort ROI, éviter les investissements inutiles et poser des bases solides.",
    items: [
      "Analyse approfondie de vos données (volume, qualité, gouvernance)",
      "Cartographie des processus métiers et points de friction",
      "Évaluation de l'infrastructure et de la cybersécurité",
      "Revue des contraintes réglementaires (RGPD, AI Act)",
      "Entretiens directions métier & IT",
      "Scan des cas d'usage à fort ROI",
    ],
    deliverables: [
      "Rapport de maturité IA avec scoring détaillé",
      "3 quick-wins priorisés et chiffrés",
      "Roadmap stratégique 12–24 mois",
      "Benchmark des solutions open-source (PyTorch, LangChain, Mistral, Llama 3, Qwen)",
    ],
    forWho: "DG, DSI, Directeurs Innovation / Transformation / Opérations.",
  },
  {
    id: "boostai",
    name: "BOOSTAI",
    tagline: "Acculturation & Formation IA",
    duration: "3 jours à 3 semaines · Intra ou inter-entreprise",
    intro:
      "Trois parcours progressifs selon votre maturité, pour rendre vos équipes autonomes avec l'IA dès le premier jour.",
    items: [
      "Level 1 — Starting (1 jour) : fondamentaux IA, ML, NLP, LLM",
      "Level 2 — Building (3 à 5 jours) : ateliers pratiques, intégration Jira / Confluence / M365 / Notion",
      "Level 3 — Scaling (1 à 3 semaines) : Vibe Coding (Claude Code), agents autonomes, gouvernance LLM",
    ],
    deliverables: [
      "Supports complets (vidéos, exercices, cas réels)",
      "Kit d'adoption immédiate (templates, checklists)",
      "Certification Hexamind par niveau",
      "Coaching post-formation (2 demi-journées)",
    ],
    forWho:
      "POs, PMs, Scrum Masters, Développeurs, Lead Tech, CTO, DSI, DRH Formation.",
  },
  {
    id: "buildai",
    name: "BUILDAI",
    tagline: "Prototypage & Expérimentation",
    duration: "4 à 12 semaines · Forfait fixe ou sprint de 2 semaines",
    intro:
      "Transforme votre cas d'usage prioritaire en solution concrète, testée par vos utilisateurs et mesurée en euros.",
    items: [
      "Cadrage ultra-précis en 3 jours",
      "Préparation et anonymisation des données",
      "Développement offline/on-premise (Llama 3, Mistral, Mixtral, Qwen, Phi-3, Gemma)",
      "Sprints de 2 semaines avec tests utilisateurs",
      "Mesure continue des métriques métier",
    ],
    deliverables: [
      "MVP pleinement fonctionnel, déployable dès la fin",
      "Code source ouvert, versionné, documenté",
      "Dashboard de performance (précision, latence, coût)",
      "Rapport de preuve de valeur avec ROI chiffré",
    ],
    forWho: "Product Owners, fonctions métiers, CxO.",
  },
];

const modes = [
  {
    n: "01",
    title: "Forfait",
    principle:
      "Engagement de résultat sur cahier des charges précis. Prix fixe et date de livraison.",
    billing: "Prix global défini à la signature.",
    advantages: [
      "Maîtrise totale du budget",
      "Externalisation des risques",
      "Garantie de livraison à date",
    ],
  },
  {
    n: "02",
    title: "Centre de Services",
    principle:
      "Équipe dédiée pilotée par SLA pour TMA ou développement continu.",
    billing: "Unité d'œuvre ou forfait mensuel ajustable.",
    advantages: [
      "Industrialisation",
      "Capitalisation long terme",
      "Flexibilité du volume",
    ],
  },
  {
    n: "03",
    title: "Mode Agile",
    principle:
      "Squad pluridisciplinaire (PO, Scrum Master, Devs) qui travaille par sprints.",
    billing: "Par sprint ou au temps passé, vision budgétaire macro.",
    advantages: [
      "Time-to-market accéléré",
      "Ajustement permanent",
      "Transparence totale",
    ],
  },
  {
    n: "04",
    title: "Régie",
    principle:
      "Consultants qualifiés intégrés à vos équipes, sous votre direction opérationnelle.",
    billing: "Au temps passé (TJM).",
    advantages: [
      "Souplesse et réactivité",
      "Intégration aux rituels",
      "Contrôle total de l'exécution",
    ],
  },
];

type ModuleLink = { label: string; href: string; primary?: boolean };

type ModuleItem = {
  id: string;
  name: string;
  tagline: string;
  body: string;
  benefits: string[];
  badge?: string;
  links?: ModuleLink[];
  preview?: { image: string; href: string; alt: string } | null;
};

const modules: ModuleItem[] = [
  {
    id: "hexgate",
    name: "Hexgate",
    tagline: "L'autorisation de vos agents IA",
    body: "Autorisation par utilisateur pour les agents IA : chaque appel d'outil est filtré selon le rôle de l'appelant, via une policy appliquée en local depuis un bundle WASM signé — sans latence ajoutée. Chaque décision (autoriser, refuser, validation requise) part dans le journal d'audit. Compatible OpenAI Agents, LangChain, Google ADK et Pydantic AI.",
    benefits: [
      "Contrôle fin : rôles, contraintes sur les arguments et décisions typées (allow / deny / approval-required)",
      "Zéro latence ajoutée : la policy est évaluée en local, depuis un bundle WASM signé",
      "Traçabilité : chaque décision est journalisée avec l'identité de l'appelant",
    ],
    badge: "OPEN SOURCE · MIT",
    links: [
      {
        label: "Try the cloud version →",
        href: "https://app.hexgate.ai",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/HexamindOrganisation/hexgate" },
    ],
  },
  {
    id: "pascal",
    name: "Pascal",
    tagline: "Le cadre pour vos projets d'IA",
    body: "Pascal accélère l'urbanisation de vos projets d'IA en isolant des parties aux rythmes d'évolution différents et en mutualisant des éléments de fondation clés (gestion fine des accès, droits, UX enrichie pour les traitements documentaires).",
    benefits: [
      "Plus grande agilité : décorrélation cas d'usage / transverse / LLM",
      "UX/UI universelle enrichie : travaillez avec l'IA directement sur documents et formulaires",
      "Sécurité & gouvernance : maîtrise des droits et accès des agents",
    ],
    preview: {
      image: "/modules/pascal-preview.png",
      href: "https://youtu.be/7bV8kuzNmWg",
      alt: "Aperçu de Pascal — voir la vidéo de présentation",
    },
  },
  {
    id: "zeagent",
    name: "zeAgent",
    tagline: "La fabrique d'agents intelligents",
    body: "L'environnement complet pour maîtriser le cycle de vie de vos agents IA — de la conception à l'exploitation. Le socle indispensable d'une IA fiable et orchestrée.",
    benefits: [
      "Time-to-Market accéléré : framework optimisé pour le déploiement",
      "Sécurisation : environnement de test et monitoring rigoureux",
      "Mutualisation de l'excellence : maintenir vos agents à l'état de l'art",
    ],
    preview: null,
  },
  {
    id: "fastprop",
    name: "Fastprop",
    tagline: "Le turbo de vos réponses commerciales",
    body: "Fastprop analyse les cahiers des charges et, en s'appuyant sur vos propositions passées, génère des propositions itératives sous le contrôle de vos commerciaux. S'appuie sur Pascal et zeAgent.",
    benefits: [
      "Productivité immédiate : application rigoureuse de vos chartes et templates",
      "IA & agents intelligents : suggestions de plans, premiers jets, contrôles de cohérence",
      "Autonomie & fiabilité : livrables sécurisés, cycle de bid management raccourci",
    ],
    preview: null,
  },
];

export default function OffresPage() {
  return (
    <>
      {/* Intro */}
      <Section containerClassName="pb-8 pt-20 md:pb-10 md:pt-28">
        <Eyebrow>NOS OFFRES</Eyebrow>
        <h1 className="mt-4 max-w-[24ch] text-balance font-serif text-hero font-medium tracking-[-0.01em] text-ink">
          Du conseil au déploiement, en passant par nos modules IA.
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-mid">
          Trois familles d&rsquo;offres complémentaires, à activer indépendamment
          ou en combinaison selon vos enjeux.
        </p>
      </Section>

      {/* Conseil */}
      <Section id="conseil" containerClassName="py-8 md:py-12">
        <Eyebrow>CONSEIL</Eyebrow>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {conseilOffers.map((o) => (
            <div
              key={o.id}
              id={o.id}
              className="flex flex-col rounded-3xl border border-line bg-panel p-8"
            >
              <div className="font-serif text-3xl text-ink">{o.name}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-accent-ink">
                {o.tagline}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-mid">{o.intro}</p>
              <Disclosure
                className="mt-6 border-t border-line pt-5"
                summaryClassName="text-sm font-semibold text-ink"
                summary={<span>En savoir plus</span>}
              >
                <p className="text-sm text-dim">{o.duration}</p>
                <div className="mt-4">
                  <h4 className="font-serif text-lg text-ink">Le contenu</h4>
                  <ul className="mt-3 space-y-2 text-sm text-mid">
                    {o.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent">•</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <h4 className="font-serif text-lg text-ink">Les livrables</h4>
                  <ul className="mt-3 space-y-2 text-sm text-mid">
                    {o.deliverables.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-teal">•</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-sm text-mid">
                  <strong className="text-ink">Pour qui ?</strong> {o.forWho}
                </p>
              </Disclosure>
            </div>
          ))}
        </div>
      </Section>

      {/* Développement */}
      <Section id="developpement">
        <SectionHeader
          eyebrow="DÉVELOPPEMENT"
          title="Quatre modalités d'intervention."
          intro="Nous adaptons notre mode de collaboration à la maturité de vos projets, à votre budget et à votre besoin de flexibilité."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {modes.map((m) => (
            <div
              key={m.n}
              className="rounded-3xl border border-line bg-panel p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl font-bold text-accent-ink">
                  {m.n}
                </span>
                <h3 className="font-serif text-2xl text-ink">{m.title}</h3>
              </div>
              <p className="mt-4 text-sm text-mid">
                <strong className="text-ink">Principe.</strong> {m.principle}
              </p>
              <p className="mt-2 text-sm text-mid">
                <strong className="text-ink">Facturation.</strong> {m.billing}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-mid">
                {m.advantages.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-accent">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Modules IA */}
      <Section id="modules" tone="ink">
        <SectionHeader
          tone="dark"
          eyebrow="MODULES IA"
          title="Nos briques logicielles propriétaires."
        />
        <div className="mt-14 space-y-10">
          {modules.map((m) => (
            <article
              key={m.id}
              id={m.id}
              className="grid gap-8 border-t border-cream/15 pt-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <div className="font-serif text-5xl text-cream">{m.name}</div>
                <p className="mt-2 text-sm uppercase tracking-wider text-accent-bright">
                  {m.tagline}
                </p>
                {m.badge ? (
                  <span className="mt-4 inline-block rounded-md border border-cream/35 px-2.5 py-[5px] font-mono text-[10.5px] font-medium tracking-[0.12em] text-cream/80">
                    {m.badge}
                  </span>
                ) : null}
              </div>
              <div className="space-y-6 lg:col-span-8">
                <p className="text-lg leading-relaxed text-cream/85">{m.body}</p>
                <ul className="space-y-2 text-sm text-cream/80">
                  {m.benefits.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-accent-bright">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                {m.links ? (
                  <div className="flex flex-wrap gap-3">
                    {m.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          l.primary
                            ? "rounded-full bg-accent px-[22px] py-3 text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgb(0_0_0_/_0.6)]"
                            : "rounded-full border border-cream/35 px-[22px] py-3 text-[15px] text-cream transition-colors hover:border-cream hover:bg-cream/10"
                        }
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
                {m.preview ? (
                  <a
                    href={m.preview.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={m.preview.alt}
                    className="group block overflow-hidden rounded-lg border border-cream/10"
                  >
                    <Image
                      src={m.preview.image}
                      alt={m.preview.alt}
                      width={1920}
                      height={1064}
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <Button href="/contact">Demander une démo →</Button>
        </div>
      </Section>
    </>
  );
}
