import type { Country } from "../types";
import { andes } from "./andes";
import { caribe } from "./caribe";
import { mexicoCentro } from "./mexico-centro";
import { sur } from "./sur";

export const countries: Country[] = [...mexicoCentro, ...andes, ...sur, ...caribe].sort((a, b) =>
  a.name.localeCompare(b.name, "es"),
);

const bySlug = new Map(countries.map((country) => [country.slug, country]));

export function getCountry(slug: string | undefined): Country | undefined {
  if (!slug) return undefined;
  return bySlug.get(slug);
}
