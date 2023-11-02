function areAllCharactersUnique(str) {
  const charCount = {};
  let len = str.length;
  for (let i = 0; i < len; i++) {
    const char = str[i];

    if (charCount[char]) {
      return false;
    }
    charCount[char] = true;
    // console.log(charCount);
  }
  return true;
}
function areAllCharactersUniqueSet(str) {
  const charSet = new Set();
  let len = str.length;
  for (let i = 0; i < len; i++) {
    const char = str[i];

    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
    // console.log(charCount);
  }
  return true;
}

module.exports = areAllCharactersUnique;
module.exports = areAllCharactersUniqueSet;
