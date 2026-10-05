import type { Country } from "../types";

export const caribe: Country[] = [
  {
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
        id: "do-datos-compras",
        name: "Datos abiertos de contrataciones",
        url: "https://datosabiertos.dgcp.gob.do/",
        publisher: "Dirección General de Contrataciones Públicas",
        description: "Procesos, ofertas y contratos en datos reutilizables.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "do-transparencia",
        name: "Portal Único de Transparencia",
        url: "https://transparencia.gob.do/",
        publisher: "DIGEIG",
        description:
          "Transparencia activa: nómina, directorio, contratos y normas. No es el SAIP ni el catálogo de datos abiertos.",
        topics: ["transparencia", "presupuesto"],
        kind: "datos",
      },
      {
        id: "do-one",
        name: "Oficina Nacional de Estadística",
        url: "https://www.one.gob.do/",
        publisher: "ONE",
        description:
          "Censos y estadísticas oficiales. Al revisar esta ficha el sitio respondía con un bloqueo y no se pudo leer el catálogo.",
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
      {
        id: "ht-haitidata",
        name: "HaitiData",
        url: "https://haitidata.org/",
        publisher: "Centre National de l'Information Géo-Spatiale",
        description:
          "Capas y mapas del territorio, riesgos y estudios socioeconómicos. El sitio del CNIGS es cnigs.ht.",
        topics: ["geoespacial", "ambiente"],
        kind: "datos",
      },
    ],
    sources: [
      { label: "IHSI", url: "https://ihsi.gouv.ht/" },
      { label: "HaitiData", url: "https://haitidata.org/" },
    ],
  },
  {
    slug: "puerto-rico",
    iso: "PR",
    name: "Puerto Rico",
    region: "caribe",
    lawStatus: "vigente",
    summary:
      "La Ley 141-2019, enmendada en 2025, regula el acceso a la información del gobierno de Puerto Rico. No es la FOIA federal de Estados Unidos. El portal de transparencia está en transparencia.pr.gov. El catálogo datos.pr.gov redirigía, el 5 de octubre de 2026, a un aviso de mantenimiento.",
    constitution:
      "El régimen es estatutario local. La FOIA de Estados Unidos no es el procedimiento para los expedientes del gobierno de Puerto Rico.",
    lawName:
      "Ley 141-2019, Ley de Transparencia y Procedimiento Expedito para el Acceso a la Información Pública, enmendada por la Ley 156-2025, que alargó los plazos de entrega. La política de datos abiertos está en la Ley 122-2019.",
    lawUrl: "https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/2-ingles/141-2019.pdf",
    obligated:
      "Entidades del gobierno de Puerto Rico, cada una con un Oficial de Información. PRITS opera el portal del ejecutivo.",
    deadline:
      "Tras la enmienda de 2025: 20 días laborables si el expediente tiene como máximo 300 páginas y menos de tres años; 30 días laborables si es más largo, más viejo o está en una oficina regional.",
    deadlineShort: "20 o 30 días laborables",
    deadlineDays: 20,
    extension:
      "Una prórroga de 20 días laborables, por escrito y dentro del plazo inicial.",
    silence:
      "El silencio es una denegatoria.",
    appeal:
      "Petición judicial ante el Tribunal de Primera Instancia, Sala de San Juan, dentro de 30 días improrrogables. No hay una comisión independiente de información.",
    oversight:
      "Oficial de Información de cada entidad. El control del incumplimiento es judicial. PRITS administra el portal.",
    oversightUrl: "https://www.prits.pr.gov/",
    requestPortalName: "Portal de Transparencia Pública",
    requestPortalUrl: "https://transparencia.pr.gov/",
    channels: ["Portal de Transparencia Pública", "Oficial de Información de la entidad"],
    whoCanRequest:
      "Cualquier persona, conforme a la Ley 141-2019. La solicitud y el seguimiento se hacen en español o en inglés, según el canal de la entidad.",
    steps: [
      "Revisa transparencia.pr.gov antes de pedir un expediente que ya esté publicado.",
      "Presenta la solicitud por ese portal o ante el Oficial de Información. Describe el récord, las fechas y el formato.",
      "El plazo depende del tamaño y de la antigüedad: 20 días laborables en el caso corto y 30 en el largo.",
      "Si hay prórroga, tiene que llegar por escrito dentro del plazo inicial y no pasa de otros 20 días laborables.",
      "Si niegan o no responden, la vía es el tribunal de San Juan, dentro de 30 días.",
    ],
    tips: [
      "No cites la FOIA federal como si fuera la ley de los archivos del gobierno de Puerto Rico.",
      "datos.pr.gov es la dirección legal del portal de datos abiertos, pero el 5 de octubre de 2026 redirigía a un aviso de mantenimiento de PRITS.",
    ],
    exemptions: [
      "Las exclusiones están en la Ley 141-2019 y sus enmiendas. Una negativa tiene que decir cuál aplica.",
    ],
    notes:
      "El texto citado de la Ley 156-2025 está en docs.pr.gov. Esta ficha no transcribe el listado completo de excepciones.",
    letterBasis:
      "Ley 141-2019, Ley de Transparencia y Procedimiento Expedito para el Acceso a la Información Pública, según enmendada",
    requestLanguage: "es",
    resources: [
      {
        id: "pr-portal",
        name: "Portal de Transparencia Pública",
        url: "https://transparencia.pr.gov/",
        publisher: "Gobierno de Puerto Rico",
        description: "Portal para consultar información pública y presentar solicitudes.",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
      {
        id: "pr-datos",
        name: "datos.pr.gov",
        url: "https://datos.pr.gov/",
        publisher: "PRITS",
        description:
          "Dirección legal del portal de datos abiertos de la Ley 122-2019. El 5 de octubre de 2026 redirigía a un aviso de mantenimiento.",
        topics: ["transparencia", "economia"],
        kind: "datos",
      },
      {
        id: "pr-prits",
        name: "PRITS",
        url: "https://www.prits.pr.gov/",
        publisher: "Puerto Rico Innovation and Technology Service",
        description: "Agencia que opera los portales del ejecutivo, incluida la transparencia.",
        topics: ["transparencia", "registros"],
        kind: "datos",
      },
    ],
    sources: [
      {
        label: "Ley 141-2019",
        url: "https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/2-ingles/141-2019.pdf",
      },
      { label: "Portal de Transparencia", url: "https://transparencia.pr.gov/" },
    ],
  },
];
