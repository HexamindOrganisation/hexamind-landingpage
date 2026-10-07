import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * Hexgate product visuals for the offerings page: code sample, policy editor
 * and audit dashboard, then the five steps run on each agent call.
 */
export function HexgateShowcase() {
  const t = useTranslations("modules");
  const steps = t.raw("hexgate.steps") as { name: string; body: string }[];

  return (
    <>
      {/* Product showcase: code + policy editor | audit dashboard */}
      <div data-stagger className="grid items-start gap-5 lg:grid-cols-2">
        <div className="grid gap-5">
          <div
            className="overflow-hidden rounded-xl border border-cream/20"
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
              <span className="text-cream/50">{t("codeComment")}</span>
            </pre>
          </div>
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
        <figure className="overflow-hidden rounded-xl border border-cream/15">
          <Image
            src="/hexgate/audit-dashboard.png"
            alt={t("dashboardAlt")}
            width={1256}
            height={1162}
            className="h-auto w-full"
          />
        </figure>
      </div>

      {/* Define → Fetch → Enforce → Report → Improve, as on hexgate.ai */}
      <div className="mt-16 border-t border-cream/20 pt-11">
        <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-cream/70">
          {t("hexgate.stepsTitle")}
        </h3>
        <ol data-stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.name}>
              <span className="font-mono text-[13px] text-accent-warm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-2 font-serif text-xl font-semibold text-cream">
                {step.name}
              </div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-cream/75">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
