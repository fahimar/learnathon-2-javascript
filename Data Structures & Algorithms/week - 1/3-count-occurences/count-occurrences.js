function countOccurrences(str, char) {
  let count = 0;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    // console.log(str[i]);
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

const countOccurrences_2 = (str, char) => {
  //   console.log(str.split(char).length - 1);
  return str.split(char).length - 1;
};

// module.exports = countOccurrences;
module.exports = countOccurrences_2;
