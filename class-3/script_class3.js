// Remember, gonna use strict mode in all scripts now!
// "use strict";

// const x = "23";
// if (x === 23) console.log(23);

// const calAge = birthYear => 2023 - birthYear;
// //console.log();
// console.log(x);

const x = document.forms["frm1"];
console.dir(x);
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
