export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 0,
      nomeRemedio: "Neosaldina",
      quantidade: "1 unid",
      horario: "12h",
      duracao: "5 dias",
      sobre:
        "Esse remédio é para quando o gatinho necessitar de alívio para suas dores de cabeça fortes e enxaquecas.",
    },
    {
      id: 1,
      nomeRemedio: "Nurofen",
      quantidade: "200mg",
      horario: "24h",
      duracao: "5 dias",
      sobre: "",
    },
  ];
}

interface CreateCatRemedioRequest {
  nomeRemedio: string;
  quantidade: string;
  horario: string;
  duracao: string;
  sobre: string;
}

export async function createCatRemedio(_: CreateCatRemedioRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return;
}
