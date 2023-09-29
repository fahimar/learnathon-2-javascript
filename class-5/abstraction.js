function Person() {
  this.name = "Fahim";
  if (this.constructor === Person) {
    throw new Error("Your Error Message...");
  }
}

Person.prototype.info = function () {
  return "Person name is: " + this.name;
};
function Teacher(name) {
  this.name = name;
}

// var person = new Person();

Teacher.prototype = Object.create(Person.prototype);
var teacher1 = new Teacher("M. Firoz Ahmed");
console.log(teacher1.info());
// Person name is: M. Firoz Ahmed    is the console output
