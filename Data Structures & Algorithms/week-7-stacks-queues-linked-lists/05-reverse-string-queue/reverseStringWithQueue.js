const Queue = require("./queue");

const reverseStringWithQueue = (str) => {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
};
exports.reverseStringWithQueue = reverseStringWithQueue;
