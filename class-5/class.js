class Person {
  constructor(name, age, year) {
    this.name = name;
    this.age = age;
  }
  play() {
    console.log(`${this.name} is playing.`);
  }
  ageExp() {
    let date = new Date();
    return this.year - this.age;
  }
}

const person1 = new Person("Shanto", 28, 2018); // create actual Object
const person2 = new Person("Afif", 24, 2020);
const person3 = new Person("Mushfiqur", 36, 2001);

person1.play();
console.log(`His current experience is ${person1.age}`);
person2.play();
console.log(`His current experience is ${person2.age}`);
person3.play();
console.log(`His current experience is ${person3.age}`);

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  displayBrand() {
    console.log(`This car is a ${this.brand}`);
  }
}

const myCar = new Car("Toyota");
myCar.displayBrand();
// Inheritence
class Model extends Car {
  constructor(brand, mod) {
    super(brand); // call the parent class constructor
    this.model = mod;
  }

  displayModel() {
    console.log(`This car model is ${this.model}.`);
  }
}

const myModel = new Model("Toyota", "Camry");
myModel.displayBrand();
myModel.displayModel(); //This car model is Camry.
