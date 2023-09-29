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
