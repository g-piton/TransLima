import {
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  MapPinned,
  Plane,
  Route,
  ShieldCheck,
  UsersRound
} from "lucide-react";

export const services = [
  {
    title: "Fretamento empresarial",
    description:
      "Transporte planejado para equipes, turnos e operações corporativas com regularidade e controle.",
    icon: Building2
  },
  {
    title: "Fretamento executivo",
    description:
      "Atendimento reservado para executivos, eventos de negócios e deslocamentos com maior privacidade.",
    icon: BriefcaseBusiness
  },
  {
    title: "Fretamento contínuo",
    description:
      "Rotas recorrentes para colaboradores, estudantes e contratos de longo prazo.",
    icon: Route
  },
  {
    title: "Fretamento eventual",
    description:
      "Viagens sob demanda para grupos, reuniões, confraternizações e agendas especiais.",
    icon: CalendarCheck
  },
  {
    title: "Transporte turístico",
    description:
      "Viagens regionais e interestaduais com foco em conforto, segurança e boa experiência.",
    icon: MapPinned
  },
  {
    title: "Excursões",
    description:
      "Ônibus, micro-ônibus e vans para grupos escolares, religiosos, familiares e corporativos.",
    icon: UsersRound
  },
  {
    title: "Aeroportos",
    description:
      "Traslados para Viracopos, Congonhas, Guarulhos e demais aeroportos da região.",
    icon: Plane
  },
  {
    title: "Linha executiva Campinas x Sorocaba",
    description:
      "Itinerário executivo entre Campinas e Sorocaba com horários organizados por sentido.",
    icon: ShieldCheck
  }
];
