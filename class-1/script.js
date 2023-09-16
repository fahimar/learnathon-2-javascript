const square = number => number * number;
console.log(square(6)); // 36


const person = {
    name: 'Fahim',
    profession: 'Student'
};

const clone = {
    ...person,
    location: 'Dhaka'
};


console.log(clone);
