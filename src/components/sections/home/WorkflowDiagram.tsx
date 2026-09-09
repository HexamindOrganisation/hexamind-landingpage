import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const HEX_CLIP = "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)";

const steps = [
  { n: "01", word: "CADRER", color: "var(--color-verm)", delay: "0s" },
  { n: "02", word: "CONSTRUIRE", color: "var(--color-teal)", delay: "1.1s" },
  { n: "03", word: "INDUSTRIALISER", color: "var(--color-green)", delay: "2.2s" },
];

const columns = [
  {
    title: "Cas d'usage priorisés, ROI estimé",
    body: "On cartographie les cas d'usage et on chiffre le gain attendu avec vous. Vos équipes techniques ne sont mobilisées que pour extraire les données.",
  },
  {
    title: "Du MVP à la mise en production",
    body: "Maquettes sur données réelles en cycles courts, puis développement sur mesure jusqu'au déploiement.",
  },
  {
    title: "Droits, rôles et audit",
    body: "Nos modules prennent le relais : Hexgate pour l'autorisation et la traçabilité, Pascal, zeAgent et Fastprop pour le reste.",
  },
];

const schools = ["Polytechnique", "Stanford", "Supaéro", "Accenture", "Sopra Steria"];

export function WorkflowDiagram() {
  return (
    <section className="px-0 pb-28 pt-5">
      <Reveal>
        <Container>
        <div
          className="relative overflow-hidden rounded-[28px] border border-line p-5 sm:p-8 md:p-[44px] md:pt-14"
          style={{
            background:
              "linear-gradient(180deg,var(--color-panel) 0%,var(--color-panel-2) 100%)",
          }}
        >
          {/* Grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-line-soft) 1px,transparent 1px),linear-gradient(90deg,var(--color-line-soft) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(70% 80% at 50% 50%,#000,transparent)",
              WebkitMaskImage:
                "radial-gradient(70% 80% at 50% 50%,#000,transparent)",
            }}
          />

          <div className="relative">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent-ink">
                NOTRE FAÇON DE TRAVAILLER
              </span>
              <span className="text-[15px] text-dim">
                trois temps, sur vos données
              </span>
            </div>

            {/* Animated band */}
            <div
              className="relative mt-[34px] h-[230px] overflow-hidden rounded-3xl"
              style={{
                background:
                  "linear-gradient(90deg,rgba(42,106,130,.05),rgba(214,48,15,.06))",
              }}
            >
              {/* Drifting teal dots */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-75"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--color-teal) 1.6px,transparent 1.6px)",
                  backgroundSize: "24px 24px",
                  maskImage:
                    "linear-gradient(90deg,#000 0%,rgba(0,0,0,.4) 44%,transparent 64%)",
                  WebkitMaskImage:
                    "linear-gradient(90deg,#000 0%,rgba(0,0,0,.4) 44%,transparent 64%)",
                  animation: "hx-drift 22s linear infinite alternate",
                }}
              />
              {/* Static vermilion dots */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--color-accent) 1.5px,transparent 1.5px)",
                  backgroundSize: "11px 11px",
                  maskImage:
                    "linear-gradient(90deg,transparent 34%,rgba(0,0,0,.25) 52%,#000 88%)",
                  WebkitMaskImage:
                    "linear-gradient(90deg,transparent 34%,rgba(0,0,0,.25) 52%,#000 88%)",
                }}
              />
              {/* Sweeping light */}
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-1/4"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent)",
                  animation: "hx-sweep 9s cubic-bezier(.4,0,.6,1) infinite",
                }}
              />
              {/* Baseline */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-[52px] h-px"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,var(--color-line),var(--color-line),transparent)",
                }}
              />

              {/* Timeline steps */}
              <div className="absolute inset-0 grid grid-cols-3">
                {steps.map((s) => (
                  <div
                    key={s.n}
                    className="grid place-items-end justify-items-center pb-[45px]"
                  >
                    <div className="flex flex-col items-center gap-3.5">
                      <span
                        className="whitespace-nowrap rounded-full px-2.5 py-[7px] font-mono text-[11px] font-medium tracking-[0.14em]"
                        style={{
                          background: "rgba(255,255,255,.78)",
                          color: s.color,
                        }}
                      >
                        {s.n}
                        <span className="hidden sm:inline"> · {s.word}</span>
                      </span>
                      <span
                        className="h-[17px] w-[15px]"
                        style={{
                          background: s.color,
                          clipPath: HEX_CLIP,
                          animation: "hx-bloom 9s ease-in-out infinite",
                          animationDelay: s.delay,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner pills */}
              <div
                className="absolute left-2 top-4 rounded-full px-2.5 py-[7px] font-mono text-[10px] text-mid sm:left-[18px] sm:px-3 sm:text-[11.5px]"
                style={{ background: "rgba(255,255,255,.72)" }}
              >
                votre enjeu métier
              </div>
              <div
                className="absolute right-2 top-4 flex items-center gap-2 rounded-full px-2.5 py-[7px] font-mono text-[10px] text-ink sm:right-[18px] sm:px-3 sm:text-[11.5px]"
                style={{ background: "rgba(255,255,255,.72)" }}
              >
                <span
                  className="size-[7px] rounded-full bg-green"
                  style={{ animation: "hx-dot 2.4s ease-in-out infinite" }}
                />
                en production
              </div>
            </div>

            {/* Explanatory columns */}
            <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {columns.map((c) => (
                <div key={c.title}>
                  <h3 className="font-sans text-[19px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.65] text-mid">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Credibility row */}
          <div className="relative mt-10 border-t border-line-soft pt-[26px] text-center">
            <div className="font-mono text-[11px] tracking-[0.2em] text-dim">
              DES ÉQUIPES QUI ONT DÉJÀ LIVRÉ
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {schools.map((s) => (
                <span
                  key={s}
                  className="rounded-xl border border-line bg-panel-2 px-5 py-[11px] text-[14.5px] text-mid"
                >
                  {s}
                </span>
              ))}
              <span className="rounded-xl border border-dashed border-line px-5 py-[11px] font-mono text-[13px] text-dim">
                + doctorats
              </span>
            </div>
          </div>
        </div>
      </Container>
      </Reveal>
    </section>
  );
}
