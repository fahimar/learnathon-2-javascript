const findMaxNumber = require("./find-max-number");

test("Finding the maximum number in array", () => {
  expect(findMaxNumber([1, 6, 5, 9, 2, 3])).toBe(9);
  expect(findMaxNumber([0, -1, -5, 2])).toBe(2);
  expect(findMaxNumber([10, 10, 10, 10, 10])).toBe(10);
});
