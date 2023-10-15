// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter)
const wg_M = 78;
const hg_M = 1.69;

const wg_J = 92;
const hg_J = 1.95;

const bmi_M = wg_M / (hg_M * hg_M);
const bmi_J = wg_J / hg_J ** 2;
const M_higher_bmi = bmi_M > bmi_J;
console.log(bmi_J, bmi_M, M_higher_bmi);
