import type { Country } from "../types";

export const country: Country = {
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
};
