import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section containerClassName="py-28 md:py-36">
      <Eyebrow>ERREUR 404</Eyebrow>
      <h1 className="mt-4 font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
        Page introuvable.
      </h1>
      <p className="mt-6 max-w-lg text-body-lg text-muted-foreground">
        La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
      </p>
      <Button href="/" className="mt-10">
        Retour à l&rsquo;accueil →
      </Button>
    </Section>
  );
}
