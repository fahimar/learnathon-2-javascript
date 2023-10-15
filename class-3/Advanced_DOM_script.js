//////////////////////////
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
