const countOccurrences = require("./count-occurrences");

const countOccurrences_2 = require("./count-occurrences");

test("Count Occurrences of a Character", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("programming", "m")).toBe(2);
  expect(countOccurrences("banana", "a")).toBe(3);
});

test("Count Occurrences of a Character", () => {
  expect(countOccurrences_2("hello", "l")).toBe(2);
  expect(countOccurrences_2("programming", "m")).toBe(2);
  expect(countOccurrences_2("banana", "a")).toBe(3);
});
