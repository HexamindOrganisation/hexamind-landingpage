import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

type Card = {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  card: string;
  title: string;
  tag: string;
  body: string;
  link: string;
};

const cards: Card[] = [
  {
    id: "startai",
    name: "STARTAI",
    tagline: "AUDIT IA & DIAGNOSTIC DE MATURITÉ",
    desc: "L'étape préalable indispensable pour prioriser les initiatives à fort ROI, éviter les investissements inutiles et poser des bases solides.",
    card: "bg-ink border-ink",
    title: "text-cream",
    tag: "text-accent-warm",
    body: "text-cream/80",
    link: "border-cream/40 text-cream hover:bg-cream/10 hover:border-cream",
  },
  {
    id: "boostai",
    name: "BOOSTAI",
    tagline: "ACCULTURATION & FORMATION IA",
    desc: "Trois parcours progressifs selon votre maturité, pour rendre vos équipes autonomes avec l'IA dès le premier jour.",
    card: "bg-teal border-teal",
    title: "text-cream",
    tag: "text-cream/90",
    body: "text-cream/90",
    link: "border-cream/50 text-cream hover:bg-cream/15 hover:border-cream",
  },
  {
    id: "buildai",
    name: "BUILDAI",
    tagline: "PROTOTYPAGE & EXPÉRIMENTATION",
    desc: "Transforme votre cas d'usage prioritaire en solution concrète, testée par vos utilisateurs et mesurée en euros.",
    card: "bg-panel border-line",
    title: "text-ink",
    tag: "text-accent-ink",
    body: "text-mid",
    link: "border-line text-ink hover:bg-white hover:border-ink",
  },
];

export function StartOptions() {
  return (
    <section id="offres" className="border-t border-line-soft py-24 md:py-28">
      <Container>
        <Eyebrow>CONSEIL</Eyebrow>
        <h2 className="mt-[26px] max-w-[24ch] font-serif text-h2 font-semibold leading-[1.05] text-ink">
          Trois façons de démarrer.
        </h2>
        <p className="mt-[22px] max-w-[62ch] text-body-lg text-mid">
          Cadrer, acculturer, prototyper : le point d&rsquo;entrée dépend de
          votre maturité.
        </p>

        <div className="mt-13 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.id}
              className={cn(
                "flex min-h-[340px] flex-col rounded-3xl border p-9 transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_44px_-26px_rgb(15_31_74_/_0.5)]",
                c.card,
              )}
            >
              <h3
                className={cn(
                  "font-serif text-[38px] font-semibold leading-none",
                  c.title,
                )}
              >
                {c.name}
              </h3>
              <div
                className={cn(
                  "mt-3.5 text-[13px] font-medium tracking-[0.09em]",
                  c.tag,
                )}
              >
                {c.tagline}
              </div>
              <p className={cn("mt-6 leading-[1.7]", c.body)}>{c.desc}</p>
              <Link
                href={`/offres#${c.id}`}
                className={cn(
                  "mt-auto inline-flex items-center gap-2.5 self-start rounded-full border px-[22px] py-3 text-[15px] transition-colors",
                  c.link,
                )}
              >
                En savoir plus <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
