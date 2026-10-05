import type { Country } from "../types";

export const country: Country = {
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
};
