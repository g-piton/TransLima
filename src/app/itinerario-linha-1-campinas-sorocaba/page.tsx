import type { Metadata } from "next";
import { ItineraryTabs } from "@/components/itinerary/itinerary-tabs";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Itinerário Linha 1 Campinas x Sorocaba",
  description:
    "Horários e paradas da linha executiva Campinas x Sorocaba, com abas de ida e volta."
};

type ItineraryPageProps = {
  searchParams: Promise<{
    sentido?: string;
  }>;
};

export default async function ItineraryPage({ searchParams }: ItineraryPageProps) {
  const params = await searchParams;
  const active = params.sentido === "volta" ? "inbound" : "outbound";

  return (
    <Section
      eyebrow="Itinerário"
      title="Linha 1 Campinas x Sorocaba"
      description="Consulte a timeline de horários por sentido. Confirme a disponibilidade antes do embarque."
    >
      <ItineraryTabs active={active} />
    </Section>
  );
}
