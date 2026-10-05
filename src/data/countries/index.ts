import type { Country } from "../types";
import { country as argentina } from "./argentina";
import { country as belice } from "./belice";
import { country as bolivia } from "./bolivia";
import { country as brasil } from "./brasil";
import { country as chile } from "./chile";
import { country as colombia } from "./colombia";
import { country as costaRica } from "./costa-rica";
import { country as cuba } from "./cuba";
import { country as ecuador } from "./ecuador";
import { country as elSalvador } from "./el-salvador";
import { country as guatemala } from "./guatemala";
import { country as haiti } from "./haiti";
import { country as honduras } from "./honduras";
import { country as mexico } from "./mexico";
import { country as nicaragua } from "./nicaragua";
import { country as panama } from "./panama";
import { country as paraguay } from "./paraguay";
import { country as peru } from "./peru";
import { country as puertoRico } from "./puerto-rico";
import { country as republicaDominicana } from "./republica-dominicana";
import { country as uruguay } from "./uruguay";
import { country as venezuela } from "./venezuela";

export const countries: Country[] = [
  argentina,
  belice,
  bolivia,
  brasil,
  chile,
  colombia,
  costaRica,
  cuba,
  ecuador,
  elSalvador,
  guatemala,
  haiti,
  honduras,
  mexico,
  nicaragua,
  panama,
  paraguay,
  peru,
  puertoRico,
  republicaDominicana,
  uruguay,
  venezuela,
].sort((a, b) => a.name.localeCompare(b.name, "es"));

const bySlug = new Map(countries.map((country) => [country.slug, country]));

export function getCountry(slug: string | undefined): Country | undefined {
  if (!slug) return undefined;
  return bySlug.get(slug);
}
