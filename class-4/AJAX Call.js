"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/bangladesh`);
  request.send();

  request.addEventListener("load", function () {
    // Error handling for bad responses
    if (request.status !== 200) {
      console.error(`Something went wrong. Status code: ${request.status}`);
      return;
    }

    // Parsing response text to JSON
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Checking if data and necessary properties exist
    if (data && data.languages && data.currencies) {
      //Assuming data.languages is an object where keys are language codes nad values are language names
      const languages = Object.values(data.languages).join(", ");

      //Assuming data.currencies is an array of objects and we need 'name' from the first object
      // const currencyName = data.currencies[0]?.name ?? "N/A";
      const currencyName = Object.keys(data.currencies)[0];
      console.log(data.currencies);
      // using optional chaining
      // Building the HTML string
      const html = `
      <article class="country">
        <img class="country__img" src="${
          data.flags?.png ?? "path_to_a_default_image"
        }" /> <!-- assuming 'flags.png' is the correct path -->
        <div class="country__data">
          <h3 class="country__name">${
            data.name?.common ?? "N/A"
          }</h3> <!-- assuming 'name.common' is the correct path -->
          <h4 class="country__region">${data.region ?? "N/A"}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${languages}</p>
          <p class="country__row"><span>💰</span>${currencyName}</p>
        </div>
      </article>`;

      // Inserting the HTML and adjusting styles
      countriesContainer.insertAdjacentHTML("beforeend", html);
      countriesContainer.style.opacity = 1;
    } else {
      console.error("Data object is not in the expected format", data);
    }
  });

  // Error handling for network issues
  request.addEventListener("error", function () {
    console.error("Failed to make network request.");
  });
};

// Calling the function
getCountryData("bangladesh");
