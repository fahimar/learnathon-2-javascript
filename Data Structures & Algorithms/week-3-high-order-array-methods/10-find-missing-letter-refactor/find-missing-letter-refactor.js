function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  // return start;

  const missingCharCode = arr
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) {
        return true;
      }
      start = current;
      return false;
    });
  // return missingCharCode;
  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";
}

module.exports = findMissingLetter;
