import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

/**
 * Eyebrow + heading (+ optional intro) block used at the top of most sections.
 * `tone="dark"` switches colours for navy/teal backgrounds.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto max-w-3xl text-center", className)}>
      <Eyebrow
        tone={dark ? "cream" : "accent"}
        className={centered ? "justify-center" : undefined}
      >
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "mt-4 text-balance font-serif text-h2 font-medium tracking-[-0.005em]",
          dark ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-body-lg",
            centered && "mx-auto",
            dark ? "text-cream/85" : "text-mid",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
