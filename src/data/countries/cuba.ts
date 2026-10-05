import type { Country } from "../types";

export const country: Country = {
  slug: "cuba",
  iso: "CU",
  name: "Cuba",
  region: "caribe",
  lawStatus: "vigente",
  summary:
    "La Ley 168 de Transparencia y Acceso a la Información Pública se publicó en la Gaceta Oficial el 9 de enero de 2026 y entró en vigor unos 180 días después, alrededor del 8 de julio de 2026. El plazo escrito es de 15 días hábiles. No hay un portal nacional de solicitudes: cada organismo define su canal. La estadística sigue en la ONEI.",
  constitution:
    "Artículo 53 de la Constitución de 2019: derecho a solicitar y recibir del Estado información veraz, objetiva y oportuna, y a acceder a la que generen los órganos del Estado, conforme a las regulaciones establecidas.",
  lawName:
    "Ley 168/2024, De la Transparencia y el Acceso a la Información Pública, aprobada el 18 de julio de 2024 y publicada en la Gaceta Oficial ordinaria n.º 1 del 9 de enero de 2026.",
  lawUrl: "https://www.gacetaoficial.gob.cu/sites/default/files/goc-2026-o1_0.pdf",
  obligated:
    "Órganos y entidades del Estado que la ley declara sujetos obligados. MININT, FAR y MINREX llevan sistemas propios y rinden cuenta a la Asamblea Nacional.",
  deadline:
    "15 días hábiles, prorrogables por otros 15 si avisan antes de que venza el primero.",
  deadlineShort: "15 días hábiles + 15",
  deadlineDays: 15,
  extension:
    "Otros 15 días hábiles, con aviso previo al vencimiento del plazo inicial.",
  silence:
    "El silencio, o una respuesta ambigua, inexacta o incompleta sin justificación, después de los dos plazos, se tiene por una decisión restrictiva. Los plazos del recurso remiten a «la legislación vigente» y la ley no los fija.",
  appeal:
    "La ley remite los recursos a la legislación vigente y no fija un número de días. No hay una comisión independiente de información.",
  oversight:
    "Ministerio de Ciencia, Tecnología y Medio Ambiente (CITMA), Dirección de Gestión Documental y Archivos. No es un órgano autónomo.",
  oversightUrl: "https://www.citma.gob.cu/",
  requestPortalName: "No hay portal nacional de solicitudes",
  channels: [
    "El canal escrito que publique cada sujeto obligado",
    "Gaceta Oficial, para el texto de la ley",
  ],
  whoCanRequest:
    "La ley y el artículo 53 reconocen el derecho a las personas. No hay un formulario nacional verificado.",
  steps: [
    "Busca la norma en la Gaceta Oficial y la cifra en la ONEI antes de escribir.",
    "Identifica al sujeto obligado. No existe una ventanilla única.",
    "Presenta la solicitud por el canal escrito de ese organismo. Describe el documento, el periodo y un medio de notificación.",
    "Cuenta 15 días hábiles. Una prórroga de otros 15 tiene que avisarse antes.",
    "Si no responden, la ley trata ese silencio como decisión restrictiva, pero no publica un plazo propio de recurso.",
  ],
  tips: [
    "El certificado de https://www.onei.gob.cu/ estaba vencido. El sitio que respondía es http://www.onei.gob.cu/.",
    "La puesta en marcha es reciente. Que la ley esté vigente no significa que cada organismo ya tenga oficina y formulario.",
  ],
  exemptions: [
    "La ley admite restricciones. El catálogo concreto y los plazos de recurso no están fijados en un portal nacional.",
    "Los sistemas de MININT, FAR y MINREX se rigen aparte y reportan a la Asamblea Nacional.",
  ],
  notes:
    "La vigencia se cuenta 180 días calendario desde la publicación del 9 de enero de 2026. El manual de procedimientos del CITMA (Resolución 107/2025) corre en días hábiles y su fecha exacta, descontando feriados, no está calculada en esta ficha.",
  letterBasis:
    "el artículo 53 de la Constitución y la Ley 168/2024 de Transparencia y Acceso a la Información Pública",
  letterWarning:
    "La ley ya está en vigor, pero no hay un portal nacional. Presenta la carta en el organismo que tenga el documento y no cuentes con un recurso de días fijos: la ley no lo escribe.",
  requestLanguage: "es",
  resources: [
    {
      id: "cu-gaceta",
      name: "Gaceta Oficial",
      url: "https://www.gacetaoficial.gob.cu/es",
      publisher: "Ministerio de Justicia",
      description: "Leyes, decretos y otras normas publicadas por el Estado.",
      topics: ["justicia", "registros", "transparencia"],
      kind: "datos",
    },
    {
      id: "cu-onei",
      name: "ONEI",
      url: "http://www.onei.gob.cu/",
      publisher: "Oficina Nacional de Estadística e Información",
      description:
        "Anuario estadístico e indicadores oficiales. Usa este enlace en http: el certificado de la versión https estaba vencido.",
      topics: ["estadistica", "economia"],
      kind: "estadistica",
    },
  ],
  sources: [
    { label: "Gaceta Oficial", url: "https://www.gacetaoficial.gob.cu/es" },
    {
      label: "Ley 168/2024, Gaceta Oficial de enero de 2026",
      url: "https://www.gacetaoficial.gob.cu/sites/default/files/goc-2026-o1_0.pdf",
    },
  ],
};
