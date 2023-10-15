function Circle(radius) {
  let color = "red";

  this.radius = radius;

  //   this.defaultLocation = { x: 0, y: 0 };
  let defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function (factor) {
    // ...
  };
  // Abstraction - should hide the details and complexity and show or expose only the essentials
  this.draw = function () {
    this.computeOptimumLocation();

    computeOptimumLocation(0.1); // for Private Properties and Methods
    this.console.log("draw");
  };
}
const another = new Circle(10);
// circle.computeOptimumLocation(0.1); // bad state
circle.draw();

circle.defaultLocation = false;
