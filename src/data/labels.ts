import {
  lawStatuses,
  regions,
  resourceKinds,
  topics,
  type LawStatus,
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

export function languageLabel(id: RequestLanguage): string {
  if (id === "en") return "inglés";
  if (id === "fr") return "francés o creole";
  if (id === "pt") return "portugués";
  return "español";
}
