// TODO Question3: Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function createCounterButton() {
  let count = 0;

  const button = document.createElement("button");
  button.textContent = "Click Me";
  document.body.appendChild(button);

  const display = document.createElement("p");
  display.textContent = "Clicked 0 times";
  document.body.appendChild(display);

  button.addEventListener("click", function () {
    count++;
    display.textContent = `Clicked ${count} times`;
  });
}

createCounterButton();

//   TODO Question 4:  Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(num1) {
  return function multiplier(num2) {
    let multiply = num1 * num2;
    console.log(multiply);
  };
}
const number = createMultiplier(2);
number(6);

// TODO Question 5: Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function counterFactory() {
  let count = 0;
  return {
    increment: () => {
      count++;
      console.log(count);
    },
    decrement: () => {
      count--;
      console.log(count);
    },
    reset: () => {
      count = 0;
      console.log(count);
    },
  };
}
const call = counterFactory();
call.increment();
call.increment();
call.increment();
call.decrement();
call.increment();
call.increment();
call.increment();
call.increment();
call.increment();
call.reset();
