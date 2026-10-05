import type { Country } from "../types";

export const country: Country = {
  slug: "nicaragua",
  iso: "NI",
  name: "Nicaragua",
  region: "centroamerica",
  lawStatus: "vigente",
  summary:
    "En el papel existe la Ley de Acceso a la Información Pública, Ley 621. En la práctica no hay un garante independiente ni un portal de solicitudes que funcione como vía segura y eficaz. Quien pide información a una institución nicaragüense debe asumir que la respuesta es discrecional y valorar el riesgo personal.",
  constitution:
    "La Constitución reconoce el derecho de petición y el acceso a información personal. La ley especial es la Ley 621.",
  lawName:
    "Ley de Acceso a la Información Pública, Ley 621, aprobada el 16 de mayo de 2007. Texto consolidado al 29 de octubre de 2020. Reglamento: Decreto Ejecutivo 81-2007.",
  lawUrl:
    "http://legislacion.asamblea.gob.ni/normaweb.nsf/9e314815a08d4a6206257265005d21f9/1fcfa8d7aa8727620625872f0077462e?OpenDocument=",
  obligated:
    "Entes del Estado y particulares que administren recursos públicos, según el texto de la ley. El cumplimiento real es otro asunto.",
  deadline: "15 días hábiles, según el procedimiento escrito en la Ley 621.",
  deadlineShort: "15 días hábiles en la ley",
  deadlineDays: 15,
  extension:
    "Prórroga excepcional de 10 días hábiles si la información está en otra dependencia, es voluminosa o exige analizar una excepción. Deben avisar las razones antes de que venzan los 15 días.",
  silence:
    "En el texto, vencido el plazo sin resolución la solicitud se tiene por aceptada si la información no es reservada ni confidencial (artículo 35). No hay un garante autónomo que haga cumplir ese silencio. En la práctica, no cuentes con la entrega.",
  appeal:
    "Apelación en seis días ante la oficina de coordinación del mismo poder, consejo regional o municipal. Esa instancia no es independiente. También cabe ir directo al contencioso-administrativo.",
  oversight:
    "No hay un órgano garante autónomo operativo. Las oficinas de acceso, donde existen, dependen de la propia institución.",
  requestPortalName: "No hay un portal nacional de solicitudes",
  channels: ["Escrito ante la institución, con resultado incierto"],
  whoCanRequest:
    "La ley dice que cualquier persona. Eso no describe el riesgo ni la probabilidad de respuesta.",
  steps: [
    "Busca primero si el dato estadístico ya está en el INIDE. Es de lo poco que el Estado publica con regularidad.",
    "Si aun así necesitas un expediente, identifica la institución y conserva una copia de cualquier escrito.",
    "No cuentes con un folio electrónico ni con un recurso independiente.",
    "Evalúa si presentar la solicitud te expone. Esta ficha describe la norma; no te anima a hacer un trámite inseguro.",
  ],
  tips: [
    "Prioriza documentos que ya sean públicos antes de pedir expedientes internos.",
    "El plazo de 15 días hábiles es el de la ley, no una expectativa razonable de cumplimiento.",
    "Desconfía de portales no oficiales que ofrezcan «gestionar» la solicitud.",
  ],
  exemptions: [
    "La ley lista reservas de seguridad, privacidad e investigaciones.",
    "En la práctica, la reserva se usa con mucha más amplitud que el texto.",
  ],
  notes:
    "Incluimos a Nicaragua para que el mapa no finja un procedimiento que no está disponible. La Ley 621 existe. Un canal confiable de acceso, no.",
  letterBasis: "la Ley de Acceso a la Información Pública, Ley 621",
  letterWarning:
    "No hay un procedimiento nacional confiable. Esta carta deja constancia de la solicitud, pero no garantiza respuesta ni reduce el riesgo de presentarla.",
  requestLanguage: "es",
  resources: [
    {
      id: "ni-inide",
      name: "INIDE",
      url: "https://www.inide.gob.ni/",
      publisher: "Instituto Nacional de Información de Desarrollo",
      description:
        "Estadísticas oficiales de población, economía y condiciones de vida. Es el acervo público más claro del país.",
      topics: ["estadistica", "economia"],
      kind: "estadistica",
    },
    {
      id: "ni-bcn",
      name: "Estadísticas del Banco Central",
      url: "https://www.bcn.gob.ni/estadisticas",
      publisher: "Banco Central de Nicaragua",
      description:
        "Indicadores monetarios, fiscales, cuentas nacionales y sector externo.",
      topics: ["economia", "estadistica"],
      kind: "estadistica",
    },
  ],
  sources: [
    { label: "INIDE", url: "https://www.inide.gob.ni/" },
    { label: "Banco Central de Nicaragua", url: "https://www.bcn.gob.ni/estadisticas" },
  ],
};
