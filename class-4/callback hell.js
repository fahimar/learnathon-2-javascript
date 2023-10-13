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
