// JavaScript program to find sum of array
// elements using recursion.

function findSum(arr, n) {
  if (n <= 0) return 0;
  return findSum(arr, n - 1) + arr[n - 1];
}

let A = [1, 2, 3, 4, 5];
let n = A.length;
console.log(findSum(A, n)); // 15
