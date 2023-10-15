let num = 10;

function increase(num) {
  num++;
}

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(num);
console.log(num);

increase(obj);
console.log(obj);

let x = { value: 10 };
let y = x;

x.value = 20;
