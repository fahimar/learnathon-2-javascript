let stuNames = ["Fahim", "Abid", "Younus"];

let names = [...stuNames];

//console.log(names);

let array = [];

stuNames.map((name) => {
    names.push(name);
});


console.log(names); // Output : [ 'Fahim', 'Abid', 'Younus' ]