import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Member = { img: string; name: string; role: string; bio: string[] };

// Short version of the About page team — members come from the `qui` catalog.
export function TeamStrip() {
  const t = useTranslations("home.team");
  const q = useTranslations("qui.team");
  const members = q.raw("members") as Member[];
  const schools = t.raw("schools") as string[];

  return (
    <Section className="border-t border-line-soft">
      <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((mbr) => (
          <div
            key={mbr.name}
            className="flex gap-4 rounded-3xl border border-border bg-card p-5"
          >
            <div className="size-16 shrink-0 overflow-hidden rounded-full bg-muted ring-1 ring-border">
              <Image
                src={mbr.img}
                alt={mbr.name}
                width={128}
                height={128}
                className="size-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="font-serif text-base font-semibold text-foreground">
                {mbr.name}
              </div>
              <div className="text-sm font-semibold text-primary">{mbr.role}</div>
              <div className="mt-2 space-y-0.5 text-[13px] leading-relaxed text-muted-foreground">
                {mbr.bio.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line-soft pt-8">
        <span className="mr-2 text-sm text-muted-foreground">
          {q.rich("note", {
            b: (chunks) => (
              <span className="font-semibold text-foreground">{chunks}</span>
            ),
          })}
        </span>
        {schools.map((s) => (
          <span
            key={s}
            className="rounded-xl border border-border bg-card px-4 py-2 text-[14px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
        <span className="rounded-xl border border-dashed border-border px-4 py-2 font-mono text-[13px] text-dim">
          {t("doctorats")}
        </span>
        <Link
          href="/qui-sommes-nous"
          className="ml-auto inline-flex items-center gap-2 text-[15px] font-semibold text-foreground underline-offset-4 hover:underline"
        >
          {t("more")} <span aria-hidden>→</span>
        </Link>
      </div>
    </Section>
  );
}
