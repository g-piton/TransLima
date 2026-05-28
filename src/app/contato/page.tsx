import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Translima por telefone, WhatsApp, e-mail ou formulário."
};

export default function ContactPage() {
  return (
    <Section
      id="orcamento"
      className="bg-translima-light"
      eyebrow="Orçamento"
      title="Conte sobre o trajeto"
      description="Com origem, destino, data e tipo de serviço, o atendimento consegue retornar com mais agilidade."
    >
      <QuoteForm />
    </Section>
  );
}
