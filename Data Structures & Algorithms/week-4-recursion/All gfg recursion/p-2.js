// Mean of array using recursion

// Javascript code to find mean of array
function findMean(arr, n) {
  if (n == 1) return arr[n - 1];
  else return (findMean(arr, n - 1) * (n - 1) + arr[n - 1]) / n;
}

let A = [1, 3, 4, 2, 6, 5];
let n = A.length;
console.log(findMean(A, n)); // 3.5
