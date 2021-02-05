import countryesMarkap from "./index.js";

export default function fetchCountries(searchQuery) {
  const restCountriesApiUrl = "https://restcountries.eu/rest/v2/name/";
  const url = restCountriesApiUrl + searchQuery;

  return fetch(url)
    .then((res) => res.json())
    .then(countryesMarkap)
    .catch((err) => console.log(err));
}
