//callback
function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}
function compute(callback, x, y) {
  return callback(x, y);
}

console.log(compute(divide, 10, 5));
console.log(compute(multiply, 3, 5));
console.log(compute(add, 4, 5));

//callback hell is essentially nested callbacks stacked below one another forming a pyramid structure.

getArticle(80, (user) => {
  console.log("Fetch articles", user);
  getUserData(user.username, (name) => {
    console.log(name);
    getAddress(name, (item) => {
      console.log(item);
    });
  });
});
//-------------------------

const renderCountry = (function (data, className = "") {
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

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.computedStyleMap.opacity = 1;
})("use strict");

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    // Parsing response text to JSON
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    const [neighbour] = data.borders;

    if (!neighbour) return;

    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/alpha/{neighbour}`);
    request.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("bangladesh");

// Callback hell
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 second passed");
    setTimeout(() => {
      console.log("3 second passed");
      setTimeout(() => {
        console.log("4 second passed"); // hard to maintain and understand
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
