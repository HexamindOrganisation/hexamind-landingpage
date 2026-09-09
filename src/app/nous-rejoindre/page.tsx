import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Disclosure } from "@/components/ui/Disclosure";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  alternates: { canonical: "/nous-rejoindre" },
  title: "Nous rejoindre",
  description:
    "Rejoignez Hexamind : autonomie radicale, stack de pointe, culture produit et excellence durable.",
};

const reasons = [
  {
    title: "Une autonomie radicale",
    body: "Vous n'êtes pas un rouage. Vous pilotez les choix techniques et stratégiques. Votre influence sur le projet est directe, peu importe votre ancienneté.",
  },
  {
    title: "Une stack de pointe, sans limite",
    body: "Priorité à l'open-source (Mistral, Llama, PyTorch) et accès exclusif à nos actifs propriétaires (zeAgent, Pascal, Fastprop). Vous utilisez les derniers outils d'IA (licence Claude Code). Vous ne subissez pas la stack, vous la forgez.",
  },
  {
    title: "Culture produit & cycles courts",
    body: "Sprints de 2 semaines et feedbacks terrain. Vous développez en prise directe avec les utilisateurs finaux pour itérer vite et juste.",
  },
  {
    title: "L'excellence, durablement",
    body: "Nous visons l'état de l'art dans un environnement de travail sain. Une exigence technique de haut niveau, sans compromis sur votre équilibre de vie.",
  },
];

type Job = {
  title: string;
  location: string;
  sections: Record<string, string[]>;
};

const jobs: Job[] = [
  {
    title: "AI Engineer (CDI)",
    location: "Paris · Démarrage dès que possible",
    sections: {
      "Tes missions": [
        "Intégrer des LLM dans des workflows métiers.",
        "Construire des API clean (Python/FastAPI).",
        "Piloter les choix d'architecture et l'amélioration continue du produit.",
        "Assurer un ownership total avec contact direct avec les utilisateurs finaux.",
      ],
      "Ton profil": [
        "Diplômé·e d'une école d'ingénieur (ou équivalent reconnu)",
        "Solide socle en développement logiciel back-end",
        "Première expérience concrète en IA appliquée (LLM, NLP, automatisation, RAG)",
        "Sens de la qualité, du produit et de l'impact réel",
        "À l'aise dans des environnements exigeants et peu cadrés",
      ],
      "Ce que ce poste va t'apporter": [
        "Un rôle au cœur de produits IA en production, dans une équipe exigeante et pragmatique",
        "Une montée en compétences rapide sur les sujets IA modernes",
        "Une vraie liberté technique et une exposition directe aux enjeux clients",
      ],
    },
  },
  {
    title: "AI Intern (Stage)",
    location: "Paris · 4 à 6 mois (flexible)",
    sections: {
      "Ton rôle": [
        "Intégrer des LLM dans des workflows métiers",
        "Développer des pipelines IA avancés (RAG, agents multi-modèles, orchestration)",
        "Concevoir des APIs backend performantes (Python/FastAPI)",
        "Garantir la qualité logicielle (testing, monitoring, scalabilité)",
      ],
      "Ton profil": [
        "Étudiant·e en 4e/5e année d'école d'ingénieur (IA / Data Science / Informatique)",
        "Solides bases en algorithmique et excellente maîtrise du développement",
        "Rigueur, orientation produit, autonomie, appétence pour le clean code",
        "Une expérience en NLP/LLM et la connaissance de LangChain sont un plus",
      ],
      "Ce que ce poste va t'apporter": [
        "Une montée en compétences accélérée sur les architectures IA modernes",
        "Le mentoring d'ingénieurs IA seniors",
        "Une exposition directe aux enjeux métiers",
      ],
    },
  },
  {
    title: "Senior Account Executive (CDI)",
    location: "Paris · Démarrage dès que possible",
    sections: {
      "Tes missions": [
        "Développement commercial : qualification, cycle de vente, appels d'offres, suivi de pipeline",
        "Avant-vente et conseil : cadrage besoin, démos, propositions, POC",
        "Structuration : process commerciaux, supports de vente, retours clients",
      ],
      "Ton profil": [
        "4 à 6 ans d'expérience en vente B2B de solutions logicielles ou services IT",
        "Expérience confirmée sur cycles de vente complexes avec multiples décideurs",
        "Maîtrise de la vente consultative, compréhension tech, autonomie, aisance rédactionnelle",
        "La connaissance du marché de l'IA et l'anglais professionnel sont un plus",
      ],
      "Ce que ce poste va t'apporter": [
        "Autonomie & impact : un rôle clé influençant directement la croissance",
        "Montée en compétences : immersion quotidienne dans les enjeux IA",
        "Rémunération attractive : variable déplafonné, perspectives rapides",
        "Co-construction : contribution à la stratégie commerciale dès le départ",
      ],
    },
  },
];

export default function NousRejoindrePage() {
  return (
    <>
      {/* Intro */}
      <Section>
        <Eyebrow>NOUS REJOINDRE</Eyebrow>
        <h1 className="mt-4 max-w-[24ch] text-balance font-serif text-hero font-bold tracking-[-0.01em] text-ink">
          Construisons ensemble une IA utile et maîtrisée.
        </h1>
      </Section>

      {/* Pourquoi nous rejoindre */}
      <Section tone="ink">
        <SectionHeader
          tone="dark"
          eyebrow="POURQUOI NOUS REJOINDRE"
          title="Quatre raisons de nous rejoindre."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl border border-cream/10 bg-cream/5 p-10"
            >
              <h3 className="font-serif text-2xl text-cream">{r.title}</h3>
              <p className="mt-4 leading-relaxed text-cream/80">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Postes ouverts */}
      <Section>
        <SectionHeader eyebrow="REJOIGNEZ-NOUS !" title="Nos postes ouverts." />
        <div className="mt-12 max-w-4xl divide-y divide-line border-y border-line">
          {jobs.map((job) => (
            <Disclosure
              key={job.title}
              className="py-2"
              summaryClassName="py-6"
              summary={
                <div className="text-left">
                  <div className="font-serif text-2xl text-ink">{job.title}</div>
                  <div className="mt-1 text-sm text-dim">{job.location}</div>
                </div>
              }
              contentClassName="space-y-6 pb-8"
            >
              {Object.entries(job.sections).map(([title, items]) => (
                <div key={title}>
                  <h4 className="font-serif text-lg text-accent-ink">{title}</h4>
                  <ul className="mt-3 space-y-2 text-sm text-mid">
                    {items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-teal">•</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Disclosure>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
