const nameSet = new Set(["John", "Jane", "Joe"]);

// Add to set
nameSet.add("Jack");
nameSet.add("Jill");

// Check for values
console.log(nameSet.has("Jack"));
console.log(nameSet.has("Brad"));

// Get size
console.log(nameSet.size);

// Get values
console.log(nameSet.values());
// set is similar to array

for (const name of nameSet) {
  console.log(name);
}

// Convert to array
const nameArray = [...nameSet];
console.log(nameArray);

// Clear set
nameSet.clear();
console.log(nameSet.size);
// console.log(nameSet);
