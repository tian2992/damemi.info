export interface GuideEntry {
  id: string;
  title: string;
  summary: string;
}

export const guideEntries: GuideEntry[] = [
  {
    id: "que-es",
    title: "Qué es una petición de acceso",
    summary:
      "Una solicitud para que una autoridad entregue documentos o datos que ya tiene. No es una denuncia ni un pedido de que investiguen.",
  },
  {
    id: "activa-pasiva",
    title: "Transparencia activa y pasiva",
    summary:
      "La activa es lo que el Estado debe publicar solo. La pasiva es lo que entregas cuando presentas una solicitud.",
  },
  {
    id: "antes",
    title: "Antes de pedir",
    summary:
      "Busca en el catálogo de datos abiertos, en compras públicas y en el portal de transparencia. Si el archivo ya está, no abras un trámite.",
  },
  {
    id: "redactar",
    title: "Cómo redactar la solicitud",
    summary:
      "Nombre, contacto, documentos concretos, periodo y formato. En casi toda la región no tienes que explicar el motivo.",
  },
  {
    id: "plazos",
    title: "Plazos y días hábiles",
    summary:
      "Los días hábiles dejan fuera fines de semana y feriados. El silencio casi nunca te entrega la información: abre el recurso.",
  },
  {
    id: "recursos",
    title: "Si niegan o no responden",
    summary:
      "Hay recurso ante un órgano garante, tutela o amparo según el país. El plazo del recurso es más corto que el de la solicitud.",
  },
  {
    id: "datos-abiertos",
    title: "Cuándo alcanza con datos abiertos",
    summary:
      "Si el conjunto está en un catálogo oficial, en formato descargable, no hace falta una petición para obtenerlo.",
  },
  {
    id: "errores",
    title: "Errores que retrasan la respuesta",
    summary:
      "Pedir una opinión, un informe nuevo o «todo sobre un tema» empuja a la autoridad a devolverte la solicitud.",
  },
];
