

## Call Backs:

## 1.  Explain why JavaScript is called "single-threaded" but can handle multiple operations simultaneously.



 JavaScript is single-threaded because it has only one call stack where functions are executed. However, it can handle multiple operations simultaneously through:
- **Web APIs**: Browser provides APIs (setTimeout, fetch, DOM events) that run outside the main thread
- **Event Loop**: Continuously checks if the call stack is empty and moves completed async operations from the callback queue to the call stack
- **Callback Queue**: Stores callbacks from completed async operations
This architecture allows JavaScript to appear multi-threaded while remaining single-threaded in execution.



# Promises:

## 1. What is a Promise in JavaScript?
A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It's like a placeholder for a value that will be available in the future.

**Promise Characteristics**
- 🔒 Promises are immutable once settled
- 1️⃣ They can only be resolved or rejected once
- 🧹 They provide a clean way to handle async operations

## 2. What is the main advantage of Promises over callbacks?
Promises help avoid callback hell, provide better error handling, and make code more readable and maintainable through chaining.

## 3. What happens if you call both resolve() and reject() in the same executor?
Only the first call (resolve or reject) will take effect. Any subsequent calls are ignored because a Promise can only settle once.

## 4. What Promise states and values?

### 🔄 **Promise States**
Every Promise has one of three states:

1. ⏳ **Pending**: Initial state, neither fulfilled nor rejected
2. ✅ **Fulfilled**: Operation completed successfully
3. ❌ **Rejected**: Operation failed

### 📋 **Promise Results**
Along with states, Promises have results:

1. 🤷 **undefined**: Initially when state is pending
2. 💎 **value**: When resolve(value) is called
3. 💥 **error**: When reject(error) is called

## 5. Can a Promise change its state from fulfilled to rejected?
No, once a Promise is settled (either fulfilled or rejected), its state cannot change. This is called immutability.

## 6. What are the three handler methods of Promise?
### 🎪 **The Three Handler Methods are**

### 🎉 **1. .then() - Handling Success**
```javascript
promise.then(
    (result) => {
        console.log(result); // 🎊 Handle success
    }
);
```

### 🚨 **2. .catch() - Handling Errors**
```javascript
promise.catch(
    (error) => {
        console.error(error); // 💥 Handle error
    }
);
```

### 🧹 **3. .finally() - Cleanup**
```javascript
promise.finally(
    () => {
        // 🏁 This runs regardless of success or failure
        console.log("Cleanup code here");
    }
);
```

## 7. What's the difference between .then() and .catch()?
.then() handles successful Promise resolution, while .catch() handles Promise rejection (errors). You can also pass both success and error handlers to .then().

## 8. What are the rules of Promise Chaining?

### 🏆 **The Five Golden Rules of Promise Chaining**

### 📜 **Rule 1: Handler Methods**
- ✅ Every fulfilled promise provides a `.then()` handler
- ❌ Every rejected promise provides a `.catch()` handler

### ⚡ **Rule 2: Three Things You Can Do in .then()**
1. 🔄 **Return another Promise** (for async operations)
2. 💎 **Return a simple value** (for sync operations)
3. 💥 **Throw an error**

### 🎨 **Examples of Rule 2**

**🔄 Returning Another Promise:**
```javascript
let getUser = new Promise(function(resolve, reject) {
    const user = {
        name: '👤 John Doe',
        email: '📧 jdoe@email.com',
        password: '🔒 jdoe.password',
        permissions: ['🗄️ db', '💻 dev']
    };
    resolve(user);
});

getUser
    .then(function(user) {
        console.log(`👋 Got user ${user.name}`);
        
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve('🏙️ Bangalore')
            }, 2000)
        })
    })
    .then((address) => {
        console.log(`📍 User address is ${address}`);
    });
```

