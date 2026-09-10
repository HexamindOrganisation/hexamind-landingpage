import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

function Stat({
  value,
  caption,
  valueClassName,
  divider,
}: {
  value: string;
  caption: string;
  valueClassName?: string;
  divider?: boolean;
}) {
  return (
    <div
      className={cn(
        "min-w-[180px] flex-1 px-6 py-[26px]",
        divider && "border-r border-border",
      )}
    >
      <div className={cn("font-sans text-stat font-bold", valueClassName)}>
        {value}
      </div>
      <div className="mt-2 text-[13.5px] text-dim">{caption}</div>
    </div>
  );
}

/** The three headline MIT figures, shown as a bordered card row. */
export function MitStats({ className }: { className?: string }) {
  const t = useTranslations("mitStats");
  return (
    <div
      className={cn(
        "flex flex-wrap overflow-hidden rounded-3xl border border-border bg-card",
        className,
      )}
    >
      <Stat
        value={t("invest")}
        caption={t("investCaption")}
        valueClassName="text-primary"
        divider
      />
      <Stat value={t("fivePercent")} caption={t("fivePercentCaption")} divider />
      <Stat
        value={t("you")}
        caption={t("youCaption")}
        valueClassName="text-green"
      />
    </div>
  );
}
