const prom1 = Promise.resolve("First Promise is resolved");
const prom2 = 2000;
const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise is resolved");
  }, 2000);
});
// const prom4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "promises");
// });
Promise.all([prom1, prom2, prom3]).then((values) => {
  console.log("\nExample of Promise.all");
  console.log(values);
});
