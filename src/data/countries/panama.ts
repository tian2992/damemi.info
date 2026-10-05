import type { Country } from "../types";

export const country: Country = {
  slug: "panama",
  iso: "PA",
  name: "Panamá",
  region: "centroamerica",
  lawStatus: "vigente",
  summary:
    "Panamá fue de los primeros países de la región en tener ley de transparencia, la Ley 6 de 2002. La autoridad de aplicación es la ANTAI y el plazo de respuesta que usa esa ley es de 30 días calendario, más largo que el de sus vecinos. Hay portal de datos abiertos y un sistema de compras.",
  constitution:
    "El artículo 43 de la Constitución reconoce el derecho de solicitar información de acceso público y el habeas data.",
  lawName: "Ley 6 del 22 de enero de 2002, que dicta normas de transparencia en la gestión pública.",
  lawUrl: "https://www.antai.gob.pa/wp-content/uploads/2015/04/Ley-6-de-22-enero-2002.pdf",
  obligated:
    "Instituciones del Estado, incluyendo gobiernos locales y entidades que manejen fondos públicos, en lo que la ley dispone.",
  deadline: "30 días calendario desde la presentación de la solicitud.",
  deadlineShort: "30 días calendario",
  deadlineDays: 30,
  extension:
    "Si la solicitud es compleja o extensa, dentro de los primeros 30 días deben avisar por escrito una extensión que no pase de otros 30 días calendario (artículo 7).",
  silence:
    "Vencidos los 30 días sin respuesta, la negativa se entiende producida y puedes acudir a la ANTAI y a la vía judicial.",
  appeal:
    "Queja o recurso ante la Autoridad Nacional de Transparencia y Acceso a la Información, y acciones judiciales, incluido el habeas data cuando corresponde.",
  oversight: "Autoridad Nacional de Transparencia y Acceso a la Información (ANTAI).",
  oversightUrl: "https://www.antai.gob.pa/",
  requestPortalName: "ANTAI Smart CID",
  requestPortalUrl: "https://smart.antai.gob.pa/",
  channels: [
    "ANTAI Smart CID, para las instituciones aliadas",
    "Escrito, correo o formulario de la institución",
    "Presencial, con constancia de recepción",
  ],
  whoCanRequest:
    "Cualquier persona puede solicitar información de acceso público o datos personales suyos. No hace falta una motivación elaborada.",
  steps: [
    "Revisa el portal de datos abiertos y PanamáCompra. Muchos contratos y conjuntos ya están ahí.",
    "Presenta la solicitud ante la institución que tiene el documento, con tu nombre, la descripción de la información y un medio de contacto.",
    "Pide constancia de recepción. El reloj es de 30 días calendario, no hábiles.",
    "Si no responden o reservan de más, acude a la ANTAI con copia de la solicitud y del silencio o de la negativa.",
  ],
  tips: [
    "No cuentes solo días de oficina: el plazo de la Ley 6 se cita en días calendario.",
    "La ley es de 2002 y se ha quedado corta frente a la Ley Modelo interamericana. Úsala igual: es la norma vigente.",
    "Separa el habeas data (tus datos personales) de un pedido de información pública sobre la gestión.",
  ],
  exemptions: [
    "Seguridad del Estado y relaciones exteriores.",
    "Investigaciones en curso.",
    "Secretos comerciales y datos personales de terceros.",
    "Información clasificada por ley especial.",
  ],
  notes:
    "La ANTAI es el referente institucional y su sitio respondía. Organizaciones regionales llevan años señalando que la Ley 6 necesita una actualización; mientras no se reemplace, el plazo y el recurso son los de esa ley.",
  letterBasis:
    "el artículo 43 de la Constitución Política y la Ley 6 de 22 de enero de 2002",
  requestLanguage: "es",
  resources: [
    {
      id: "pa-antai",
      name: "ANTAI",
      url: "https://www.antai.gob.pa/",
      publisher: "Autoridad Nacional de Transparencia y Acceso a la Información",
      description:
        "Autoridad de aplicación de la ley de transparencia. Las solicitudes a instituciones aliadas entran por Smart CID (smart.antai.gob.pa), no por el módulo de compras llamado «Solicitud de Información».",
      topics: ["transparencia"],
      kind: "solicitudes",
    },
    {
      id: "pa-datos",
      name: "Datos Abiertos de Panamá",
      url: "https://www.datosabiertos.gob.pa/",
      publisher: "Gobierno de Panamá",
      description:
        "Catálogo nacional de datos abiertos publicados por instituciones panameñas.",
      topics: ["transparencia", "economia", "estadistica"],
      kind: "datos",
    },
    {
      id: "pa-compras",
      name: "PanamáCompra",
      url: "https://www.panamacompra.gob.pa/",
      publisher: "Dirección General de Contrataciones Públicas",
      description:
        "Licitaciones y contratos del Estado. Conviene mirarlo antes de pedir un expediente de compra.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
    {
      id: "pa-inec",
      name: "INEC Panamá",
      url: "https://www.inec.gob.pa/",
      publisher: "Instituto Nacional de Estadística y Censo",
      description:
        "Estadísticas demográficas, económicas y sociales de la Contraloría General.",
      topics: ["estadistica", "economia"],
      kind: "estadistica",
    },
    {
      id: "pa-gestion",
      name: "Gestión Transparente Panamá",
      url: "https://gestiontransparentepanama.mef.gob.pa/",
      publisher: "Ministerio de Economía y Finanzas",
      description: "Ejecución presupuestaria y mapa de inversión pública.",
      topics: ["presupuesto", "economia"],
      kind: "presupuesto",
    },
    {
      id: "pa-smart",
      name: "ANTAI Smart CID",
      url: "https://smart.antai.gob.pa/",
      publisher: "ANTAI",
      description:
        "Cuenta digital para solicitudes de acceso a las instituciones aliadas. No cubre a todo el Estado y no es el módulo de quejas anónimas.",
      topics: ["transparencia"],
      kind: "solicitudes",
    },
  ],
  sources: [
    { label: "ANTAI", url: "https://www.antai.gob.pa/" },
    { label: "Datos Abiertos de Panamá", url: "https://www.datosabiertos.gob.pa/" },
  ],
};
