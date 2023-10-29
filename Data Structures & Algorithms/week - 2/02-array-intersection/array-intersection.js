// function arrayIntersection(arr1, arr2) {
//   const intersectionArr = [];
//   const len = arr1.length;
//   for (let i = 0; i < len; i++) {
//     if (arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])) {
//       intersectionArr.push(arr1[i]);
//     }
//   }

//   return intersectionArr;
// }

// method 2 using set
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersectionArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersectionArr.push(num);
    }
  }

  return intersectionArr;
}

module.exports = arrayIntersection;
