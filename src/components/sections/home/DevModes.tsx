import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Mode = {
  n: string;
  title: string;
  principle: string;
  billing: string;
  advantages: string[];
};

export function DevModes() {
  const t = useTranslations("devModes");
  const modes = t.raw("modes") as Mode[];

  return (
    <section
      id="developpement"
      className="border-t border-line-soft bg-muted py-24 md:py-28"
    >
      <Reveal>
        <Container>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="mt-[26px] font-serif text-h2 font-semibold leading-[1.05] text-foreground">
            {t("title")}
          </h2>
          <p className="mt-[22px] max-w-[70ch] text-body-lg text-muted-foreground">
            {t("intro")}
          </p>

          <div className="mt-13 grid gap-4 md:grid-cols-2">
            {modes.map((m) => (
              <div
                key={m.n}
                className="rounded-3xl border border-border bg-card p-9 md:p-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-2xl font-bold text-primary">
                    {m.n}
                  </span>
                  <h3 className="font-serif text-[26px] font-semibold leading-tight text-foreground">
                    {m.title}
                  </h3>
                </div>
                <p className="mt-[22px] text-[15.5px] leading-[1.65] text-muted-foreground">
                  <strong className="font-semibold text-foreground">
                    {t("principleLabel")}
                  </strong>{" "}
                  {m.principle}
                </p>
                <p className="mt-2.5 text-[15.5px] leading-[1.65] text-muted-foreground">
                  <strong className="font-semibold text-foreground">
                    {t("billingLabel")}
                  </strong>{" "}
                  {m.billing}
                </p>
                <ul className="mt-[22px] flex flex-col gap-2 text-[15px] text-muted-foreground">
                  {m.advantages.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="text-primary">•</span>
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
