import type { Country } from "../types";

export const andes: Country[] = [
  {
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
  },
  {
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
  },
  {
    slug: "ecuador",
    iso: "EC",
    name: "Ecuador",
    region: "andes",
    lawStatus: "vigente",
    summary:
      "La LOTAIP de 2023, que reemplazó a la de 2004, obliga a las instituciones a publicar información y a responder solicitudes. La Constitución, además, crea una acción judicial específica de acceso a la información pública. El catálogo de datos abiertos y las cifras del INEC cubren una parte del pedido habitual.",
    constitution:
      "Artículos 18 y 91 de la Constitución: derecho a acceder a información pública y acción de acceso a la información pública. La Defensoría del Pueblo está en el artículo 215.",
    lawName:
      "Ley Orgánica de Transparencia y Acceso a la Información Pública (LOTAIP), Registro Oficial Segundo Suplemento 245 del 7 de febrero de 2023. Derogó la LOTAIP de 2004. Reglamento: Decreto Ejecutivo 124, de enero de 2024.",
    lawUrl: "https://www.gob.ec/sites/default/files/regulations/2023-10/Lotaip-2023.pdf",
    obligated:
      "Instituciones del Estado y personas jurídicas de derecho privado que tengan participación del Estado o sean concesionarias de servicios públicos, respecto de la información pública que manejen.",
    deadline:
      "10 días, prorrogables por 5 más con causa justificada e informada al solicitante (artículo 34). La ley no dice si son hábiles o calendario: el SRI ha citado el Código Orgánico Administrativo y una guía ciudadana habló de días calendario. Pide por escrito qué fecha va a aplicar la entidad.",
    deadlineShort: "10 días + 5",
    deadlineDays: 10,
    extension:
      "Cinco días más, por causa justificada, avisada al solicitante. No está escrito en la ley si el cómputo excluye sábados y feriados.",
    silence:
      "No responder dentro del plazo es una negativa, no un silencio positivo. Abre la gestión oficiosa ante la Defensoría del Pueblo y la acción de acceso del artículo 91.",
    appeal:
      "Gestión oficiosa ante la Defensoría del Pueblo dentro de los 30 días siguientes al vencimiento, y acción de acceso a la información pública del artículo 91. La gestión oficiosa no es requisito para ir al juez.",
    oversight:
      "Defensoría del Pueblo, órgano rector del seguimiento de la LOTAIP. La acción judicial del artículo 91 sigue siendo la garantía que ordena la entrega.",
    oversightUrl: "https://www.defensoria.gob.ec/",
    requestPortalName: "La institución que posee la información",
    channels: [
      "Escrito en la institución",
      "Correo o formulario de su sección de transparencia",
    ],
    whoCanRequest:
      "Cualquier persona, grupo o asociación, sin necesidad de justificar la razón del pedido.",
    steps: [
      "Revisa la sección de transparencia de la institución y el portal de datos abiertos. La LOTAIP de 2023 obliga a publicar información de forma activa.",
      "Si el documento no está, presenta la solicitud ante esa institución con tu nombre, la información que pides y un domicilio o correo para notificaciones.",
      "No expliques el motivo. Describe archivos, fechas y el formato.",
      "Pide constancia. El artículo 34 da 10 días, con una prórroga posible de 5.",
      "Si hay silencio o negativa, presenta la acción de acceso a la información pública. Es un proceso propio, distinto de un juicio largo.",
    ],
    tips: [
      "La transparencia activa de la LOTAIP es amplia. Antes de pedir, mira si el dato ya debía estar en la web institucional.",
      "Las compras públicas tienen sistema propio. Úsalo para identificar el código del proceso y luego pide solo lo que falte.",
      "El INEC (Ecuador en cifras) publica tabulados que muchas solicitudes intentan reconstruir a mano.",
    ],
    exemptions: [
      "Información personal protegida por el derecho a la intimidad.",
      "Secretos comercial e industrial.",
      "Información de defensa y seguridad clasificada conforme a la ley.",
      "La reserva debe ser excepcional y motivada. La duda favorece el acceso.",
    ],
    notes:
      "El portal datosabiertos.gob.ec existe, aunque a veces bloquea visitas automatizadas. La LOTAIP que rige es la de 2023, no la de 2004. SERCOP redirige su sitio a portal.compraspublicas.gob.ec.",
    letterBasis:
      "los artículos 18 y 91 de la Constitución y la Ley Orgánica de Transparencia y Acceso a la Información Pública de 2023",
    requestLanguage: "es",
    resources: [
      {
        id: "ec-datos",
        name: "Datos abiertos Ecuador",
        url: "https://www.datosabiertos.gob.ec/",
        publisher: "Gobierno del Ecuador",
        description:
          "Catálogo nacional de datos abiertos de instituciones públicas.",
        topics: ["transparencia", "economia", "ambiente"],
        kind: "datos",
      },
      {
        id: "ec-compras",
        name: "Compras públicas",
        url: "https://portal.compraspublicas.gob.ec/sercop/",
        publisher: "SERCOP",
        description:
          "Sitio del Servicio Nacional de Contratación Pública. sercop.gob.ec redirige aquí.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "ec-inec",
        name: "Ecuador en cifras",
        url: "https://www.ecuadorencifras.gob.ec/",
        publisher: "Instituto Nacional de Estadística y Censos",
        description:
          "Censos, encuestas y estadísticas económicas y sociales del INEC.",
        topics: ["estadistica", "economia", "salud", "educacion"],
        kind: "estadistica",
      },
      {
        id: "ec-iedg",
        name: "Infraestructura Ecuatoriana de Datos Geoespaciales",
        url: "https://www.iedg.gob.ec/",
        publisher: "IEDG",
        description: "Visor, catálogo de metadatos y geoportales institucionales.",
        topics: ["geoespacial"],
        kind: "datos",
      },
      {
        id: "ec-defensoria",
        name: "Defensoría del Pueblo",
        url: "https://www.defensoria.gob.ec/",
        publisher: "Defensoría del Pueblo",
        description:
          "Órgano de seguimiento de la LOTAIP y puerta de la gestión oficiosa cuando una institución no responde.",
        topics: ["transparencia", "justicia"],
        kind: "solicitudes",
      },
    ],
    sources: [
      {
        label: "LOTAIP 2023",
        url: "https://www.gob.ec/sites/default/files/regulations/2023-10/Lotaip-2023.pdf",
      },
      { label: "Ecuador en cifras", url: "https://www.ecuadorencifras.gob.ec/" },
      { label: "Datos abiertos", url: "https://www.datosabiertos.gob.ec/" },
    ],
  },
  {
    slug: "peru",
    iso: "PE",
    name: "Perú",
    region: "andes",
    lawStatus: "vigente",
    summary:
      "La Ley de Transparencia y Acceso a la Información Pública obliga a cada entidad a tener un responsable y a responder en días hábiles. La autoridad nacional de transparencia está en el Ministerio de Justicia. Los datos abiertos viven en datosabiertos.gob.pe y las contrataciones, en el organismo que gob.pe identifica como OECE.",
    constitution:
      "Artículo 2, inciso 5, de la Constitución: derecho a solicitar información a cualquier entidad pública sin expresión de causa.",
    lawName:
      "Ley 27806, Ley de Transparencia y Acceso a la Información Pública. Texto Único Ordenado: Decreto Supremo 021-2019-JUS. Reglamento: Decreto Supremo 007-2024-JUS.",
    lawUrl: "https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/118374-27806",
    obligated:
      "Entidades de la administración pública, incluyendo gobiernos regionales y locales, y personas que presten servicios públicos o ejerzan función administrativa, respecto de esa información.",
    deadline: "10 días hábiles desde la presentación de la solicitud.",
    deadlineShort: "10 días hábiles",
    deadlineDays: 10,
    extension:
      "No es una prórroga fija de cinco días. Si es materialmente imposible entregar, la entidad debe decirlo dentro de los 2 días hábiles de recibido el pedido, con la fecha de entrega y las razones. Una guía del Ministerio de Cultura añade un cronograma si esa fecha pasa de 30 días hábiles; eso está en la guía, no como tope escrito en la Ley 27806.",
    silence:
      "El silencio es una denegatoria tácita, no un silencio positivo. Una respuesta ambigua o incompleta también se trata como denegatoria.",
    appeal:
      "Apelación ante el Tribunal de Transparencia y Acceso a la Información Pública dentro de los 15 días calendario. El Tribunal decide en un máximo de 10 días hábiles. Si no lo hace, se agota la vía administrativa. Una consulta interpretativa a la ANTAIP no es una apelación.",
    oversight:
      "Autoridad Nacional de Transparencia y Acceso a la Información Pública (ANTAIP), en el Ministerio de Justicia y Derechos Humanos. No es la mesa de partes: el pedido se presenta en cada entidad.",
    oversightUrl: "https://www.gob.pe/antaip",
    requestPortalName: "Mesa de partes o canal de la entidad en gob.pe",
    requestPortalUrl: "https://www.gob.pe/",
    channels: [
      "Mesa de partes de la entidad",
      "Canal digital que la entidad publique en gob.pe",
      "Formulario de acceso a la información de la propia institución",
    ],
    whoCanRequest:
      "Cualquier persona, sin necesidad de explicar la causa, según el artículo 2 inciso 5 de la Constitución.",
    steps: [
      "Busca el conjunto en datosabiertos.gob.pe y el procedimiento de compra en el OECE antes de redactar.",
      "Presenta la solicitud ante la entidad que tiene la información, por mesa de partes o por el formulario que publique. La Constitución prohíbe exigirte la causa.",
      "Identifícate, describe la información, el periodo y el formato, y señala un correo o domicilio.",
      "Guarda el cargo. El plazo del artículo 11 es de 10 días hábiles.",
      "Si niegan o no responden, apela al Tribunal de Transparencia dentro de 15 días calendario. La ficha de la ANTAIP está en gob.pe/antaip.",
    ],
    tips: [
      "El costo, si lo hay, es el de reproducción. Preguntar no se tasa.",
      "Pide que te indiquen si la información no existe o si está en otra entidad. Son respuestas distintas.",
      "El organismo de contrataciones aparece en gob.pe como OECE (Organismo Especializado para las Contrataciones Públicas Eficientes), no ya como el antiguo OSCE.",
    ],
    exemptions: [
      "Información clasificada por seguridad nacional.",
      "Datos personales que afecten la intimidad.",
      "Secretos comerciales e información protegida por secreto bancario o tributario, en sus propios términos.",
      "Información cuya divulgación pueda frustrar una investigación en curso.",
    ],
    notes:
      "gob.pe es la puerta institucional, no un formulario único que cubra a todos los ministerios con el mismo botón. Cada entidad sigue recibiendo su propia solicitud. El portal de datos abiertos sí es nacional.",
    letterBasis:
      "el artículo 2 inciso 5 de la Constitución Política y la Ley 27806 de Transparencia y Acceso a la Información Pública",
    requestLanguage: "es",
    resources: [
      {
        id: "pe-datos",
        name: "Datos abiertos Perú",
        url: "https://www.datosabiertos.gob.pe/",
        publisher: "Estado peruano",
        description:
          "Plataforma nacional de datos abiertos, con conjuntos publicados por entidades públicas.",
        topics: ["transparencia", "economia", "salud", "educacion"],
        kind: "datos",
      },
      {
        id: "pe-gob",
        name: "gob.pe",
        url: "https://www.gob.pe/",
        publisher: "Presidencia del Consejo de Ministros",
        description:
          "Directorio de entidades, trámites y normas. Desde aquí se llega al canal de cada institución y a la autoridad de transparencia.",
        topics: ["transparencia", "registros"],
        kind: "solicitudes",
      },
      {
        id: "pe-inei",
        name: "INEI",
        url: "https://www.gob.pe/inei",
        publisher: "Instituto Nacional de Estadística e Informática",
        description:
          "Censos, encuestas y series oficiales. El sitio histórico del INEI redirige a su ficha en gob.pe.",
        topics: ["estadistica", "economia", "geoespacial"],
        kind: "estadistica",
      },
      {
        id: "pe-oece",
        name: "OECE",
        url: "https://www.gob.pe/oece",
        publisher: "Organismo Especializado para las Contrataciones Públicas Eficientes",
        description:
          "Supervisión y difusión de la contratación pública. gob.pe redirige el antiguo atajo del OSCE a esta entidad.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "pe-seace",
        name: "Buscadores del SEACE",
        url: "https://www.gob.pe/7505",
        publisher: "OECE",
        description:
          "Búsqueda pública, sin certificado, de procedimientos de selección, contratos y planes anuales. El operador en 2026 es el OECE.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "pe-consulta",
        name: "Consulta Amigable",
        url: "https://apps5.mineco.gob.pe/transparencia/Navegador/default.aspx",
        publisher: "Ministerio de Economía y Finanzas",
        description:
          "Gasto e ingreso diario de gobiernos nacional, regional y local: presupuesto, compromiso, devengado y pago.",
        topics: ["presupuesto", "economia"],
        kind: "presupuesto",
      },
      {
        id: "pe-mef-datos",
        name: "Datos abiertos del MEF",
        url: "https://datosabiertos.mef.gob.pe/",
        publisher: "Ministerio de Economía y Finanzas",
        description:
          "Bases abiertas de gasto, ingreso, inversión pública, compras y recursos humanos.",
        topics: ["presupuesto", "economia", "contrataciones"],
        kind: "datos",
      },
      {
        id: "pe-antaip",
        name: "ANTAIP",
        url: "https://www.gob.pe/antaip",
        publisher: "Ministerio de Justicia y Derechos Humanos",
        description:
          "Autoridad nacional de transparencia. Orienta y publica el modelo de solicitud. No recibe el pedido de otras entidades.",
        topics: ["transparencia", "justicia"],
        kind: "solicitudes",
      },
    ],
    sources: [
      {
        label: "Ley 27806",
        url: "https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/118374-27806",
      },
      { label: "ANTAIP", url: "https://www.gob.pe/antaip" },
      { label: "Datos abiertos", url: "https://www.datosabiertos.gob.pe/" },
    ],
  },
  {
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
  },
];
