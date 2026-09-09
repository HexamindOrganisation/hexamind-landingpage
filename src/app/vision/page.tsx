import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLink } from "@/components/ui/Button";
import { Disclosure } from "@/components/ui/Disclosure";
import { MitStats } from "@/components/sections/MitStats";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  alternates: { canonical: "/vision" },
  title: "Vision",
  description:
    "L'IA, une promesse qui reste à réaliser ? Notre vision pour faire de l'IA un succès en entreprise.",
};

const obstacles = [
  {
    n: "01",
    title: "Vitesse",
    tags: ["Build initial + évolutions", "Cas d'usage incrémental"],
    body: "Les projets d'IA sont trop longs. Une partie « informatique » liée au déploiement de l'infrastructure et des couches non fonctionnelles (administration, sécurité, observabilité, etc.) hérite naturellement des contraintes de toute application en entreprise. Mais les évolutions du noyau d'IA et l'ajout incrémental de nouveaux cas d'usage peuvent et doivent être accélérés.",
  },
  {
    n: "02",
    title: "UX",
    tags: [
      "Les utilisateurs ont besoin de plus qu'un chat",
      "Une UX, plusieurs cas d'usage",
    ],
    body: "Une des clés de la réussite de ChatGPT, depuis reprise par les autres fournisseurs de modèles, réside dans la simplicité et l'universalité de son interface. L'interface dans le monde de l'entreprise doit être guidée par ce principe de simplicité et d'universalité, en intégrant des spécificités mineures pour assurer une intégration fluide dans les processus métier.",
  },
  {
    n: "03",
    title: "Confiance",
    tags: [
      "Contrôle d'accès pour les Users et les Agents",
      "Sources, explicabilité, observabilité",
    ],
    body: "La confiance est clé à la fois dans la qualité de ce qui est produit par l'IA et dans le contrôle du qui-accède-à-quoi, et en particulier en étendant ces contrôles aux agents IA.",
  },
];

const layers = [
  {
    n: "01",
    title: "Une couche transverse aux différents cas d'usage",
    body: "Elle contient essentiellement la partie « logicielle » (administration, gestion des accès et des rôles, UX/UI, connecteurs, etc.) avec une vitesse d'évolution faible, une capacité d'apprentissage sur la base des usages et des fonctionnalités de fondation, mais peu spécifiques.",
  },
  {
    n: "02",
    title: "Une couche agent qui porte la logique métier",
    body: "La définition des agents s'appuie sur le concept de skills et de plugins proposé initialement par Anthropic : les agents sont spécifiés dans des dossiers selon un format normalisé et peuvent être consommés par les plateformes d'IA compatibles. Les agents peuvent donc provenir de plusieurs sources : spécifiques et dédiés à l'organisation, ou open source (ex. les plugins de gestion de documents d'Anthropic). Chaque utilisateur a accès à des agents en fonction de son rôle. Les agents peuvent être développés en interne, par des tiers ou par Hexamind.",
  },
  {
    n: "03",
    title: "Une couche LLM noyau",
    body: "En fonction des contraintes de souveraineté, les modèles peuvent être publics mondiaux (ex. OpenAI, Mistral), souverains ou privés sur la base des modèles open source (ex. Deepseek, Mistral). Le choix du LLM peut se faire dynamiquement en fonction des agents et des utilisateurs.",
  },
];

