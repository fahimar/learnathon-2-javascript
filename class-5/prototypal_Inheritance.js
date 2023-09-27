function Dog(name, bread, color) {
  this.name = name;
  this.bread = bread;
  this.color = color;
  this.bark = function () {
    return "Woof!";
  };
}

const dog1 = new Dog("Daisy", "Labrador", "black");
const dog2 = new Dog("Jack", "Jack Russell", "white");
