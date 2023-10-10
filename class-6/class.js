// In an extended class, we can access the parent class constructor using the super keyword
class DogClass {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return "Woof!";
  }
}

class Chihuahua extends DogClass {
  constructor(name) {
    super(name);
  }
  smallBark() {
    return "Small woof!";
  }
}

const myPet = new Chihuahua("Mimi");
console.log(myPet);

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  startEngine() {
    console.log(`Starting the engine of $(this.brand).`);
  }
}

const car = new Car("Toyota");
console.log(car);
car.startEngine();
