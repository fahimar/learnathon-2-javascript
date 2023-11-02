// Solution 1
// function findFirstNonRepeatingCharacter(str) {
//   const charCount = {};

//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   for (const char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   // console.log(charCount);

//   return null;
// }
// Solution 2
function findFirstNonRepeatingCharacter(str) {
  const charCount = new Map();

  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // console.log(charCount);

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
