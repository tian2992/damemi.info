import type { Country } from "../types";

export const country: Country = {
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
};
