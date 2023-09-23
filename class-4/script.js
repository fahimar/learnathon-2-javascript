//Asynchronous Code
// callback
const myDiv = document.getElementById("myBtn");
myDiv.addEventListener("click", function () {
  document.getElementById("demo").innerHTML = "Hello World";
});

var num = 1;
function addOne() {
  num++;
}
addOne();
addOne();
addOne();
console.log(num);

// promise as asynchronous operation
const myPromise = new Promise((resolve, reject) => {
  const num = Math.ceil(Math.random() * 100);

  if (num % 2 == 0) {
    resolve(
      JSON.stringify({
        name: "Fahim",
        email: "fahimar14040@gmail.com",
        location: "Dhaka",
      })
    );
  } else {
    reject("Odd number will not provide you the data.");
  }
});

/// Promise  Consume Phase
myPromise
  .then((data) => {
    // console.log(typeof data);
    return JSON.parse(data);
    // return data.JSON;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((errMsg) => {
    console.error(errMsg);
  });
