import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/sections/ContactForm";
import { LinkedInIcon, MailIcon, MapPinIcon } from "@/components/ui/icons";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Discutons de votre projet d'IA. Notre équipe vous répond sous 48 heures.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>CONTACT</Eyebrow>
          <h1 className="mt-4 font-serif text-hero font-bold tracking-[-0.01em] text-foreground">
            Parlons de votre projet.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Une question, un cadrage, une démo de nos modules : laissez-nous un
            message, nous revenons vers vous sous 48 heures.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <MailIcon className="text-primary" />
              <a href={mailto} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="text-primary" />
              {site.location}, France
            </li>
            <li className="flex items-center gap-3">
              <LinkedInIcon className="text-primary" width={18} height={18} />
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
