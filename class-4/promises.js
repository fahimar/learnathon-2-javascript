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
    <img class="country__img" src="${data.flags?.png ?? "india.png"}" />
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
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentElement("beforeend", msg);
  // countriesContainer.style.opacity = 1;
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
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      //  const neighbour = "BD"; // for Bangladesh as an example
      if (!neighbour) return;
      // Country 2

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

      //  return 23;
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.log(`${err} ERROR`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("bangladesh");
});
getCountryData("fgdfsgdfg");
