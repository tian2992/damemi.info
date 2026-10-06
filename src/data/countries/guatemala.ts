import type { Country } from "../types";

export const country: Country = {
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
  lawUrl: "https://gae.gob.gt/wp-content/uploads/2025/06/Decreto-57-2008.V2025.pdf", // https://www.congreso.gob.gt/detalle_pdf/decretos/13082
  obligated:
    "Organismos del Estado, entidades autónomas y descentralizadas, municipalidades, y personas o entidades que administren o ejecuten recursos públicos, respecto de esos recursos.",
  deadline:
    "El artículo 42 manda resolver dentro de los diez días siguientes a que la solicitud se presente y se admita. El decreto no escribe «hábiles», diciendo literalmente “Siguientes”; SAT, RENAP, MINECO y otras entidades lo aplican como días hábiles.",
  deadlineShort: "10 días hábiles*",
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
};
