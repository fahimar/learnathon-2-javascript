const HashTable = require("./custom-hash-table");

const myHashTable = new HashTable();

myHashTable.set("Akil", "555-234-3455");
myHashTable.set("Asif", "555-349-3789");
myHashTable.set("Rashid", "565-350-3654");

// const result = myHashTable._hash("Akil", myHashTable.limit);
// myHashTable.printTable();
// console.log(result);
myHashTable.remove("Rashid");

// console.log(myHashTable.has("Rashid"));
// console.log(myHashTable.has("Asif"));
myHashTable.clear();
myHashTable.printTable();
