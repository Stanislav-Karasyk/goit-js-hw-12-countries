import countryTemplate from "./templates/countryTemplate.hbs";
import listCountriesTemplate from "./templates/listCountriesTemplate.hbs";

import { alert, error } from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/Angeler.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";
import "@pnotify/core/dist/PNotify.css";

const countryContainerRef = document.querySelector(".container");

export default function fetchCountries(event) {
  const restCountriesApiUrl = "https://restcountries.eu/rest/v2/name/";
  const searchQuery = event.target.value;

  fetch(restCountriesApiUrl + searchQuery)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 1 && data.length <= 10) {
        countryContainerRef.innerHTML = listCountriesTemplate(data);
      } else if (data.length === 1) {
        countryContainerRef.innerHTML = countryTemplate(data);
      } else if (data.length > 10) {
        error({
          title: "Sorry!",
          text: "You need to make the request more specific",
        });
      }
    })
    .catch((err) => console.log(err));

  if (searchQuery.length == 0) {
    countryContainerRef.innerHTML = "";
  }
}
