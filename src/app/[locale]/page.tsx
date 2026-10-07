import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/home/Hero";
import { Clients } from "@/components/sections/home/Clients";
import { TeamStrip } from "@/components/sections/home/TeamStrip";
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
      <ContactCta />
    </>
  );
}
