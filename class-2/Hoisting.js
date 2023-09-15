function hoisting() {
    console.log(message);
    var message = 'Hi there, We are learning Hoisting!';
}

hoisting();



console.log(name); //ReferenceError: Cannot access 'name' before initialization
let name = "vivasoft";