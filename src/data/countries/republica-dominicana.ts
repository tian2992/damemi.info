import type { Country } from "../types";

export const country: Country = {
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
};
