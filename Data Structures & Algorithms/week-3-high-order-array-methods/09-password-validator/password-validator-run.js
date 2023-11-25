const validatePassword = require("./password-validator");

const result1 = validatePassword("Abc12345");
const result2 = validatePassword("password");
//const result3 = validatePassword("fahimabc@12345");

console.log(result1, result2); //, result3
