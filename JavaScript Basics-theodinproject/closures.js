function makeAdding(firstNumber) {
  const first = firstNumber;

  return function resulting(secondNumber) {
    const second = secondNumber;
    return first + second;
  };
}

const add5 = makeAdding(5);
console.log(add5(2));

function myClosure(firstString) {
  const f1 = firstString;
  return function resulting(secondString) {
    const f2 = secondString;
    return f1 + f2;
  };
}

const str = myClosure("Loving you");
console.log(str(" is a losing game"));
