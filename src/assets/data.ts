import { countries as mockCountries } from 'src/_mock/map/countries';

export const countries = mockCountries.map((country) => ({
  ...country,
  label: country.name,
  value: country.country_code,
}));
