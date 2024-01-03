const User = function (name) {
  this.name = name;
  this.discordName = "@" + name;
};
// hey, this is a constructor -
// then this can be refactored into a factory!

function createUser(name) {
  const discordName = "@" + name;
  return { name, discordName };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword

const name = "Bob";
const age = 28;
const color = "red";

const thatObject = { name: name, age: age, color: color };

const nowFancyObject = { name, age, color };

console.log(name, age, color);
console.log({ name, age, color });

// Destructing

const obj = { a: 1, b: 2 };
const { a, b } = obj;

// This creates two variables. a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const array = [1, 2, 3, 4, 5];
const [zerothEle, firstEle] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array
