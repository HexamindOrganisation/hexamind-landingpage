import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button, ArrowLink } from "@/components/ui/Button";

const offers = [
  {
    n: "01",
    title: "Conseil",
    desc: "Cadrer, prioriser et former vos équipes pour engager une transformation IA à fort ROI.",
    href: "/offres#conseil",
  },
  {
    n: "02",
    title: "Développement",
    desc: "Concevoir et déployer des solutions IA sur mesure, du MVP à la mise en production.",
    href: "/offres#developpement",
  },
  {
    n: "03",
    title: "Modules IA",
    desc: "Pascal, zeAgent, Fastprop : des briques propriétaires qui sécurisent et accélèrent vos projets.",
    href: "/offres#modules",
  },
];

const engagements = [
  {
    title: "Notre vision",
    body: "L'IA est un moteur de transformation majeur, mais son essor en entreprise reste décevant. Nous pensons qu'une architecture adaptée — qui découple les fonctions très adhérentes à l'IA des fonctions plus stables — libère les organisations de leurs freins.",
  },
  {
    title: "Des outils qui accélèrent",
    body: "Nous avons développé un écosystème de briques logicielles qui sécurisent vos développements et accélèrent votre time-to-market — avec une gestion fine des droits, des rôles et une UX enrichie.",
  },
  {
    title: "Des compétences pointues, des profils variés",
    body: "Polytechnique, Stanford, Supaéro, doctorats — et des vétérans d'Accenture ou Sopra Steria. Conseil, design et tech réunis pour vos projets d'IA.",
  },
  {
    title: "Des déploiements réussis",
    body: "Nous avons travaillé auprès de grands comptes sur des cas d'usage variés. Notamment une solution ITSM déployée pour un grand groupe bancaire, aujourd'hui en production.",
  },
];

const clients = [
  { name: "BNP Paribas", src: "/clients/bnp.webp" },
  { name: "IRSN", src: "/clients/irsn.png" },
  { name: "Voltalis", src: "/clients/voltalis.png" },
  { name: "Crédit Agricole", src: "/clients/ca.png" },
  { name: "Cdiscount", src: "/clients/cdiscount.png" },
  { name: "SGFGAS", src: "/clients/sgfgas.jpg" },
  { name: "Les Nouveaux Constructeurs", src: "/clients/nouveaux-constructeurs.png" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-24 md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-[460px] w-[720px] opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-teal) 1.3px, transparent 1.3px)",
            backgroundSize: "12px 12px",
            maskImage:
              "radial-gradient(50% 56% at 96% 4%, #000 0%, transparent 76%)",
            WebkitMaskImage:
              "radial-gradient(50% 56% at 96% 4%, #000 0%, transparent 76%)",
          }}
        />
        <Container className="relative">
          <Eyebrow>HEXAMIND</Eyebrow>
          <h1 className="mt-[26px] max-w-[20ch] text-balance font-serif text-hero font-medium tracking-[-0.01em] text-ink">
            We make <span className="italic text-accent">AI work</span> for you.
          </h1>
          <p className="mt-7 max-w-[64ch] text-body-lg text-mid">
            Nous vous accompagnons dans vos projets de transformation IA en
            conseil, en développement sur mesure et grâce à nos propres modules
            d&rsquo;IA.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact">Discuter de votre projet →</Button>
            <Button href="/vision" variant="outline">
              Découvrir notre vision
            </Button>
          </div>
        </Container>
      </section>

      {/* Trois leviers */}
      <Section>
        <SectionHeader
          align="center"
          eyebrow="NOS OFFRES"
          title="Trois leviers pour une IA utile et maîtrisée."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.title}
              className="flex flex-col rounded-2xl border border-line bg-panel p-8"
            >
              <span className="font-mono text-sm font-medium text-accent-ink">
                {o.n}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-ink">{o.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mid">
                {o.desc}
              </p>
              <ArrowLink href={o.href} className="mt-6">
                Découvrir
              </ArrowLink>
            </div>
          ))}
        </div>
      </Section>

      {/* Pourquoi travailler avec nous */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              tone="dark"
              eyebrow="NOS ENGAGEMENTS"
              title="Pourquoi travailler avec nous ?"
            />
          </div>
          <div className="space-y-10 lg:col-span-7">
            {engagements.map((e) => (
              <div key={e.title}>
                <h3 className="font-serif text-xl text-accent-bright">
                  {e.title}
                </h3>
                <p className="mt-3 leading-relaxed text-cream/85">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Ils nous font confiance */}
      <Section>
        <SectionHeader
          align="center"
          eyebrow="RÉFÉRENCES"
          title="Ils nous font confiance."
        />
        <div className="mt-14 grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-10 md:grid-cols-7">
          {clients.map((c) => (
            <div key={c.name} className="relative h-12 w-[120px]">
              <Image
                src={c.src}
                alt={c.name}
                fill
                sizes="120px"
                className="object-contain opacity-80 mix-blend-multiply transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Bandeau MIT */}
      <Section tone="teal">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow tone="cream">NOTRE MISSION</Eyebrow>
            <h2 className="mt-4 font-serif text-h2 font-medium text-cream">
              Selon le MIT, <span className="italic">5 %</span> seulement des
              organisations obtiennent un retour concret sur l&rsquo;IA
              générative.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="leading-relaxed text-cream/85">
              L&rsquo;Intelligence Artificielle est une réalité opérationnelle
              et un <strong className="font-semibold">moteur de transformation</strong>{" "}
              majeur. Pourtant, son essor en entreprise reste décevant face aux
              attentes générées par les offres grand public.
            </p>
            <p className="mt-4 leading-relaxed text-cream/85">
              Un récent rapport du MIT indique que malgré 30 à 40 milliards de
              dollars investis dans l&rsquo;IA générative,{" "}
              <strong className="font-semibold">seulement 5 %</strong> des
              organisations en obtiennent un retour concret. Notre mission :
              faire en sorte que vous soyez dans ces 5 %.
            </p>
            <Button href="/vision" variant="cream" className="mt-6">
              Lire notre vision →
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
