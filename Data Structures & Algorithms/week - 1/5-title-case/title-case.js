function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  //   return words;
  let len = words.length;
  for (let i = 0; i < len; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  //   return str.toUpperCase();
  return words.join(" ");
}

module.exports = titleCase;
