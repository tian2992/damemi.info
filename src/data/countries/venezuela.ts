import type { Country } from "../types";

export const country: Country = {
  slug: "venezuela",
  iso: "VE",
  name: "Venezuela",
  region: "andes",
  lawStatus: "limitada",
  summary:
    "Hay una ley de 2021, pero es estrecha: cubre «información de interés público», no todo lo que el Estado tiene. No hay portal nacional de solicitudes ni un garante autónomo verificado. El plazo escrito es de 20 días hábiles y, en la práctica, la respuesta sigue siendo irregular.",
  constitution:
    "Artículo 143 de la Constitución de la República Bolivariana de Venezuela, junto con los artículos 28, 51 y 141.",
  lawName:
    "Ley de Transparencia y Acceso a la Información de Interés Público, sancionada el 17 de septiembre de 2021 y publicada en la Gaceta Oficial Extraordinaria 6.649 del 20 de septiembre de 2021. Está en vigor, con un objeto más estrecho que las leyes de acceso de la región.",
  lawUrl:
    "https://www.asambleanacional.gob.ve/leyes/sancionadas/ley-de-transparencia-y-acceso-a-la-informacion-de-interes-publico",
  obligated:
    "Los sujetos que la ley de 2021 obliga respecto de información de interés público. No hay un padrón nacional de oficinas de acceso que se pueda consultar en un solo sitio.",
  deadline:
    "20 días hábiles desde la recepción de una petición que cumpla los requisitos de la ley (artículo 10).",
  deadlineShort: "20 días hábiles",
  deadlineDays: 20,
  extension:
    "Prórroga de hasta 20 días hábiles más si hay que revisar muchos documentos, las oficinas están separadas o hay que consultar a otro sujeto obligado.",
  silence:
    "La ley no crea un silencio positivo ni un garante que cobre el plazo. La falta de respuesta abre los recursos administrativos de la Ley Orgánica de Procedimientos Administrativos y la acción judicial del artículo 12.",
  appeal:
    "Recursos administrativos de la Ley Orgánica de Procedimientos Administrativos y acción judicial según el artículo 12 de la ley de 2021. No hay un tribunal especializado de acceso ni un plazo único de apelación verificado aparte de esa remisión.",
  oversight:
    "La ley de 2021 no crea un órgano garante autónomo que hayamos podido verificar. La Defensoría del Pueblo existe, pero no está confirmada como garante de este trámite.",
  requestPortalName: "No hay portal nacional de solicitudes",
  channels: ["Escrito ante la administración, con resultado incierto"],
  whoCanRequest:
    "Cualquier persona, según la Constitución y la ley de 2021, para información de interés público. No hay un formulario nacional.",
  steps: [
    "Busca primero si el indicador ya está en el Instituto Nacional de Estadística o en otra fuente oficial todavía en línea.",
    "No hay un formulario nacional. El escrito va a la oficina que tiene el documento, con constancia de recepción.",
    "Cita la ley de 2021 y el artículo 143. Describe documentos concretos, el periodo y un medio de notificación.",
    "El artículo 10 escribe 20 días hábiles, con una prórroga posible de otros 20. Guarda el sello: sin él no hay cómo contar.",
    "Si no responden, los recursos son los administrativos generales y la acción judicial. No hay un consejo de transparencia al que apelar.",
  ],
  tips: [
    "La ley no cubre cualquier papel del Estado: su objeto es la información de interés público. Una negativa puede discutir ese límite.",
    "Al revisar este directorio, datos.gob.ve y el sitio del Banco Central no respondieron de forma estable. No los trates como un trámite de solicitudes.",
    "Contrasta series cortadas con CEPALSTAT cuando la publicación local se interrumpe.",
  ],
  exemptions: [
    "La ley limita el acceso a la información de interés público y remite las reservas a su propio texto y a otras normas.",
    "No hay un catálogo público único de esas reservas ni un garante que las revise de oficio.",
  ],
  notes:
    "La Asamblea Nacional publica el texto de la ley de 2021. Eso no equivale a un portal de solicitudes. El certificado de bcv.org.ve fallaba al armar esta ficha: si lo usas, confirma el dominio antes de ingresar datos.",
  letterBasis:
    "el artículo 143 de la Constitución y la Ley de Transparencia y Acceso a la Información de Interés Público de 2021",
  letterWarning:
    "Hay ley y hay plazo escrito, pero no hay portal nacional ni garante autónomo verificado. La carta deja constancia ante la oficina que tenga el documento. No promete una respuesta.",
  requestLanguage: "es",
  resources: [
    {
      id: "ve-bcv",
      name: "Banco Central de Venezuela",
      url: "https://www.bcv.org.ve/",
      publisher: "Banco Central de Venezuela",
      description:
        "Indicadores monetarios y de precios que el banco alcanza a publicar. El certificado del sitio fallaba al armar este directorio: verifica el dominio.",
      topics: ["economia", "estadistica"],
      kind: "estadistica",
    },
    {
      id: "ve-ine",
      name: "Instituto Nacional de Estadística",
      url: "https://www.ine.gob.ve/",
      publisher: "Instituto Nacional de Estadística",
      description:
        "Sitio de estadísticas nacionales, publicaciones y referencias de censos. Varias series históricas no se mantienen al día.",
      topics: ["estadistica", "economia"],
      kind: "estadistica",
    },
  ],
  sources: [
    {
      label: "Ley de 2021 en la Asamblea Nacional",
      url: "https://www.asambleanacional.gob.ve/leyes/sancionadas/ley-de-transparencia-y-acceso-a-la-informacion-de-interes-publico",
    },
    { label: "Instituto Nacional de Estadística", url: "https://www.ine.gob.ve/" },
  ],
};
