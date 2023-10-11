// Function Object
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function () {
    console.log("draw");
  }
`
);

const circ = new Circle1(1);

Circle.call({}, 1); // target of this
Circle.apply({}, [1, 2, 3]);
const another = new Circle(1);

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
