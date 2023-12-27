const Queue = require("./queue");

const queue = new Queue();

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");

queue.dequeue();
queue.dequeue();

console.log(queue.peek());
