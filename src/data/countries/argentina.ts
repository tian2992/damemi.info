import type { Country } from "../types";

export const country: Country = {
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
};
