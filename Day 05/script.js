// TODO Addition of even numbers between 1 to 100
let sum = 0;
for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
  console.log(sum);
}
console.log("sum of even numbers from 1 to 100 is", sum);

// Break statement

for (let i = 0; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}
console.log("break statement used");

// continue

for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
console.log("continue statement was used");

// Multiple counters for single loop

for (let i = 0, j = 10; i <= 10, j >= 1; i++, j--) {
  console.log(i, j);
}
console.log("PATTERN");
// TODO print this star pattern
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
// let j = "*";
for (let i = 1; i <= 5; i++) {
  let row = ""
  for(let j=1; j<=i; j++){
    row += "*"
    
  }
  console.log(row)
}

// do while loop
// A do while loop ensures that the code executes at least once befrore checking the condition.
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

console.log("EVEN NUMBER");

//TODO QUESTION:  Write a loop that prints even numbers from 0 to 20

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} : is a Even Number`);
  }
}

// TODO QUESTION:

console.log("SUM OF ARRAY");
// TODO QUESTION: Use a loop to find the sum of all numbers in an array

const array = [0, 6, 7, 3, 4, 15, 10, 7, 8, 9, 10];
let sumOfArray = 0;

// for (let i = 0; i < array.length; i++) {
//   sumOfArray += array[i];
// }
// console.log("sum of all the numbers of the array is:" , sumOfArray);

array.forEach((element) => {
  sumOfArray += element;
});

console.log("sum of all the numbers of the array is:", sumOfArray);

//TODO QUESTION:  Write a program to find factorial of a number using loops

let number = 4;
let factorial = number;
for (let i = 1; i < number; i++) {
  factorial = factorial * (number - i);
}
console.log(factorial);

// TODO QUESTION: Create a loop that iterates through a string and counts vowels

let string = "Education opens the doors to opportunity.";
let count = 0;
for (let i = 0; i < string.length; i++) {
  if (
    string[i].toLowerCase() === "a" ||
    string[i].toLowerCase() === "e" ||
    string[i].toLowerCase() === "i" ||
    string[i].toLowerCase() === "o" ||
    string[i].toLowerCase() === "u"
  ) {
    count = count + 1;
    console.log(`This is vowel no ${count} : ${string[i]}`);
  }
}
