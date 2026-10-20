import {
  lawStatuses,
  origins,
  regions,
  resourceKinds,
  topics,
  type LawStatus,
  type OriginId,
  type RegionId,
  type RequestLanguage,
  type ResourceKind,
  type TopicId,
} from "./types";

export function regionLabel(id: RegionId): string {
  return regions.find((region) => region.id === id)?.label ?? id;
}

export function lawStatusLabel(id: LawStatus): string {
  return lawStatuses.find((status) => status.id === id)?.label ?? id;
}

export function topicLabel(id: TopicId): string {
  return topics.find((topic) => topic.id === id)?.label ?? id;
}

export function kindLabel(id: ResourceKind): string {
  return resourceKinds.find((kind) => kind.id === id)?.label ?? id;
}

export function originLabel(id: OriginId): string {
  return origins.find((origin) => origin.id === id)?.label ?? id;
}

export function originClass(id: OriginId): string {
  const base = "inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold normal-case tracking-normal";
  if (id === "oficial") return `${base} bg-ink text-paper`;
  if (id === "comunitaria") return `${base} border border-teal/40 bg-paper text-teal`;
  return `${base} border border-line bg-paper text-ink-soft`;
}

export function languageLabel(id: RequestLanguage): string {
  if (id === "en") return "inglés";
  if (id === "fr") return "francés o creole";
  if (id === "pt") return "portugués";
  return "español";
}
