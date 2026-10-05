import type { Country } from "../types";

export const country: Country = {
  slug: "bolivia",
  iso: "BO",
  name: "Bolivia",
  region: "andes",
  lawStatus: "en-tramite",
  summary:
    "La Constitución reconoce el derecho a solicitar y recibir información. No hay, al cierre de esta ficha, una ley general sancionada y publicada. El 27 de agosto de 2026 el Senado aprobó el proyecto 066/2025-2026 y lo envió a Diputados. Mientras tanto, el acceso depende de cada entidad, de decretos viejos del Ejecutivo y de la plataforma gob.bo.",
  constitution:
    "Artículos 21 numeral 6, 106 y 237 de la Constitución Política del Estado: derecho a la información, a solicitarla y recibirla, y deber de transparencia de la administración.",
  lawName:
    "No hay ley general vigente verificada. El Proyecto de Ley 066/2025-2026 de acceso a la información fue aprobado por el Senado el 27 de agosto de 2026 y remitido a la Cámara de Diputados. Sigue en pie, como norma limitada del Ejecutivo, el Decreto Supremo 28168 de 2005.",
  lawUrl:
    "https://abi.bo/senado-aprueba-proyecto-de-ley-de-acceso-a-la-informacion-y-lo-remite-a-diputados/",
  obligated:
    "El proyecto aprobado en el Senado alcanzaría a órganos del Estado, empresas y universidades públicas y a quien administre recursos públicos. Hoy ese alcance no es ley.",
  deadline:
    "No hay plazo de una ley general. Para el Ejecutivo, el Decreto Supremo 28168 de 2005 pone la información a disposición en un máximo de 15 días hábiles, salvo negativa justificada. Ese número no se extiende, por ese decreto, al Legislativo, al Judicial ni al órgano electoral.",
  deadlineShort: "15 días hábiles solo en el Ejecutivo",
  deadlineDays: null,
  extension:
    "El Decreto Supremo 28168 no escribe una prórroga del plazo inicial de 15 días hábiles. El proyecto de ley todavía no es norma y no presta sus plazos.",
  silence:
    "Fuera del Ejecutivo no hay un silencio con efecto definido. En el Ejecutivo, si no hay respuesta, hay negativa indebida o restricción ilegal, cabe queja ante el superior o el Defensor del Pueblo.",
  appeal:
    "No hay órgano garante creado por una ley de acceso. La Defensoría del Pueblo y los jueces pueden ser vías de hecho, no un recurso administrativo uniforme.",
  oversight:
    "El Viceministerio de Transparencia Institucional, en el Ministerio de Justicia, participa en la política de transparencia. No es un tribunal de acceso.",
  requestPortalName: "gob.bo y la entidad que tenga el documento",
  requestPortalUrl: "https://www.gob.bo/",
  channels: [
    "Sitio o ventanilla de la entidad",
    "Plataforma gob.bo, para trámites e información que la entidad haya cargado",
  ],
  whoCanRequest:
    "La Constitución reconoce el derecho a toda persona, sin que el proyecto de ley —todavía no vigente— exija explicar los motivos. Hoy la entidad puede pedir requisitos que la Constitución no pide.",
  steps: [
    "Busca el dato en gob.bo, en el INE y en el SICOES antes de escribir.",
    "Si no está, presenta un escrito a la entidad citando los artículos 21.6 y 237 de la Constitución. Describe documentos, no opiniones.",
    "Guarda sello o correo de recepción. No hay un folio nacional.",
    "Si escribes al Ejecutivo, el Decreto Supremo 28168 habla de 15 días hábiles. No uses ese número con el Legislativo, el Judicial o el órgano electoral, y no uses los plazos del proyecto.",
    "Sigue el trámite legislativo del proyecto 066 si necesitas saber si el plazo y el recurso ya nacieron.",
  ],
  tips: [
    "El Decreto Supremo 5340, de febrero de 2025, creó gob.bo como plataforma de páginas institucionales, trámites, datos abiertos y observatorios, a cargo de la AGETIC.",
    "SICOES es la fuente de contrataciones. Pide el expediente solo para lo que el sistema no muestra.",
    "Cuando alguien cite «la nueva ley», pide la fecha de publicación en la Gaceta Oficial. La aprobación del Senado no alcanza.",
  ],
  exemptions: [
    "La Constitución admite límites legales. Sin ley general, esos límites quedan dispersos en normas sectoriales.",
    "Datos personales y secretos de Estado aparecen en la práctica aunque no haya un catálogo único de reservas.",
  ],
  notes:
    "Esta ficha cierra el 5 de octubre de 2026. Lo último verificado es la remisión del proyecto a Diputados, el 27 de agosto de 2026. Si la ley se promulga después, el plazo y el recurso de esta página quedan desactualizados a propósito: no adelantamos el texto de un proyecto.",
  letterBasis:
    "los artículos 21 numeral 6 y 237 de la Constitución Política del Estado",
  letterWarning:
    "No hay una ley general en vigor. En el Ejecutivo existe el Decreto Supremo 28168, con 15 días hábiles. Fuera de ese ámbito la carta se apoya en la Constitución y no tiene un plazo de ley.",
  requestLanguage: "es",
  resources: [
    {
      id: "bo-gob",
      name: "gob.bo",
      url: "https://www.gob.bo/",
      publisher: "AGETIC",
      description:
        "Plataforma digital del Estado creada por el Decreto Supremo 5340 de 2025: sitios institucionales, trámites, datos abiertos y observatorios.",
      topics: ["transparencia", "registros"],
      kind: "datos",
    },
    {
      id: "bo-sicoes",
      name: "SICOES",
      url: "https://www.sicoes.gob.bo/",
      publisher: "Sistema de Contrataciones Estatales",
      description:
        "Contrataciones del Estado. Es la fuente para seguir compras públicas sin una solicitud.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
    {
      id: "bo-ine",
      name: "INE Bolivia",
      url: "https://www.ine.gob.bo/",
      publisher: "Instituto Nacional de Estadística",
      description:
        "Censos e indicadores demográficos, económicos y sociales.",
      topics: ["estadistica", "economia"],
      kind: "estadistica",
    },
    {
      id: "bo-agetic",
      name: "AGETIC",
      url: "https://agetic.gob.bo/",
      publisher: "Agencia de Gobierno Electrónico y Tecnologías de la Información y Comunicación",
      description:
        "Administra gob.bo y publica lineamientos de datos abiertos y trámites digitales.",
      topics: ["transparencia", "registros"],
      kind: "datos",
    },
    {
      id: "bo-datos",
      name: "Datos Abiertos del Estado",
      url: "https://datos.gob.bo/",
      publisher: "AGETIC",
      description:
        "Catálogo reutilizable previsto por el Decreto Supremo 5340. El dominio respondía al revisar esta ficha, a veces con bloqueo a visitas automatizadas.",
      topics: ["transparencia", "economia"],
      kind: "datos",
    },
    {
      id: "bo-presupuesto",
      name: "Presupuesto Abierto",
      url: "https://abierto.economiayfinanzas.gob.bo/",
      publisher: "Ministerio de Economía y Finanzas Públicas",
      description:
        "Explorador del presupuesto del Estado, con ejecución e historia desde 2005 y descarga.",
      topics: ["presupuesto", "economia"],
      kind: "presupuesto",
    },
    {
      id: "bo-sigep",
      name: "SIGEP",
      url: "https://sigep.gob.bo/",
      publisher: "Ministerio de Economía y Finanzas Públicas",
      description:
        "Sistema de gestión del presupuesto. La consulta ciudadana más directa está en Presupuesto Abierto.",
      topics: ["presupuesto"],
      kind: "presupuesto",
    },
    {
      id: "bo-oep",
      name: "Órgano Electoral Plurinacional",
      url: "https://www.oep.org.bo/",
      publisher: "Órgano Electoral Plurinacional",
      description: "Procesos electorales y organización del voto.",
      topics: ["elecciones"],
      kind: "datos",
    },
  ],
  sources: [
    {
      label: "ABI: el Senado aprueba el proyecto y lo remite a Diputados, 27 de agosto de 2026",
      url: "https://abi.bo/senado-aprueba-proyecto-de-ley-de-acceso-a-la-informacion-y-lo-remite-a-diputados/",
    },
    {
      label: "Proyectos de ley en revisión",
      url: "https://diputados.gob.bo/proyectos-de-ley-en-revision/",
    },
    { label: "gob.bo", url: "https://www.gob.bo/" },
  ],
};
