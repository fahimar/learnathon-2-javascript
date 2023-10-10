// Maps and its properties
const contacts = new Map();
contacts.set("Sansa", { phone: "123-456-789", address: "Winterfell" });
console.log(contacts.has("Sansa"));
console.log(contacts.has("Arya"));

console.log(contacts.get("Arya")); //undefined
contacts.set("Arya", { phone: "789-123-456", address: "Dragon Store" });
console.log(contacts.get("Arya"));
console.log(contacts.delete("Rob"));
console.log(contacts.delete("Sansa"));
console.log(contacts.size);

// Maps iterated with for...of
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
