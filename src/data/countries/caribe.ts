import type { Country } from "../types";

export const caribe: Country[] = [
  {
    slug: "cuba",
    iso: "CU",
    name: "Cuba",
    region: "caribe",
    lawStatus: "limitada",
    summary:
      "La Constitución de 2019 reconoce el derecho a solicitar y recibir información del Estado. No hay un procedimiento con plazo, acuse y recurso independiente, ni un portal de solicitudes. La estadística oficial pasa por la Oficina Nacional de Estadística e Información y las normas se publican en la Gaceta Oficial.",
    constitution:
      "Artículo 53 de la Constitución de 2019: derecho a solicitar y recibir del Estado información veraz, objetiva y oportuna, y a acceder a la que generen los órganos del Estado, conforme a las regulaciones establecidas.",
    lawName:
      "No hay una ley de acceso con procedimiento verificable. El artículo 53 remite a regulaciones que no abren un canal público de solicitudes.",
    obligated:
      "Órganos y entidades del Estado, según el texto constitucional. Sin reglamento de solicitudes, ese deber no se traduce en un trámite.",
    deadline: "No hay un plazo de respuesta publicado en un procedimiento de acceso.",
    deadlineShort: "Sin plazo de trámite",
    deadlineDays: null,
    extension: "No aplica un régimen de prórroga.",
    silence: "No hay un silencio con recurso ante un órgano independiente.",
    appeal: "No hay un amparo de acceso ante un consejo de transparencia.",
    oversight: "No hay órgano garante de acceso a la información.",
    requestPortalName: "No hay portal de solicitudes",
    channels: ["Consulta de la Gaceta Oficial y de las series de la ONEI"],
    whoCanRequest:
      "El artículo 53 habla de todas las personas. No existe un formulario para ejercerlo.",
    steps: [
      "Busca la norma en la Gaceta Oficial antes de asumir que un dato no es público.",
      "Para cifras de población, precios o cuentas, revisa lo que publique la ONEI.",
      "No hay un paso 3 de solicitud con folio. Escribir a una entidad no activa un procedimiento reglado.",
    ],
    tips: [
      "Al revisar este directorio, el certificado de onei.gob.cu estaba vencido. Si entras, comprueba el dominio antes de escribir cualquier dato personal.",
      "La Gaceta Oficial sí respondía y es la fuente de leyes y decretos.",
    ],
    exemptions: [
      "El artículo 53 condiciona el acceso a las regulaciones del Estado. Esas regulaciones no están traducidas en un catálogo público de reservas y plazos.",
    ],
    notes:
      "Documentamos el artículo constitucional para no inventar un trámite. Quien necesite una serie estadística tiene más chance en la ONEI que en una carta a un ministerio.",
    letterBasis: "el artículo 53 de la Constitución de la República de Cuba",
    letterWarning:
      "No hay un procedimiento de acceso. Esta carta no abre un plazo ni un recurso.",
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
        url: "https://www.onei.gob.cu/",
        publisher: "Oficina Nacional de Estadística e Información",
        description:
          "Anuario estadístico e indicadores oficiales. El certificado del sitio estaba vencido al revisar este directorio.",
        topics: ["estadistica", "economia"],
        kind: "estadistica",
      },
    ],
    sources: [{ label: "Gaceta Oficial", url: "https://www.gacetaoficial.gob.cu/es" }],
  },
  {
    slug: "republica-dominicana",
    iso: "DO",
    name: "República Dominicana",
    region: "caribe",
    lawStatus: "vigente",
    summary:
      "La Ley 200-04 organiza el libre acceso a la información pública. Las solicitudes entran por el Sistema de Acceso a la Información Pública (SAIP) y la Dirección General de Ética e Integridad Gubernamental acompaña la política de integridad. Hay catálogo de datos abiertos y un portal de compras.",
    constitution:
      "Artículo 49 de la Constitución: derecho a la información y a buscar, recibir y difundir información.",
    lawName: "Ley General de Libre Acceso a la Información Pública, Ley 200-04.",
    lawUrl: "https://saip.gob.do/",
    obligated:
      "Órganos y entes del Estado, y particulares que manejen recursos públicos, respecto de esa información.",
    deadline: "15 días hábiles desde la recepción de la solicitud.",
    deadlineShort: "15 días hábiles",
    deadlineDays: 15,
    extension:
      "Prórroga de hasta 10 días hábiles cuando la información es extensa o está en otra oficina, notificada dentro del plazo original.",
    silence:
      "El silencio se reclama. No equivale a la entrega del documento.",
    appeal:
      "Recurso ante la autoridad superior del organismo y las vías que la Ley 200-04 y sus reglamentos abren frente a una negativa. La DIGEIG es la referencia institucional de integridad y de seguimiento.",
    oversight: "Dirección General de Ética e Integridad Gubernamental (DIGEIG), junto con las oficinas de acceso de cada organismo.",
    oversightUrl: "https://digeig.gob.do/",
    requestPortalName: "Sistema de Acceso a la Información Pública (SAIP)",
    requestPortalUrl: "https://saip.gob.do/",
    channels: ["SAIP", "Oficina de acceso a la información del organismo", "Escrito presencial"],
    whoCanRequest:
      "Cualquier persona, sin necesidad de demostrar un interés especial.",
    steps: [
      "Revisa datos.gob.do y el portal de compras. Si el archivo está completo, no abras una solicitud.",
      "Entra al SAIP, elige el organismo y describe la información, el periodo y el formato.",
      "Deja un correo de notificación y guarda el número de solicitud.",
      "Cuenta 15 días hábiles. Una prórroga tiene que llegar avisada y motivada.",
      "Si niegan o no responden, usa el recurso que ofrece el propio SAIP y conserva los acuses.",
    ],
    tips: [
      "El SAIP es la puerta. No dependas de un correo suelto si el sistema está disponible.",
      "La Oficina Nacional de Estadística publica cifras que muchas solicitudes intentan reconstruir.",
      "Pide que separen datos personales de terceros y te entreguen el resto del documento.",
    ],
    exemptions: [
      "Seguridad del Estado y relaciones internacionales.",
      "Datos personales e intimidad.",
      "Secretos comerciales.",
      "Investigaciones en curso.",
    ],
    notes:
      "SAIP, datos.gob.do, el portal de compras y la DIGEIG respondían al cierre de esta ficha. La ONE a veces bloquea visitas automatizadas, pero el dominio one.gob.do es el oficial.",
    letterBasis:
      "el artículo 49 de la Constitución y la Ley General de Libre Acceso a la Información Pública, Ley 200-04",
    requestLanguage: "es",
    resources: [
      {
        id: "do-saip",
        name: "SAIP",
        url: "https://saip.gob.do/",
        publisher: "Estado dominicano",
        description:
          "Sistema para presentar y seguir solicitudes de acceso a la información pública.",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
      {
        id: "do-digeig",
        name: "DIGEIG",
        url: "https://digeig.gob.do/",
        publisher: "Dirección General de Ética e Integridad Gubernamental",
        description:
          "Órgano de ética e integridad gubernamental y referencia institucional del acceso a la información.",
        topics: ["transparencia", "justicia"],
        kind: "solicitudes",
      },
      {
        id: "do-datos",
        name: "datos.gob.do",
        url: "https://datos.gob.do/",
        publisher: "Gobierno de la República Dominicana",
        description: "Catálogo nacional de datos abiertos.",
        topics: ["transparencia", "economia", "salud", "educacion"],
        kind: "datos",
      },
      {
        id: "do-compras",
        name: "Dirección General de Contrataciones Públicas",
        url: "https://www.dgcp.gob.do/",
        publisher: "DGCP",
        description: "Compras y contrataciones del Estado.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "do-one",
        name: "Oficina Nacional de Estadística",
        url: "https://www.one.gob.do/",
        publisher: "ONE",
        description: "Censos, encuestas y estadísticas oficiales.",
        topics: ["estadistica", "economia"],
        kind: "estadistica",
      },
    ],
    sources: [
      { label: "SAIP", url: "https://saip.gob.do/" },
      { label: "DIGEIG", url: "https://digeig.gob.do/" },
    ],
  },
  {
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
    ],
    sources: [{ label: "IHSI", url: "https://ihsi.gouv.ht/" }],
  },
];
