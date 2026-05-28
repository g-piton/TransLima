export const itinerary = {
  outbound: {
    label: "Ida",
    route: "Campinas x Sorocaba",
    stops: [
      { time: "06:00", place: "Campinas", detail: "Saída programada" },
      { time: "06:35", place: "Indaiatuba", detail: "Ponto de apoio" },
      { time: "07:15", place: "Itu", detail: "Embarque intermediário" },
      { time: "08:00", place: "Sorocaba", detail: "Chegada prevista" }
    ]
  },
  inbound: {
    label: "Volta",
    route: "Sorocaba x Campinas",
    stops: [
      { time: "17:30", place: "Sorocaba", detail: "Saída programada" },
      { time: "18:10", place: "Itu", detail: "Ponto de apoio" },
      { time: "18:50", place: "Indaiatuba", detail: "Embarque intermediário" },
      { time: "19:30", place: "Campinas", detail: "Chegada prevista" }
    ]
  }
};
