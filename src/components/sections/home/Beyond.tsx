import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const OTHER_MODULES = ["pascal", "zeagent", "fastprop"] as const;

type Entry = { name: string; detail?: string };

function Card({
  title,
  body,
  entries,
  href,
  more,
}: {
  title: string;
  body?: string;
  entries: Entry[];
  href: string;
  more: string;
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-border bg-card p-8">
      <h3 className="font-serif text-2xl font-semibold text-foreground">{title}</h3>
      {body ? (
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
      ) : null}
      <ul className="mt-5 space-y-3">
        {entries.map((e) => (
          <li key={e.name} className="text-[15px] leading-snug">
            <span className="font-semibold text-foreground">{e.name}</span>
            {e.detail ? (
              <span className="text-muted-foreground"> · {e.detail}</span>
            ) : null}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-2 self-start pt-7 text-[15px] font-semibold text-primary underline-offset-4 hover:underline"
      >
        {more} <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

// Consulting, development and the other modules, condensed: details live on /offres.
export function Beyond() {
  const t = useTranslations("home.beyond");
  const c = useTranslations("offres.conseil");
  const dm = useTranslations("devModes");
  const m = useTranslations("modules");

  const conseil = (c.raw("offers") as { name: string; tagline: string }[]).map(
    (card) => ({ name: card.name, detail: card.tagline }),
  );
  const modes = (dm.raw("modes") as { title: string }[]).map((mode) => ({
    name: mode.title,
  }));
  const modules = OTHER_MODULES.map((id) => ({
    name: m(`${id}.name`),
    detail: m(`${id}.tagline`),
  }));

  return (
    <Section id="offres" className="border-t border-line-soft">
      <SectionHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
      <div className="mt-13 grid gap-6 md:grid-cols-3">
        <Card
          title={t("conseil")}
          body={c("intro")}
          entries={conseil}
          href="/offres#conseil"
          more={t("more")}
        />
        <Card
          title={t("developpement")}
          body={t("developpementBody")}
          entries={modes}
          href="/offres#developpement"
          more={t("more")}
        />
        <Card
          title={t("modules")}
          entries={modules}
          href="/offres#modules"
          more={t("more")}
        />
      </div>
    </Section>
  );
}
