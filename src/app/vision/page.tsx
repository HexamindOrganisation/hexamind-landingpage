import type { Metadata } from "next";
import { VisionHero } from "@/components/sections/vision/VisionHero";
import { Mission } from "@/components/sections/vision/Mission";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "Une IA utile, modeste et maîtrisée. Notre mission : faire partie des 5 % d'organisations qui tirent un retour concret de l'IA générative.",
};

export default function VisionPage() {
  return (
    <>
      <VisionHero />
      <Mission />
      <ContactCta />
    </>
  );
}
