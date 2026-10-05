import type { Country } from "../types";

export const country: Country = {
  slug: "mexico",
  iso: "MX",
  name: "México",
  region: "mexico",
  lawStatus: "vigente",
  summary:
    "Cualquier persona puede pedir documentos en poder de una autoridad sin explicar el motivo. Desde 2025 el INAI ya no existe: la solicitud sigue entrando por la Plataforma Nacional de Transparencia, ahora a cargo de la Secretaría Anticorrupción y Buen Gobierno, y el recurso contra el Ejecutivo federal lo resuelve Transparencia para el Pueblo.",
  constitution:
    "Artículo 6 de la Constitución Política de los Estados Unidos Mexicanos.",
  lawName:
    "Ley General de Transparencia y Acceso a la Información Pública, publicada en el Diario Oficial de la Federación el 20 de marzo de 2025. Abrogó la ley general de 2015 y la ley federal de 2016.",
  lawUrl: "https://dof.gob.mx/nota_detalle.php?codigo=5752569&fecha=20/03/2025",
  obligated:
    "Autoridades y órganos de la Unión, los estados y los municipios, partidos, fideicomisos y fondos públicos, y particulares que reciban o ejerzan recursos públicos o realicen actos de autoridad, respecto de esa información.",
  deadline: "20 días hábiles, contados desde el día siguiente a la presentación.",
  deadlineShort: "20 días hábiles",
  deadlineDays: 20,
  extension:
    "Hasta 10 días hábiles más, si el Comité de Transparencia aprueba razones fundadas y motivadas y te las notifican antes de que venza el plazo.",
  silence:
    "Si no responden, puedes presentar recurso de revisión. El silencio no te entrega la información: no es un silencio positivo.",
  appeal:
    "Recurso de revisión dentro de los 15 días hábiles siguientes a la notificación o al día en que venció el plazo. En la Administración Pública Federal lo resuelve Transparencia para el Pueblo, órgano desconcentrado de la Secretaría Anticorrupción y Buen Gobierno. En otros poderes, y en los estados que ya reformaron su marco, suele conocerlo la contraloría u órgano interno de control. Después puede caber un amparo.",
  oversight:
    "Transparencia para el Pueblo, para el recurso del Ejecutivo federal. La Plataforma Nacional la administra la Secretaría Anticorrupción y Buen Gobierno.",
  oversightUrl: "https://www.plataformadetransparencia.org.mx/",
  requestPortalName: "Plataforma Nacional de Transparencia",
  requestPortalUrl: "https://www.plataformadetransparencia.org.mx/",
  channels: [
    "Plataforma Nacional de Transparencia",
    "Unidad de Transparencia, en oficina",
    "Correo electrónico",
    "Correo postal o mensajería",
    "De palabra, si la unidad la recibe y la registra",
  ],
  whoCanRequest:
    "Cualquier persona, directamente o por medio de representante, viva o no en México. No hace falta demostrar un interés ni decir para qué quieres la información.",
  steps: [
    "Busca primero en el módulo de obligaciones de transparencia y en el catálogo nacional de datos abiertos. Si el documento ya está publicado, no necesitas solicitarlo.",
    "Identifica al sujeto obligado que tiene el registro: una secretaría, un gobierno estatal, un municipio, un partido o una universidad pública.",
    "Entra a la Plataforma Nacional de Transparencia, elige a ese sujeto y describe la información. El sistema asigna un folio. Si entregas la solicitud en papel o por correo, pide que la capturen y te den el acuse.",
    "Pide documentos o bases que ya existan, con periodo y formato. No pidas que la autoridad redacte un informe nuevo.",
    "Cuenta 20 días hábiles desde el día siguiente al folio. La prórroga, si la hay, tiene que avisarse antes de que ese plazo se agote y no pasa de 10 días hábiles.",
    "Si niegan el acceso, lo entregan incompleto o no contestan, presenta el recurso de revisión dentro de los 15 días hábiles. En el Ejecutivo federal corresponde a Transparencia para el Pueblo.",
  ],
  tips: [
    "La consulta electrónica no se cobra. Solo pueden cobrarte materiales de reproducción, envío o certificación, y deben decirte el costo antes de entregarte el documento.",
    "Si esa dependencia no tiene la información, debe orientarte. No tires el folio: sirve para el recurso.",
    "Los estados no migraron todos juntos. Antes de apelar, revisa si en esa entidad sigue un instituto de transparencia o si ya lo sustituyó una contraloría.",
    "Si el registro nace en hoja de cálculo, pídelo así. Un PDF escaneado casi nunca se puede reutilizar.",
  ],
  exemptions: [
    "Seguridad nacional, seguridad pública y relaciones internacionales, cuando pasan una prueba de daño.",
    "Datos personales confidenciales, salvo autorización de la persona titular o una excepción legal.",
    "Secretos comercial, industrial, fiscal, bancario, fiduciario u otros secretos previstos en ley.",
    "Información de investigaciones o procesos deliberativos en curso, mientras dura la causa.",
    "La clasificación tiene plazo. Una reserva no puede volverse permanente por costumbre.",
  ],
  notes:
    "El cambio de 2025 no cerró la Plataforma Nacional, pero partió el sistema de recursos. Transparencia para el Pueblo no sustituye, él solo, a todos los antiguos órganos garantes: otros poderes y varias entidades quedaron en sus órganos internos de control. Revisa la autoridad que corresponde a tu solicitud antes de dejar pasar los 15 días.",
  letterBasis:
    "el artículo 6 de la Constitución Política de los Estados Unidos Mexicanos y la Ley General de Transparencia y Acceso a la Información Pública",
  requestLanguage: "es",
  resources: [
    {
      id: "mx-pnt",
      name: "Plataforma Nacional de Transparencia",
      url: "https://www.plataformadetransparencia.org.mx/",
      publisher: "Secretaría Anticorrupción y Buen Gobierno",
      description:
        "Puerta de entrada para presentar solicitudes, darles seguimiento y consultar obligaciones de transparencia de los sujetos obligados.",
      topics: ["transparencia", "registros"],
      kind: "solicitudes",
    },
    {
      id: "mx-datos",
      name: "datos.gob.mx",
      url: "https://www.datos.gob.mx/",
      publisher: "Gobierno de México",
      description:
        "Catálogo nacional de datos abiertos del gobierno federal, con conjuntos descargables por institución y tema.",
      topics: ["transparencia", "economia", "estadistica"],
      kind: "datos",
    },
    {
      id: "mx-compras",
      name: "Compras MX",
      url: "https://comprasmx.buengobierno.gob.mx/",
      publisher: "Secretaría Anticorrupción y Buen Gobierno",
      description:
        "Plataforma de contrataciones de la Administración Pública Federal. Sustituye la consulta pública que antes se hacía en CompraNet e incluye históricos y datos abiertos de contratos.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
    {
      id: "mx-presupuesto",
      name: "Transparencia Presupuestaria",
      url: "https://www.transparenciapresupuestaria.gob.mx/",
      publisher: "Secretaría de Hacienda y Crédito Público",
      description:
        "Consulta del presupuesto federal, su ejercicio y las contrataciones abiertas asociadas al gasto.",
      topics: ["presupuesto", "economia"],
      kind: "presupuesto",
    },
    {
      id: "mx-inegi",
      name: "INEGI",
      url: "https://www.inegi.org.mx/",
      publisher: "Instituto Nacional de Estadística y Geografía",
      description:
        "Censos, encuestas, indicadores económicos y geografía. Es la fuente estadística oficial antes de pedir microdatos a otra dependencia.",
      topics: ["estadistica", "economia", "geoespacial", "salud", "educacion"],
      kind: "estadistica",
    },
  ],
  sources: [
    {
      label: "Decreto en el Diario Oficial de la Federación, 20 de marzo de 2025",
      url: "https://dof.gob.mx/nota_detalle.php?codigo=5752569&fecha=20/03/2025",
    },
    {
      label: "Texto de la Cámara de Diputados, 20 de marzo de 2025",
      url: "https://www.diputados.gob.mx/LeyesBiblio/ref/lgtaip/LGTAIP_orig_20mar25.pdf",
    },
    {
      label: "Ley General en el sitio de la Suprema Corte",
      url: "https://www.scjn.gob.mx/sites/default/files/marco_normativo/documeto/2025-04/Ley-General-de-Transparencia-y-Acceso-a-la-Informacion-Publica-20250320_1.pdf",
    },
  ],
};
