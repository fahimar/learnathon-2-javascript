// constructor property
let x = {}; // let x = new Object();

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);

// constructor Function
function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(10);

// user.token = 'abc'
another.location = { x: 1 };

const propertyName = "location";
another[propertyName] = { x: 1 };
another["location"] = { x: 1 };
// delete another["location"];

// enumerate
for (let key in another) {
  if (typeof another[key] !== "function") console.log(key, another[key]);
}

const keys = Object.keys(another);
console.log(keys);

if ("radius" in circle) console.log("Circle has a radius.");
