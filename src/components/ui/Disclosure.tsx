import { cn } from "@/lib/utils";

/**
 * Expand/collapse built on the native <details> element — accessible and
 * JS-free. Used for the jobs list and long-form "read more" content.
 */
export function Disclosure({
  summary,
  children,
  defaultOpen = false,
  tone = "light",
  className,
  summaryClassName,
  contentClassName,
}: {
  summary: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  tone?: "light" | "dark";
  className?: string;
  summaryClassName?: string;
  contentClassName?: string;
}) {
  return (
    <details open={defaultOpen} className={cn("group", className)}>
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden",
          summaryClassName,
        )}
      >
        <div className="min-w-0">{summary}</div>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={cn(
            "size-5 shrink-0 transition-transform duration-200 group-open:rotate-180",
            tone === "dark" ? "text-cream/80" : "text-accent-ink",
          )}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div className={cn("pt-4", contentClassName)}>{children}</div>
    </details>
  );
}
