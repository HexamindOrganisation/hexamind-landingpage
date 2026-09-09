import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Run on everything except API, Next internals, and files with an extension
  // (robots.txt, sitemap.xml, icon.png, /logo-owl.png, /hexgate/*.png, …).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
