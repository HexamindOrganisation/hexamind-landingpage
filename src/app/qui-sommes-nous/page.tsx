import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description: "Découvrez l'équipe et l'histoire d'Hexamind.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <PagePlaceholder
        eyebrow="QUI SOMMES-NOUS"
        title="L'équipe derrière Hexamind."
        description="Cette page est en cours de conception. Elle présentera bientôt notre équipe, notre approche et notre histoire."
      />
      <ContactCta />
    </>
  );
}
