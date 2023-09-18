//probel 1 : Enter student marks and find percentage and grade

let phy, chem, bio, math, cmp;
console.log("Please enter 5 subjets marks: ");
//phy = Number(prompt(""));
phy = parseInt("66");
chem = parseInt("67");
bio = parseInt("70");
math = parseInt("72");
cmp = parseInt("66");
let percentage = (phy + chem + bio + math + cmp) / 5.0;
console.log("Percentage = ", percentage + "%");

if (percentage >= 90) { console.log("Grade A"); }
else if (percentage >= 80) { console.log("Grade B"); }
else if (percentage >= 70) { console.log("Grade C"); }
else if (percentage >= 60) { console.log("Grade D"); }
else if (percentage >= 40) { console.log("Grade E"); }
else { console.log("Grade F"); }

// Switch case The getDay() method returns the weekday as a number between 0 and 6
// problem 2
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

}
console.log("Today is " + day);



let a = 2;

if (true & a == 2) {
    console.log("test");
}

let age = 18;

if (age <= 17) {
    console.log("Good day");
}
else {
    console.log("Best Of Luck");
}