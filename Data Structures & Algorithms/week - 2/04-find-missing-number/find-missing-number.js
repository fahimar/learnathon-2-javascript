function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
