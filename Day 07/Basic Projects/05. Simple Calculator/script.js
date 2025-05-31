const firstNumber = Number(
  prompt("Please enter the first number to do a operation")
);
const operand = prompt(
  "Please enter the operation you want to do +, - , * 0r %"
);

const secondNumber = Number(
  prompt("Please enter the second number to do a operation")
);

function calculator(a, operand, b) {
  if (operand === "+") {
    console.log(`sum of ${a} & ${b} : ${a + b}`);
  } else if (operand === "-") {
    console.log(`Difference between ${a} & ${b} : ${a - b}`);
  } else if (operand === "*") {
    console.log(`product of ${a} & ${b} : ${a * b}`);
  } else if (operand === "/") {
    console.log(`divison of ${a} by ${b} : ${a / b}`);
  } else {
    console.log("Invalid");
  }
}

calculator(firstNumber, operand, secondNumber);
