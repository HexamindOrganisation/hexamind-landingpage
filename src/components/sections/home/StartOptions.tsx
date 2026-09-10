import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

// Per-card presentation (keyed by id); copy comes from messages.
const styles: Record<
  string,
  { card: string; title: string; tag: string; body: string; link: string }
> = {
  startai: {
    card: "bg-ink border-ink",
    title: "text-cream",
    tag: "text-accent-warm",
    body: "text-cream/80",
    link: "border-cream/40 text-cream hover:bg-cream/10 hover:border-cream",
  },
  boostai: {
    card: "bg-primary border-primary",
    title: "text-cream",
    tag: "text-cream/90",
    body: "text-cream/90",
    link: "border-cream/50 text-cream hover:bg-cream/15 hover:border-cream",
  },
  buildai: {
    card: "bg-card border-border",
    title: "text-foreground",
    tag: "text-primary",
    body: "text-muted-foreground",
    link: "border-border text-foreground hover:bg-white hover:border-ink",
  },
};

export function StartOptions() {
  const t = useTranslations("home.conseil");
  const cards = t.raw("cards") as {
    id: string;
    name: string;
    tagline: string;
    desc: string;
  }[];

  return (
    <section id="offres" className="border-t border-line-soft py-24 md:py-28">
      <Reveal>
        <Container>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="mt-[26px] max-w-[24ch] font-serif text-h2 font-semibold leading-[1.05] text-foreground">
            {t("title")}
          </h2>
          <p className="mt-[22px] max-w-[62ch] text-body-lg text-muted-foreground">
            {t("intro")}
          </p>

          <div className="mt-13 grid gap-6 md:grid-cols-3">
            {cards.map((c) => {
              const s = styles[c.id];
              return (
                <div
                  key={c.id}
                  className={cn(
                    "flex min-h-[340px] flex-col rounded-3xl border p-9 transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_44px_-26px_rgb(43_38_32_/_0.4)]",
                    s.card,
                  )}
                >
                  <h3
                    className={cn(
                      "font-serif text-[38px] font-semibold leading-none",
                      s.title,
                    )}
                  >
                    {c.name}
                  </h3>
                  <div
                    className={cn(
                      "mt-3.5 text-[13px] font-medium tracking-[0.09em]",
                      s.tag,
                    )}
                  >
                    {c.tagline}
                  </div>
                  <p className={cn("mt-6 leading-[1.7]", s.body)}>{c.desc}</p>
                  <Link
                    href={`/offres#${c.id}`}
                    className={cn(
                      "mt-auto inline-flex items-center gap-2.5 self-start rounded-full border px-[22px] py-3 text-[15px] transition-colors",
                      s.link,
                    )}
                  >
                    {t("more")} <span aria-hidden>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