**💎 Returning a Simple Value:**
```javascript
getUser
    .then(function(user) {
        console.log(`👋 Got user ${user.name}`);
        return user.email; // 📧 Simple value
    })
    .then(function(email) {
        console.log(`📧 User email is ${email}`);
    });
```

**💥 Throwing an Error:**
```javascript
getUser
    .then(function(user) {
        console.log(`👋 Got user ${user.name}`);
        
        if (!user.permissions.includes("hr")) {
            throw new Error("🚫 You are not allowed to access the HR module");
        }
        
        return user.email;
    })
    .then((email) => {
        console.log(`📧 User email is ${email}`);
    })
    .catch((error) => {
        console.error(error); // 💥 Catch the error
    });
```

### 🔄 **Rule 3: Rethrowing from .catch()**
You can rethrow errors from `.catch()` to handle them later:

```javascript
let promise401 = new Promise(function(resolve, reject) {
    reject(401)
});

promise401
    .catch((error) => {
        console.log(error);
        if (error === 401) {
            console.log("🔄 Rethrowing 401");
            throw error; // 🎯 Rethrow for next catch
        } else {
            // 🛠️ Handle other errors
        }
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(`🎯 handling ${error} here`);
    });
```

### 🌊 **Rule 4: .finally() Passes Through**
Unlike `.then()` and `.catch()`, `.finally()` doesn't process the result—it passes it through:

```javascript
let promiseFinally = new Promise(function(resolve, reject) {
    resolve('✨ Testing Finally.');
});

promiseFinally
    .finally(function() {
        console.log("🧹 Running Finally!"); // Cleanup
    })
    .then(function(result) {
        console.log(result); // 📝 Still gets "Testing Finally."
    });
```

### ⚠️ **Rule 5: Multiple .then() ≠ Chaining**
Calling `.then()` multiple times on the same promise is NOT chaining:

```javascript
// ❌ This is NOT chaining - each .then() gets the same original value
let promise = new Promise(function(resolve, reject) {
    resolve(10);
});

promise.then(function(value) {
    console.log(value + 1); // 📊 11
});

promise.then(function(value) {
    console.log(value + 2); // 📊 12 (not 13!)
});
```

## 9. What's the difference between promise chaining and calling .then() multiple times?
Promise chaining passes the result from one .then() to the next, while calling .then() multiple times on the same promise gives each handler the same original resolved value.

## 10. What are the methods to handle multiple promises?
There are 4 methods to handle multiple promises:👇
#### 1. **Promise.all()**
Waits for ALL promises to resolve. If any promise rejects, the entire operation fails.

```javascript
const promise1 = getPromise(URL1);
const promise2 = getPromise(URL2);
const promise3 = getPromise(URL3);

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // 📋 Array of all results
    })
    .catch((error) => {
        console.error(error); // ❌ If any promise fails
    });
```

### 2. **Promise.any()**
Resolves with the first promise that fulfills. Rejects only if ALL promises reject.

```javascript
Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result); // 🥇 First successful result
    })
    .catch((error) => {
        console.error(error); // 💥 All promises failed
    });
```

### 3. **Promise.allSettled()**
Waits for all promises to settle (resolve or reject) and returns their results.

```javascript
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // 📋 Array of {status, value/reason}
    });
```

### 4. **Promise.race()**
Resolves or rejects with the first promise that settles.

```javascript
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(result); // 🏁 First to complete
    })
    .catch((error) => {
        console.error(error); // 💥 First to fail
    });
```

## 11. When would you use Promise.all() vs Promise.any()?
Use Promise.all() when you need ALL operations to succeed (like loading multiple required resources). Use Promise.any() when you need just ONE operation to succeed (like trying multiple servers).

## 12. What are promise utility methods?
### 1.✅ **Promise.resolve()**
Creates a resolved promise with a given value:

```javascript
Promise.resolve("🌟 Hello World")
    .then(value => console.log(value)); // "🌟 Hello World"

// 🔄 Equivalent to:
let promise = new Promise(resolve => resolve("🌟 Hello World"));
```

