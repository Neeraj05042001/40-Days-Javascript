//TODO QUESTION 1: Closure Confusion

function makeMultipliers() {
  const result = [];
  for (let i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2)); // Expected: 2 * 1 = 2
console.log(triple(2)); // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6

/**Explanation:-  The code here was giving the same result each time that is 8 because of closure, since the variable i was declared using var so it was having the global scope
 * - In the original code, var is function-scoped — all the closures reference the same i, which ends up as 4 after the loop ends. and hence when calculated it was always taking i as 4 in every loop.
 *
 */

//TODO QUESTION1:

for (let i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log("Count:", i);
  }, 1000);
}

/**so doing it using var, this can be achieved using two methods
 * - 1. By an IIFE (PASSING an extra argument to the function)
 * - 2. using setTimeout latest variable passing feature after timeout
 */

for (var i = 0; i <= 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log("count:", j);
    }, 1000);
  })(i);
}

// OR

for (var i = 0; i <= 3; i++) {
  setTimeout(
    function (j) {
      console.log("count:", j);
    },
    1000,
    i
  );
}

//TODO QUESTION 3: Object Mutation Trap

const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  Object.assign(config, newConfig);
}

updateConfig({ version: "2.0" });
console.log(config); // { appName: "CoolApp", version: "2.0" }

/**
 * In JavaScript, const prevents you from reassigning a variable to a new value, but it doesn't make the object itself immutable. You can still change its properties.
 * Object.assign(target, source) copies properties from source to target.
 *  So here, newConfig values are merged into config, updating it without replacing the object.
 * This is safe because:
 * config still refers to the same object (no reassignment), but its contents get updated cleanly.
 */

//TODO QUESTION 4: Promise Chain Gone Wrong

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  try {
    const data = fetchData().then((res) => {
      console.log("Then block:", res);
      throw new Error("Something went wrong!");
    });

   
  } catch(err) {
    console.error(err.message)
  }
}

start();
