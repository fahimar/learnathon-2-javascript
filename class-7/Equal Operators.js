const age = 18; // '18'
if (age === 18) console.log("You just became an adult :D (strict)"); // doesnt perform type coercion.
if (age === "18") console.log(age === "18");

if (age == "18") console.log("You just became an adult :D (loose)"); // perform type coercion.

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
  console.log("Cool! 23 is an amazing number!");
}