### 2. ❌ **Promise.reject()**
Creates a rejected promise with a given reason:

```javascript
Promise.reject("💥 Error occurred")
    .catch(error => console.log(error)); // "💥 Error occurred"

// 🔄 Equivalent to:
let promise = new Promise((resolve, reject) => reject("💥 Error occurred"));
```
## 13.  What's the difference between callbacks and promises?
Promises provide better error handling, avoid callback hell, support chaining, and are more readable. Callbacks can lead to nested code that's hard to maintain.

## 14. What happens if you don't handle promise rejection?
Unhandled promise rejections can cause applications to crash or behave unexpectedly. Always use .catch() or try-catch with async/await.
## 15. Can you convert a callback to a promise?
Yes, you can wrap callback-based functions in promises:
```javascript
function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    };
}
```
## 16. What's the difference between Promise.all() and Promise.allSettled()?
- **Promise.all()**: Fails fast - if any Promise rejects, the entire operation fails immediately
- **Promise.allSettled()**: Waits for all Promises to complete (resolve or reject) and returns an array with the status and result/reason for each Promise. It never rejects.


---
# Async Await

 



## 1. What is Async Await function ? List some of its feature.

Async/await is a powerful feature in JavaScript that makes working with asynchronous code much easier and more readable. It's built on top of Promises and provides a cleaner, more synchronous-looking way to handle asynchronous operations without falling into callback hell.

Think of async/await as a way to write asynchronous code that reads like synchronous code, making it easier to understand and maintain.

**Key Features**
- Async functions always return a Promise
- If you return a value, it gets wrapped in a resolved Promise
- If you throw an error, it becomes a rejected Promise

## 2. What is the `await` Keyword ?

 Await is a keyword used inside of `async function` that pauses the execution of the function until the Promise is resolved or rejected. 
 
 The `await` keyword can only be used inside async functions.

### Basic Syntax:
```javascript
async function example() {
  const result = await somePromise;
  console.log(result);
}
```

### Important Rules:
1. `await` can only be used inside `async` functions
2. `await` pauses function execution until the Promise settles
3. If the Promise resolves, `await` returns the resolved value
4. If the Promise rejects, `await` throws the rejection reason

**Example:**
```javascript
const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("I am a promise");
    }, 1000)
});

async function handlePromise() {
    const result = await promise;
    console.log(result); // "I am a promise" (after 1 second)
}
```

## 3. What is the difference between async/await and Promises?
The difference between async / await are:👇
 
 - **Syntax**: async/await provides cleaner, more readable syntax that looks like synchronous code
- **Error Handling**: async/await uses try/catch blocks, while Promises use .catch()
- **Debugging**: async/await provides better stack traces and debugging experience
- **Underlying mechanism**: async/await is built on top of Promises - it's syntactic sugar
- **Chaining**: Promises use .then() chaining, async/await uses sequential await statements

## 4. What are the main advantages of async/await over Promises?
MaIN Advantages are:-
1. **Cleaner syntax** - Code looks more like synchronous code
2. **Better error handling** - Can use try/catch blocks
3. **Easier debugging** - Stack traces are more meaningful
4. **Reduced nesting** - Avoids "Promise hell"
5. **Better readability** - Easier to understand the flow of execution



## 5. Can you use await without async?
No, you cannot use `await` without `async` (except for top-level await in ES modules). The `await` keyword can only be used inside functions declared with the `async` keyword. Attempting to use await in a regular function will result in a SyntaxError.

## 6. What happens when you return a regular value from an async function?
When you return a regular value from an async function, JavaScript automatically wraps it in a resolved Promise. For example, `return "hello"` becomes `Promise.resolve("hello")`.


## 7.  Can you use await outside of an async function?
No, you cannot use `await` outside of an async function (except for top-level await in modules). Attempting to do so will result in a SyntaxError. You must wrap await calls inside an async function.


