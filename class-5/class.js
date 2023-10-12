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
