import type { Country } from "../types";

export const country: Country = {
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
};