## 8. What happens if you don't await an async function?

If you don't await an async function, it returns a Promise immediately and continues executing in the background. The calling code won't wait for the async function to complete, which can lead to:
- Unhandled Promise rejections
- Race conditions
- Unexpected execution order
- The function result being a Promise instead of the actual value

## 9. Is await Synchronous?

This is a common misconception. `await` is **not** synchronous - it's syntactic sugar that makes asynchronous code look synchronous.

**Key Points:**
- The function execution pauses at `await`, but the main thread continues
- Other code can run while waiting for the Promise to resolve
- The function resumes when the Promise settles

**Example:**
```javascript
async function tacklePromise() {
    console.log("Before await");
    const result = await foo(); // Function pauses here
    console.log("After await:", result);
}

console.log("I am after tacklePromise()");
tacklePromise();
console.log("I continue executing");

// Output order:
// "I am after tacklePromise()"
// "Before await"
// "I continue executing"
// "After await: 101" (when Promise resolves)
```

## 10. Does await block the entire JavaScript thread?
No, await does not block the entire JavaScript thread. It only pauses the execution of the current async function. The main thread continues to execute other code, and the function resumes when the awaited Promise settles.

## 11. How do you handle errors in async/await functions?
Use try/catch blocks around await statements. Put the await calls inside the try block, and handle any errors in the catch block. You can also use a finally block for cleanup operations that should run regardless of success or failure.

## 12. When can you use top-level await?
 Top-level await can only be used in ES modules (files with type="module" or .mjs extension). It allows you to use await at the top level of a module without wrapping it in an async function, but it can delay the module's loading.
 
 **Important Notes:**
- Only works in ES modules (type="module")
- Can delay module loading
- Use sparingly for initialization tasks

 Example:
 ### Traditional Approach (IIFE):
```javascript
let stores;
(async () => {
    let response = await fetch('http://localhost:3000/api/pizzahub');
    stores = await response.json();
    console.log(stores);
})(); // Immediately Invoked Function Expression

console.log(stores); // undefined (executes before async function completes)
```

### With Top-Level Await (ES2022):
```javascript
// In an ES module
const response = await fetch('http://localhost:3000/api/pizzahub');
const stores = await response.json();
console.log(stores); // Works correctly
```

## 13. How do you handle multiple async/await?

### 🤹 Handling Multiple 

When dealing with multiple asynchronous operations, you have several strategies:

### Sequential Execution:
```javascript
async function sequential() {
  const result1 = await operation1(); // Waits for completion
  const result2 = await operation2(); // Waits for result1 to complete
  const result3 = await operation3(); // Waits for result2 to complete
  return [result1, result2, result3];
}
```

### Parallel Execution:
```javascript
async function parallel() {
  // Start all operations simultaneously
  const promise1 = operation1();
  const promise2 = operation2();
  const promise3 = operation3();
  
  // Wait for all to complete
  const results = await Promise.all([promise1, promise2, promise3]);
  return results;
}
```

### Using Promise.allSettled():
```javascript
async function handleMultipleWithSettled() {
  const results = await Promise.allSettled([
    fetch(URL1).then(r => r.json()),
    fetch(URL2).then(r => r.json()),
    fetch(URL3).then(r => r.json())
  ]);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Request ${index + 1} succeeded:`, result.value);
    } else {
      console.log(`Request ${index + 1} failed:`, result.reason);
    }
  });
}
```

## 14. How do you handle multiple async operations that don't depend on each other?
Use `Promise.all()` to run them in parallel:
```javascript
// ✅ Parallel execution (faster)
const [result1, result2, result3] = await Promise.all([
  asyncOperation1(),
  asyncOperation2(),
  asyncOperation3()
]);

// ❌ Sequential execution (slower)
const result1 = await asyncOperation1();
const result2 = await asyncOperation2();
const result3 = await asyncOperation3();
```