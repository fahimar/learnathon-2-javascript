"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryData = function (country) {
  const request = new XMLHttpRequest(); // old method
  request.open("GET", "https://restcountries.com/v3.1/name/bangladesh");
  request.send();
  // console.log(request.responseText);

  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.nativeName}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
               <p class="country__row"><span>💰</span>${
                 data.currencies[0].name
               }</p>
              </div>
              </article>
      `;
    countriesContainer.insertAdjacentElement("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("bangladesh");
