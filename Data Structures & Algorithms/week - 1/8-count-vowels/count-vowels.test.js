const countVowels = require("./count-vowels");

test("Counting vowels in a string", () => {
  expect(countVowels("Hello, World!")).toBe(3);
  expect(countVowels("JavaScript")).toBe(3);
  expect(countVowels("If you will never taste a bad apple,")).toBe(10);
  expect(countVowels(" you will never appreciate a good apple.")).toBe(13);
});
