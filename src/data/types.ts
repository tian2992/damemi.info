export const topics = [
  { id: "presupuesto", label: "Presupuesto" },
  { id: "contrataciones", label: "Contrataciones" },
  { id: "estadistica", label: "Estadística" },
  { id: "salud", label: "Salud" },
  { id: "educacion", label: "Educación" },
  { id: "ambiente", label: "Ambiente" },
  { id: "justicia", label: "Justicia" },
  { id: "elecciones", label: "Elecciones" },
  { id: "geoespacial", label: "Territorio" },
  { id: "transporte", label: "Transporte" },
  { id: "registros", label: "Registros" },
  { id: "transparencia", label: "Transparencia" },
  { id: "economia", label: "Economía" },
  { id: "gobierno", label: "Gobierno" },
] as const;

export type TopicId = (typeof topics)[number]["id"];

export const regions = [
  { id: "mexico", label: "México" },
  { id: "centroamerica", label: "Centroamérica" },
  { id: "caribe", label: "Caribe" },
  { id: "andes", label: "Andes" },
  { id: "brasil", label: "Brasil" },
  { id: "cono-sur", label: "Cono Sur" },
] as const;

export type RegionId = (typeof regions)[number]["id"];

export const lawStatuses = [
  { id: "vigente", label: "Ley general vigente" },
  { id: "limitada", label: "Marco limitado" },
  { id: "en-tramite", label: "Ley en trámite" },
] as const;

export type LawStatus = (typeof lawStatuses)[number]["id"];

export const resourceKinds = [
  { id: "datos", label: "Datos abiertos" },
  { id: "solicitudes", label: "Dónde pedir" },
  { id: "compras", label: "Compras públicas" },
  { id: "estadistica", label: "Estadística" },
  { id: "presupuesto", label: "Presupuesto" },
  { id: "red", label: "Red o estándar" },
] as const;

export type ResourceKind = (typeof resourceKinds)[number]["id"];

export type RequestLanguage = "es" | "en" | "fr" | "pt";

export interface Resource {
  id: string;
  name: string;
  url: string;
  publisher: string;
  description: string;
  topics: TopicId[];
  kind: ResourceKind;
  countryId: string;
}

export type ResourceInput = Omit<Resource, "countryId">;

export interface Source {
  label: string;
  url: string;
}

export interface Country {
  slug: string;
  iso: string;
  name: string;
  region: RegionId;
  lawStatus: LawStatus;
  summary: string;
  constitution: string;
  lawName: string;
  lawUrl?: string;  //TODO: make more than one URL
  obligated: string;
  deadline: string;
  deadlineShort: string;
  deadlineDays: number | null;
  extension: string;
  silence: string;
  appeal: string;
  oversight: string;
  oversightUrl?: string;
  requestPortalName: string;
  requestPortalUrl?: string;
  channels: string[];
  whoCanRequest: string;
  steps: string[];
  tips: string[];
  exemptions: string[];
  notes: string;
  letterBasis: string;
  letterWarning?: string;
  requestLanguage: RequestLanguage;
  resources: ResourceInput[];
  sources: Source[];
}
