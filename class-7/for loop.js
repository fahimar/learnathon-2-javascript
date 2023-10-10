// for...of vs for...in

// for...of
const iterable = [3, 5, 7];
for (const i of iterable) {
  console.log(i);
}

// for...in
for (const i in iterable) {
  console.log(i);
}

const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
