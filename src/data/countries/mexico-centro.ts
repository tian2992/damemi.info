import type { Country } from "../types";

export const mexicoCentro: Country[] = [
  {
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
  },
  {
    slug: "guatemala",
    iso: "GT",
    name: "Guatemala",
    region: "centroamerica",
    lawStatus: "vigente",
    summary:
      "La Ley de Acceso a la Información Pública obliga a cada institución a tener una Unidad de Información y a responder en días hábiles. No hay un órgano garante nacional autónomo: la apelación se mueve dentro de la propia entidad y, si hace falta, ante los tribunales.",
    constitution:
      "Artículos 30 y 31 de la Constitución Política de la República de Guatemala: publicidad de los actos y acceso a archivos y registros estatales.",
    lawName: "Ley de Acceso a la Información Pública, Decreto 57-2008 del Congreso de la República.",
    lawUrl: "https://www.congreso.gob.gt/detalle_pdf/decretos/13082",
    obligated:
      "Organismos del Estado, entidades autónomas y descentralizadas, municipalidades, y personas o entidades que administren o ejecuten recursos públicos, respecto de esos recursos.",
    deadline:
      "El artículo 42 manda resolver dentro de los diez días siguientes a que la solicitud se presente y se admita. El decreto no escribe «hábiles»; SAT y RENAP lo aplican como días hábiles.",
    deadlineShort: "10 días",
    deadlineDays: 10,
    extension:
      "El artículo 43 permite ampliar hasta diez días más si el volumen lo justifica, con aviso dentro de los dos días anteriores al vencimiento.",
    silence:
      "Afirmativa ficta: si no hay respuesta en plazo, el sujeto obligado debe entregar la información en no más de diez días después del vencimiento, sin costo y sin una solicitud nueva (artículo 44). La falta de respuesta también abre el recurso de revisión.",
    appeal:
      "Recurso de revisión ante la máxima autoridad del mismo sujeto obligado, dentro de los quince días siguientes a la notificación de la negativa. Esa autoridad no es la Procuraduría de los Derechos Humanos. Después cabe el amparo.",
    oversight:
      "No hay un instituto nacional de transparencia. Cada sujeto obligado tiene su Unidad de Información Pública. La Procuraduría de los Derechos Humanos puede orientar, pero no sustituye al superior jerárquico ni al juez.",
    requestPortalName: "Unidad de Información de cada institución",
    channels: [
      "Escrito en la Unidad de Información Pública",
      "Correo electrónico institucional, si la entidad lo publica",
      "Formulario del sitio de la institución, cuando existe",
    ],
    whoCanRequest:
      "Cualquier persona, sin necesidad de justificar la solicitud ni de acreditar un interés personal.",
    steps: [
      "Nombra la institución que probablemente tiene el documento. En Guatemala la solicitud no entra por un buzón único nacional.",
      "Busca en el sitio de esa institución la Unidad de Información Pública y el correo o la mesa donde recibe solicitudes.",
      "Presenta un escrito con tu nombre, una descripción clara de la información, el periodo y el medio en el que quieres recibirla.",
      "Pide sello o acuse con fecha. Desde ahí corren 10 días hábiles, con una prórroga posible de otros 10.",
      "Si niegan el acceso o no contestan, presenta recurso de revisión ante la autoridad superior de esa misma entidad y conserva copia de todo.",
    ],
    tips: [
      "Pide copia simple o archivo digital. La ley permite cobrar el costo de reproducción, no el hecho de preguntar.",
      "Guatecompras y el portal de datos del Ministerio de Finanzas cubren una parte de contratos y gasto. Revísalos antes de solicitar.",
      "Sé específico con el número de contrato, el programa o el año. Las unidades locales suelen devolver lo que está mal delimitado.",
    ],
    exemptions: [
      "Seguridad nacional y datos que pongan en riesgo la defensa o la integridad de las personas.",
      "Información de procesos judiciales o investigaciones en curso, en los términos de la ley.",
      "Datos personales sensibles y secretos comerciales entregados a la administración.",
      "Información clasificada como reservada o confidencial por una norma expresa, no por costumbre de la oficina.",
    ],
    notes:
      "La práctica cambia mucho de un ministerio a una municipalidad. Si la unidad no publica correo ni formulario, el escrito en mesa de entrada sigue siendo una solicitud válida: quédate con el sello.",
    letterBasis:
      "los artículos 30 y 31 de la Constitución Política de la República de Guatemala y el Decreto 57-2008, Ley de Acceso a la Información Pública",
    requestLanguage: "es",
    resources: [
      {
        id: "gt-guatecompras",
        name: "Guatecompras",
        url: "https://www.guatecompras.gt/",
        publisher: "Ministerio de Finanzas Públicas",
        description:
          "Sistema de contrataciones y adquisiciones del Estado. Sirve para localizar concursos, proveedores y documentos de compra antes de pedir el expediente completo.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "gt-datos-minfin",
        name: "Datos abiertos del Minfin",
        url: "https://datos.minfin.gob.gt/",
        publisher: "Ministerio de Finanzas Públicas",
        description:
          "Portal de datos abiertos de la cartera de finanzas, con conjuntos ligados al presupuesto y a la gestión financiera.",
        topics: ["presupuesto", "economia", "transparencia"],
        kind: "datos",
      },
      {
        id: "gt-ine",
        name: "Instituto Nacional de Estadística",
        url: "https://www.ine.gob.gt/",
        publisher: "INE Guatemala",
        description:
          "Censos, encuestas y indicadores demográficos y económicos. Es la primera parada para cifras oficiales.",
        topics: ["estadistica", "economia", "salud", "educacion"],
        kind: "estadistica",
      },
      {
        id: "gt-minfin",
        name: "Ministerio de Finanzas Públicas",
        url: "https://www.minfin.gob.gt/",
        publisher: "Ministerio de Finanzas Públicas",
        description:
          "Sitio institucional con información presupuestaria y enlaces a los sistemas de compra y transparencia fiscal.",
        topics: ["presupuesto", "economia"],
        kind: "presupuesto",
      },
      {
        id: "gt-senacyt",
        name: "Portal Nacional de Datos Abiertos",
        url: "https://catalogo.senacyt.gob.gt/",
        publisher: "SENACYT",
        description:
          "Catálogo reutilizable de la SENACYT, con conjuntos de ejecución presupuestaria y acuerdos gubernativos.",
        topics: ["transparencia", "presupuesto"],
        kind: "datos",
      },
      {
        id: "gt-presupuesto",
        name: "Transparencia Presupuestaria",
        url: "https://transparenciapresupuestaria.minfin.gob.gt/consulta-interactiva/",
        publisher: "Ministerio de Finanzas Públicas",
        description:
          "Consulta de ingresos, formulación y ejecución desde SICOIN. El acceso ciudadano no es el login interno de SICOIN.",
        topics: ["presupuesto", "economia"],
        kind: "presupuesto",
      },
    ],
    sources: [
      {
        label: "Decreto 57-2008",
        url: "https://www.congreso.gob.gt/detalle_pdf/decretos/13082",
      },
      { label: "Instituto Nacional de Estadística", url: "https://www.ine.gob.gt/" },
      { label: "Guatecompras", url: "https://www.guatecompras.gt/" },
    ],
  },
  {
    slug: "belice",
    iso: "BZ",
    name: "Belice",
    region: "centroamerica",
    lawStatus: "vigente",
    summary:
      "Belice tiene una Freedom of Information Act: la solicitud se presenta por escrito, en inglés, ante la autoridad pública que guarda el documento. No hay un portal nacional de datos abiertos comparable al de los países vecinos, y la estadística oficial está concentrada en el Statistical Institute of Belize.",
    constitution:
      "La vía ordinaria es la Freedom of Information Act, no un artículo constitucional autónomo de acceso a expedientes.",
    lawName:
      "Freedom of Information Act, Chapter 13, de 1994. El texto usado es la edición revisada de 2020, con el derecho sustantivo al 31 de diciembre de 2020.",
    lawUrl:
      "https://www.agm.gov.bz/uploads/laws/63976dad2084d_Cap_13_Freedom_of_Information_Act.pdf",
    obligated:
      "Ministerios, departamentos y otras autoridades públicas comprendidas en la ley.",
    deadline:
      "Si la solicitud es escrita, invoca la ley y se entrega en la dirección habilitada, la decisión debe notificarse tan pronto como sea practicable y a más tardar dos semanas después del día de recepción (sección 16). Si pasan 14 días sin aviso, la solicitud se tiene por denegada el último día de ese periodo, a efectos del Ombudsman (sección 37).",
    deadlineShort: "2 semanas",
    deadlineDays: 14,
    extension:
      "El acceso puede diferirse (sección 18). Pide que cualquier ampliación quede por escrito.",
    silence:
      "A los 14 días sin aviso, la ley trata la solicitud como denegada para poder ir al Ombudsman. No entrega el documento.",
    appeal:
      "Revisión interna del ministro o del principal officer dentro de 28 días. Si la niegan o no hay resultado en 14 días, solicitud al Ombudsman dentro de 21 días. De la decisión del Ombudsman cabe apelación a la Supreme Court.",
    oversight:
      "Office of the Ombudsman. No hay un consejo de transparencia al estilo chileno.",
    oversightUrl: "https://ombudsman.gov.bz/freedom-of-information-act/",
    requestPortalName: "Solicitud escrita a la autoridad pública",
    channels: ["Escrito en inglés dirigido al ministerio o departamento", "Entrega presencial o el canal que publique la autoridad"],
    whoCanRequest:
      "Una persona puede solicitar acceso a documentos en poder de una autoridad pública. La solicitud y el seguimiento se hacen en inglés.",
    steps: [
      "Identifica el ministerio o departamento que tiene el documento. No existe un formulario nacional único.",
      "Redacta la solicitud en inglés: tu nombre, un medio de contacto, y una descripción del documento o del expediente, con fechas.",
      "Entrégala por el canal oficial de esa autoridad y conserva copia y constancia de recepción.",
      "Si necesitas cifras ya publicadas, revisa primero al Statistical Institute of Belize.",
      "Si te niegan el acceso o no deciden, usa el mecanismo de revisión de la Freedom of Information Act y guarda toda la correspondencia.",
    ],
    tips: [
      "No envíes la carta solo en español. La administración trabaja en inglés.",
      "Describe el documento, no una opinión ni un pedido de que investiguen un hecho.",
      "El ecosistema de datos abiertos es delgado. Muchas veces la estadística del SIB es la única base reutilizable.",
    ],
    exemptions: [
      "Documentos de gabinete y deliberaciones internas, en los supuestos de la ley.",
      "Seguridad, relaciones internacionales y cumplimiento de la ley.",
      "Privacidad de terceras personas y secretos comerciales.",
      "Documentos cuya divulgación la ley declara contraria al interés público.",
    ],
    notes:
      "Al armar este directorio, el portal general belize.gov.bz no respondía de forma estable. El instituto de estadística sí. Trata la Freedom of Information Act como la norma de trabajo y contrasta el plazo con una copia oficial de la ley antes de contar los días.",
    letterBasis: "the Freedom of Information Act, Chapter 13 of the Laws of Belize",
    requestLanguage: "en",
    resources: [
      {
        id: "bz-sib",
        name: "Statistical Institute of Belize",
        url: "https://sib.org.bz/",
        publisher: "Statistical Institute of Belize",
        description:
          "Censos, precios, empleo y cuentas nacionales. Es el acervo estadístico oficial más estable del país.",
        topics: ["estadistica", "economia"],
        kind: "estadistica",
      },
      {
        id: "bz-procurement",
        name: "Procurement Portal",
        url: "https://procurement.gov.bz/",
        publisher: "Government of Belize",
        description: "Licitaciones, avisos de adjudicación y documentos estándar de compra.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "bz-mof",
        name: "Ministry of Finance",
        url: "https://mof.gov.bz/",
        publisher: "Ministry of Finance",
        description: "Estimaciones y discursos de presupuesto. Los documentos más visibles al revisar esta ficha eran del ejercicio 2024-2025.",
        topics: ["presupuesto", "economia"],
        kind: "presupuesto",
      },
      {
        id: "bz-elections",
        name: "Elections and Boundaries Department",
        url: "https://elections.gov.bz/",
        publisher: "Elections and Boundaries Department",
        description: "Avisos, resultados y consulta de centros de votación.",
        topics: ["elecciones"],
        kind: "datos",
      },
    ],
    sources: [
      {
        label: "Freedom of Information Act, Chapter 13",
        url: "https://www.agm.gov.bz/uploads/laws/63976dad2084d_Cap_13_Freedom_of_Information_Act.pdf",
      },
      { label: "Ombudsman", url: "https://ombudsman.gov.bz/freedom-of-information-act/" },
      { label: "Statistical Institute of Belize", url: "https://sib.org.bz/" },
    ],
  },
  {
    slug: "honduras",
    iso: "HN",
    name: "Honduras",
    region: "centroamerica",
    lawStatus: "vigente",
    summary:
      "La ley de transparencia crea el Instituto de Acceso a la Información Pública y un portal único para presentar solicitudes. El plazo ordinario es de 10 días hábiles. El instituto es la vía de queja cuando una institución no entrega la información.",
    constitution:
      "El acceso se ejerce sobre todo por la ley especial. La Constitución reconoce la publicidad de los actos de gobierno y el habeas data.",
    lawName:
      "Ley de Transparencia y Acceso a la Información Pública, Decreto 170-2006.",
    obligated:
      "Instituciones del Estado, centralizadas y descentralizadas, municipalidades y entes que manejen recursos o información pública.",
    deadline: "10 días hábiles desde que la institución recibe la solicitud.",
    deadlineShort: "10 días hábiles",
    deadlineDays: 10,
    extension:
      "Cabe una prórroga breve cuando el volumen o la ubicación de los documentos lo justifica. Pide que te la notifiquen con la nueva fecha.",
    silence:
      "La falta de respuesta se reclama ante el Instituto de Acceso a la Información Pública. No equivale a una entrega automática.",
    appeal:
      "Denuncia o recurso ante el IAIP, que puede ordenar la entrega. La decisión del instituto puede llevarse después a la vía judicial.",
    oversight: "Instituto de Acceso a la Información Pública (IAIP).",
    oversightUrl: "https://portalunico.iaip.gob.hn/",
    requestPortalName: "SIELHO",
    requestPortalUrl: "https://sielho.iaip.gob.hn/inicio/",
    channels: [
      "SIELHO, el sistema electrónico del IAIP",
      "Oficial de información de la institución",
      "Escrito presencial",
    ],
    whoCanRequest:
      "Cualquier persona, sin acreditar un interés especial ni explicar el uso que dará a la información.",
    steps: [
      "Entra al Portal Único del IAIP y busca si la institución ya publicó el dato en su portal de transparencia.",
      "Si no está, presenta la solicitud en el portal o ante el oficial de información de esa institución.",
      "Describe el documento, el periodo y el formato. Pide el número de ingreso.",
      "Cuenta 10 días hábiles desde la recepción.",
      "Si no hay respuesta o la reserva no está motivada, denuncia el incumplimiento ante el IAIP por el mismo portal.",
    ],
    tips: [
      "El portal único evita que cada solicitud dependa de un correo personal del funcionario de turno.",
      "Pide datos en archivo editable cuando se trate de listas o ejecuciones presupuestarias.",
      "Al revisar este directorio, el certificado de HonduCompras estaba vencido. Confirma el dominio antes de subir documentos de identidad a un sitio de compras.",
    ],
    exemptions: [
      "Seguridad del Estado y datos que comprometan investigaciones en curso.",
      "Datos personales sensibles.",
      "Secretos comerciales entregados con ese carácter.",
      "Información clasificada conforme a la ley, con motivación y temporalidad.",
    ],
    notes:
      "Usa el Portal Único como canal principal. El sitio histórico www.iaip.gob.hn no resolvía al preparar esta ficha; el portal único sí está en línea, aunque a veces bloquea visitas automatizadas.",
    letterBasis:
      "la Ley de Transparencia y Acceso a la Información Pública, Decreto 170-2006",
    requestLanguage: "es",
    resources: [
      {
        id: "hn-portal",
        name: "Portal Único de Transparencia",
        url: "https://portalunico.iaip.gob.hn/",
        publisher: "Instituto de Acceso a la Información Pública",
        description:
          "Canal para presentar solicitudes de información y consultar portales institucionales de transparencia activa.",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
      {
        id: "hn-ine",
        name: "Instituto Nacional de Estadística",
        url: "https://ine.gob.hn/",
        publisher: "INE Honduras",
        description:
          "Estadísticas demográficas, económicas y sociales producidas por el sistema estadístico nacional.",
        topics: ["estadistica", "economia", "salud", "educacion"],
        kind: "estadistica",
      },
      {
        id: "hn-sielho",
        name: "SIELHO",
        url: "https://sielho.iaip.gob.hn/inicio/",
        publisher: "Instituto de Acceso a la Información Pública",
        description:
          "Sistema electrónico para presentar solicitudes de información y recursos de revisión.",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
      {
        id: "hn-sefin",
        name: "Datos abiertos de la SEFIN",
        url: "https://www.sefin.gob.hn/datos-abiertos/",
        publisher: "Secretaría de Finanzas",
        description:
          "Formulación y ejecución del presupuesto, inversión pública y descargas de compras.",
        topics: ["presupuesto", "economia", "contrataciones"],
        kind: "presupuesto",
      },
    ],
    sources: [
      { label: "SIELHO", url: "https://sielho.iaip.gob.hn/inicio/" },
      { label: "Portal Único del IAIP", url: "https://portalunico.iaip.gob.hn/" },
      { label: "INE Honduras", url: "https://ine.gob.hn/" },
    ],
  },
  {
    slug: "el-salvador",
    iso: "SV",
    name: "El Salvador",
    region: "centroamerica",
    lawStatus: "vigente",
    summary:
      "La Ley de Acceso a la Información Pública crea el Instituto de Acceso a la Información Pública y un plazo de días hábiles para que cada ente entregue documentos. Las compras del Estado y las series del Banco Central cubren buena parte de lo que suele pedirse por escrito.",
    constitution:
      "La Constitución reconoce el derecho de petición y la publicidad de la administración. El procedimiento concreto está en la ley de acceso.",
    lawName:
      "Ley de Acceso a la Información Pública, Decreto Legislativo 534, vigente desde 2011.",
    lawUrl: "https://www.asamblea.gob.sv/leyes-y-decretos/view/493",
    obligated:
      "Órganos del Estado, municipalidades, entidades autónomas y personas que manejen recursos o información pública.",
    deadline:
      "10 días hábiles desde la presentación si la información tiene cinco años o menos. Si es más vieja, pueden sumarse otros 10 días hábiles. Por complejidad, una resolución motivada puede añadir 5 días hábiles (artículo 71).",
    deadlineShort: "10 días hábiles",
    deadlineDays: 10,
    extension:
      "Diez días hábiles más si la información supera los cinco años, y cinco días hábiles adicionales por una circunstancia excepcional, con resolución motivada.",
    silence:
      "No es silencio positivo. La falta de respuesta permite acudir al IAIP dentro de los 15 días hábiles siguientes. Si la información es pública, el Instituto ordena el acceso y el ente debe entregarla en no más de 3 días hábiles.",
    appeal:
      "Apelación ante el IAIP dentro de los 5 días hábiles de notificada la denegatoria. La Sala de lo Constitucional ha tutelado el derecho por amparo.",
    oversight: "Instituto de Acceso a la Información Pública (IAIP).",
    oversightUrl: "https://www.iaip.gob.sv/",
    requestPortalName: "Oficial de Información de cada ente",
    requestPortalUrl: "https://www.transparencia.gob.sv/",
    channels: [
      "Escrito, verbal o electrónico ante el Oficial de Información",
      "Directorio de oficiales en el Portal de Transparencia",
    ],
    whoCanRequest:
      "Cualquier persona, sin deber de explicar las razones de la solicitud.",
    steps: [
      "Revisa COMPRASAL y el sitio del IAIP por si el contrato o el dato ya está publicado.",
      "Presenta la solicitud ante el oficial de información del ente obligado, o por el canal que el IAIP tenga habilitado, con tu nombre y un medio de notificación.",
      "Delimita documentos, fechas y formato.",
      "Pide acuse. El plazo de referencia es de 10 días hábiles.",
      "Si hay negativa o silencio, recurre al IAIP dentro del plazo que indique la notificación o la propia ley.",
    ],
    tips: [
      "No existe un catálogo nacional en datos.gob.sv: ese dominio no resuelve. No lo uses.",
      "Para series monetarias y de precios, el Banco Central publica más de lo que parece a primera vista.",
      "Guarda el número de solicitud. Sin acuse es difícil probar la fecha de inicio del plazo.",
    ],
    exemptions: [
      "Seguridad pública y defensa, con la clasificación que exige la ley.",
      "Datos personales y vida privada.",
      "Secretos comerciales y procesos de investigación en curso.",
      "Información entregada por otro Estado con carácter reservado.",
    ],
    notes:
      "El IAIP sigue siendo el órgano de referencia y su sitio respondía al cierre de esta ficha. Aun así, confirma en la resolución o en el reglamento el cómputo exacto de la prórroga antes de dejar vencer un recurso.",
    letterBasis:
      "la Ley de Acceso a la Información Pública, Decreto Legislativo 534",
    requestLanguage: "es",
    resources: [
      {
        id: "sv-iaip",
        name: "Instituto de Acceso a la Información Pública",
        url: "https://www.iaip.gob.sv/",
        publisher: "IAIP",
        description:
          "Órgano garante y punto de orientación para presentar o reclamar una solicitud de acceso.",
        topics: ["transparencia", "justicia"],
        kind: "solicitudes",
      },
      {
        id: "sv-comprasal",
        name: "COMPRASAL",
        url: "https://www.comprasal.gob.sv/",
        publisher: "Sistema de compras públicas",
        description:
          "Divulgación de compras y contrataciones de la administración pública.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "sv-bcr",
        name: "Banco Central de Reserva",
        url: "https://www.bcr.gob.sv/",
        publisher: "Banco Central de Reserva de El Salvador",
        description:
          "Estadísticas económicas, financieras y de precios que el banco produce o compila.",
        topics: ["economia", "estadistica"],
        kind: "estadistica",
      },
      {
        id: "sv-transparencia",
        name: "Portal de Transparencia",
        url: "https://www.transparencia.gob.sv/",
        publisher: "Gobierno de El Salvador",
        description:
          "Directorio de oficiales de información y publicación proactiva. No es un buzón único para todas las instituciones.",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
      {
        id: "sv-fiscal",
        name: "Portal de Transparencia Fiscal",
        url: "https://www.transparenciafiscal.gob.sv/ptf/es/PTF2-Index.html",
        publisher: "Ministerio de Hacienda",
        description: "Ingresos, gasto y deuda.",
        topics: ["presupuesto", "economia"],
        kind: "presupuesto",
      },
      {
        id: "sv-onec",
        name: "Catálogo de la ONEC",
        url: "https://onec.bcr.gob.sv/metadatos/index.php/catalog/",
        publisher: "Oficina Nacional de Estadística y Censos, Banco Central de Reserva",
        description:
          "Encuestas y metadatos. DIGESTYC pasó a la ONEC del Banco Central en noviembre de 2022. Varias series del catálogo consultado llegan solo hasta 2020-2022.",
        topics: ["estadistica", "economia"],
        kind: "estadistica",
      },
    ],
    sources: [
      { label: "IAIP", url: "https://www.iaip.gob.sv/" },
      { label: "COMPRASAL", url: "https://www.comprasal.gob.sv/" },
    ],
  },
  {
    slug: "nicaragua",
    iso: "NI",
    name: "Nicaragua",
    region: "centroamerica",
    lawStatus: "vigente",
    summary:
      "En el papel existe la Ley de Acceso a la Información Pública, Ley 621. En la práctica no hay un garante independiente ni un portal de solicitudes que funcione como vía segura y eficaz. Quien pide información a una institución nicaragüense debe asumir que la respuesta es discrecional y valorar el riesgo personal.",
    constitution:
      "La Constitución reconoce el derecho de petición y el acceso a información personal. La ley especial es la Ley 621.",
    lawName:
      "Ley de Acceso a la Información Pública, Ley 621, aprobada el 16 de mayo de 2007. Texto consolidado al 29 de octubre de 2020. Reglamento: Decreto Ejecutivo 81-2007.",
    lawUrl:
      "http://legislacion.asamblea.gob.ni/normaweb.nsf/9e314815a08d4a6206257265005d21f9/1fcfa8d7aa8727620625872f0077462e?OpenDocument=",
    obligated:
      "Entes del Estado y particulares que administren recursos públicos, según el texto de la ley. El cumplimiento real es otro asunto.",
    deadline: "15 días hábiles, según el procedimiento escrito en la Ley 621.",
    deadlineShort: "15 días hábiles en la ley",
    deadlineDays: 15,
    extension:
      "Prórroga excepcional de 10 días hábiles si la información está en otra dependencia, es voluminosa o exige analizar una excepción. Deben avisar las razones antes de que venzan los 15 días.",
    silence:
      "En el texto, vencido el plazo sin resolución la solicitud se tiene por aceptada si la información no es reservada ni confidencial (artículo 35). No hay un garante autónomo que haga cumplir ese silencio. En la práctica, no cuentes con la entrega.",
    appeal:
      "Apelación en seis días ante la oficina de coordinación del mismo poder, consejo regional o municipal. Esa instancia no es independiente. También cabe ir directo al contencioso-administrativo.",
    oversight:
      "No hay un órgano garante autónomo operativo. Las oficinas de acceso, donde existen, dependen de la propia institución.",
    requestPortalName: "No hay un portal nacional de solicitudes",
    channels: ["Escrito ante la institución, con resultado incierto"],
    whoCanRequest:
      "La ley dice que cualquier persona. Eso no describe el riesgo ni la probabilidad de respuesta.",
    steps: [
      "Busca primero si el dato estadístico ya está en el INIDE. Es de lo poco que el Estado publica con regularidad.",
      "Si aun así necesitas un expediente, identifica la institución y conserva una copia de cualquier escrito.",
      "No cuentes con un folio electrónico ni con un recurso independiente.",
      "Evalúa si presentar la solicitud te expone. Esta ficha describe la norma; no te anima a hacer un trámite inseguro.",
    ],
    tips: [
      "Prioriza documentos que ya sean públicos antes de pedir expedientes internos.",
      "El plazo de 15 días hábiles es el de la ley, no una expectativa razonable de cumplimiento.",
      "Desconfía de portales no oficiales que ofrezcan «gestionar» la solicitud.",
    ],
    exemptions: [
      "La ley lista reservas de seguridad, privacidad e investigaciones.",
      "En la práctica, la reserva se usa con mucha más amplitud que el texto.",
    ],
    notes:
      "Incluimos a Nicaragua para que el mapa no finja un procedimiento que no está disponible. La Ley 621 existe. Un canal confiable de acceso, no.",
    letterBasis: "la Ley de Acceso a la Información Pública, Ley 621",
    letterWarning:
      "No hay un procedimiento nacional confiable. Esta carta deja constancia de la solicitud, pero no garantiza respuesta ni reduce el riesgo de presentarla.",
    requestLanguage: "es",
    resources: [
      {
        id: "ni-inide",
        name: "INIDE",
        url: "https://www.inide.gob.ni/",
        publisher: "Instituto Nacional de Información de Desarrollo",
        description:
          "Estadísticas oficiales de población, economía y condiciones de vida. Es el acervo público más claro del país.",
        topics: ["estadistica", "economia"],
        kind: "estadistica",
      },
      {
        id: "ni-bcn",
        name: "Estadísticas del Banco Central",
        url: "https://www.bcn.gob.ni/estadisticas",
        publisher: "Banco Central de Nicaragua",
        description:
          "Indicadores monetarios, fiscales, cuentas nacionales y sector externo.",
        topics: ["economia", "estadistica"],
        kind: "estadistica",
      },
    ],
    sources: [
      { label: "INIDE", url: "https://www.inide.gob.ni/" },
      { label: "Banco Central de Nicaragua", url: "https://www.bcn.gob.ni/estadisticas" },
    ],
  },
  {
    slug: "costa-rica",
    iso: "CR",
    name: "Costa Rica",
    region: "centroamerica",
    lawStatus: "vigente",
    summary:
      "Desde el 1 de noviembre de 2024 está vigente la Ley Marco de Acceso a la Información Pública, Ley 10554. El plazo es de 10 días hábiles. No creó un instituto autónomo: si la administración no entrega, la tutela es el recurso de amparo ante la Sala Constitucional.",
    constitution:
      "Artículos 27 y 30 de la Constitución Política: derecho de petición y libre acceso a la información sobre asuntos de interés público.",
    lawName:
      "Ley Marco de Acceso a la Información Pública, Ley N.° 10554, del 23 de octubre de 2024, en vigor desde el 1 de noviembre de 2024.",
    lawUrl:
      "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=103157&nValor3=143061&param1=NRTC&strTipM=TC",
    obligated:
      "Los sujetos obligados de la administración pública y las entidades privadas que gestionen información de interés público o manejen fondos públicos, en lo que la ley alcanza.",
    deadline:
      "10 días hábiles desde la recepción. Si la información ya está armada y es fácil de localizar, la ley pide entregarla de inmediato.",
    deadlineShort: "10 días hábiles",
    deadlineDays: 10,
    extension:
      "Si el pedido es complejo, la autoridad debe avisarte dentro de los 10 días y justificar una ampliación. Esa ampliación no puede pasar, de forma excepcional, de un mes.",
    silence:
      "No responder en el plazo abre el recurso de amparo. La ley no convierte el silencio en entrega automática, pero sí en una omisión impugnable.",
    appeal:
      "Recurso de amparo ante la Sala Constitucional, previsto de forma expresa en la ley, sin perjuicio de otras acciones. No hay que agotar un órgano garante porque ese órgano no existe.",
    oversight:
      "No hay órgano garante autónomo. Cada sujeto obligado debe ofrecer un correo oficial y un formulario en su sitio. La protección es jurisdiccional.",
    requestPortalName: "Formulario o correo de cada institución",
    channels: [
      "Formulario en el sitio de la institución",
      "Correo electrónico oficial",
      "Escrito físico o verbal, según el artículo 11 de la ley",
    ],
    whoCanRequest:
      "Cualquier persona física o jurídica. La solicitud solo exige nombre, número de identificación, qué información pides y cómo quieres que te notifiquen. No se motivan las razones.",
    steps: [
      "Mira si el conjunto ya está en el portal nacional de datos abiertos o en el portal estadístico del INEC.",
      "Localiza a la institución que tiene el documento y usa el formulario o el correo oficial que la ley la obliga a publicar.",
      "Incluye solo tu nombre, identificación, la información que pides y el medio de notificación.",
      "Guarda el acuse. La propia ley ordena entregarlo con fecha, nombre de quien recibe y una descripción del pedido.",
      "Si a los 10 días hábiles no hay respuesta, o si te amplían el plazo sin justificación, puedes ir al amparo. La información preconstituida debería entregarse de una vez.",
    ],
    tips: [
      "El acceso es gratuito. Pueden pedirte el dispositivo de almacenamiento si hace falta, no una tasa por preguntar.",
      "Si tu descripción es confusa, tienen tres días para prevenirte y tú tienes cinco días hábiles para aclarar. El plazo de entrega corre cuando la prevención queda cumplida.",
      "Pide formatos abiertos. La ley menciona expresamente la entrega en formatos abiertos y accesibles.",
      "Un reglamento ejecutivo circuló como proyecto; al cierre de esta ficha el PDF oficial no traía número de decreto. La ley ya se aplica sin esperar ese reglamento.",
    ],
    exemptions: [
      "Límites expresos de la ley, que deben motivarse. Una negativa tiene que decir qué norma la sostiene.",
      "Datos personales protegidos por la Ley 8968, separados de la información pública del mismo expediente.",
      "Información que una norma declare secreta o reservada, interpretada a favor del acceso cuando haya duda.",
    ],
    notes:
      "Durante años el acceso dependió del artículo 30 y de la jurisprudencia de la Sala Constitucional. La Ley 10554 pone por escrito el plazo, la informalidad del trámite y el amparo. Sigue sin haber una ventanilla única: se pide a cada institución.",
    letterBasis:
      "los artículos 27 y 30 de la Constitución Política y la Ley Marco de Acceso a la Información Pública, Ley N.° 10554",
    requestLanguage: "es",
    resources: [
      {
        id: "cr-datos",
        name: "Portal de Datos Abiertos",
        url: "https://datosabiertos.gob.go.cr/",
        publisher: "Gobierno de Costa Rica",
        description:
          "Catálogo nacional de datos abiertos. En octubre de 2026 todavía tenía pocos conjuntos. datos.go.cr también responde y no lo sustituye esta ficha.",
        topics: ["transparencia", "economia", "ambiente"],
        kind: "datos",
      },
      {
        id: "cr-inec",
        name: "Portal estadístico del INEC",
        url: "https://estadisticas.inec.cr/",
        publisher: "Instituto Nacional de Estadística y Censos",
        description:
          "Censos, encuestas y tabulados interactivos. El sitio institucional del INEC a veces bloquea visitas automatizadas; este portal de cifras es el de consulta.",
        topics: ["estadistica", "economia", "salud", "educacion"],
        kind: "estadistica",
      },
      {
        id: "cr-sicop",
        name: "SICOP",
        url: "https://www.sicop.go.cr/",
        publisher: "Sistema de compras públicas",
        description:
          "Compras públicas electrónicas: concursos, contratos y documentos de los procedimientos.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "cr-cgr",
        name: "Contraloría General de la República",
        url: "https://www.cgr.go.cr/",
        publisher: "Contraloría General de la República",
        description:
          "Informes de fiscalización y presupuestos públicos. No es el órgano de acceso a la información, pero publica una parte grande del control del gasto.",
        topics: ["presupuesto", "justicia", "transparencia"],
        kind: "presupuesto",
      },
      {
        id: "cr-inec-datos",
        name: "Datos abiertos del INEC",
        url: "https://datosabiertos.inec.cr/",
        publisher: "Instituto Nacional de Estadística y Censos",
        description: "Microdatos y conjuntos descargables del INEC.",
        topics: ["estadistica"],
        kind: "datos",
      },
      {
        id: "cr-observatorio",
        name: "Observatorio de Compra Pública",
        url: "https://www.observatoriocomprapublica.go.cr/observatorio-2/",
        publisher: "Observatorio de Compra Pública",
        description: "Indicadores de compras tomados de SICOP y del SIAC de la Contraloría.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "cr-pj",
        name: "Datos abiertos del Poder Judicial",
        url: "https://datosabiertospj.poder-judicial.go.cr/",
        publisher: "Poder Judicial",
        description: "Estadísticas judiciales y de defensa pública.",
        topics: ["justicia", "estadistica"],
        kind: "datos",
      },
    ],
    sources: [
      {
        label: "Ley 10554 en el Sistema Costarricense de Información Jurídica",
        url: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=103157&nValor3=143061&param1=NRTC&strTipM=TC",
      },
      {
        label: "Ley 10554 en el Sistema Nacional de Legislación Vigente",
        url: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=103157&param2=&param3=1&param4=",
      },
      { label: "Portal de datos abiertos", url: "https://datosabiertos.gob.go.cr/" },
    ],
  },
  {
    slug: "panama",
    iso: "PA",
    name: "Panamá",
    region: "centroamerica",
    lawStatus: "vigente",
    summary:
      "Panamá fue de los primeros países de la región en tener ley de transparencia, la Ley 6 de 2002. La autoridad de aplicación es la ANTAI y el plazo de respuesta que usa esa ley es de 30 días calendario, más largo que el de sus vecinos. Hay portal de datos abiertos y un sistema de compras.",
    constitution:
      "El artículo 43 de la Constitución reconoce el derecho de solicitar información de acceso público y el habeas data.",
    lawName: "Ley 6 del 22 de enero de 2002, que dicta normas de transparencia en la gestión pública.",
    lawUrl: "https://www.antai.gob.pa/wp-content/uploads/2015/04/Ley-6-de-22-enero-2002.pdf",
    obligated:
      "Instituciones del Estado, incluyendo gobiernos locales y entidades que manejen fondos públicos, en lo que la ley dispone.",
    deadline: "30 días calendario desde la presentación de la solicitud.",
    deadlineShort: "30 días calendario",
    deadlineDays: 30,
    extension:
      "Si la solicitud es compleja o extensa, dentro de los primeros 30 días deben avisar por escrito una extensión que no pase de otros 30 días calendario (artículo 7).",
    silence:
      "Vencidos los 30 días sin respuesta, la negativa se entiende producida y puedes acudir a la ANTAI y a la vía judicial.",
    appeal:
      "Queja o recurso ante la Autoridad Nacional de Transparencia y Acceso a la Información, y acciones judiciales, incluido el habeas data cuando corresponde.",
    oversight: "Autoridad Nacional de Transparencia y Acceso a la Información (ANTAI).",
    oversightUrl: "https://www.antai.gob.pa/",
    requestPortalName: "ANTAI Smart CID",
    requestPortalUrl: "https://smart.antai.gob.pa/",
    channels: [
      "ANTAI Smart CID, para las instituciones aliadas",
      "Escrito, correo o formulario de la institución",
      "Presencial, con constancia de recepción",
    ],
    whoCanRequest:
      "Cualquier persona puede solicitar información de acceso público o datos personales suyos. No hace falta una motivación elaborada.",
    steps: [
      "Revisa el portal de datos abiertos y PanamáCompra. Muchos contratos y conjuntos ya están ahí.",
      "Presenta la solicitud ante la institución que tiene el documento, con tu nombre, la descripción de la información y un medio de contacto.",
      "Pide constancia de recepción. El reloj es de 30 días calendario, no hábiles.",
      "Si no responden o reservan de más, acude a la ANTAI con copia de la solicitud y del silencio o de la negativa.",
    ],
    tips: [
      "No cuentes solo días de oficina: el plazo de la Ley 6 se cita en días calendario.",
      "La ley es de 2002 y se ha quedado corta frente a la Ley Modelo interamericana. Úsala igual: es la norma vigente.",
      "Separa el habeas data (tus datos personales) de un pedido de información pública sobre la gestión.",
    ],
    exemptions: [
      "Seguridad del Estado y relaciones exteriores.",
      "Investigaciones en curso.",
      "Secretos comerciales y datos personales de terceros.",
      "Información clasificada por ley especial.",
    ],
    notes:
      "La ANTAI es el referente institucional y su sitio respondía. Organizaciones regionales llevan años señalando que la Ley 6 necesita una actualización; mientras no se reemplace, el plazo y el recurso son los de esa ley.",
    letterBasis:
      "el artículo 43 de la Constitución Política y la Ley 6 de 22 de enero de 2002",
    requestLanguage: "es",
    resources: [
      {
        id: "pa-antai",
        name: "ANTAI",
        url: "https://www.antai.gob.pa/",
        publisher: "Autoridad Nacional de Transparencia y Acceso a la Información",
        description:
          "Autoridad de aplicación de la ley de transparencia. Las solicitudes a instituciones aliadas entran por Smart CID (smart.antai.gob.pa), no por el módulo de compras llamado «Solicitud de Información».",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
      {
        id: "pa-datos",
        name: "Datos Abiertos de Panamá",
        url: "https://www.datosabiertos.gob.pa/",
        publisher: "Gobierno de Panamá",
        description:
          "Catálogo nacional de datos abiertos publicados por instituciones panameñas.",
        topics: ["transparencia", "economia", "estadistica"],
        kind: "datos",
      },
      {
        id: "pa-compras",
        name: "PanamáCompra",
        url: "https://www.panamacompra.gob.pa/",
        publisher: "Dirección General de Contrataciones Públicas",
        description:
          "Licitaciones y contratos del Estado. Conviene mirarlo antes de pedir un expediente de compra.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "pa-inec",
        name: "INEC Panamá",
        url: "https://www.inec.gob.pa/",
        publisher: "Instituto Nacional de Estadística y Censo",
        description:
          "Estadísticas demográficas, económicas y sociales de la Contraloría General.",
        topics: ["estadistica", "economia"],
        kind: "estadistica",
      },
      {
        id: "pa-gestion",
        name: "Gestión Transparente Panamá",
        url: "https://gestiontransparentepanama.mef.gob.pa/",
        publisher: "Ministerio de Economía y Finanzas",
        description: "Ejecución presupuestaria y mapa de inversión pública.",
        topics: ["presupuesto", "economia"],
        kind: "presupuesto",
      },
      {
        id: "pa-smart",
        name: "ANTAI Smart CID",
        url: "https://smart.antai.gob.pa/",
        publisher: "ANTAI",
        description:
          "Cuenta digital para solicitudes de acceso a las instituciones aliadas. No cubre a todo el Estado y no es el módulo de quejas anónimas.",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
    ],
    sources: [
      { label: "ANTAI", url: "https://www.antai.gob.pa/" },
      { label: "Datos Abiertos de Panamá", url: "https://www.datosabiertos.gob.pa/" },
    ],
  },
];
