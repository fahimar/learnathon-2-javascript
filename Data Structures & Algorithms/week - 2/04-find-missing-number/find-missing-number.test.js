const findMissingNumber = require("./find-missing-number");

test("Findind the missing number", () => {
  expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
  expect(findMissingNumber([10, 8, 7, 6, 1, 2, 3, 4, 5])).toBe(9);
  expect(findMissingNumber([1, 3, 4, 5, 6])).toBe(2);
});
