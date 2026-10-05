import type { Country } from "../types";

export const country: Country = {
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
};
