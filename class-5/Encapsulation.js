let basesalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(basesalary, overtime, rate) {
  return basesalary + overtime * rate;
}

let employee = {
  basesalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.basesalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());
