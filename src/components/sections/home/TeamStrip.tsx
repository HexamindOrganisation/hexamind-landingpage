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

      <div data-stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <div className="mt-6 grid items-center gap-6 rounded-3xl border border-border bg-card p-6 md:grid-cols-[auto_1fr_auto] md:gap-10 md:p-8">
        <div className="flex items-center gap-4">
          <span className="font-serif text-5xl font-bold leading-none text-primary">
            {t("statNumber")}
          </span>
          <span className="max-w-[22ch] text-[15px] leading-snug text-muted-foreground">
            {t("statLabel")}
          </span>
        </div>
        <div className="border-border md:border-l md:pl-10">
          <div className="font-mono text-[11px] tracking-[0.2em] text-dim">
            {t("backgrounds")}
          </div>
          <p className="mt-2 text-[16px] font-medium leading-relaxed text-foreground">
            {[...schools, t("doctorats")].join("  ·  ")}
          </p>
        </div>
        <Link
          href="/qui-sommes-nous"
          className="inline-flex items-center gap-2 self-start justify-self-start whitespace-nowrap rounded-full border border-border px-5 py-2.5 text-[15px] font-semibold text-foreground transition-colors hover:border-ink hover:bg-white md:self-center md:justify-self-end"
        >
          {t("more")} <span aria-hidden>→</span>
        </Link>
      </div>
    </Section>
  );
}
