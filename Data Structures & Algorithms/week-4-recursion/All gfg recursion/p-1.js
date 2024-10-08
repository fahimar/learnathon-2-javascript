// You are given an integer N. Print numbers from 1 to N without the help of loops.
// Javascript code for print numbers from
// 1 to n without using loop

function print(n) {
  if (n > 0) {
    // console.log(n + " "); N to 1
    print(n - 1);
    console.log(n + " "); // 1 to N
  }
  return;
}

var n = 10;
print(n);
