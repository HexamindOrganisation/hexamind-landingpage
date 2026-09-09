import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

// `scale` visually balances logos whose source files have different amounts of
// internal padding, so they read at a similar optical size in the row.
const clients = [
  { name: "BNP Paribas", src: "/clients/bnp.webp", scale: 1 },
  { name: "IRSN", src: "/clients/irsn.png", scale: 1.35 },
  { name: "Voltalis", src: "/clients/voltalis.png", scale: 1.45 },
  { name: "Crédit Agricole", src: "/clients/ca.png", scale: 1.15 },
  { name: "Cdiscount", src: "/clients/cdiscount.png", scale: 1 },
  { name: "SGFGAS", src: "/clients/sgfgas.jpg", scale: 1.3 },
  { name: "Les Nouveaux Constructeurs", src: "/clients/nouveaux-constructeurs.png", scale: 1.35 },
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
          <div key={c.name} className="relative h-16 w-[140px]">
            <Image
              src={c.src}
              alt={c.name}
              fill
              sizes="140px"
              style={{ transform: `scale(${c.scale})` }}
              className="object-contain opacity-90 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
