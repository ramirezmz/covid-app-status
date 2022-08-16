export interface CountryVaccine {
  administered: number;
  people_vaccinated: number;
  people_partially_vaccinated: number;
  country: string;
  population: number;
  sq_km_area?: number;
  life_expectancy?: string;
  elevation_in_meters?: number;
  continent?: string;
  abbreviation?: string;
  location?: string;
  iso?: number;
  capital_city: string;
  updated?: string;
}