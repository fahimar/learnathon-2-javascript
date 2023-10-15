function DogFunc(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.bark = function () {
    return "Woof!";
  };
}

const dog1 = new DogFunc("Daisy", "Labrador", "black");
const dog2 = new DogFunc("Jack", "Jack Russell", "white");

/// Using class Dog
class DogClass {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
  bark() {
    return "Woof";
  }
}
const dog3 = new DogClass("Daisy", "Labrador", "black");
console.log(dog3);
