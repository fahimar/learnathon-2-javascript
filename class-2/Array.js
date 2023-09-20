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


/********** javascript Polyfilling */
const arr = [1, 2, 3, 4];
const newArr = arr.map(elem => { //Here, the custom pMap function is used to square each item
    return elem * 2;
});
console.log(newArr);

Array.prototype.pMap = function (callbak) {  //This method tries to mimic the behavior of the built-in Array.prototype.map() method, but it's named pMap here.
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callbak(this[i], i, this));
    }
    return res;
}