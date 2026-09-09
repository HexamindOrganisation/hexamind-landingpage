import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Client = {
  name: string;
  src?: string;
  /** Optical-size balance for logos whose source files have different padding. */
  scale?: number;
  /** Render the name as a styled wordmark instead of an image. */
  wordmark?: boolean;
};

const clients: Client[] = [
  { name: "BNP Paribas", src: "/clients/bnp.webp", scale: 1 },
  { name: "IRSN", src: "/clients/irsn.png", scale: 1.8 },
  { name: "Voltalis", src: "/clients/voltalis.png", scale: 2 },
  { name: "Crédit Agricole", src: "/clients/ca.png", scale: 1.3 },
  { name: "Cdiscount", src: "/clients/cdiscount.png", scale: 1 },
  { name: "SGFGAS", wordmark: true },
  { name: "Les Nouveaux Constructeurs", src: "/clients/nouveaux-constructeurs.png", scale: 1.5 },
];

export function Clients() {
  return (
    <Section>
      <SectionHeader
        align="center"
        eyebrow="RÉFÉRENCES"
        title="Ils nous font confiance."
      />
      <div className="mt-14 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {clients.map((c) => (
          <div
            key={c.name}
            className="relative flex h-16 w-[140px] items-center justify-center"
          >
            {c.wordmark ? (
              <span className="text-[27px] font-semibold tracking-[0.14em] text-[#c79a3c]">
                {c.name}
              </span>
            ) : (
              <Image
                src={c.src!}
                alt={c.name}
                fill
                sizes="140px"
                style={{ transform: `scale(${c.scale ?? 1})` }}
                className="object-contain opacity-90 transition-opacity hover:opacity-100"
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