export default function VisionPage() {
  return (
    <>
      {/* Intro */}
      <Section>
        <Eyebrow>VISION</Eyebrow>
        <h1 className="mt-4 max-w-[24ch] text-balance font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
          L&rsquo;IA, une promesse qui reste à réaliser ?
        </h1>
        <div className="mt-8 max-w-3xl space-y-6 text-body-lg text-muted-foreground">
          <p>
            L&rsquo;Intelligence Artificielle est une réalité opérationnelle et
            un <strong className="text-foreground">moteur de transformation</strong>{" "}
            majeur pour les organisations. En permettant aux machines de simuler
            des capacités cognitives humaines, l&rsquo;IA remodèle
            fondamentalement la manière dont les organisations fonctionnent,
            interagissent avec leurs clients ou usagers et créent de la valeur.
            Pourtant son essor au sein des organisations reste décevant par
            rapport aux attentes générées par les offres grand public.
          </p>
          <p>
            Un récent rapport du MIT* indique que malgré un investissement
            massif estimé entre 30 et 40 milliards de dollars dans l&rsquo;IA
            générative, <strong className="text-foreground">seulement 5 %</strong> des
            organisations obtiendraient un retour concret. Ce chiffre de 5 % est
            accablant dans un contexte où l&rsquo;IA démontre ses extraordinaires
            capacités et est adoptée simplement pour des usages de plus en plus
            variés et complexes. Ce même rapport indique que{" "}
            <strong className="text-foreground">40 %</strong> des projets s&rsquo;appuyant
            sur l&rsquo;IA &laquo; General Purpose &raquo; (ex. ChatGPT, Claude)
            ont un retour positif. Parmi les raisons invoquées : la flexibilité,
            la simplicité et l&rsquo;utilité directement perceptible des outils
            grand public.
          </p>
        </div>
        <MitStats className="mt-12 max-w-3xl" />
      </Section>

      {/* Le défi */}
      <Section tone="ink">
        <SectionHeader
          tone="dark"
          eyebrow="LE DÉFI"
          title={
            <>
              Faire entrer la dynamique des offres &laquo; General Purpose
              &raquo; au cœur des organisations.
            </>
          }
        />
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-serif text-xl text-accent-bright">
              Les forces de l&rsquo;IA &laquo; General Purpose &raquo;
            </h3>
            <ul className="space-y-3 text-cream/85">
              <li>
                <strong>Simple</strong> — un accès facile à une application
                puissante.
              </li>
              <li>
                <strong>Quasi-gratuite</strong> — coûts d&rsquo;usage marginaux
                pour l&rsquo;utilisateur.
              </li>
              <li>
                <strong>Apprenante</strong> — mémoire des conversations.
              </li>
              <li>
                <strong>Évolutive</strong> — versions remplacées en transparence.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-serif text-xl text-accent-bright">
              Les contraintes des organisations
            </h3>
            <ul className="space-y-3 text-cream/85">
              <li>
                <strong>Accès</strong> — l&rsquo;agent IA doit accéder aux
                données et applications, en respectant les droits.
              </li>
              <li>
                <strong>Gouvernance &amp; souveraineté</strong> — maîtriser qui
                accède à quoi, éviter les fuites de données, suivre le cycle de
                vie des agents.
              </li>
              <li>
                <strong>UX évoluée</strong> — rester universel tout en
                s&rsquo;enrichissant pour des cas d&rsquo;usage métiers.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Trois obstacles */}
      <Section>
        <SectionHeader
          eyebrow="TROIS OBSTACLES"
          title="Ce qui empêche un déploiement fluide en entreprise."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {obstacles.map((o) => (
            <div
              key={o.n}
              className="flex flex-col rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl font-bold text-primary">
                  {o.n}
                </span>
                <h3 className="font-serif text-2xl text-foreground">{o.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {o.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold leading-snug text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* La proposition Hexamind */}
      <Section tone="clay">
        <SectionHeader
          tone="dark"
          eyebrow="LA PROPOSITION HEXAMIND"
          title="Une architecture en trois couches qui décorrèle les évolutions."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {layers.map((l) => (
            <div
              key={l.n}
              className="rounded-3xl border border-cream/15 bg-cream/5 p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl font-bold text-accent-bright">
                  {l.n}
                </span>
                <h3 className="font-serif text-xl text-cream">{l.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream/80">
                {l.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl leading-relaxed text-cream/85">
          En phase de <strong>build</strong>, les agents s&rsquo;ajoutent de
          manière incrémentale. En phase de <strong>run</strong>, l&rsquo;utilisateur
          dispose d&rsquo;une interface unique, bénéficiant de la coopération de
          plusieurs agents en toute transparence. De nouvelles fonctionnalités
          peuvent être apportées sans changer l&rsquo;interface.
        </p>

        <div className="mt-10 max-w-4xl rounded-3xl border border-cream/15 bg-cream/5 p-8">
          <h3 className="font-serif text-2xl text-cream">Cas d&rsquo;usage bancaire</h3>
          <p className="mt-3 leading-relaxed text-cream/85">
            Quels gains apportés par l&rsquo;approche en trois couches pour
            accélérer le déploiement de nouvelles applications agentiques ?
          </p>
          <Disclosure
            tone="dark"
            className="mt-4"
            summaryClassName="font-semibold text-cream hover:text-white"
            summary={<span>Lire la suite</span>}
          >
            <div className="space-y-4">
              <p className="leading-relaxed text-cream/85">
                Le schéma ci-dessous illustre des agents vus d&rsquo;un employé
                bancaire qui dispose d&rsquo;une interface unique pour différents
                usages.
              </p>
              <p className="leading-relaxed text-cream/85">
                De nouvelles fonctionnalités peuvent être apportées en
                définissant de nouvelles compétences (ex. agents, skills ou
                plugins) sans que l&rsquo;interface soit changée pour
                l&rsquo;utilisateur. Cette architecture permet donc de faire
                évoluer de manière transparente et fluide le système
                d&rsquo;information de l&rsquo;organisation.
              </p>
              <Image
                src="/vision/cas-usage-bancaire.png"
                alt="Schéma : interface unique d'un employé bancaire avec agents Pascal et LLMs"
                width={945}
                height={450}
                className="h-auto w-full rounded-lg bg-cream/10"
              />
            </div>
          </Disclosure>
        </div>
      </Section>

      {/* Notre accompagnement */}
      <Section>
        <SectionHeader
          eyebrow="NOTRE ACCOMPAGNEMENT"
          title="Hexamind vous accompagne à chaque étape."
        />
        <ul className="mt-8 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
          <li>
            — En accompagnant la démarche globale et la définition de
            l&rsquo;architecture générale.
          </li>
          <li>
            — En mettant en place les fondations transverses à partir de notre
            socle Pascal.
          </li>
          <li>
            — En développant des agents spécifiques à vos cas d&rsquo;usage (le
            code devient propriété du client).
          </li>
        </ul>
        <ArrowLink href="/offres" className="mt-10">
          Voir toutes nos offres
        </ArrowLink>
      </Section>

      <ContactCta />
    </>
  );
}
