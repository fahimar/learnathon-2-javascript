//console.dir()
// Values , Variables and Data Type


var name;
name = "Fahim Al Rashid"; // In some cases this create some problem, it is kind of reserved keyword
let $name = "Fahim Al Rashid";
let firstName = "Fahim";// string
let $function = 80;
const PI = 3.1415926535897932384626434;
var x;
var y;
var z = x + y;
var n = 50;


console.log(firstName);
console.log(z);

// var A = 50;
// var A = 40;  // ctrl + K + C

// console.log(A);

console.log("PI type is (" + typeof PI + ")");
console.log(PI + " " + $function);


function print() {
    var square = n * n;

    console.log(square);
}

print();

const num = 50;
const num2 = 40; // num cant be redeclare

let a = 10;
a = 20;
console.log(a); // muted the variable
// let and const are block scoper + cannnot be redeclare

const numT = typeof 50;
const numS = typeof "Fahim Al Rashid";
console.log(numT);
// number
// string
console.log(numS);

// Value -> Object or Primitive
// ALl primitives
let age = 24;
let pass = true;
let fail = false;
let student;
const huge = BigInt(999999999999888888888888n); // immutable variable
console.log(age, pass, fail, student);
console.log(huge);
console.log("age type is (" + typeof age + ")");
console.log("pass type is (" + typeof pass + ")");
console.log("student type is (" + typeof student + ")");

// Dynamic value assigning      ctrl + / commenting
age = "Young";
console.log(age);
console.log("age type is (" + typeof age + ")");
console.log("Null type is (" + typeof null + ")"); //  bug
/* Output:
Fahim
NaN
PI type is (number)
3.141592653589793 80
2500
10
number
string
24 true false undefined
999999999999888888888888n
age type is (number)
pass type is (boolean)
student type is (undefined)
Young
age type is (string)
Null type is (object)
*/