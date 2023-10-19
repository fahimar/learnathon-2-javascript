console.log("Welcome to Class-8");

/**
 * Different types of error in JS
 */

//! Syntax Error
// if (true)
//   console.log("This is a syntax error");
// }

// const arr = [10,20,30];
// for(const num = 50 of nums){
//    console.log(num);
// }

//! Reference Error
// console.log(vivasoft);

// function foo() {
//   "use strict";
//   bar = "vivasoft";
// }

// foo();

//! Type Error
// let num = 7;
// num.split();

// const myLuckyNumber = 999;
// myLuckyNumber = 777;

//! Range Error
// const myArr = new Array(-1);
// console.log(myArr);

// const myArr2 = new Array(5);
// console.log(myArr2[-2]);  // undefine

// const today = new Date("2023 - 19 - 10").toISOString(); //"2023-19-10"  2023-10-18T19:04:58.853Z
// console.log(today);

//! URI Error
const encodedURI = encodeURI("\uD800");
console.log(encodedURI);

const decodeUri = decodeURI("%E0%A4%A");
console.log(decodeUri);

//! Internal Error
// function infinityCall() {
//   infinityCall();
// }
// // Uncaught RangeError: Maximum call stack size exceeded
// //     at infinityCall (error-handling.js:53:3)
// infinityCall();

//! EvaluationError
// eval('const name = "Fahim"; console.log(name);');
// eval("console.log(age);");

/**
 * ? Try-Catch-Finally
 */

// try {
//   //   if (true) {
//   //     console.log("This is a syntax error");
//   //   }
//   const num = 180;
//   num = 404;
// } catch (error) {
//   console.error("Error-", error);
// }

let loading = true;

try {
  const rasel = { age: 24 }; // object
  console.log(rasel);

  someAsyncCall();
  loading = false;
} catch (error) {
  console.log("error:::", error);
  // loading = false;
} finally {
  console.log("Will be console every time");
  loading = false;
}

// if (true) console.log("True block");
// else console.log("False block");
function dosomething() {
  console.log("True block");
}
try {
  dosomething();
} catch (error) {
  console.log("False block");
}
