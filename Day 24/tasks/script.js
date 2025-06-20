// TODO QUESTION 1: Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay

console.log("QUESTION 1");

function wait(ms) {
  console.log("before the delay");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`resolved after ${ms} ms`);
    }, ms);
  });
}

async function log() {
  const result = await wait(500);
  console.log(result);
}

log();

// TODO QUESTION 2: Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises
console.log("QUESTION 2");

async function delayedLog() {
  const log1 = new Promise((resolve, reject) => {
    resolve("one");
  });

  const log2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Two");
    }, 1000);
  });

  const log3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Three");
    }, 2000);
  });

  const result = await log1;
  console.log(result);
  const result2 = await log2;
  console.log(result2);
  const result3 = await log3;
  console.log(result3);
}

delayedLog();

// Alternative Approach
console.log("ALTERNATIVE APPROACH");
function delayedLog2(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function delayedAsync() {
  console.log("one");

  await delayedLog2(1000);
  console.log("Two");

  await delayedLog2(2000);
  console.log("Three");
}

delayedAsync();

//TODO QUESTION 3: Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console

// TODO QUESTION 4:

// async function publicKey() {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users/1");

//     const response = await data.json();
//     console.log(response.name);
//     console.log(response.username);
//     console.log(response.email);
//     console.log(response.address.city);
//     console.log(response.phone);
//     console.log(response.website);
//   } catch {
//     console.error("error", error);
//   }
// }
// publicKey();

//TODO QUESTION 5: Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM
async function publicKey() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!data.ok) {
      throw new Error("Wrong URL");
    }

    const response = await data.json();
    console.log(response.name);
    console.log(response.username);
    console.log(response.email);
    console.log(response.address.city);
    console.log(response.phone);
    console.log(response.website);
  } catch (error) {
    console.error("URL IS NOT VALID", error.message);
    const warning = document.createElement("h1");
    warning.innerText = error.message;
    document.body.appendChild(warning);
  }
}
publicKey();

//TODO QUESTION 6: Refactor then/catch to async/await

/**
 * fetch('/api/data')
 * .then(res => res.json())
 * .then(data => console.log(data))
 *  .catch(err => console.error(err));
 */

async function refactor() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.error("error:", error.message);
  }
}
