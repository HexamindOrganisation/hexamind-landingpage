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
  return (
    <div
      className={cn(
        "flex flex-wrap overflow-hidden rounded-3xl border border-border bg-card",
        className,
      )}
    >
      <Stat
        value="30–40 Md$"
        caption="investis dans l'IA générative"
        valueClassName="text-primary"
        divider
      />
      <Stat value="5 %" caption="en tirent un retour concret" divider />
      <Stat
        value="Vous"
        caption="notre mission : vous mettre dans ces 5 %"
        valueClassName="text-green"
      />
    </div>
  );
}
