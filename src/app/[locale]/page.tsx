import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/home/Hero";
import { WorkflowDiagram } from "@/components/sections/home/WorkflowDiagram";
import { Clients } from "@/components/sections/home/Clients";
import { StartOptions } from "@/components/sections/home/StartOptions";
import { DevModes } from "@/components/sections/home/DevModes";
import { Modules } from "@/components/sections/home/Modules";
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
      <WorkflowDiagram />
      <Clients />
      <StartOptions />
      <DevModes />
      <Modules />
      <ContactCta />
    </>
  );
}
