// function Dog(name, breed, color) {
//   this.name = name;
//   this.breed = breed;
//   this.color = color;
//   this.bark = function () {
//     return "Woof!";
//   };
// }

// const dog1 = new Dog("Daisy", "Labrador", "black");
// const dog2 = new Dog("Jack", "Jack Russell", "white");

/// Using class Dog
class Dog {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
  bark() {
    return "Woof";
  }
}
const dog1 = new Dog("Daisy", "Labrador", "black");
console.log(dog1);
