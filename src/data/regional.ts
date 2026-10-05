import type { Resource } from "./types";

export const regionalResources: Resource[] = [
  {
    id: "reg-rta",
    name: "Red de Transparencia y Acceso a la Información",
    url: "https://redrta.org/",
    publisher: "RTA",
    description:
      "Red de órganos garantes de acceso a la información de Iberoamérica. Publica estándares, informes y el trabajo compartido de los institutos que sí existen.",
    topics: ["transparencia", "justicia"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-alianza",
    name: "Alianza Regional por la Libre Expresión e Información",
    url: "https://www.alianzaregional.net/",
    publisher: "Alianza Regional",
    description:
      "Red de organizaciones de la sociedad civil que documenta leyes de acceso, opacidad y casos de la región.",
    topics: ["transparencia", "justicia"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-ogp",
    name: "Open Government Partnership",
    url: "https://www.opengovpartnership.org/",
    publisher: "Alianza para el Gobierno Abierto",
    description:
      "Planes de acción de gobierno abierto de los países miembros, con compromisos de transparencia y datos que a veces explican por qué existe un portal.",
    topics: ["transparencia"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-ilda",
    name: "ILDA",
    url: "https://ilda.la/",
    publisher: "Iniciativa Latinoamericana por los Datos Abiertos",
    description:
      "Organización regional de datos abiertos. Investiga uso de datos, género y políticas de apertura. Su sitio actual es ilda.la.",
    topics: ["transparencia", "estadistica"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-charter",
    name: "Carta Internacional de Datos Abiertos",
    url: "https://opendatacharter.org/",
    publisher: "Open Data Charter",
    description:
      "Principios para publicar datos abiertos: abiertos por defecto, oportunos, comparables y pensados para usarse. Varios gobiernos de la región la adoptaron.",
    topics: ["transparencia"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-rti",
    name: "RTI Rating",
    url: "https://www.rti-rating.org/",
    publisher: "Centre for Law and Democracy y Access Info Europe",
    description:
      "Índice que puntúa la fortaleza jurídica de las leyes de acceso a la información, artículo por artículo. Sirve para comparar textos, no para medir si la ley se cumple.",
    topics: ["transparencia", "justicia"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-oea",
    name: "Ley Modelo Interamericana 2.0",
    url: "https://www.oas.org/ext/es/democracia/acceso-a-la-informacion-publica",
    publisher: "Organización de los Estados Americanos",
    description:
      "Estándar aprobado por la Asamblea General de la OEA en 2020. No es ley nacional: es la vara con la que se comparan las leyes de la región.",
    topics: ["transparencia", "justicia"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-oea-pdf",
    name: "Texto de la Ley Modelo 2.0",
    url: "https://oas.org/es/sla/ddi/docs/publicacion_Ley_Modelo_Interamericana_2_0_sobre_Acceso_Informacion_Publica.pdf",
    publisher: "OEA, Departamento de Derecho Internacional",
    description:
      "PDF oficial de la Ley Modelo Interamericana 2.0 sobre acceso a la información pública, con principios, plazos de referencia y transparencia activa.",
    topics: ["transparencia", "justicia"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-cepalstat",
    name: "CEPALSTAT",
    url: "https://statistics.cepal.org/portal/cepalstat/",
    publisher: "CEPAL",
    description:
      "Base estadística regional de la CEPAL: indicadores comparables de población, economía, ambiente y temas sociales cuando la serie nacional se corta.",
    topics: ["estadistica", "economia", "ambiente", "educacion", "salud"],
    kind: "estadistica",
    countryId: "regional",
  },
  {
    id: "reg-p10",
    name: "Observatorio del Principio 10",
    url: "https://observatoriop10.cepal.org/",
    publisher: "CEPAL",
    description:
      "Fichas de leyes ambientales y de acceso a la información en América Latina y el Caribe, útiles para encontrar el texto de una norma.",
    topics: ["ambiente", "justicia", "transparencia"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-bid",
    name: "BID Números para el Desarrollo",
    url: "https://data.iadb.org/",
    publisher: "Banco Interamericano de Desarrollo",
    description:
      "Datos de desarrollo de los países miembros del BID, con indicadores sociales, económicos y de infraestructura.",
    topics: ["economia", "estadistica", "educacion", "salud"],
    kind: "datos",
    countryId: "regional",
  },
  {
    id: "reg-wb",
    name: "Datos del Banco Mundial",
    url: "https://data.worldbank.org/",
    publisher: "Banco Mundial",
    description:
      "Indicadores de desarrollo comparables entre países. Sirven de contraste, no reemplazan la cifra oficial de un instituto nacional.",
    topics: ["economia", "estadistica", "salud", "educacion"],
    kind: "datos",
    countryId: "regional",
  },
  {
    id: "reg-gdb",
    name: "Global Data Barometer",
    url: "https://globaldatabarometer.org/",
    publisher: "Global Data Barometer",
    description:
      "Evaluación del estado de los datos en los países: disponibilidad, gobernanza y uso. ILDA ha participado en la mirada latinoamericana.",
    topics: ["transparencia", "estadistica"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-odin",
    name: "Open Data Inventory",
    url: "https://odin.opendatawatch.com/",
    publisher: "Open Data Watch",
    description:
      "Inventario que mide qué tan completas y abiertas están las estadísticas oficiales de cada país.",
    topics: ["estadistica", "transparencia"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-unesco",
    name: "UNESCO: leyes de acceso a la información",
    url: "https://www.unesco.org/es/access-information-laws",
    publisher: "UNESCO",
    description:
      "Materiales y cursos de la UNESCO sobre marcos legales de acceso a la información, ligados al indicador de los ODS sobre garantías legales.",
    topics: ["transparencia", "educacion"],
    kind: "red",
    countryId: "regional",
  },
  {
    id: "reg-abrelatam",
    name: "Abrelatam",
    url: "https://abrelatam.org/",
    publisher: "Abrelatam / Condatos",
    description:
      "Encuentro regional de la comunidad de datos abiertos y gobierno abierto. El sitio reúne ediciones y materiales de la red.",
    topics: ["transparencia"],
    kind: "red",
    countryId: "regional",
  },
];
