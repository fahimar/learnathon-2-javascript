const cars = ["Saab", "Volvo", "BMW"];

const cars2 = [
    "Mercedes-Benz",
    "Ford",
    "Chevrolet",
    "Dodge",
    "Ferrari",
    "Jaguar"
];

let size = cars2.length;

console.log(size);

cars2.sort();
cars2.reverse();
console.log(cars2);

const points = [20, 50, 30, 1, 5, 20];
points.sort(function (a, b) { return a - b; })