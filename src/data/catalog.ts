import { getCountry, countries } from "./countries";
import { regionalResources } from "./regional";
import type { Resource } from "./types";

export function resourcesForCountry(slug: string): Resource[] {
  const country = getCountry(slug);
  if (!country) return [];
  return country.resources.map((resource) => ({ ...resource, countryId: slug }));
}

export function allResources(): Resource[] {
  return [
    ...countries.flatMap((country) =>
      country.resources.map((resource) => ({ ...resource, countryId: country.slug })),
    ),
    ...regionalResources,
  ];
}

export function placeName(countryId: string): string {
  if (countryId === "regional") return "Regional";
  return getCountry(countryId)?.name ?? countryId;
}
