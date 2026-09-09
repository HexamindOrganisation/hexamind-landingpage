import Link from "next/link";
import { isExternal } from "@/lib/site";

type SmartLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Renders a Next.js <Link> for internal routes and a plain <a> for external
 * links (http(s), mailto, tel), so navigation stays correct in both cases.
 */
export function SmartLink({ href, className, children }: SmartLinkProps) {
  if (isExternal(href)) {
    const opensNewTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(opensNewTab
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
