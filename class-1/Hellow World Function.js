const perSonf = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };


};

const Fahim = perSonf('Akil', 24);

console.log(Fahim.name);

Fahim.sayHello();   // calls the function and logs 'hello!'
