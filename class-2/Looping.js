/* **************** FOR loop ******************* */
// iteration of for loop 
for (let rep = 0; rep < 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}
// Looping Array , break, continue
const akilArray = [
    'Akil',
    'Mahmud',
    2023 - 2000,
    'student',
    ['Rock', 'Paper', 'Scissor']
];
for (let i = 0; i < 5; i++) {
    console.log(akilArray[i], typeof akilArray[i]);
}

// String object
let str = "Vivasoft";

// for..of loop
console.log("Elements of string str are :");
for (let value of str) {
    console.log(value);
}



let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
    console.log(text + '\n');
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {

        console.log(i + " " + j);
    }

}
console.log("********************do while********************");
let a = 0;

do {
    console.log(a);
    a++;
}
while (a < 5);

let text1 = "";
for (let i = 0, j = 1; i < 10; i++, j++) {
    if (i === 4) { continue; }
    text1 += "The number is " + j + "<br>" + "\n";
    console.log(text + '\n');
}