import type { Country } from "../types";

export const country: Country = {
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
};
