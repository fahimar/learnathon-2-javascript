// to escap callback hell
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/alpha/{neighbour}`);
// request.send();

const request = fetch("https://restcountries.com/v3.1/name/bangladesh");
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      if (Array.isArray(data) && data.length > 0) {
        console.log(data);
        renderCountry(data[0]);
      } else {
        console.error("Data is not an array or is empty", data);
      }
    });
};
getCountryData("bangladesh");
