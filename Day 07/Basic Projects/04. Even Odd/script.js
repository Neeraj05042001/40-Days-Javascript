// TODO : Even-Odd Number Checker

/**
 * 📋
 Project Details:
 Take a number input from the user.
 Check whether the number is even or odd using the modulus % operator.
 Display the result.
 ✅
 To-Do:
 Prompt user to enter a number.
 Write a function isEven(number) that returns true/false.
 Use if-else to check the returned value and display "Even" or "Odd"
 */

const number = prompt("Please Enter a Number");

function isEven(number) {
  if (number % 2 === 0) {
    console.log(` ${number} : Even`);
  } else console.log(` ${number} : Odd`);
}

isEven(number);

