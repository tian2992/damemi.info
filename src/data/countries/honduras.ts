import type { Country } from "../types";

export const country: Country = {
  slug: "honduras",
  iso: "HN",
  name: "Honduras",
  region: "centroamerica",
  lawStatus: "vigente",
  summary:
    "La ley de transparencia crea el Instituto de Acceso a la Información Pública y un portal único para presentar solicitudes. El plazo ordinario es de 10 días hábiles. El instituto es la vía de queja cuando una institución no entrega la información.",
  constitution:
    "El acceso se ejerce sobre todo por la ley especial. La Constitución reconoce la publicidad de los actos de gobierno y el habeas data.",
  lawName:
    "Ley de Transparencia y Acceso a la Información Pública, Decreto 170-2006.",
  obligated:
    "Instituciones del Estado, centralizadas y descentralizadas, municipalidades y entes que manejen recursos o información pública.",
  deadline: "10 días hábiles desde que la institución recibe la solicitud.",
  deadlineShort: "10 días hábiles",
  deadlineDays: 10,
  extension:
    "Cabe una prórroga breve cuando el volumen o la ubicación de los documentos lo justifica. Pide que te la notifiquen con la nueva fecha.",
  silence:
    "La falta de respuesta se reclama ante el Instituto de Acceso a la Información Pública. No equivale a una entrega automática.",
  appeal:
    "Denuncia o recurso ante el IAIP, que puede ordenar la entrega. La decisión del instituto puede llevarse después a la vía judicial.",
  oversight: "Instituto de Acceso a la Información Pública (IAIP).",
  oversightUrl: "https://portalunico.iaip.gob.hn/",
  requestPortalName: "SIELHO",
  requestPortalUrl: "https://sielho.iaip.gob.hn/inicio/",
  channels: [
    "SIELHO, el sistema electrónico del IAIP",
    "Oficial de información de la institución",
    "Escrito presencial",
  ],
  whoCanRequest:
    "Cualquier persona, sin acreditar un interés especial ni explicar el uso que dará a la información.",
  steps: [
    "Entra al Portal Único del IAIP y busca si la institución ya publicó el dato en su portal de transparencia.",
    "Si no está, presenta la solicitud en el portal o ante el oficial de información de esa institución.",
    "Describe el documento, el periodo y el formato. Pide el número de ingreso.",
    "Cuenta 10 días hábiles desde la recepción.",
    "Si no hay respuesta o la reserva no está motivada, denuncia el incumplimiento ante el IAIP por el mismo portal.",
  ],
  tips: [
    "El portal único evita que cada solicitud dependa de un correo personal del funcionario de turno.",
    "Pide datos en archivo editable cuando se trate de listas o ejecuciones presupuestarias.",
    "Al revisar este directorio, el certificado de HonduCompras estaba vencido. Confirma el dominio antes de subir documentos de identidad a un sitio de compras.",
  ],
  exemptions: [
    "Seguridad del Estado y datos que comprometan investigaciones en curso.",
    "Datos personales sensibles.",
    "Secretos comerciales entregados con ese carácter.",
    "Información clasificada conforme a la ley, con motivación y temporalidad.",
  ],
  notes:
    "Usa el Portal Único como canal principal. El sitio histórico www.iaip.gob.hn no resolvía al preparar esta ficha; el portal único sí está en línea, aunque a veces bloquea visitas automatizadas.",
  letterBasis:
    "la Ley de Transparencia y Acceso a la Información Pública, Decreto 170-2006",
  requestLanguage: "es",
  resources: [
    {
      id: "hn-portal",
      name: "Portal Único de Transparencia",
      url: "https://portalunico.iaip.gob.hn/",
      publisher: "Instituto de Acceso a la Información Pública",
      description:
        "Canal para presentar solicitudes de información y consultar portales institucionales de transparencia activa.",
      topics: ["transparencia"],
      kind: "solicitudes",
    },
    {
      id: "hn-ine",
      name: "Instituto Nacional de Estadística",
      url: "https://ine.gob.hn/",
      publisher: "INE Honduras",
      description:
        "Estadísticas demográficas, económicas y sociales producidas por el sistema estadístico nacional.",
      topics: ["estadistica", "economia", "salud", "educacion"],
      kind: "estadistica",
    },
    {
      id: "hn-sielho",
      name: "SIELHO",
      url: "https://sielho.iaip.gob.hn/inicio/",
      publisher: "Instituto de Acceso a la Información Pública",
      description:
        "Sistema electrónico para presentar solicitudes de información y recursos de revisión.",
      topics: ["transparencia"],
      kind: "solicitudes",
    },
    {
      id: "hn-sefin",
      name: "Datos abiertos de la SEFIN",
      url: "https://www.sefin.gob.hn/datos-abiertos/",
      publisher: "Secretaría de Finanzas",
      description:
        "Formulación y ejecución del presupuesto, inversión pública y descargas de compras.",
      topics: ["presupuesto", "economia", "contrataciones"],
      kind: "presupuesto",
    },
  ],
  sources: [
    { label: "SIELHO", url: "https://sielho.iaip.gob.hn/inicio/" },
    { label: "Portal Único del IAIP", url: "https://portalunico.iaip.gob.hn/" },
    { label: "INE Honduras", url: "https://ine.gob.hn/" },
  ],
};
