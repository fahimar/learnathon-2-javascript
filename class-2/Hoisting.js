function hoisting() {
    console.log(message);
    var message = 'Hi there, We are learning Hoisting!';
}

hoisting();



console.log(name); //ReferenceError: Cannot access 'name' before initialization
let name = "vivasoft";

let $name;
console.log($name);
$name = 'Fahim Al Rashid';



const person1 = {
    firstName: "Fahim",
    lastName: "Al Rashid",
    id: 43,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
const person2 = {
    firstName: "Abid",
    lastName: "Ahmed",
}

person1.fullName.call(person2);