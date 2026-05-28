import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { company } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-translima-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/onibus.png"
          alt="Ônibus da Translima em movimento"
          fill
          priority
          className="object-cover opacity-[0.56]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-translima-black via-translima-black/78 to-translima-black/18" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-lg bg-white/12 px-3 py-2 text-sm font-bold text-white ring-1 ring-white/16">
            Transporte de passageiros desde 1993
          </p>
          <h1 className="text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl">
            Translima Campinas Transportes e Turismo
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            Fretamento empresarial, executivo, contínuo, eventual e turístico
            com conforto, segurança e pontualidade.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={company.whatsappHref} className="sm:w-auto">
              <MessageCircle aria-hidden size={18} />
              Chamar no WhatsApp
            </ButtonLink>
            <ButtonLink href="/contato#orcamento" variant="secondary">
              Pedir orçamento
              <ArrowRight aria-hidden size={18} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
