function logger() {
    console.log("My name is Fahim A R Akil");
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(3, 1);
console.log(appleJuice);
console.log(fruitProcessor(3, 1));



// Function declaration
const age1 = calcAge1(2000);
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    return 2037 - birthYear;
}

//const age1 = calcAge1(2000);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    // const age = 2037 - birthYear;
    return 2037 - birthYear;
}
const age2 = calcAge2(2000);

console.log(age1, age2);

// function funtionTwo(a, b) { // perameter
//     console.log("Function kaj korceh");
//     console.log(a, b);

// }

// funtionTwo("Fahim", "AUST"); //  argument

// Scoping

let glob = "I am global variable";
let localVariable = "I am g variable"
console.log(glob);

var myFunc = function () {
    var localVariable = "I am Local variable";
    //console.log(glob);
    console.log(localVariable);
}
myFunc();

//console.log(local);

// Scope and closure
let a = 20;

const func = x => {
    let a = x;
};

func(99);
console.log(a);

const counterCreate = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

const counter = counterCreate();//counterCreator initializes a local variable (count) and then returns a function
counter();
counter();
counter();

//'use strict'; // uncommenting ctrl + /

function update(obj) { // perameter

    obj.year = "2023";

    obj = null;
    //  return c + " " + d;

}
const x = { Name: "Safwan sir", Company: "Vivasoft", };

console.log(x.year);

update(x);

console.log(x.year);

const num = Number(80);
/* ******************************* ARROW FUNCTION *********************************** */
const calcAge3 = function (birthYear) {
    // const age = 2037 - birthYear;
    return 2037 - birthYear;
}
// ARROW FUNCTION
const calcAge4 = birthYear => 2037 - birthYear;
const age3 = calcAge4(2000);
console.log(age3);

const add = (x, y, z) => x + y + z;
const val = add(2, 5, 7);
console.log(val);

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(2000));

const yearsUntilRetirementstr = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirementstr(2000, "Fahim"));
console.log(yearsUntilRetirementstr(1971, "Dad"));


// Eval execution function
let inp = "6+4";
let res = Function("return " + inp);

// function anonymus() {
//     return 5 + 4
// }

let res1 = Function("return " + inp)();
console.log(res1); 
