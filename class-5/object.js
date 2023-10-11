const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

let name = "Mosh";
let age = 30;

let person = {
  name: "Fahim",
  age: 24,
};

// Dot Notation
person.name = "Akil";

// Bracket Notation
let selection = "name";
person[selection] = "Al Rashid";

console.log(person.name);
