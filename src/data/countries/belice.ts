import type { Country } from "../types";

export const country: Country = {
  slug: "belice",
  iso: "BZ",
  name: "Belice",
  region: "centroamerica",
  lawStatus: "vigente",
  summary:
    "Belice tiene una Freedom of Information Act: la solicitud se presenta por escrito, en inglés, ante la autoridad pública que guarda el documento. No hay un portal nacional de datos abiertos comparable al de los países vecinos, y la estadística oficial está concentrada en el Statistical Institute of Belize.",
  constitution:
    "La vía ordinaria es la Freedom of Information Act, no un artículo constitucional autónomo de acceso a expedientes.",
  lawName:
    "Freedom of Information Act, Chapter 13, de 1994. El texto usado es la edición revisada de 2020, con el derecho sustantivo al 31 de diciembre de 2020.",
  lawUrl:
    "https://www.agm.gov.bz/uploads/laws/63976dad2084d_Cap_13_Freedom_of_Information_Act.pdf",
  obligated:
    "Ministerios, departamentos y otras autoridades públicas comprendidas en la ley.",
  deadline:
    "Si la solicitud es escrita, invoca la ley y se entrega en la dirección habilitada, la decisión debe notificarse tan pronto como sea practicable y a más tardar dos semanas después del día de recepción (sección 16). Si pasan 14 días sin aviso, la solicitud se tiene por denegada el último día de ese periodo, a efectos del Ombudsman (sección 37).",
  deadlineShort: "2 semanas",
  deadlineDays: 14,
  extension:
    "El acceso puede diferirse (sección 18). Pide que cualquier ampliación quede por escrito.",
  silence:
    "A los 14 días sin aviso, la ley trata la solicitud como denegada para poder ir al Ombudsman. No entrega el documento.",
  appeal:
    "Revisión interna del ministro o del principal officer dentro de 28 días. Si la niegan o no hay resultado en 14 días, solicitud al Ombudsman dentro de 21 días. De la decisión del Ombudsman cabe apelación a la Supreme Court.",
  oversight:
    "Office of the Ombudsman. No hay un consejo de transparencia al estilo chileno.",
  oversightUrl: "https://ombudsman.gov.bz/freedom-of-information-act/",
  requestPortalName: "Solicitud escrita a la autoridad pública",
  channels: ["Escrito en inglés dirigido al ministerio o departamento", "Entrega presencial o el canal que publique la autoridad"],
  whoCanRequest:
    "Una persona puede solicitar acceso a documentos en poder de una autoridad pública. La solicitud y el seguimiento se hacen en inglés.",
  steps: [
    "Identifica el ministerio o departamento que tiene el documento. No existe un formulario nacional único.",
    "Redacta la solicitud en inglés: tu nombre, un medio de contacto, y una descripción del documento o del expediente, con fechas.",
    "Entrégala por el canal oficial de esa autoridad y conserva copia y constancia de recepción.",
    "Si necesitas cifras ya publicadas, revisa primero al Statistical Institute of Belize.",
    "Si te niegan el acceso o no deciden, usa el mecanismo de revisión de la Freedom of Information Act y guarda toda la correspondencia.",
  ],
  tips: [
    "No envíes la carta solo en español. La administración trabaja en inglés.",
    "Describe el documento, no una opinión ni un pedido de que investiguen un hecho.",
    "El ecosistema de datos abiertos es delgado. Muchas veces la estadística del SIB es la única base reutilizable.",
  ],
  exemptions: [
    "Documentos de gabinete y deliberaciones internas, en los supuestos de la ley.",
    "Seguridad, relaciones internacionales y cumplimiento de la ley.",
    "Privacidad de terceras personas y secretos comerciales.",
    "Documentos cuya divulgación la ley declara contraria al interés público.",
  ],
  notes:
    "Al armar este directorio, el portal general belize.gov.bz no respondía de forma estable. El instituto de estadística sí. Trata la Freedom of Information Act como la norma de trabajo y contrasta el plazo con una copia oficial de la ley antes de contar los días.",
  letterBasis: "the Freedom of Information Act, Chapter 13 of the Laws of Belize",
  requestLanguage: "en",
  resources: [
    {
      id: "bz-sib",
      name: "Statistical Institute of Belize",
      url: "https://sib.org.bz/",
      publisher: "Statistical Institute of Belize",
      description:
        "Censos, precios, empleo y cuentas nacionales. Es el acervo estadístico oficial más estable del país.",
      topics: ["estadistica", "economia"],
      kind: "estadistica",
    },
    {
      id: "bz-procurement",
      name: "Procurement Portal",
      url: "https://procurement.gov.bz/",
      publisher: "Government of Belize",
      description: "Licitaciones, avisos de adjudicación y documentos estándar de compra.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
    {
      id: "bz-mof",
      name: "Ministry of Finance",
      url: "https://mof.gov.bz/",
      publisher: "Ministry of Finance",
      description: "Estimaciones y discursos de presupuesto. Los documentos más visibles al revisar esta ficha eran del ejercicio 2024-2025.",
      topics: ["presupuesto", "economia"],
      kind: "presupuesto",
    },
    {
      id: "bz-elections",
      name: "Elections and Boundaries Department",
      url: "https://elections.gov.bz/",
      publisher: "Elections and Boundaries Department",
      description: "Avisos, resultados y consulta de centros de votación.",
      topics: ["elecciones"],
      kind: "datos",
    },
  ],
  sources: [
    {
      label: "Freedom of Information Act, Chapter 13",
      url: "https://www.agm.gov.bz/uploads/laws/63976dad2084d_Cap_13_Freedom_of_Information_Act.pdf",
    },
    { label: "Ombudsman", url: "https://ombudsman.gov.bz/freedom-of-information-act/" },
    { label: "Statistical Institute of Belize", url: "https://sib.org.bz/" },
  ],
};
