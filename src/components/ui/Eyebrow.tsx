import { cn } from "@/lib/utils";

/**
 * Small section label: a short rule followed by mono, letter-spaced text.
 * `tone="cream"` is used on dark (teal) backgrounds.
 */
export function Eyebrow({
  children,
  tone = "accent",
  className,
}: {
  children: React.ReactNode;
  tone?: "accent" | "cream";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-[14px]", className)}>
      <span
        className={cn(
          "h-px w-[34px]",
          tone === "cream" ? "bg-cream/90" : "bg-accent",
        )}
      />
      <span
        className={cn(
          "font-mono text-eyebrow font-medium leading-none tracking-[0.22em]",
          tone === "cream" ? "text-cream/90" : "text-accent-ink",
        )}
      >
        {children}
      </span>
    </div>
  );
}
