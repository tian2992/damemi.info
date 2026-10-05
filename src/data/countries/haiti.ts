import type { Country } from "../types";

export const country: Country = {
  slug: "haiti",
  iso: "HT",
  name: "Haití",
  region: "caribe",
  lawStatus: "limitada",
  summary:
    "La Constitución de 1987 obliga al Estado a publicar las leyes, decretos y tratados en francés y en creole. Eso es publicidad de las normas, no un derecho a pedir expedientes con plazo y recurso. No hay portal nacional de solicitudes. La estadística oficial está en el Institut Haïtien de Statistique et d'Informatique.",
  constitution:
    "Artículo 40 de la Constitución de 1987: obligación del Estado de dar publicidad a las leyes, órdenes, decretos, acuerdos internacionales y tratados en ambos idiomas oficiales.",
  lawName:
    "No hay una ley general de acceso a la información con procedimiento verificable.",
  obligated:
    "El artículo 40 obliga a publicar normas. No crea, por sí solo, sujetos obligados a entregar expedientes.",
  deadline: "No hay plazo de acceso a documentos.",
  deadlineShort: "Sin trámite de acceso",
  deadlineDays: null,
  extension: "No aplica.",
  silence: "No hay un silencio administrativo de acceso porque no hay procedimiento.",
  appeal: "No hay órgano de apelación de solicitudes de información.",
  oversight: "No hay órgano garante de acceso a la información.",
  requestPortalName: "No hay portal de solicitudes",
  channels: ["Consulta del IHSI para estadísticas oficiales"],
  whoCanRequest:
    "No hay un procedimiento que defina quién puede pedir un expediente administrativo.",
  steps: [
    "Si lo que buscas es una cifra, entra al sitio del IHSI (ihsi.gouv.ht).",
    "Si lo que buscas es una ley, busca la publicación oficial en francés o en creole. El artículo 40 exige los dos idiomas.",
    "No hay un tercer paso de solicitud con acuse. Una carta no abre un plazo legal.",
  ],
  tips: [
    "El dominio www.ihsi.ht redirige a un sitio que no es el instituto. Usa ihsi.gouv.ht.",
    "Una carta, si decides enviarla, tiene más sentido en francés o en creole que en español.",
  ],
  exemptions: [
    "Sin ley de acceso no hay un catálogo de reservas. Tampoco hay un catálogo de lo que sí puedes exigir.",
  ],
  notes:
    "Incluimos a Haití para no dejar el mapa en blanco ni inventar un trámite. La herramienta real que pudimos verificar es el instituto de estadística.",
  letterBasis:
    "l'article 40 de la Constitution de 1987, qui impose la publicité des lois et des actes de l'État",
  letterWarning:
    "No hay una ley de acceso ni un portal de solicitudes. La carta, en francés, solo deja constancia. No crea un plazo.",
  requestLanguage: "fr",
  resources: [
    {
      id: "ht-ihsi",
      name: "IHSI",
      url: "https://ihsi.gouv.ht/",
      publisher: "Institut Haïtien de Statistique et d'Informatique",
      description:
        "Cuentas nacionales, precios y otras estadísticas oficiales. Es el sitio del instituto: no uses ihsi.ht, que no lleva al IHSI.",
      topics: ["estadistica", "economia"],
      kind: "estadistica",
    },
    {
      id: "ht-haitidata",
      name: "HaitiData",
      url: "https://haitidata.org/",
      publisher: "Centre National de l'Information Géo-Spatiale",
      description:
        "Capas y mapas del territorio, riesgos y estudios socioeconómicos. El sitio del CNIGS es cnigs.ht.",
      topics: ["geoespacial", "ambiente"],
      kind: "datos",
    },
  ],
  sources: [
    { label: "IHSI", url: "https://ihsi.gouv.ht/" },
    { label: "HaitiData", url: "https://haitidata.org/" },
  ],
};
