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
    lawUrl: "https://www.secretariatransparencia.gov.co/",
    obligated:
      "Entidades públicas de todas las ramas y niveles, y personas privadas que cumplan funciones públicas o administren recursos públicos, respecto de esa información.",
    deadline:
      "Ley 1712: 10 días hábiles. Derecho de petición de documentos o información: 10 días hábiles. Peticiones generales: 15 días hábiles. Consultas entre autoridades: hasta 30 días hábiles.",
    deadlineShort: "10 días hábiles",
    deadlineDays: 10,
    extension:
      "En la Ley 1712 la prórroga es de hasta 5 días hábiles, avisada dentro del plazo inicial. En el derecho de petición la ampliación también debe informarse antes de que venza el término.",
    silence:
      "El silencio no entrega el documento. Habilita la tutela, porque el acceso y el derecho de petición son derechos fundamentales, y puede tener consecuencias disciplinarias.",
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
    ],
    sources: [
      { label: "datos.gov.co", url: "https://www.datos.gov.co/" },
      { label: "Secretaría de Transparencia", url: "https://www.secretariatransparencia.gov.co/" },
    ],
  },
  {
    slug: "venezuela",
    iso: "VE",
    name: "Venezuela",
    region: "andes",
    lawStatus: "limitada",
    summary:
      "La Constitución dice que toda persona tiene derecho a ser informada por la administración y a acceder a archivos y registros administrativos. No hay un portal nacional de solicitudes ni un órgano garante que vuelva exigible ese derecho frente al Ejecutivo. La publicación estadística oficial es irregular.",
    constitution:
      "Artículo 143 de la Constitución de la República Bolivariana de Venezuela.",
    lawName:
      "No hay una ley general de acceso, con plazo, folio y recurso independiente, que esté operando como procedimiento útil. El artículo 143 admite límites fijados por ley para la información interna y confidencial.",
    obligated:
      "La administración pública, según el texto constitucional. En la práctica, la respuesta depende de la voluntad de cada oficina.",
    deadline: "La Constitución no fija un número de días y no hay un plazo nacional verificable en un portal de solicitudes.",
    deadlineShort: "Sin plazo operativo",
    deadlineDays: null,
    extension: "No hay una prórroga reglada que puedas cobrar en un recurso.",
    silence:
      "El silencio es la respuesta habitual y no abre un recurso ante un garante autónomo.",
    appeal:
      "En teoría caben acciones judiciales de acceso a la información. No son una vía rápida ni predecible.",
    oversight: "No hay órgano garante autónomo de acceso a la información.",
    requestPortalName: "No hay portal nacional de solicitudes",
    channels: ["Escrito ante la administración, con resultado incierto"],
    whoCanRequest:
      "El artículo 143 reconoce el derecho a toda persona. No describe un trámite disponible.",
    steps: [
      "Busca primero si el indicador que necesitas lo publicó el Banco Central u otra fuente oficial todavía en línea.",
      "No cuentes con un formulario nacional ni con un folio.",
      "Si decides escribir, cita el artículo 143, describe documentos concretos y guarda copia. Asume que puede no haber respuesta.",
      "Evita intermediarios que prometan acceso privilegiado a registros públicos.",
    ],
    tips: [
      "Esta ficha no te recomienda presentar solicitudes sensibles. Describe el hueco institucional para que no pierdas tiempo buscando un portal que no existe.",
      "Las series históricas del Banco Central han tenido interrupciones. Contrasta con fuentes regionales, como CEPALSTAT, cuando la serie local se corta.",
    ],
    exemptions: [
      "El artículo 143 remite a la ley los límites sobre información interna, reservada o confidencial.",
      "Sin un procedimiento, esos límites no se discuten en un recurso ordinario.",
    ],
    notes:
      "Al revisar este directorio, el sitio del Banco Central presentaba fallos de certificado. Si lo usas, confirma que el dominio sea bcv.org.ve antes de ingresar cualquier dato.",
    letterBasis:
      "el artículo 143 de la Constitución de la República Bolivariana de Venezuela",
    letterWarning:
      "No existe un procedimiento nacional de acceso que esta carta pueda activar. Sirve como constancia, no como un trámite con plazo.",
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
    ],
    sources: [
      {
        label: "Banco Central de Venezuela",
        url: "https://www.bcv.org.ve/",
      },
    ],
  },
  {
    slug: "ecuador",
    iso: "EC",
    name: "Ecuador",
    region: "andes",
    lawStatus: "vigente",
    summary:
      "La LOTAIP obliga a las instituciones a publicar información y a responder solicitudes en un plazo de días. La Constitución, además, crea una acción judicial específica de acceso a la información pública. El catálogo de datos abiertos y las cifras del INEC cubren una parte del pedido habitual.",
    constitution:
      "Artículos 18 y 91 de la Constitución: derecho a acceder a información pública y acción de acceso a la información pública.",
    lawName:
      "Ley Orgánica de Transparencia y Acceso a la Información Pública (LOTAIP), publicada en el Registro Oficial Suplemento 337 del 18 de mayo de 2004.",
    obligated:
      "Instituciones del Estado y personas jurídicas de derecho privado que tengan participación del Estado o sean concesionarias de servicios públicos, respecto de la información pública que manejen.",
    deadline: "10 días desde la presentación de la solicitud.",
    deadlineShort: "10 días",
    deadlineDays: 10,
    extension:
      "La LOTAIP permite ampliar el plazo de forma excepcional y motivada, por pocos días. Pide que la ampliación llegue por escrito dentro del término original.",
    silence:
      "Si no responden, no tienes que esperar un órgano intermedio: la Constitución te da la acción de acceso a la información pública ante un juez.",
    appeal:
      "Acción de acceso a la información pública, artículo 91 de la Constitución, que se tramita de forma sencilla y sin necesidad de citar la norma de memoria en un escrito perfecto. La Defensoría del Pueblo puede orientar, pero el juez es quien ordena la entrega.",
    oversight:
      "No hay un consejo único equivalente al chileno. La acción judicial del artículo 91 es la garantía específica. Cada institución debe tener un comité o responsable de transparencia según la LOTAIP.",
    requestPortalName: "La institución que posee la información",
    channels: [
      "Escrito en la institución",
      "Correo o formulario de su sección de transparencia",
    ],
    whoCanRequest:
      "Cualquier persona, grupo o asociación, sin necesidad de justificar la razón del pedido.",
    steps: [
      "Revisa la sección de transparencia de la institución y el portal de datos abiertos. La LOTAIP obliga a publicar sueldos, contratos y servicios de forma activa.",
      "Si el documento no está, presenta la solicitud ante esa institución con tu nombre, la información que pides y un domicilio o correo para notificaciones.",
      "No expliques el motivo. Describe archivos, fechas y el formato.",
      "Pide constancia. El plazo de la LOTAIP es de 10 días.",
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
      "El portal datosabiertos.gob.ec existe, aunque bloquea visitas automatizadas. El sistema de compras públicas a veces no responde a verificaciones externas; el dominio oficial sigue siendo compraspublicas.gob.ec.",
    letterBasis:
      "los artículos 18 y 91 de la Constitución y la Ley Orgánica de Transparencia y Acceso a la Información Pública",
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
        url: "https://www.compraspublicas.gob.ec/",
        publisher: "SERCOP",
        description:
          "Sistema oficial de contratación pública para consultar procesos y contratos.",
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
    ],
    sources: [
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
      "Ley 27806, Ley de Transparencia y Acceso a la Información Pública, y su Texto Único Ordenado.",
    obligated:
      "Entidades de la administración pública, incluyendo gobiernos regionales y locales, y personas que presten servicios públicos o ejerzan función administrativa, respecto de esa información.",
    deadline: "10 días hábiles desde la presentación de la solicitud.",
    deadlineShort: "10 días hábiles",
    deadlineDays: 10,
    extension:
      "Prórroga excepcional de hasta 5 días hábiles cuando la información es difícil de reunir, notificada antes de que venza el plazo original.",
    silence:
      "El silencio es una denegatoria tácita y permite reclamar. No te entrega el documento por sí solo.",
    appeal:
      "Recurso ante el superior de la entidad y, en el marco de la autoridad nacional de transparencia del Ministerio de Justicia, los procedimientos que esa autoridad tenga habilitados. También cabe la vía judicial.",
    oversight:
      "Autoridad Nacional de Transparencia y Acceso a la Información Pública, en el Ministerio de Justicia y Derechos Humanos.",
    oversightUrl: "https://www.gob.pe/",
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
      "Guarda el cargo. El plazo es de 10 días hábiles, con una prórroga máxima de 5.",
      "Si niegan o no responden, apela dentro de la entidad y revisa el canal de la autoridad nacional de transparencia en gob.pe.",
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
    ],
    sources: [
      { label: "Plataforma del Estado peruano", url: "https://www.gob.pe/" },
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
      "No hay un plazo legal nacional en vigor. No uses un número de días de un proyecto que todavía no se publica en la Gaceta.",
    deadlineShort: "Sin plazo de ley",
    deadlineDays: null,
    extension: "No hay prórroga reglada mientras el proyecto no se sancione y promulgue.",
    silence:
      "No hay un silencio con efecto definido en una ley general. Una falta de respuesta se discute, si acaso, como incumplimiento constitucional ante la vía que corresponda.",
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
      "No cuentes un plazo de ley: el proyecto aún no es norma.",
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
      "No hay una ley general en vigor. La carta se apoya en la Constitución. No inventes un plazo que el proyecto todavía no tiene.",
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
    ],
    sources: [
      {
        label: "ABI: el Senado aprueba el proyecto y lo remite a Diputados, 27 de agosto de 2026",
        url: "https://abi.bo/senado-aprueba-proyecto-de-ley-de-acceso-a-la-informacion-y-lo-remite-a-diputados/",
      },
      { label: "gob.bo", url: "https://www.gob.bo/" },
    ],
  },
];
