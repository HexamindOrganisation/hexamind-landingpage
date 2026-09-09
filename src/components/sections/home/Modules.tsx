import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PROPRIETARY = ["pascal", "zeagent", "fastprop"] as const;

function ModuleName({ name, tagline }: { name: string; tagline: string }) {
  return (
    <>
      <h3 className="font-serif text-[44px] font-semibold leading-none text-cream">
        {name}
      </h3>
      <div className="mt-3.5 text-[13px] font-medium uppercase tracking-[0.09em] text-accent-warm">
        {tagline}
      </div>
    </>
  );
}

export function Modules() {
  const t = useTranslations("modules");

  return (
    <section id="modules" className="bg-ink py-24 md:py-28">
      <Reveal>
        <Container>
          <Eyebrow tone="cream">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-[26px] font-serif text-h2 font-semibold leading-[1.05] text-cream">
            {t("title")}
          </h2>

          <div className="mt-12">
            {/* Hexgate — featured, with code sample + product showcase */}
            <div className="flex flex-wrap gap-x-14 gap-y-8 border-t border-cream/20 py-13">
              <div className="min-w-0 flex-[1_1_220px]">
                <ModuleName
                  name={t("hexgate.name")}
                  tagline={t("hexgate.tagline")}
                />
                <span className="mt-4 inline-block rounded-md border border-cream/35 px-2.5 py-[5px] font-mono text-[10.5px] font-medium tracking-[0.12em] text-cream/80">
                  {t("badge")}
                </span>
              </div>
              <div className="min-w-0 flex-[3_1_380px]">
                <p className="max-w-[66ch] text-body-lg leading-[1.7] text-cream/85">
                  {t("hexgate.bodyShort")}
                </p>

                <div
                  className="mt-6 overflow-hidden rounded-xl border border-cream/20"
                  style={{ background: "#0A1636" }}
                >
                  <div className="flex items-center gap-2 border-b border-cream/10 px-3.5 py-[11px]">
                    <span className="size-[9px] rounded-full bg-[#F87171]" />
                    <span className="size-[9px] rounded-full bg-[#FBBF24]" />
                    <span className="size-[9px] rounded-full bg-[#34D399]" />
                    <span className="ml-2 font-mono text-[12.5px] text-cream/55">
                      agent.py
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-[18px] font-mono text-[12.5px] leading-[1.8] text-[#DCE3EE]">
                    <span className="text-[#C99BF5]">from</span> hexgate{" "}
                    <span className="text-[#C99BF5]">import</span>{" "}
                    <span className="text-[#8FC0FF]">HexgateRunner</span>
                    {"\n\n"}runner ={" "}
                    <span className="text-[#8FC0FF]">HexgateRunner</span>()
                    {"\n"}
                    <span className="text-cream/50">
                      ↳ chaque appel d&rsquo;outil passe par la policy
                    </span>
                  </pre>
                </div>

                <div className="mt-6 grid gap-4">
                  <figure className="overflow-hidden rounded-xl border border-cream/15">
                    <Image
                      src="/hexgate/audit-dashboard.png"
                      alt={t("dashboardAlt")}
                      width={1256}
                      height={1162}
                      className="h-auto w-full"
                    />
                  </figure>
                  <figure className="overflow-hidden rounded-xl border border-cream/15">
                    <Image
                      src="/hexgate/policy-editor.png"
                      alt={t("editorAlt")}
                      width={1256}
                      height={542}
                      className="h-auto w-full"
                    />
                  </figure>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://hexgate.ai"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-primary px-[22px] py-3 text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgb(0_0_0_/_0.6)]"
                  >
                    {t("cloudButton")}
                  </a>
                  <a
                    href="https://github.com/HexamindOrganisation/hexgate"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-cream/35 px-[22px] py-3 text-[15px] text-cream transition-colors hover:border-cream hover:bg-cream/10"
                  >
                    {t("githubButton")}
                  </a>
                </div>
              </div>
            </div>

            {/* Proprietary modules */}
            {PROPRIETARY.map((key) => {
              const benefits = t.raw(`${key}.benefits`) as string[];
              return (
                <div
                  key={key}
                  className="flex flex-wrap gap-x-14 gap-y-8 border-t border-cream/20 py-13"
                >
                  <div className="min-w-0 flex-[1_1_220px]">
                    <ModuleName
                      name={t(`${key}.name`)}
                      tagline={t(`${key}.tagline`)}
                    />
                  </div>
                  <div className="min-w-0 flex-[3_1_380px]">
                    <p className="max-w-[66ch] text-body-lg leading-[1.7] text-cream/85">
                      {t(`${key}.body`)}
                    </p>
                    <ul className="mt-6 flex flex-col gap-3 text-base text-cream/80">
                      {benefits.map((b) => (
                        <li key={b} className="flex gap-3.5">
                          <span className="text-accent-warm">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            <div className="border-t border-cream/20 pt-11">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-[30px] py-4 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-14px_rgb(0_0_0_/_0.65)]"
              >
                {t("demoButton")} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
