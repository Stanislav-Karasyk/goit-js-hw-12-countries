import styles from "./styles.css";
import fetchCountries from "./fetchCountries.js";

import debounce from "lodash.debounce";

const inputRef = document.querySelector("input");

inputRef.addEventListener("input", fetchCountries);

inputRef.addEventListener(
  "input",
  debounce((event) => {

    fetchCountries(event.target.value);
  }, 500),
);
