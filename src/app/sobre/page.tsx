import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Sobre e história",
  description:
    "Conheça a história da Translima Campinas Transportes e Turismo, no transporte de passageiros desde 1993."
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="Sobre"
        title="Uma trajetória dedicada ao transporte de passageiros"
        description="Desde 1993, a Translima Campinas Transportes e Turismo atua com serviços de transporte eventual, contínuo, executivo e turístico para diferentes públicos."
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/onibus.png"
              alt="Veículo de transporte em operação"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              A empresa atende colaboradores, executivos, estudantes, excursões
              e aeroportos, sempre com operação focada em conforto, segurança e
              pontualidade.
            </p>
            <p>
              A frota contempla ônibus, vans e micro-ônibus, permitindo adaptar
              o serviço ao tamanho do grupo, ao roteiro e à frequência do
              contrato.
            </p>
            <p>
              O compromisso é oferecer um transporte confiável para empresas,
              grupos e instituições que precisam se deslocar com organização.
            </p>
          </div>
        </div>
      </Section>
      <Section className="bg-translima-light" title="Linha do tempo">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["1993", "Início da atuação no transporte de passageiros."],
            ["Expansão", "Atendimento a contratos empresariais, turismo e eventos."],
            ["Hoje", "Operação com ônibus, micro-ônibus e vans para Campinas e região."]
          ].map(([year, text]) => (
            <article key={year} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-black text-translima-dark">{year}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
