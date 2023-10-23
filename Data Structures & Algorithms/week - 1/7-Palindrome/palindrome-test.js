const isPalindrome = require("./palindrome");

test("Checking for palindrome strings", () => {
  expect(isPalindrome("aabbaa")).toBe(true);
  expect(isPalindrome("654456")).toBe(true);
  expect(isPalindrome("Hello")).toBe(false);
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  expect(isPalindrome("12321")).toBe(true);
});
