function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;

    for (let j = i; j < i + k; j++) {
      //   console.log(arr[j]);
      currentSum += arr[j];
    }
    // console.log(currentSum);

    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

module.exports = maxSubarraySum;
