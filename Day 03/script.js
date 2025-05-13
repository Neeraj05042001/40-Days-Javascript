//  todo:   Take a number and find if the number is an odd or even number.

let a = 20;
console.log(a % 2 === 0 ? "The number is even" : "The number is odd");

// todo: 2

let age = 23;
console.log(
  age >= 18 ? "You are eligible to vote" : "You are not eligible to vote"
);

// todo: question 3

let salary = 12300;
const bonus = (20 / 100) * salary;

// const annualSalary = salary +(20/100*salary);
const annualSalary = salary + bonus;
console.log(bonus);
console.log(annualSalary);

// TODO Question 4:

const color = "Red";
console.log(color === "Red" ? "STOP" : "GO");

// TODO Question 5: Create an Electricity Bill Calculator

// const units = 50;
// const monthlyCharges = units * 150; //one month charge
// const annualCharge = monthlyCharges * 12 - (20 / 100) * (monthlyCharges * 12); //yearly charge after 20% discount
// console.log(monthlyCharges);
// console.log(annualCharge);

const unitsPerDay = 10;
const costPerUnit = 150;
const daysInMonth = 30;
const monthlyBill = daysInMonth * unitsPerDay * costPerUnit;

const annualBillWithoutDiscount = monthlyBill * 12;

const discount = annualBillWithDiscount * 0.2;
const annualBillWithDiscount = annualBillWithoutDiscount - discount;


// TODO Question 6:

const year = 2025;
console.log(year % 4 === 0 ? "Leap Year" : "NOt a leap Year");

// TODO Question 7:

const p = 10;
const q = 35;
const r = 25;

if (p > q) {
  console.log(p);
}
if (q > r) {
  console.log(q);
}
if (p > r) {
  console.log(p);
}

// TODO Question 8:
const count = 5;
/** convert it into binary"
 *  5/2 = 2 remainer(1)
 * 2/2 = 1 remainder(0)
 * 1/2 = 0 remaineder (1)
 *  the binary of 5 = 101
 *
 * 1*(2**0)+0*(2**1)+ 1*(2**2)
 * **/
console.log(count << 1);
