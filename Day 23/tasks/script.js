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

// Alternatively:
function simulateCoinToss() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 2) + 1;
      if (randomNumber === 1) {
        resolve("Heads");
      } else {
        resolve("Tails");
      }
    }, 1000);
  });
}
simulateCoinToss().then((result) => {
  console.log(result);
});
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

const singleResolvedPromise = Promise.resolve("resolved");

singleResolvedPromise.then((result) => {
  console.log("first:", result);
});

singleResolvedPromise.then((result) => {
  console.log("second", result);
});

/**Explanation:
 * when Promise.resolve is used then it passes a single  resolve value that can be chained independently to get desired operation or value
 */

// TODO QUESTION 9: Return New Promises in .then()

/**
 * - Chain multiple .then() where each returns a new Promise
 * with a delay and logs a step like:
 *  - “First”
 *  - “Second”
 *   - “Third”
 */
const newPromise = new Promise(function (resolve, reject) {
  resolve("resolved");
});
newPromise
  .then((result) => {
    console.log(result);
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("First");
      }, 2000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Second");
      }, 4000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Third");
      }, 6000);
    });
  })
  .then((result) => {
    console.log(result);
  });

  //TODO QUESTION 10: Implement fakeDBQuery()
  
/**
 * - Create a function that simulates a DB query with a random delay and returns data (like a user object).
 * - Chain multiple fake queries.
 */


const fakeDatabase = {
  users: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
  ],

  posts: [
    { id: 101, userId: 1, title: "My first post" },
    { id: 102, userId: 1, title: "Learning Promises" },
    { id: 103, userId: 2, title: "Bob's Thoughts" }
  ],

  comments: [
    { id: 201, postId: 101, content: "Great post!" },
    { id: 202, postId: 101, content: "Very helpful, thanks!" },
    { id: 203, postId: 102, content: "This clarified a lot!" },
    { id: 204, postId: 103, content: "Nice one, Bob." }
  ]
};

function fakeDBQuery(type, param) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // 1–3 sec delay

    setTimeout(() => {
      switch (type) {
        case "getUser":
          resolve(fakeDatabase.users[0]); // Alice
          break;

        case "getPostsByUser":
          const posts = fakeDatabase.posts.filter(post => post.userId === param);
          resolve(posts);
          break;

        case "getCommentsByPost":
          const comments = fakeDatabase.comments.filter(comment => comment.postId === param);
          resolve(comments);
          break;

        default:
          reject("Unknown query type");
      }
    }, delay);
  });
}

// 🔗 Chain the queries
fakeDBQuery("getUser")
  .then(user => {
    console.log("User:", user);
    return fakeDBQuery("getPostsByUser", user.id);
  })
  .then(posts => {
    console.log("Posts by user:", posts);
    const firstPostId = posts[0]?.id;
    return fakeDBQuery("getCommentsByPost", firstPostId);
  })
  .then(comments => {
    console.log("Comments on first post:", comments);
  })
  .catch(error => {
    console.error("Error:", error);
  });
