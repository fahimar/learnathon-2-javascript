const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((num, index, arr) => {
  console.log(index);
  console.log(arr);
  return num * 2;
});
console.log(doubleNumbers);

const doubleNumbers_map = numbers.map((num) => num * 2);
console.log("Shortly ", doubleNumbers_map);

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
  // return num > 2;
});

console.log(evenNumbers);

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum);

numbers.forEach((num) => {
  console.log(num);
});

const foundNumber = numbers.find((num) => num > 2);

console.log(foundNumber);
