const reverseString = require("../6-reverse-string/reverse-string");

function isPalindrome(str) {
  const formattedStr = removeNonAlphaneumaric(str.toLowerCase());
  const reversedStr = reverseString(formattedStr);

  return formattedStr === reversedStr;
}

function removeNonAlphaneumaric(str) {
  let formattedStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  // Get the character code
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

module.exports = isPalindrome;
