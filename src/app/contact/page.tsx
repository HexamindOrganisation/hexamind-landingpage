import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/sections/ContactForm";
import { LinkedInIcon, MailIcon, MapPinIcon } from "@/components/ui/icons";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
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
          <h1 className="mt-4 font-serif text-hero font-medium tracking-[-0.01em] text-ink">
            Parlons de votre projet.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-mid">
            Une question, un cadrage, une démo de nos modules : laissez-nous un
            message, nous revenons vers vous sous 48 heures.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-mid">
            <li className="flex items-center gap-3">
              <MailIcon className="text-accent-ink" />
              <a href={mailto} className="hover:text-accent-ink">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="text-accent-ink" />
              {site.location}, France
            </li>
            <li className="flex items-center gap-3">
              <LinkedInIcon className="text-accent-ink" width={18} height={18} />
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-ink"
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
