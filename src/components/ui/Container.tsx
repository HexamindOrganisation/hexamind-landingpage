import { cn } from "@/lib/utils";

/** Centered page-width wrapper (max 1240px) with responsive gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
