import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const HEX_CLIP = "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)";

// Colours + animation delays are presentation-only; labels come from messages.
const stepStyles = [
  { color: "var(--color-primary)", delay: "0s" },
  { color: "var(--color-accent-bright)", delay: "1.1s" },
  { color: "var(--color-green)", delay: "2.2s" },
];

export function WorkflowDiagram() {
  const t = useTranslations("offres.workflow");
  const steps = t.raw("steps") as { n: string; word: string }[];
  const columns = t.raw("columns") as { title: string; body: string }[];

  return (
    <Section id="methode" containerClassName="pt-6 pb-20 md:pt-10 md:pb-28">
      <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />
      <div
        className="relative mt-14 overflow-hidden rounded-[28px] border border-border p-5 sm:p-8 md:p-[44px]"
        style={{
          background:
            "linear-gradient(180deg,var(--color-card) 0%,var(--color-card) 100%)",
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
          {/* Animated band */}
          <div
            className="relative h-[230px] overflow-hidden rounded-3xl"
            style={{
              background:
                "linear-gradient(90deg,rgba(37,99,235,.05),rgba(96,165,250,.07))",
            }}
          >
            {/* Drifting blue dots */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(var(--color-accent-bright) 1.6px,transparent 1.6px)",
                backgroundSize: "24px 24px",
                maskImage:
                  "linear-gradient(90deg,#000 0%,rgba(0,0,0,.4) 44%,transparent 64%)",
                WebkitMaskImage:
                  "linear-gradient(90deg,#000 0%,rgba(0,0,0,.4) 44%,transparent 64%)",
                animation: "hx-drift 22s linear infinite alternate",
              }}
            />
            {/* Static primary dots */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-45"
              style={{
                backgroundImage:
                  "radial-gradient(var(--color-primary) 1.5px,transparent 1.5px)",
                backgroundSize: "11px 11px",
                maskImage:
                  "linear-gradient(90deg,transparent 34%,rgba(0,0,0,.25) 52%,#000 88%)",
                WebkitMaskImage:
                  "linear-gradient(90deg,transparent 34%,rgba(0,0,0,.25) 52%,#000 88%)",
              }}
            />
            {/* Baseline */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-[52px] h-px"
              style={{
                background:
                  "linear-gradient(90deg,transparent,var(--color-border),var(--color-border),transparent)",
              }}
            />

            {/* Timeline steps */}
            <div className="absolute inset-0 grid grid-cols-3">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className="grid place-items-end justify-items-center pb-[45px]"
                >
                  <div className="flex flex-col items-center gap-3.5">
                    <span
                      className="whitespace-nowrap rounded-full border border-border bg-card px-2.5 py-[7px] font-mono text-[11px] font-medium tracking-[0.14em] shadow-sm"
                      style={{ color: stepStyles[i].color }}
                    >
                      {s.n}
                      <span className="hidden sm:inline"> · {s.word}</span>
                    </span>
                    <span
                      className="h-[17px] w-[15px]"
                      style={{
                        background: stepStyles[i].color,
                        clipPath: HEX_CLIP,
                        animation: "hx-bloom 9s ease-in-out infinite",
                        animationDelay: stepStyles[i].delay,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Corner pills */}
            <div className="absolute left-2 top-4 rounded-full border border-border bg-card px-2.5 py-[7px] font-mono text-[10px] text-muted-foreground shadow-sm sm:left-[18px] sm:px-3 sm:text-[11.5px]">
              {t("enjeu")}
            </div>
            <div className="absolute right-2 top-4 flex items-center gap-2 rounded-full border border-border bg-card px-2.5 py-[7px] font-mono text-[10px] text-foreground shadow-sm sm:right-[18px] sm:px-3 sm:text-[11.5px]">
              <span
                className="size-[7px] rounded-full bg-green"
                style={{ animation: "hx-dot 2.4s ease-in-out infinite" }}
              />
              {t("production")}
            </div>
          </div>

          {/* Explanatory columns */}
          <div data-stagger className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className="font-sans text-[19px] font-semibold leading-[1.3] tracking-[-0.01em] text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.65] text-muted-foreground">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
