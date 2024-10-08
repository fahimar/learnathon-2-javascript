// Sum of natural numbers using recursion

// function recSum(n) {
//   if (n <= 1) return n;
//   return n + recSum(n - 1);
// }

// let n = 5;
// console.log(recSum(n)); // 15

// Javascript program for decimal to binary
// conversion using recursion
function decToBinary(dec) {
  if (dec == 0) return 0;
  else return (dec % 2) + 10 * decToBinary(parseInt(dec / 2));
}

var dec = 10;
console.log(decToBinary(dec)); // 1010
