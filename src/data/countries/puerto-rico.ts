import type { Country } from "../types";

export const country: Country = {
  slug: "puerto-rico",
  iso: "PR",
  name: "Puerto Rico",
  region: "caribe",
  lawStatus: "vigente",
  summary:
    "La Ley 141-2019, enmendada en 2025, regula el acceso a la información del gobierno de Puerto Rico. No es la FOIA federal de Estados Unidos. El portal de transparencia está en transparencia.pr.gov. El catálogo datos.pr.gov redirigía, el 5 de octubre de 2026, a un aviso de mantenimiento.",
  constitution:
    "El régimen es estatutario local. La FOIA de Estados Unidos no es el procedimiento para los expedientes del gobierno de Puerto Rico.",
  lawName:
    "Ley 141-2019, Ley de Transparencia y Procedimiento Expedito para el Acceso a la Información Pública, enmendada por la Ley 156-2025, que alargó los plazos de entrega. La política de datos abiertos está en la Ley 122-2019.",
  lawUrl: "https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/2-ingles/141-2019.pdf",
  obligated:
    "Entidades del gobierno de Puerto Rico, cada una con un Oficial de Información. PRITS opera el portal del ejecutivo.",
  deadline:
    "Tras la enmienda de 2025: 20 días laborables si el expediente tiene como máximo 300 páginas y menos de tres años; 30 días laborables si es más largo, más viejo o está en una oficina regional.",
  deadlineShort: "20 o 30 días laborables",
  deadlineDays: 20,
  extension:
    "Una prórroga de 20 días laborables, por escrito y dentro del plazo inicial.",
  silence:
    "El silencio es una denegatoria.",
  appeal:
    "Petición judicial ante el Tribunal de Primera Instancia, Sala de San Juan, dentro de 30 días improrrogables. No hay una comisión independiente de información.",
  oversight:
    "Oficial de Información de cada entidad. El control del incumplimiento es judicial. PRITS administra el portal.",
  oversightUrl: "https://www.prits.pr.gov/",
  requestPortalName: "Portal de Transparencia Pública",
  requestPortalUrl: "https://transparencia.pr.gov/",
  channels: ["Portal de Transparencia Pública", "Oficial de Información de la entidad"],
  whoCanRequest:
    "Cualquier persona, conforme a la Ley 141-2019. La solicitud y el seguimiento se hacen en español o en inglés, según el canal de la entidad.",
  steps: [
    "Revisa transparencia.pr.gov antes de pedir un expediente que ya esté publicado.",
    "Presenta la solicitud por ese portal o ante el Oficial de Información. Describe el récord, las fechas y el formato.",
    "El plazo depende del tamaño y de la antigüedad: 20 días laborables en el caso corto y 30 en el largo.",
    "Si hay prórroga, tiene que llegar por escrito dentro del plazo inicial y no pasa de otros 20 días laborables.",
    "Si niegan o no responden, la vía es el tribunal de San Juan, dentro de 30 días.",
  ],
  tips: [
    "No cites la FOIA federal como si fuera la ley de los archivos del gobierno de Puerto Rico.",
    "datos.pr.gov es la dirección legal del portal de datos abiertos, pero el 5 de octubre de 2026 redirigía a un aviso de mantenimiento de PRITS.",
  ],
  exemptions: [
    "Las exclusiones están en la Ley 141-2019 y sus enmiendas. Una negativa tiene que decir cuál aplica.",
  ],
  notes:
    "El texto citado de la Ley 156-2025 está en docs.pr.gov. Esta ficha no transcribe el listado completo de excepciones.",
  letterBasis:
    "Ley 141-2019, Ley de Transparencia y Procedimiento Expedito para el Acceso a la Información Pública, según enmendada",
  requestLanguage: "es",
  resources: [
    {
      id: "pr-portal",
      name: "Portal de Transparencia Pública",
      url: "https://transparencia.pr.gov/",
      publisher: "Gobierno de Puerto Rico",
      description: "Portal para consultar información pública y presentar solicitudes.",
      topics: ["transparencia"],
      kind: "solicitudes",
    },
    {
      id: "pr-datos",
      name: "datos.pr.gov",
      url: "https://datos.pr.gov/",
      publisher: "PRITS",
      description:
        "Dirección legal del portal de datos abiertos de la Ley 122-2019. El 5 de octubre de 2026 redirigía a un aviso de mantenimiento.",
      topics: ["transparencia", "economia"],
      kind: "datos",
    },
    {
      id: "pr-prits",
      name: "PRITS",
      url: "https://www.prits.pr.gov/",
      publisher: "Puerto Rico Innovation and Technology Service",
      description: "Agencia que opera los portales del ejecutivo, incluida la transparencia.",
      topics: ["transparencia", "registros"],
      kind: "datos",
    },
  ],
  sources: [
    {
      label: "Ley 141-2019",
      url: "https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/2-ingles/141-2019.pdf",
    },
    { label: "Portal de Transparencia", url: "https://transparencia.pr.gov/" },
  ],
};
