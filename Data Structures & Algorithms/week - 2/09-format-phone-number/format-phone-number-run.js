const formatPhoneNumber = require("./format-phone-number");

const result = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
const result2 = formatPhoneNumber([5, 0, 2, 4, 8, 1, 9, 6, 3, 7]);

console.log(result);
console.log(result2);
