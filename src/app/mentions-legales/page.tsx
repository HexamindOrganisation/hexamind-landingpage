import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Hexamind : éditeur, hébergeur, propriété intellectuelle et données personnelles.",
};

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-mid">{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>INFORMATIONS LÉGALES</Eyebrow>
        <h1 className="mt-4 font-serif text-h2-lg font-medium text-ink">
          Mentions légales
        </h1>

        <div className="mt-12 space-y-10">
          <LegalSection title="Éditeur du site">
            <p>
              <strong className="text-ink">Hexamind</strong>
              <br />
              Siège social : 16 rue Saint Antoine, 75004 Paris, France
              <br />
              Email : hello@hexamind.ai
              <br />
              Forme juridique : SAS (société par actions simplifiée)
              <br />
              Capital social : 40 000 €<br />
              RCS Paris : 947 999 793 — SIREN : 947 999 793
              <br />
              N° TVA intracommunautaire : FR34 947 999 793
            </p>
          </LegalSection>

          <LegalSection title="Hébergeur">
            <p>
              <strong className="text-ink">Lovable</strong> (Lovable AB)
              <br />
              Norrlandsgatan 15, 111 43 Stockholm, Suède
              <br />
              Site web : https://lovable.dev
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L&rsquo;ensemble des contenus présents sur ce site (textes, images,
              logos, marques, vidéos, éléments graphiques) est la propriété
              exclusive de Hexamind ou de ses partenaires. Toute reproduction,
              représentation, modification ou diffusion, totale ou partielle,
              sans autorisation écrite préalable est interdite et constitue une
              contrefaçon sanctionnée par les articles L.335-2 et suivants du
              Code de la propriété intellectuelle.
            </p>
          </LegalSection>

          <LegalSection title="Données personnelles">
            <p>
              Les informations recueillies via le formulaire de contact font
              l&rsquo;objet d&rsquo;un traitement destiné à répondre à vos
              demandes. Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
              « Informatique et Libertés », vous disposez d&rsquo;un droit
              d&rsquo;accès, de rectification, d&rsquo;effacement,
              d&rsquo;opposition, de limitation et de portabilité de vos données.
              Vous pouvez exercer ces droits en écrivant à hello@hexamind.ai.
            </p>
            <p className="mt-3">
              Délégué à la protection des données (DPO) : Yves Péligry.
              <br />
              Durée de conservation des données : 12 mois.
            </p>
          </LegalSection>

          <LegalSection title="Cookies">
            <p>
              Le site peut utiliser des cookies à des fins de mesure
              d&rsquo;audience et d&rsquo;amélioration de l&rsquo;expérience
              utilisateur. Vous pouvez paramétrer leur utilisation via les
              réglages de votre navigateur.
            </p>
          </LegalSection>

          <LegalSection title="Responsabilité">
            <p>
              Hexamind s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude et la
              mise à jour des informations diffusées sur ce site, mais ne peut
              garantir l&rsquo;absence d&rsquo;erreurs ou d&rsquo;omissions.
              L&rsquo;utilisateur reconnaît utiliser ces informations sous sa
              responsabilité exclusive.
            </p>
          </LegalSection>
        </div>
      </div>
    </Section>
  );
}
