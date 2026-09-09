import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const clients = [
  { name: "BNP Paribas", src: "/clients/bnp.webp" },
  { name: "IRSN", src: "/clients/irsn.png" },
  { name: "Voltalis", src: "/clients/voltalis.png" },
  { name: "Crédit Agricole", src: "/clients/ca.png" },
  { name: "Cdiscount", src: "/clients/cdiscount.png" },
  { name: "SGFGAS", src: "/clients/sgfgas.jpg" },
  { name: "Les Nouveaux Constructeurs", src: "/clients/nouveaux-constructeurs.png" },
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
          <div key={c.name} className="relative h-14 w-[130px]">
            <Image
              src={c.src}
              alt={c.name}
              fill
              sizes="130px"
              className="object-contain opacity-90 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
