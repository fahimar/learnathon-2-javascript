let globalAge = 25;

function printAge(age) {
  var varAge = 34;

  if (age > 0) {
    const constAge = age * 2;
    console.log(constAge);
  }
  //   console.log(constAge);
  // ERROR! We tried to access a block scoped variable
  // not within its scope
}

printAge(globalAge);
// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
// console.log(varAge);
