import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  alternates: { canonical: "/qui-sommes-nous" },
  title: "Qui sommes-nous",
  description:
    "Hexamind : nos valeurs, notre équipe et notre engagement pour une IA maîtrisée au bénéfice de tous.",
};

const values = [
  {
    title: "Impact",
    body: "Nous ne créons pas de gadgets. Nous déployons une IA utile qui transforme radicalement le business de nos clients et génère de la valeur réelle.",
  },
  {
    title: "Excellence technique",
    body: "Dans un monde qui change chaque semaine, nous maîtrisons l'état de l'art. Nous innovons en continu pour rester les guides de confiance de notre industrie.",
  },
  {
    title: "Rigueur industrielle",
    body: "Du prototype à la mise à l'échelle, nous codons pour la durée. Nos solutions sont robustes, fiables et conçues pour les exigences du monde réel.",
  },
  {
    title: "Plaisir de la belle ouvrage",
    body: "Nous sommes des artisans passionnés. Nous cultivons l'excellence technique dans une atmosphère de plaisir partagé et de fierté du travail bien fait.",
  },
];

const team = [
  {
    img: "/team/yves.png",
    name: "Yves PELIGRY",
    role: "CEO",
    fullRole: "Chief Executive Officer",
    bio: ["SupAéro 91, MS HEC,", "Visiting Scholar Stanford AI Lab", "ex- Thales / SSG / ACN"],
  },
  {
    img: "/team/nico.png",
    name: "Nicolas RENNERT",
    role: "CTO",
    fullRole: "Chief Technical Officer",
    bio: ["Sorbonne AI PhD", ">20 années XP et >5 years", "comme CTO en startup IA"],
  },
  {
    img: "/team/guillaume.png",
    name: "Guillaume POTEL",
    role: "CSO",
    fullRole: "Chief Services Officer",
    bio: ["Polytechnique '18", "5 années XP en startup IA"],
  },
  {
    img: "/team/quang.png",
    name: "Quang LE",
    role: "CPO",
    fullRole: "Chief Product Officer",
    bio: ["Polytechnique '15", "7 années XP en startup IA"],
  },
];

export default function QuiSommesNousPage() {
  return (
    <>
      {/* Intro */}
      <Section>
        <Eyebrow>QUI SOMMES-NOUS</Eyebrow>
        <h1 className="mt-4 max-w-[24ch] text-balance font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
          Amoureux d&rsquo;une IA maîtrisée, au bénéfice de tous.
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">
          Early adopters ou plus récemment entrés dans le mouvement, nous sommes
          des passionnés de l&rsquo;IA et voulons être acteurs d&rsquo;une IA
          maîtrisée au bénéfice de tous.
        </p>
      </Section>

      {/* Nos valeurs */}
      <Section tone="ink">
        <SectionHeader
          tone="dark"
          eyebrow="NOS VALEURS"
          title="Quatre principes qui nous guident."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-cream/10 bg-cream/5 p-10"
            >
              <h3 className="font-serif text-2xl text-cream">{v.title}</h3>
              <p className="mt-4 leading-relaxed text-cream/80">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* L'équipe */}
      <Section>
        <SectionHeader eyebrow="L'ÉQUIPE" title="Des profils complémentaires." />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center rounded-3xl border border-border bg-card p-6 text-center"
            >
              <div className="size-28 overflow-hidden rounded-full bg-muted ring-1 ring-border">
                <Image
                  src={m.img}
                  alt={m.name}
                  width={192}
                  height={192}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {m.name}
              </h3>
              <div className="mt-1 text-sm font-semibold text-primary">
                {m.role}
              </div>
              <div className="text-xs text-muted-foreground">{m.fullRole}</div>
              <div className="mt-4 space-y-0.5 text-[13px] leading-relaxed text-muted-foreground">
                {m.bio.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            + 10 ingénieurs et chercheurs
          </span>{" "}
          issus des meilleures écoles et universités.
        </p>
      </Section>

      <ContactCta />
    </>
  );
}
