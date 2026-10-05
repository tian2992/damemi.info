import type { Country } from "../types";

export const country: Country = {
  slug: "colombia",
  iso: "CO",
  name: "Colombia",
  region: "andes",
  lawStatus: "vigente",
  summary:
    "Hay dos caminos que la gente mezcla. El derecho de petición sirve para casi cualquier solicitud respetuosa a una autoridad. La Ley 1712 es la ley de transparencia y acceso a información pública, con su propio plazo de 10 días hábiles. Los datos abiertos están en datos.gov.co y las compras, en Colombia Compra Eficiente.",
  constitution:
    "Artículos 20, 23 y 74 de la Constitución: libertad de informar y recibir información, derecho de petición y acceso a documentos públicos.",
  lawName:
    "Ley 1712 de 2014, de transparencia y del derecho de acceso a la información pública, y Ley 1755 de 2015, que regula el derecho de petición.",
  lawUrl: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882",
  obligated:
    "Entidades públicas de todas las ramas y niveles, y personas privadas que cumplan funciones públicas o administren recursos públicos, respecto de esa información.",
  deadline:
    "Ley 1712: 10 días hábiles. Derecho de petición de documentos o información: 10 días hábiles. Peticiones generales: 15 días hábiles. Consultas entre autoridades: hasta 30 días hábiles.",
  deadlineShort: "10 días hábiles",
  deadlineDays: 10,
  extension:
    "Si el término no alcanza, la autoridad debe avisar antes de que venza, explicar la demora y fijar un plazo nuevo que no supere el doble del original.",
  silence:
    "En peticiones de documentos e información, la Ley 1755 trata la falta de respuesta en 10 días como aceptación: las copias deben entregarse en los 3 días siguientes. En el derecho de petición general, de 15 días, no hay silencio positivo. La tutela sigue siendo la vía judicial práctica.",
  appeal:
    "Reposición ante la misma entidad y, cuando proceda, apelación. En la práctica, la tutela ante un juez es la vía rápida si niegan información pública o no responden. La Procuraduría vigila la conducta del servidor; no sustituye al juez.",
  oversight:
    "No hay un solo instituto de transparencia. La Secretaría de Transparencia de la Presidencia orienta la política, la Procuraduría disciplina y los jueces protegen el derecho por tutela.",
  oversightUrl: "https://www.secretariatransparencia.gov.co/",
  requestPortalName: "Cada entidad, y la Secretaría de Transparencia como referencia",
  requestPortalUrl: "https://www.secretariatransparencia.gov.co/",
  channels: [
    "Formulario o correo de la entidad",
    "Ventanilla presencial",
    "Derecho de petición por escrito",
  ],
  whoCanRequest:
    "Cualquier persona, sin necesidad de actuar por medio de abogado ni de explicar el motivo cuando pide información pública.",
  steps: [
    "Busca el conjunto en datos.gov.co o el proceso en el SECOP, desde Colombia Compra Eficiente. Si ya está publicado de forma completa, no hace falta pedirlo.",
    "Si es un documento de una entidad, presenta la solicitud ante esa entidad. Puedes titularla como solicitud de acceso a la información pública, Ley 1712, o como derecho de petición de documentos. El plazo de documentos es de 10 días hábiles en ambos casos.",
    "Incluye tu nombre, un medio de notificación y una descripción de los documentos, con fechas y formato.",
    "No tienes que decir para qué la quieres. Si la petición es vaga, la entidad puede pedirte que la aclares y el reloj se pausa.",
    "Si no responden en término, entregan de menos o reservan sin prueba de daño, presenta tutela. Adjunta la solicitud y la prueba del silencio o de la negativa.",
  ],
  tips: [
    "Para contratos, el SECOP es más rápido que una petición. Pide el expediente solo por lo que el portal no publica.",
    "Una petición general (que hagan algo, no que entreguen un papel) tiene 15 días hábiles, no 10.",
    "Pide que separen los datos personales y te entreguen el resto. La reserva de un dato no cierra todo el documento.",
    "El DANE no sustituye a la entidad que ejecuta un programa, pero sí evita pedir cifras que ya son estadísticas oficiales.",
  ],
  exemptions: [
    "Información clasificada por daño a la seguridad, las relaciones internacionales o la defensa.",
    "Datos personales privados o semiprivados, salvo autorización o deber legal.",
    "Secretos comerciales e industriales debidamente sustentados.",
    "Documentos de investigaciones disciplinarias o penales en curso, en la medida en que la divulgación las afecte.",
  ],
  notes:
    "La tutela es la herramienta que de verdad mueve una negativa. Úsala con la solicitud, la fecha de radicación y, si existe, la respuesta. No hace falta agotar un órgano nacional de transparencia porque ese órgano no existe.",
  letterBasis:
    "los artículos 23 y 74 de la Constitución Política, la Ley 1712 de 2014 y la Ley 1755 de 2015",
  requestLanguage: "es",
  resources: [
    {
      id: "co-datos",
      name: "datos.gov.co",
      url: "https://www.datos.gov.co/",
      publisher: "Gobierno de Colombia",
      description:
        "Catálogo nacional de datos abiertos, con conjuntos de entidades del orden nacional y territorial.",
      topics: ["transparencia", "economia", "salud", "educacion", "ambiente"],
      kind: "datos",
    },
    {
      id: "co-dane",
      name: "DANE",
      url: "https://www.dane.gov.co/",
      publisher: "Departamento Administrativo Nacional de Estadística",
      description:
        "Censos, encuestas de hogares, precios, cuentas nacionales y geografía estadística.",
      topics: ["estadistica", "economia", "geoespacial"],
      kind: "estadistica",
    },
    {
      id: "co-compra",
      name: "Colombia Compra Eficiente",
      url: "https://www.colombiacompra.gov.co/",
      publisher: "Colombia Compra Eficiente",
      description:
        "Entrada a la contratación pública y al SECOP, donde se publican procesos y contratos.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
    {
      id: "co-transparencia",
      name: "Secretaría de Transparencia",
      url: "https://www.secretariatransparencia.gov.co/",
      publisher: "Presidencia de la República",
      description:
        "Referencia de política de acceso a la información y lucha contra la corrupción. No radica ella sola todas las solicitudes del Estado.",
      topics: ["transparencia", "justicia"],
      kind: "solicitudes",
    },
    {
      id: "co-pte",
      name: "Portal de Transparencia Económica",
      url: "https://www.pte.gov.co/",
      publisher: "Ministerio de Hacienda",
      description:
        "Consulta ciudadana de la ejecución del presupuesto nacional.",
      topics: ["presupuesto", "economia"],
      kind: "presupuesto",
    },
    {
      id: "co-secop",
      name: "Consulta de procesos de contratación",
      url: "https://consultaprocesos.colombiacompra.gov.co/",
      publisher: "Colombia Compra Eficiente",
      description: "Buscador público de procesos del SECOP.",
      topics: ["contrataciones", "presupuesto"],
      kind: "compras",
    },
    {
      id: "co-mapas",
      name: "Colombia en Mapas",
      url: "https://www.colombiaenmapas.gov.co/",
      publisher: "IGAC",
      description: "Mapas, imágenes y datos geoespaciales oficiales.",
      topics: ["geoespacial"],
      kind: "datos",
    },
    {
      id: "co-ideam",
      name: "IDEAM",
      url: "https://www.ideam.gov.co/",
      publisher: "Instituto de Hidrología, Meteorología y Estudios Ambientales",
      description: "Información hidrometeorológica y ambiental oficial.",
      topics: ["ambiente", "estadistica"],
      kind: "estadistica",
    },
    {
      id: "co-sispro",
      name: "SISPRO",
      url: "https://www.sispro.gov.co/",
      publisher: "Ministerio de Salud y Protección Social",
      description: "Sistema integrado de información de la protección social, con indicadores de salud.",
      topics: ["salud", "estadistica"],
      kind: "estadistica",
    },
    {
      id: "co-registraduria",
      name: "Registraduría Nacional del Estado Civil",
      url: "https://www.registraduria.gov.co/",
      publisher: "Registraduría Nacional del Estado Civil",
      description: "Identificación y procesos electorales, incluidos resultados de votación.",
      topics: ["elecciones", "registros"],
      kind: "datos",
    },
  ],
  sources: [
    {
      label: "Ley 1712",
      url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882",
    },
    { label: "datos.gov.co", url: "https://www.datos.gov.co/" },
  ],
};
