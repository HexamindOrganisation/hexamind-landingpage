import { SmartLink } from "@/components/ui/SmartLink";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "cream" | "outline-cream";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition duration-200";

const variants: Record<Variant, string> = {
  // Accent fill — primary call to action.
  primary:
    "bg-primary px-6 py-3 font-semibold text-white hover:-translate-y-0.5 hover:bg-primary-deep",
  // Outline on light surfaces.
  outline:
    "border border-border px-6 py-3 text-foreground hover:border-ink hover:bg-white",
  // Cream fill — primary CTA on dark (ink) surfaces.
  cream:
    "bg-cream px-6 py-3 text-foreground hover:-translate-y-0.5 hover:bg-white",
  // Outline on dark surfaces.
  "outline-cream":
    "border border-cream/40 px-6 py-3 text-cream hover:bg-cream/10",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

/** A link styled as a button, or a real <button> when no href is given. */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    return (
      <SmartLink href={props.href} className={classes}>
        {children}
      </SmartLink>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, className: _c, children: _ch, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

/** Inline text link with a trailing arrow (ghost CTA). */
export function ArrowLink({
  href,
  children,
  tone = "accent",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "accent" | "cream";
  className?: string;
}) {
  return (
    <SmartLink
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium transition-colors",
        tone === "cream"
          ? "text-cream hover:text-white"
          : "text-primary hover:text-primary",
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </SmartLink>
  );
}
