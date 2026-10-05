import { allResources, placeName } from "./catalog";
import { countries } from "./countries";
import { guideEntries } from "./guide";
import { kindLabel, lawStatusLabel, regionLabel, topicLabel } from "./labels";

export interface SearchDoc {
  id: string;
  kind: "pais" | "recurso" | "guia";
  title: string;
  href: string;
  kicker: string;
  text: string;
}

export function searchDocuments(): SearchDoc[] {
  const docs: SearchDoc[] = countries.map((country) => ({
    id: `pais-${country.slug}`,
    kind: "pais",
    title: country.name,
    href: `/paises/${country.slug}`,
    kicker: `${regionLabel(country.region)} · ${country.deadlineShort}`,
    text: [
      country.summary,
      country.lawName,
      country.constitution,
      country.oversight,
      country.requestPortalName,
      lawStatusLabel(country.lawStatus),
      ...country.channels,
      ...country.resources.map((resource) => resource.name),
    ].join(" "),
  }));

  for (const resource of allResources()) {
    docs.push({
      id: resource.id,
      kind: "recurso",
      title: resource.name,
      href: `/datos#${resource.id}`,
      kicker: `${placeName(resource.countryId)} · ${kindLabel(resource.kind)}`,
      text: [
        resource.description,
        resource.publisher,
        ...resource.topics.map((topic) => topicLabel(topic)),
      ].join(" "),
    });
  }

  for (const entry of guideEntries) {
    docs.push({
      id: `guia-${entry.id}`,
      kind: "guia",
      title: entry.title,
      href: `/guia#${entry.id}`,
      kicker: "Guía de solicitudes",
      text: entry.summary,
    });
  }

  return docs;
}
