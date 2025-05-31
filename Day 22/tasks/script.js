//TODO QUESTION1: Pass a function to greet a user and then thank them

function greet(greeting) {
  greeting("Neeraj", "Thank You");
}

greet(function callback(name, salutation) {
  console.log(`Namaste ${name}`);
  console.log(`${salutation} so much ${name} for your kind gesture`);
});

// TODO QUESTION 2:
/**
 * Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract

```js
function calculator(a, b, operationCallback) {
  // Complete this function
}

function add(x, y) {
  return x + y;
}

// Test calculator(5, 3, add);
```
 */

function calculator(a, b, operation) {
  console.log(operation(a, b));
}

function add(a, b) {
  return a + b;
}
function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

calculator(5, 3, add);
calculator(5, 3, subtract);
calculator(5, 3, multiply);
calculator(5, 3, divide);

//TODO QUESTION 3: Create a delayedMessage function that prints a message after a delay using setTimeout

function delayedMessage(message, delay, callback) {
  console.log("timer started");
  setTimeout(() => {
    callback(message);
  }, delay);
}

function callback(mi) {
  console.log(mi);
}

delayedMessage("Task Completed after 5 seconds", 5000, callback);

// TODO QUESTION 4: Implement a function that filters numbers in an array based on a condition provided via callback

function filterNumbers(arr, conditionCallback) {
  conditionCallback(arr);
}

function filter(arr) {
  let arra = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 2) {
      arra.push(arr[i]);
    }
  }
  console.log(arra);
}

filterNumbers([1, 2, 3, 4], filter); // should return [3, 4]

// TODO Question 5: Execute a sequence of tasks one after another using callbacks

function task1() {
  console.log("Task 1 done");
}

function task2(callback) {
  callback();
  console.log("Task 2 done");
}

function task3(a) {
  a(task1);
  console.log("Task 3 done");
}

task3(task2);
