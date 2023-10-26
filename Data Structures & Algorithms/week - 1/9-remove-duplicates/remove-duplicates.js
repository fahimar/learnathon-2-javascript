// function removeDuplicates(arr) {
//   const uniqueArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) {
//       uniqueArr.push(arr[i]);
//     }
//   }

//   return uniqueArr;
// }
// using set function

function removeDuplicates(arr) {
  console.log(arr);
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
