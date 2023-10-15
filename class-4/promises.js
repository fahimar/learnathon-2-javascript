// to escap callback hell
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/alpha/{neighbour}`);
// request.send();
"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  // Safeguard against missing data
  const languages = data.languages
    ? Object.values(data.languages)
        .map((lang) => lang.name ?? lang)
        .join(", ") // Assuming 'languages' can be an object or an array
    : "N/A";
  const currency = data.currencies
    ? Object.values(data.currencies)
        .map((cur) => cur.name ?? cur)
        .join(", ")
    : "N/A";

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${
      data.flags?.png ?? "path_to_a_default_image"
    }" />
    <div class="country__data">
      <h3 class="country__name">${data.name?.common ?? "N/A"}</h3>
      <h4 class="country__region">${data.region ?? "N/A"}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${languages}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const request = fetch("https://restcountries.com/v3.1/name/bangladesh");
console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       //  renderCountry(data[0]);
//       if (Array.isArray(data) && data.length > 0) {
//         console.log(data);
//         renderCountry(data[0]);
//       } else {
//         console.error("Data is not an array or is empty", data);
//       }
//     });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};
getCountryData("bangladesh");
