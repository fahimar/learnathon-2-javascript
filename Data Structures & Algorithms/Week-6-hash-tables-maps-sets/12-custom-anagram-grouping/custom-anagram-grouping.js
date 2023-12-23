const HashTable = require("./HashTable");

function anagramGrouping(words) {
  const anagramGroups = new HashTable();

  for (const word of words) {
    const sortedChars = word.split("").sort().join("");
    // console.log(sortedChars);
    if (anagramGroups.get(sortedChars)) {
      anagramGroups.get(sortedChars).push(word);
    } else {
      anagramGroups.set(sortedChars, [word]);
    }
  }

  return anagramGroups.getValues();
}

module.exports = anagramGrouping;
