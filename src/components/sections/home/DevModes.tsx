import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

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

export function DevModes() {
  return (
    <section
      id="developpement"
      className="border-t border-line-soft bg-sable-2 py-24 md:py-28"
    >
      <Reveal>
        <Container>
        <Eyebrow>DÉVELOPPEMENT</Eyebrow>
        <h2 className="mt-[26px] font-serif text-h2 font-semibold leading-[1.05] text-ink">
          Quatre modalités d&rsquo;intervention.
        </h2>
        <p className="mt-[22px] max-w-[70ch] text-body-lg text-mid">
          Nous adaptons notre mode de collaboration à la maturité de vos projets,
          à votre budget et à votre besoin de flexibilité.
        </p>

        <div className="mt-13 grid gap-4 md:grid-cols-2">
          {modes.map((m) => (
            <div
              key={m.n}
              className="rounded-3xl border border-line bg-panel p-9 md:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-sans text-2xl font-bold text-accent-ink">
                  {m.n}
                </span>
                <h3 className="font-serif text-[26px] font-semibold leading-tight text-ink">
                  {m.title}
                </h3>
              </div>
              <p className="mt-[22px] text-[15.5px] leading-[1.65] text-mid">
                <strong className="font-semibold text-ink">Principe.</strong>{" "}
                {m.principle}
              </p>
              <p className="mt-2.5 text-[15.5px] leading-[1.65] text-mid">
                <strong className="font-semibold text-ink">Facturation.</strong>{" "}
                {m.billing}
              </p>
              <ul className="mt-[22px] flex flex-col gap-2 text-[15px] text-mid">
                {m.advantages.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="text-accent-ink">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      </Reveal>
    </section>
  );
}
