import type { Country } from "../types";

export const sur: Country[] = [
  {
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
  },
  {
    slug: "paraguay",
    iso: "PY",
    name: "Paraguay",
    region: "cono-sur",
    lawStatus: "vigente",
    summary:
      "La Ley 5282/2014 reconoce el derecho a pedir información pública sin explicar el motivo y concentra la recepción en un portal unificado. El plazo es de días hábiles. Contrataciones y el catálogo de datos abiertos resuelven muchas búsquedas sin necesidad de una solicitud.",
    constitution:
      "Artículo 28 de la Constitución: derecho a recibir información verdadera, responsable y ecuánime, y a acceder a fuentes e información públicas.",
    lawName:
      "Ley 5282/2014 de Libre Acceso a la Información Pública y Transparencia Gubernamental.",
    lawUrl:
      "https://www.bacn.gov.py/leyes-paraguayas/3013/ley-n-5282-libre-acceso-ciudadano-a-la-informacion-publica-y-transparencia-gubernamental",
    obligated:
      "Organismos de la administración central y descentralizada, gobiernos departamentales y municipales, y entes que administren recursos públicos.",
    deadline: "15 días hábiles desde la presentación.",
    deadlineShort: "15 días hábiles",
    deadlineDays: 15,
    extension:
      "La Ley 5282 no escribe una prórroga. En el portal, el reloj empieza cuando la solicitud está completa y el sistema entrega el código único.",
    silence:
      "El silencio se tiene por denegatoria. No entrega el documento.",
    appeal:
      "Reclamo ante la Oficina de Acceso a la Información del Ministerio de Justicia y, si persiste el incumplimiento, la vía judicial.",
    oversight:
      "Ministerio de Justicia, a través de su oficina de acceso a la información pública, que administra el portal unificado.",
    oversightUrl: "https://informacionpublica.paraguay.gov.py/",
    requestPortalName: "Portal unificado de acceso a la información pública",
    requestPortalUrl: "https://informacionpublica.paraguay.gov.py/",
    channels: ["Portal unificado", "Escrito ante la institución"],
    whoCanRequest:
      "Cualquier persona, física o jurídica, nacional o extranjera, sin deber de motivar la solicitud.",
    steps: [
      "Revisa datos.gov.py y el portal de contrataciones. Si el archivo ya está, descárgalo.",
      "Entra al portal unificado de información pública y elige la institución.",
      "Describe los documentos, el periodo y el formato. Indica un correo de notificación.",
      "Guarda el comprobante. El plazo de referencia es de 15 días hábiles.",
      "Si no hay respuesta o la reserva no está fundada, reclama por el mismo portal.",
    ],
    tips: [
      "El portal unificado evita buscar el correo personal de un funcionario.",
      "Pide formato reutilizable para listas de contratos o de ejecución presupuestaria.",
      "No adjuntes más datos personales de los que el formulario pide.",
    ],
    exemptions: [
      "Seguridad nacional y orden público, con calificación legal.",
      "Datos personales sensibles.",
      "Secretos comerciales e industriales.",
      "Información de causas judiciales en trámite, en la medida que la ley protege.",
    ],
    notes:
      "El portal de solicitudes, el de datos abiertos, el de contrataciones y el INE respondían al armar esta ficha. Es de los países donde el trámite electrónico sí está concentrado.",
    letterBasis:
      "el artículo 28 de la Constitución y la Ley 5282/2014 de Libre Acceso a la Información Pública y Transparencia Gubernamental",
    requestLanguage: "es",
    resources: [
      {
        id: "py-portal",
        name: "Información pública",
        url: "https://informacionpublica.paraguay.gov.py/",
        publisher: "Ministerio de Justicia",
        description:
          "Portal unificado para presentar solicitudes de acceso a la información pública.",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
      {
        id: "py-datos",
        name: "datos.gov.py",
        url: "https://www.datos.gov.py/",
        publisher: "Gobierno del Paraguay",
        description: "Catálogo nacional de datos abiertos.",
        topics: ["transparencia", "economia", "estadistica"],
        kind: "datos",
      },
      {
        id: "py-contrataciones",
        name: "Contrataciones públicas",
        url: "https://www.contrataciones.gov.py/",
        publisher: "Dirección Nacional de Contrataciones Públicas",
        description: "Licitaciones y contratos del Estado.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "py-ine",
        name: "INE Paraguay",
        url: "https://www.ine.gov.py/",
        publisher: "Instituto Nacional de Estadística",
        description: "Censos, encuestas e indicadores oficiales.",
        topics: ["estadistica", "economia"],
        kind: "estadistica",
      },
      {
        id: "py-hacienda",
        name: "Datos abiertos de Hacienda",
        url: "https://datos.hacienda.gov.py/",
        publisher: "Ministerio de Hacienda",
        description:
          "Presupuesto, ingresos, ejecución, deuda y nómina, con API. El sitio sigue diciendo Hacienda.",
        topics: ["presupuesto", "economia"],
        kind: "presupuesto",
      },
      {
        id: "py-microdatos",
        name: "Microdatos del INE",
        url: "https://www.ine.gov.py/microdatos/index.php?cant=99&tema=TODOS",
        publisher: "Instituto Nacional de Estadística",
        description: "Microdatos de población, censos y vivienda.",
        topics: ["estadistica"],
        kind: "estadistica",
      },
      {
        id: "py-contraloria",
        name: "Rendiciones de la Contraloría",
        url: "https://datos-rendicion.contraloria.gov.py/datos-abiertos/",
        publisher: "Contraloría General de la República",
        description: "Rendiciones de cuentas de organismos y entidades del Estado, en datos abiertos.",
        topics: ["presupuesto", "transparencia"],
        kind: "presupuesto",
      },
    ],
    sources: [
      {
        label: "Ley 5282/2014",
        url: "https://www.bacn.gov.py/leyes-paraguayas/3013/ley-n-5282-libre-acceso-ciudadano-a-la-informacion-publica-y-transparencia-gubernamental",
      },
      {
        label: "Portal de información pública",
        url: "https://informacionpublica.paraguay.gov.py/",
      },
    ],
  },
  {
    slug: "uruguay",
    iso: "UY",
    name: "Uruguay",
    region: "cono-sur",
    lawStatus: "vigente",
    summary:
      "La Ley 18.381 reconoce el acceso a la información pública y crea la Unidad de Acceso a la Información Pública. El plazo es de 20 días hábiles. El catálogo de datos abiertos del Estado es uno de los más cuidados de la región.",
    constitution:
      "La Constitución no tiene un artículo específico de acceso a expedientes. El derecho se ejerce por la Ley 18.381 y por los principios de publicidad del Estado de derecho.",
    lawName:
      "Ley N.° 18.381 de acceso a la información pública, del 17 de octubre de 2008, con modificaciones posteriores, entre ellas la Ley 19.178.",
    lawUrl: "https://www.impo.com.uy/bases/leyes/18381-2008",
    obligated:
      "Organismos públicos estatales y no estatales, y personas privadas que ejerzan funciones públicas o conserven información pública.",
    deadline: "20 días hábiles desde la presentación.",
    deadlineShort: "20 días hábiles",
    deadlineDays: 20,
    extension:
      "Prórroga excepcional de hasta 20 días hábiles más, cuando el volumen o la búsqueda lo justifican, notificada dentro del plazo original.",
    silence:
      "El silencio es positivo. Vencidos los 20 días hábiles sin prórroga, o vencida la prórroga sin decisión notificada, la persona puede acceder a la información. Negarla en ese caso es una falta grave. También cabe la acción judicial.",
    appeal:
      "No hay una apelación administrativa ante la UAIP que reemplace la decisión del organismo. La vía es la acción de acceso a la información ante el Poder Judicial. La UAIP orienta, recibe denuncias y controla la clasificación, y no guarda los expedientes de otros organismos.",
    oversight: "Unidad de Acceso a la Información Pública (UAIP).",
    oversightUrl: "https://www.gub.uy/unidad-acceso-informacion-publica/",
    requestPortalName: "Sistema de Acceso a la Información Pública",
    requestPortalUrl: "https://solicitudes.gub.uy",
    channels: [
      "SAIP en solicitudes.gub.uy, solo para los organismos que lo usan",
      "Formulario o correo de transparencia del organismo",
      "Escrito presencial",
    ],
    whoCanRequest:
      "Cualquier persona física o jurídica, sin necesidad de justificar las razones por las que pide la información.",
    steps: [
      "Busca en el Catálogo de Datos Abiertos. Uruguay publica ahí conjuntos que en otros países solo aparecen después de una solicitud.",
      "Si el documento no está, preséntalo en solicitudes.gub.uy cuando el organismo esté en el SAIP, o ante el organismo, con tu identidad, la descripción de la información y un medio de contacto.",
      "No expliques el motivo. Pide acuse.",
      "El plazo es de 20 días hábiles. Una prórroga tiene que avisarse y no puede ser genérica.",
      "Si hay silencio o negativa, puedes denunciar ante la UAIP y presentar la acción judicial de acceso.",
    ],
    tips: [
      "La UAIP también tutela datos personales. No mezcles un pedido de tus propios datos con un pedido de información de gestión, aunque los presentes el mismo día.",
      "Las compras estatales pasaron a la órbita de la Agencia Reguladora de Compras Estatales. Entra por gub.uy.",
      "Pide el formato en el que la información ya existe. La ley favorece la entrega por medios electrónicos.",
    ],
    exemptions: [
      "Información secreta, reservada o confidencial en los términos de la ley.",
      "Datos personales que no correspondan al régimen de publicidad.",
      "Seguridad pública y defensa.",
      "Secretos comerciales entregados al Estado.",
    ],
    notes:
      "El texto consolidado de consulta está en IMPO. La ficha de la UAIP en gub.uy explica el trámite con más claridad que la ley sola.",
    letterBasis:
      "la Ley N.° 18.381 de acceso a la información pública",
    requestLanguage: "es",
    resources: [
      {
        id: "uy-saip",
        name: "Sistema de Acceso a la Información Pública",
        url: "https://solicitudes.gub.uy",
        publisher: "AGESIC y UAIP",
        description:
          "Formulario electrónico para pedir información a los organismos que están en el sistema. No cubre a todos.",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
      {
        id: "uy-uaip",
        name: "Unidad de Acceso a la Información Pública",
        url: "https://www.gub.uy/unidad-acceso-informacion-publica/",
        publisher: "UAIP",
        description:
          "Órgano de control del acceso a la información y de la protección de datos personales. Publica guías para solicitar.",
        topics: ["transparencia", "justicia"],
        kind: "solicitudes",
      },
      {
        id: "uy-catalogo",
        name: "Catálogo de Datos Abiertos",
        url: "https://catalogodatos.gub.uy/",
        publisher: "AGESIC",
        description:
          "Catálogo nacional de datos abiertos del Estado uruguayo, con conjuntos descargables y metadatos.",
        topics: ["transparencia", "economia", "transporte", "salud"],
        kind: "datos",
      },
      {
        id: "uy-compras",
        name: "Agencia Reguladora de Compras Estatales",
        url: "https://www.gub.uy/agencia-reguladora-compras-estatales/",
        publisher: "Presidencia",
        description:
          "Institución que hoy concentra la regulación de las compras estatales. El dominio histórico de compras redirige aquí.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "uy-ine",
        name: "Instituto Nacional de Estadística",
        url: "https://www.gub.uy/instituto-nacional-estadistica/",
        publisher: "INE",
        description: "Estadísticas demográficas, económicas y sociales.",
        topics: ["estadistica", "economia"],
        kind: "estadistica",
      },
      {
        id: "uy-presupuesto",
        name: "Datos abiertos del Presupuesto Nacional",
        url: "https://presupuestonacional.gub.uy/datos_abiertos_presupuesto_2025-2029",
        publisher: "Contaduría General de la Nación",
        description:
          "Recursos, créditos y partidas del presupuesto 2025-2029, en CSV.",
        topics: ["presupuesto", "economia"],
        kind: "presupuesto",
      },
    ],
    sources: [
      { label: "Ley 18.381 en IMPO", url: "https://www.impo.com.uy/bases/leyes/18381-2008" },
      { label: "SAIP", url: "https://solicitudes.gub.uy" },
      { label: "UAIP", url: "https://www.gub.uy/unidad-acceso-informacion-publica/" },
    ],
  },
  {
    slug: "argentina",
    iso: "AR",
    name: "Argentina",
    region: "cono-sur",
    lawStatus: "vigente",
    summary:
      "La Ley 27.275 obliga a los sujetos del sector público nacional a responder en 15 días hábiles. La Agencia de Acceso a la Información Pública sigue en funciones y recibe reclamos. Las provincias tienen sus propias leyes: esta ficha cubre el Estado nacional, no a cada provincia.",
    constitution:
      "El derecho se apoya en los tratados de derechos humanos con jerarquía constitucional (artículo 75 inciso 22), en los derechos implícitos del artículo 33 y en la jurisprudencia de la Corte Suprema. La ley operativa es la 27.275.",
    lawName:
      "Ley 27.275 de Derecho de Acceso a la Información Pública, de 2016, reglamentada por el Decreto 206/2017.",
    lawUrl: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/265000-269999/265949/norma.htm",
    obligated:
      "Administración pública nacional, empresas y fondos del Estado, concesionarios de servicios públicos y personas privadas que hayan recibido fondos públicos, respecto de esos fondos. El Congreso, el Poder Judicial y los ministerios públicos tienen sus propias autoridades de aplicación.",
    deadline: "15 días hábiles desde la presentación.",
    deadlineShort: "15 días hábiles",
    deadlineDays: 15,
    extension:
      "Otros 15 días hábiles, por única vez, si la administración explica por escrito que la información es difícil de reunir. Tiene que avisarte antes de que venza el primer plazo.",
    silence:
      "Vencido el plazo, o la prórroga si te la notificaron, el silencio es una denegatoria injustificada. Abre el reclamo ante la Agencia y la vía judicial.",
    appeal:
      "Reclamo ante la Agencia de Acceso a la Información Pública dentro de los 40 días hábiles. No hace falta agotar esa vía para ir a la justicia: la ley permite la acción judicial directa, también en 40 días hábiles, por el trámite del amparo.",
    oversight:
      "Agencia de Acceso a la Información Pública, ente autárquico en la órbita de la Jefatura de Gabinete de Ministros.",
    oversightUrl: "https://www.argentina.gob.ar/aaip",
    requestPortalName: "Trámites a Distancia",
    requestPortalUrl: "https://www.argentina.gob.ar/solicitar-informacion-publica",
    channels: [
      "Trámites a Distancia (TAD), trámite «Acceso a la Información Pública»",
      "Guía en argentina.gob.ar/solicitar-informacion-publica",
      "Mesa de entradas del organismo",
    ],
    whoCanRequest:
      "Cualquier persona humana o jurídica, sin acreditar un interés ni explicar el motivo. La Ley 27.275 es nacional: para una provincia o un municipio rige la norma local.",
    steps: [
      "Busca en datos.gob.ar, Presupuesto Abierto y COMPR.AR. Si el archivo ya está, no inicies un expediente.",
      "Redacta el pedido con tu nombre, la información que solicitas y un medio para recibirla. No expliques para qué la quieres.",
      "Preséntalo por Trámites a Distancia o en la mesa de entradas del organismo. El Portal Nacional de Transparencia explica el circuito.",
      "Guarda el número. El plazo es de 15 días hábiles. Si piden prórroga, tiene que estar motivada y cabe una sola, de otros 15.",
      "Si no responden, responden incompleto o reservan de más, reclama ante la AAIP dentro de los 40 días hábiles o presenta la acción judicial.",
    ],
    tips: [
      "Para el reclamo en la Agencia hace falta la copia de tu solicitud y, si existe, la respuesta. El trámite también está en TAD.",
      "No uses esta ficha para una provincia. Buenos Aires, Córdoba o una municipalidad tienen otra autoridad y otro plazo.",
      "El acceso es gratuito. Solo pueden cobrarte el costo de reproducción, y deben decirte el monto.",
      "Pide formato reutilizable. El decreto reglamentario empuja la entrega electrónica.",
    ],
    exemptions: [
      "Información clasificada por seguridad, defensa o relaciones internacionales, con el régimen del artículo 8.",
      "Datos personales sensibles.",
      "Secretos industriales, comerciales, financieros o científicos.",
      "Información de investigaciones en curso que pueda frustrarlas.",
      "Las excepciones son taxativas y se interpretan de forma restrictiva.",
    ],
    notes:
      "La guía vigente para presentar el pedido nacional es argentina.gob.ar/solicitar-informacion-publica. El trámite se carga en Trámites a Distancia. La AAIP seguía publicada en octubre de 2026, y desde el 1 de enero de 2026 no gestionar las solicitudes en su sistema de seguimiento puede activar el procedimiento de la Resolución AAIP 80/2024.",
    letterBasis:
      "la Ley 27.275 de Derecho de Acceso a la Información Pública",
    requestLanguage: "es",
    resources: [
      {
        id: "ar-aaip",
        name: "Agencia de Acceso a la Información Pública",
        url: "https://www.argentina.gob.ar/aaip",
        publisher: "Jefatura de Gabinete de Ministros",
        description:
          "Autoridad de aplicación de la Ley 27.275 en el Poder Ejecutivo nacional y sede del reclamo por incumplimiento.",
        topics: ["transparencia", "justicia"],
        kind: "solicitudes",
      },
      {
        id: "ar-portal",
        name: "Portal Nacional de Transparencia",
        url: "https://portal.transparencia.gob.ar/",
        publisher: "Agencia de Acceso a la Información Pública",
        description:
          "Explica cómo pedir información al Estado nacional y publica el registro de incumplimientos.",
        topics: ["transparencia"],
        kind: "solicitudes",
      },
      {
        id: "ar-tad",
        name: "Trámites a Distancia",
        url: "https://tramitesadistancia.gob.ar/",
        publisher: "Estado nacional",
        description:
          "Plataforma donde se inicia la solicitud de acceso y el reclamo ante la Agencia, con identificación.",
        topics: ["transparencia", "registros"],
        kind: "solicitudes",
      },
      {
        id: "ar-datos",
        name: "datos.gob.ar",
        url: "https://www.datos.gob.ar/",
        publisher: "Estado nacional",
        description: "Catálogo de datos abiertos de la administración pública nacional.",
        topics: ["transparencia", "economia", "transporte", "salud"],
        kind: "datos",
      },
      {
        id: "ar-presupuesto",
        name: "Presupuesto Abierto",
        url: "https://www.presupuestoabierto.gob.ar/",
        publisher: "Oficina Nacional de Presupuesto",
        description: "Consulta y descarga de la ejecución presupuestaria nacional.",
        topics: ["presupuesto", "economia"],
        kind: "presupuesto",
      },
      {
        id: "ar-comprar",
        name: "COMPR.AR",
        url: "https://comprar.gob.ar/",
        publisher: "Estado nacional",
        description: "Sistema electrónico de contrataciones de la administración nacional.",
        topics: ["contrataciones", "presupuesto"],
        kind: "compras",
      },
      {
        id: "ar-indec",
        name: "INDEC",
        url: "https://www.indec.gob.ar/",
        publisher: "Instituto Nacional de Estadística y Censos",
        description: "Censos, índices de precios y estadísticas económicas y sociales.",
        topics: ["estadistica", "economia"],
        kind: "estadistica",
      },
    ],
    sources: [
      {
        label: "Ley 27.275 en InfoLeg",
        url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/265000-269999/265949/norma.htm",
      },
      {
        label: "Derechos de acceso en la AAIP",
        url: "https://www.argentina.gob.ar/aaip/accesoalainformacion",
      },
    ],
  },
  {
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
  },
];
