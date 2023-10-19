/**
 * ? Garbage Collection
 */

// Creating some objects
let obj1 = { name: "Object 1" };
let obj2 = { name: "Object 2" };
let obj3 = { name: "Object 3" };

// Creating circular reference
obj1.ref = obj2;
obj2.ref = obj3;
obj3.ref = obj1;

obj1 = null;
console.log(obj3.ref); // obj3.ref = obj1 = {name: 'Object 1'};
obj2 = null;
obj3 = null;

/**
 * ? Memory Leak
 */

const data = [];

function addData() {
  data.length = 0;
  for (let i = 0; i < 10000; i++) {
    data.push({ value: i });
  }
  console.log("Data Length: ", data.length);
}

document.getElementById("addBtn").addEventListener("click", addData);
