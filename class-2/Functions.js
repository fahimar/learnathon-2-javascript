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

