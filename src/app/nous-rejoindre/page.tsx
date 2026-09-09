import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "Nous rejoindre",
  description: "Rejoignez Hexamind et construisez une IA utile, modeste et maîtrisée.",
};

export default function NousRejoindrePage() {
  return (
    <>
      <PagePlaceholder
        eyebrow="NOUS REJOINDRE"
        title="Construisons une IA utile, ensemble."
        description="Nos offres d'emploi arrivent bientôt. En attendant, écrivez-nous — nous sommes toujours ravis d'échanger avec des personnes talentueuses."
      />
      <ContactCta />
    </>
  );
}
