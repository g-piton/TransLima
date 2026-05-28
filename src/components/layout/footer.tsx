import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-translima-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="font-bold">Contato</p>
          <ul className="mt-5 space-y-4 text-sm text-slate-300">
            <li className="flex items-center justify-center gap-3">
              <MapPin aria-hidden size={18} className="text-translima-green" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Phone aria-hidden size={18} className="text-translima-green" />
              <span>{company.phone} | WhatsApp {company.whatsapp}</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Mail aria-hidden size={18} className="text-translima-green" />
              <span>{company.email}</span>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href={company.instagram}
              aria-label="Instagram da Translima"
              className="focus-ring rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <Instagram aria-hidden size={20} />
            </a>
            <a
              href={company.facebook}
              aria-label="Facebook da Translima"
              className="focus-ring rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <Facebook aria-hidden size={20} />
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-5 text-slate-400">
            Operação sujeita às normas dos órgãos regulamentadores competentes
            para transporte de passageiros.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Translima Campinas Transportes e Turismo.
        Todos os direitos reservados.
      </div>
    </footer>
  );
}
