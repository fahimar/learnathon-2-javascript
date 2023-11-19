const isValidIPv4 = require("./valid-ipv4");

const result1 = isValidIPv4("172.27.27.84");
const result2 = isValidIPv4("122.164.23.21.33");

console.log(result1, result2);
