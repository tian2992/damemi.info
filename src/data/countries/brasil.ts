import type { Country } from "../types";

export const country: Country = {
  slug: "brasil",
  iso: "BR",
  name: "Brasil",
  region: "brasil",
  lawStatus: "vigente",
  summary:
    "La Lei de Acesso à Informação, Lei 12.527, obliga a los órganos públicos a responder en 20 días, prorrogables por 10. Desde el 30 de junio de 2026 los pedidos nuevos del Ejecutivo federal entran por Informa.BR, de la Controladoria-Geral da União. Los datos abiertos están en dados.gov.br y el gasto, en el Portal da Transparência.",
  constitution:
    "Artículo 5, inciso XXXIII, de la Constitución: toda persona tiene derecho a recibir de los órganos públicos información de su interés particular o de interés colectivo, que se prestará en el plazo de la ley, salvo lo imprescindible para la seguridad de la sociedad y del Estado.",
  lawName: "Lei nº 12.527, de 18 de novembro de 2011 (Lei de Acesso à Informação).",
  lawUrl: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm",
  obligated:
    "Órganos públicos de los tres poderes y de los niveles federal, estatal y municipal, tribunales de cuentas, y entidades privadas sin fines de lucro que reciban recursos públicos, en lo que toca a esos recursos.",
  deadline:
    "20 días, prorrogables por 10 más. La CGU los cuenta como días corridos, según la Lei 9.784/1999: se excluye el día del aviso y, si el vencimiento cae en fin de semana, feriado o jornada corta, pasa al día hábil siguiente.",
  deadlineShort: "20 días corridos + 10",
  deadlineDays: 20,
  extension:
    "Una única prórroga de 10 días, comunicada con razones al solicitante antes de que termine el plazo original.",
  silence:
    "No hay silencio positivo. A partir del día 30 se puede registrar la falta de respuesta ante la autoridad de monitoreo del órgano y, si eso falla, quejarse ante la CGU.",
  appeal:
    "Recurso dentro de los 10 días siguientes a la respuesta. En el Ejecutivo federal las instancias suben del superior jerárquico a la máxima autoridad del órgano y luego a la CGU, por Informa.BR. Después queda la vía judicial.",
  oversight:
    "Controladoria-Geral da União, para el Poder Ejecutivo federal. Los estados, municipios y otros poderes tienen sus propias autoridades de seguimiento.",
  oversightUrl: "https://www.gov.br/acessoainformacao/pt-br",
  requestPortalName: "Informa.BR",
  requestPortalUrl: "https://informabr.cgu.gov.br/",
  channels: [
    "Informa.BR, con cuenta gov.br, para el Ejecutivo federal",
    "Servicio de información del órgano estatal o municipal",
    "Presencial, en el SIC del órgano",
  ],
  whoCanRequest:
    "Cualquier persona, incluso quien no vive en Brasil ni tiene nacionalidad brasileña. No se exige explicar el motivo. La interfaz de Informa.BR está en portugués.",
  steps: [
    "Mira el Portal da Transparência y dados.gov.br. Buena parte del gasto, los convenios y los servidores ya están publicados.",
    "Si el documento no está, entra a Informa.BR para órganos del Ejecutivo federal, o al servicio de información del estado o municipio.",
    "Crea el registro que pida el sistema. Describe el documento, el periodo y el formato. No tienes que decir para qué lo quieres.",
    "Guarda el número de protocolo. El plazo es de 20 días corridos, con una prórroga posible de 10.",
    "Si la respuesta es incompleta, negativa o no llega, presenta recurso en el mismo sistema dentro de los 10 días.",
  ],
  tips: [
    "Puedes pedir en español si hace falta, pero el trámite y la respuesta salen en portugués. Una frase clara en portugués reduce idas y vueltas.",
    "Pide datos en CSV cuando existan así. El Portal da Transparência ya deja descargar varias bases sin solicitud.",
    "La LAI no obliga al órgano a producir un análisis nuevo. Pide registros existentes.",
    "Estados y municipios no están todos dentro de Informa.BR. Busca el servicio de información local.",
    "Un pedido cargado en Informa.BR entre las 19:00 y las 23:59 cuenta como presentado el día hábil siguiente.",
  ],
  exemptions: [
    "Información imprescindible para la seguridad de la sociedad o del Estado, con clasificación temporal.",
    "Datos personales sensibles, salvo hipótesis legal.",
    "Secretos comercial e industrial.",
    "Información de investigaciones en curso, cuando la divulgación las ponga en riesgo.",
  ],
  notes:
    "El e-SIC federal dejó de recibir pedidos nuevos en 2020. Fala.BR (falabr.cgu.gov.br) dejó de ser la puerta de la LAI el 30 de junio de 2026: sigue como canal de ouvidoria y de descargas históricas, no para un pedido nuevo. El sitio de Planalto a veces corta conexiones automatizadas; la URL canónica de la lei sigue siendo planalto.gov.br.",
  letterBasis:
    "o artigo 5º, inciso XXXIII, da Constituição e a Lei nº 12.527, de 18 de novembro de 2011 (Lei de Acesso à Informação)",
  requestLanguage: "pt",
  resources: [
    {
      id: "br-informa",
      name: "Informa.BR",
      url: "https://informabr.cgu.gov.br/",
      publisher: "Controladoria-Geral da União",
      description:
        "Plataforma para presentar pedidos de acceso a la información al Poder Ejecutivo federal y para recurrir la respuesta. Reemplazó a Fala.BR en ese trámite el 30 de junio de 2026.",
      topics: ["transparencia"],
      kind: "solicitudes",
    },
    {
      id: "br-dados",
      name: "dados.gov.br",
      url: "https://dados.gov.br/",
      publisher: "Governo Federal",
      description:
        "Catálogo federal de datos abiertos. El dominio datos.gov.br, en español, no existe: el oficial es dados.gov.br.",
      topics: ["transparencia", "economia", "salud", "educacion"],
      kind: "datos",
    },
    {
      id: "br-portal",
      name: "Portal da Transparência",
      url: "https://portaldatransparencia.gov.br/",
      publisher: "Controladoria-Geral da União",
      description:
        "Gasto federal, transferencias, convenios, servidores y sanciones, con descarga de datos.",
      topics: ["presupuesto", "transparencia", "economia"],
      kind: "presupuesto",
    },
    {
      id: "br-compras",
      name: "Compras.gov.br",
      url: "https://www.gov.br/compras/pt-br",
      publisher: "Governo Federal",
      description:
        "Entrada a las contrataciones públicas federales y a los paneles de compras.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
    {
      id: "br-ibge",
      name: "IBGE",
      url: "https://www.ibge.gov.br/",
      publisher: "Instituto Brasileiro de Geografia e Estatística",
      description:
        "Censos, cuentas nacionales, precios y cartografía estadística.",
      topics: ["estadistica", "economia", "geoespacial"],
      kind: "estadistica",
    },
    {
      id: "br-pncp",
      name: "Portal Nacional de Contratações Públicas",
      url: "https://pncp.gov.br/app/editais",
      publisher: "Governo Federal",
      description:
        "Editais y contratos publicados bajo la Lei 14.133 de contrataciones públicas.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
    {
      id: "br-tesouro",
      name: "Tesouro Transparente",
      url: "https://www.tesourotransparente.gov.br/",
      publisher: "Tesouro Nacional",
      description: "Biblioteca de datos de finanzas públicas federales.",
      topics: ["presupuesto", "economia"],
      kind: "presupuesto",
    },
    {
      id: "br-compras-dados",
      name: "Datos abiertos de Compras.gov.br",
      url: "https://www.gov.br/compras/pt-br/cidadao/portal-de-dados-abertos",
      publisher: "Governo Federal",
      description: "Bases y API de las contrataciones del gobierno federal.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
  ],
  sources: [
    {
      label: "Lei 12.527 en Planalto",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm",
    },
    { label: "Informa.BR", url: "https://informabr.cgu.gov.br/" },
    {
      label: "Preguntas frecuentes de la CGU sobre plazos",
      url: "https://www.gov.br/acessoainformacao/pt-br/perguntas-frequentes/aspectos-gerais",
    },
  ],
};
