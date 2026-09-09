import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

type StatProps = {
  value: string;
  caption: string;
  valueClassName?: string;
  divider?: boolean;
};

function Stat({ value, caption, valueClassName, divider }: StatProps) {
  return (
    <div
      className={cn(
        "min-w-[180px] flex-1 px-6 py-[26px]",
        divider && "border-r border-line",
      )}
    >
      <div className={cn("font-sans text-stat font-bold", valueClassName)}>
        {value}
      </div>
      <div className="mt-2 text-[13.5px] text-dim">{caption}</div>
    </div>
  );
}

export function Mission() {
  return (
    <section id="mission" className="pb-28 pt-5">
      <Container className="grid grid-cols-1 items-start gap-x-20 gap-y-14 lg:grid-cols-2">
        <div>
          <Eyebrow>NOTRE MISSION</Eyebrow>
          <h2 className="mt-[26px] text-pretty font-serif text-h2 font-medium tracking-[-0.005em]">
            Selon le MIT, <span className="text-accent">5 %</span> seulement des
            organisations obtiennent un retour concret sur l&rsquo;IA
            générative.
          </h2>

          <div className="mt-12 flex flex-wrap overflow-hidden rounded-2xl border border-line bg-panel">
            <Stat
              value="30–40 Md$"
              caption="investis dans l'IA générative"
              valueClassName="text-accent"
              divider
            />
            <Stat value="5 %" caption="en tirent un retour concret" divider />
            <Stat
              value="Vous"
              caption="notre mission : vous mettre dans ces 5 %"
              valueClassName="text-green"
            />
          </div>
        </div>

        <div className="pt-1.5">
          <p className="text-body text-mid">
            L&rsquo;Intelligence Artificielle est une réalité opérationnelle et
            un{" "}
            <strong className="font-semibold text-ink">
              moteur de transformation
            </strong>{" "}
            majeur. Pourtant, son essor en entreprise reste décevant face aux
            attentes générées par les offres grand public.
          </p>
          <p className="mt-[22px] text-body text-mid">
            Un récent rapport du MIT indique que malgré 30 à 40 milliards de
            dollars investis dans l&rsquo;IA générative,{" "}
            <strong className="font-semibold text-ink">seulement 5 %</strong> des
            organisations en obtiennent un retour concret. Notre mission : faire
            en sorte que vous soyez dans ces 5 %.
          </p>
          <p className="mt-[22px] text-body text-mid">
            Nous pensons qu&rsquo;une architecture adaptée — qui découple les
            fonctions très adhérentes à l&rsquo;IA des fonctions plus stables —
            libère les organisations de leurs freins.
          </p>
          <Link
            href="/#offres"
            className="mt-[30px] inline-flex items-center gap-[10px] rounded-xl border border-line bg-panel px-6 py-[14px] text-[15px] font-medium text-ink transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-white"
          >
            Découvrir nos offres <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
