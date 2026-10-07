import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/home/Hero";
import { Hexgate } from "@/components/sections/home/Hexgate";
import { Clients } from "@/components/sections/home/Clients";
import { TeamStrip } from "@/components/sections/home/TeamStrip";
import { Beyond } from "@/components/sections/home/Beyond";
import { ContactCta } from "@/components/sections/ContactCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Clients />
      <TeamStrip />
      <Hexgate />
      <Beyond />
      <ContactCta />
    </>
  );
}
