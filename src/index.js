import styles from "./styles.css";
import fetchCountries from "./fetchCountries.js";
import countryTemplate from "./templates/countryTemplate.hbs";
import listCountriesTemplate from "./templates/listCountriesTemplate.hbs";

import { error } from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/Angeler.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";
import "@pnotify/core/dist/PNotify.css";

import debounce from "lodash.debounce";

const inputRef = document.querySelector("input");
const countryContainerRef = document.querySelector(".container");

inputRef.addEventListener(
  "input",
  debounce((event) => {
    const inputValue = event.target.value;
    if (inputValue == 0) {
      document.querySelector(".list-countries").innerHTML = "";
      countryContainerRef.innerHTML = "";
    }
    fetchCountries(inputValue);
  }, 500),
);

function countryesMarkap(data) {
  if (data.length > 1 && data.length <= 10 && data.length !== 0) {
    countryContainerRef.innerHTML = listCountriesTemplate(data);
  } else if (data.length === 1) {
    countryContainerRef.innerHTML = countryTemplate(data);
  } else if (data.length > 10) {
    error({
      title: "Sorry!",
      text: "You need to make the request more specific",
    });
  }
}

export default countryesMarkap;
