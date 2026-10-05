import type { Country } from "../types";

export const country: Country = {
  slug: "chile",
  iso: "CL",
  name: "Chile",
  region: "cono-sur",
  lawStatus: "vigente",
  summary:
    "La Ley 20.285 separa la transparencia activa, que los organismos publican solos, de la transparencia pasiva, que es tu solicitud. El plazo es de 20 días hábiles. La solicitud de la mayoría de los organismos entra por el Portal de Transparencia y el amparo lo resuelve el Consejo para la Transparencia.",
  constitution:
    "Artículo 8 de la Constitución: son públicos los actos y resoluciones de los órganos del Estado y sus fundamentos y procedimientos. El artículo 19 reconoce la vida privada, que es el límite de los datos personales.",
  lawName:
    "Ley 20.285 sobre acceso a la información pública, publicada en 2008 y en vigor desde abril de 2009.",
  lawUrl: "https://www.bcn.cl/leychile/navegar?idNorma=276363",
  obligated:
    "Ministerios, intendencias, gobiernos regionales, municipalidades, Fuerzas Armadas y de Orden, y empresas públicas, entre otros órganos de la administración del Estado. El Congreso y los tribunales tienen reglas propias de publicidad.",
  deadline: "20 días hábiles desde la recepción de la solicitud.",
  deadlineShort: "20 días hábiles",
  deadlineDays: 20,
  extension:
    "Hasta 10 días hábiles más, por una sola vez, cuando es difícil reunir la información. Deben avisarte antes de que venza el plazo y decir por qué.",
  silence:
    "Si no responden en plazo, puedes presentar amparo ante el Consejo para la Transparencia. El silencio no te entrega el documento.",
  appeal:
    "Amparo de acceso a la información ante el Consejo para la Transparencia, dentro de los 15 días hábiles desde la notificación de la negativa o desde que venció el plazo. Contra la decisión del Consejo cabe reclamo de ilegalidad ante la Corte de Apelaciones.",
  oversight: "Consejo para la Transparencia (CPLT). La Contraloría General de la República fiscaliza la legalidad del gasto, no sustituye al Consejo en un amparo de acceso.",
  oversightUrl: "https://www.consejotransparencia.cl/",
  requestPortalName: "Portal de Transparencia del Estado",
  requestPortalUrl: "https://www.portaltransparencia.cl/",
  channels: [
    "Portal de Transparencia",
    "Oficina de partes del órgano",
    "Correo electrónico que el órgano publique",
  ],
  whoCanRequest:
    "Cualquier persona, sin expresar causa. El portal pide una identificación para notificar; eso no es una autorización para preguntarte el motivo.",
  steps: [
    "Entra al Portal de Transparencia y revisa la transparencia activa del órgano: organigrama, compras, actos y subsidios ya deberían estar.",
    "Si falta el documento, presenta la solicitud en el mismo portal, eligiendo al órgano. También puedes hacerlo en oficina de partes.",
    "Describe la información, el periodo y el formato. No digas para qué la necesitas.",
    "Guarda el comprobante. Son 20 días hábiles, con una prórroga posible de 10.",
    "Si niegan, entregan incompleto o no responden, presenta amparo ante el Consejo para la Transparencia dentro de 15 días hábiles.",
  ],
  tips: [
    "El amparo es un formulario del propio Consejo, no un juicio con abogado obligatorio.",
    "Mercado Público y la Dirección de Presupuestos publican compras y ejecución que muchas solicitudes repiten.",
    "Pide el dato desagregado si ya existe desagregado. El órgano no está obligado a construir una estadística nueva, pero sí a entregar el registro que tiene.",
    "Datos personales de terceros se tarjan. Pide la versión pública del documento, no el expediente íntegro si solo te interesa el acto.",
  ],
  exemptions: [
    "Seguridad nacional, relaciones internacionales y defensa, cuando la ley permite reservar.",
    "Datos personales y vida privada.",
    "Secretos comerciales e industriales.",
    "Procesos de toma de decisión en curso, de forma temporal.",
    "Investigaciones que la publicidad pueda afectar.",
  ],
  notes:
    "El Portal de Transparencia es a la vez la vidriera de transparencia activa y el buzón de la solicitud. El Consejo para la Transparencia es otra institución: ahí se reclama, no se presenta el primer pedido.",
  letterBasis:
    "el artículo 8 de la Constitución Política y la Ley 20.285 sobre acceso a la información pública",
  requestLanguage: "es",
  resources: [
    {
      id: "cl-portal",
      name: "Portal de Transparencia",
      url: "https://www.portaltransparencia.cl/",
      publisher: "Consejo para la Transparencia",
      description:
        "Sitio para consultar transparencia activa y presentar solicitudes de acceso a los órganos de la administración.",
      topics: ["transparencia"],
      kind: "solicitudes",
    },
    {
      id: "cl-cplt",
      name: "Consejo para la Transparencia",
      url: "https://www.consejotransparencia.cl/",
      publisher: "Consejo para la Transparencia",
      description:
        "Órgano autónomo que resuelve los amparos de acceso a la información y publica sus decisiones.",
      topics: ["transparencia", "justicia"],
      kind: "solicitudes",
    },
    {
      id: "cl-datos",
      name: "datos.gob.cl",
      url: "https://datos.gob.cl/",
      publisher: "Gobierno de Chile",
      description: "Catálogo nacional de datos abiertos.",
      topics: ["transparencia", "economia", "transporte", "salud"],
      kind: "datos",
    },
    {
      id: "cl-mercado",
      name: "Mercado Público",
      url: "https://www.mercadopublico.cl/",
      publisher: "ChileCompra",
      description: "Licitaciones y órdenes de compra de los organismos públicos.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
    {
      id: "cl-dipres",
      name: "Dirección de Presupuestos",
      url: "https://www.dipres.gob.cl/",
      publisher: "Ministerio de Hacienda",
      description: "Ley de presupuestos, ejecución y reportes fiscales.",
      topics: ["presupuesto", "economia"],
      kind: "presupuesto",
    },
    {
      id: "cl-ine",
      name: "INE Chile",
      url: "https://www.ine.gob.cl/",
      publisher: "Instituto Nacional de Estadísticas",
      description: "Censos, encuestas de empleo, precios y estadísticas vitales.",
      topics: ["estadistica", "economia"],
      kind: "estadistica",
    },
    {
      id: "cl-presupuesto",
      name: "Presupuesto Abierto",
      url: "https://presupuestoabierto.gob.cl/",
      publisher: "Dirección de Presupuestos",
      description:
        "Presupuesto del gobierno central y ejecución mensual, en un explorador público.",
      topics: ["presupuesto", "economia"],
      kind: "presupuesto",
    },
  ],
  sources: [
    { label: "Ley 20.285 en la Biblioteca del Congreso", url: "https://www.bcn.cl/leychile/navegar?idNorma=276363" },
    { label: "Consejo para la Transparencia", url: "https://www.consejotransparencia.cl/" },
  ],
};
