/**
 * 1. Create Your First Promise

- Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
- Log the result using .then().
 */
console.log("PROMISE");
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hello, Promises!");
  }, 5000);
});

promise.then((result) => console.log(result));

//TODO QUESTION 2: /** Reject a Promise
//  Create a Promise that immediately rejects with the message "Something went wrong!".
// Handle the error using .catch(). */

// const promise2 = new Promise(function (resolve, reject) {
//   reject("Something went wrong!");
// });

// promise2.catch((result) => {
//   console.log(result);
// });

// //TODO QUESTION 3: Simulate Coin Toss , Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const result = coinToss();
    resolve(result);
  }, 4000);
});

promise3.then((result) => {
  console.log(result);
});
function coinToss() {
  const toss = Math.floor(Math.random() * (3 - 1) + 1);
  console.log(toss);

  if (toss === 1) {
    return "Heads";
  } else {
    return "Tails";
  }
}
// Method 2:
const simulateToss = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const toss = Math.floor(Math.random() * (3 - 1) + 1);
    const result = toss === 1 ? "Heads" : "Tails";
    resolve(result);
  }, 3000);
});

simulateToss.then((result) => {
  console.log(result);
});

//TODO QUESTION 4: Promise with Condition

/**
 * Create a function checkAge(age) that returns a Promise.
 * Resolve if age >= 18, reject otherwise.
 *
 * */
const userAge = Number(prompt("Enter Your Age"));
function checkAge(age) {
  return new Promise(function (resolve, reject) {
    if (age >= 18) {
      resolve("Adult");
    } else {
      reject("Not Adult");
    }
  });
}
checkAge(userAge)
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

//Alternative method

// const checkAge = new Promise(function (resolve, reject) {
//   const age = prompt("Enter Your Age");
//   age >= 18 ? resolve("Adult") : reject("Not Adult");
// });
// checkAge
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result);
//   });

//TODO QUESTION 5: Chain Promises Sequentially
/**
 * Create three Promises that log:
 * "Step 1 done"
 *  "Step 2 done"
 *  "Step 3 done"
 * Chain them using .then().
 *
 */

const promises1 = new Promise(function (resolve, reject) {
  resolve("Step 1 done");
});
const promises2 = new Promise(function (resolve, reject) {
  resolve("Step 2 done");
});
const promises3 = new Promise(function (resolve, reject) {
  resolve("Step 3 done");
});

promises1
  .then((result) => {
    console.log(result);
    return promises2;
  })
  .then((result) => {
    console.log(result);
    return promises3;
  })
  .then((result) => {
    console.log(result);
  });

//TODO QUESTIONS 6: Value Transformation in Chain
/**
 * Create a Promise that resolves with 5.
 * Chain .then() handlers to double it, then square it.
 * Final output should be 100.
 *
 *  */

const promiseValueTransformation = new Promise(function (resolve, reject) {
  resolve(5);
});
promiseValueTransformation
  .then((result) => {
    return 2 * result;
  })
  .then((double) => {
    const square = double * double;
    console.log(square);
  });

//TODO QUESTION 7:  Chain with Random Rejection

/**
 * First .then() resolves to "Start".
 * Second .then() randomly throws an error or returns "Continue".
 * Handle rejection gracefully.
 *
 */

const randomRejection = new Promise(function (resolve, reject) {
  resolve("Start");
});

randomRejection
  .then((firstThen) => {
    console.log(firstThen);

    const fail = Math.random() < 0.5;
    if (fail) {
      throw new Error("error");
    } else {
      return "Continue";
    }
  })
  .then((result2) => {
    console.log(result2);
  })
  .catch((error) => {
    console.log(error);
  });

//TODO QUESTION 8:   Multiple then() calls on same Promise

/**
 * Create a single resolved Promise.
 * Attach two different .then() handlers to it.
 * Explain that both run independently.
 *
 */


