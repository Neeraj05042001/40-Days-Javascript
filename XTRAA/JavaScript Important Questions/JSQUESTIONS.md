

## Call Backs:

### 1.  Explain why JavaScript is called "single-threaded" but can handle multiple operations simultaneously.



 JavaScript is single-threaded because it has only one call stack where functions are executed. However, it can handle multiple operations simultaneously through:
- **Web APIs**: Browser provides APIs (setTimeout, fetch, DOM events) that run outside the main thread
- **Event Loop**: Continuously checks if the call stack is empty and moves completed async operations from the callback queue to the call stack
- **Callback Queue**: Stores callbacks from completed async operations
This architecture allows JavaScript to appear multi-threaded while remaining single-threaded in execution.



## Promises:

### 1. What is a Promise in JavaScript?
A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It's like a placeholder for a value that will be available in the future.

**Promise Characteristics**
- 🔒 Promises are immutable once settled
- 1️⃣ They can only be resolved or rejected once
- 🧹 They provide a clean way to handle async operations

### 2. What is the main advantage of Promises over callbacks?
Promises help avoid callback hell, provide better error handling, and make code more readable and maintainable through chaining.

### 3. What happens if you call both resolve() and reject() in the same executor?
Only the first call (resolve or reject) will take effect. Any subsequent calls are ignored because a Promise can only settle once.

### 4. What Promise states and values?

#### 🔄 **Promise States**
Every Promise has one of three states:

1. ⏳ **Pending**: Initial state, neither fulfilled nor rejected
2. ✅ **Fulfilled**: Operation completed successfully
3. ❌ **Rejected**: Operation failed

#### 📋 **Promise Results**
Along with states, Promises have results:

1. 🤷 **undefined**: Initially when state is pending
2. 💎 **value**: When resolve(value) is called
3. 💥 **error**: When reject(error) is called

### 5. Can a Promise change its state from fulfilled to rejected?
No, once a Promise is settled (either fulfilled or rejected), its state cannot change. This is called immutability.

### 6. What are the three handler methods of Promise?
#### 🎪 **The Three Handler Methods are**

#### 🎉 **1. .then() - Handling Success**
```javascript
promise.then(
    (result) => {
        console.log(result); // 🎊 Handle success
    }
);
```

#### 🚨 **2. .catch() - Handling Errors**
```javascript
promise.catch(
    (error) => {
        console.error(error); // 💥 Handle error
    }
);
```

#### 🧹 **3. .finally() - Cleanup**
```javascript
promise.finally(
    () => {
        // 🏁 This runs regardless of success or failure
        console.log("Cleanup code here");
    }
);
```

### 7. What's the difference between .then() and .catch()?
.then() handles successful Promise resolution, while .catch() handles Promise rejection (errors). You can also pass both success and error handlers to .then().

### 8. What are the rules of Promise Chaining?

#### 🏆 **The Five Golden Rules of Promise Chaining**

#### 📜 **Rule 1: Handler Methods**
- ✅ Every fulfilled promise provides a `.then()` handler
- ❌ Every rejected promise provides a `.catch()` handler

#### ⚡ **Rule 2: Three Things You Can Do in .then()**
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

#### 🔄 **Rule 3: Rethrowing from .catch()**
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

#### 🌊 **Rule 4: .finally() Passes Through**
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

#### ⚠️ **Rule 5: Multiple .then() ≠ Chaining**
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

### 9. What's the difference between promise chaining and calling .then() multiple times?
Promise chaining passes the result from one .then() to the next, while calling .then() multiple times on the same promise gives each handler the same original resolved value.

### 10. What are the methods to handle multiple promises?
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

#### 2. **Promise.any()**
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

#### 3. **Promise.allSettled()**
Waits for all promises to settle (resolve or reject) and returns their results.

```javascript
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // 📋 Array of {status, value/reason}
    });
```

#### 4. **Promise.race()**
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

### 11. When would you use Promise.all() vs Promise.any()?
Use Promise.all() when you need ALL operations to succeed (like loading multiple required resources). Use Promise.any() when you need just ONE operation to succeed (like trying multiple servers).

### 12. What are promise utility methods?
#### 1.✅ **Promise.resolve()**
Creates a resolved promise with a given value:

```javascript
Promise.resolve("🌟 Hello World")
    .then(value => console.log(value)); // "🌟 Hello World"

// 🔄 Equivalent to:
let promise = new Promise(resolve => resolve("🌟 Hello World"));
```

#### 2. ❌ **Promise.reject()**
Creates a rejected promise with a given reason:

```javascript
Promise.reject("💥 Error occurred")
    .catch(error => console.log(error)); // "💥 Error occurred"

// 🔄 Equivalent to:
let promise = new Promise((resolve, reject) => reject("💥 Error occurred"));
```
### 13.  What's the difference between callbacks and promises?
Promises provide better error handling, avoid callback hell, support chaining, and are more readable. Callbacks can lead to nested code that's hard to maintain.

### 14. What happens if you don't handle promise rejection?
Unhandled promise rejections can cause applications to crash or behave unexpectedly. Always use .catch() or try-catch with async/await.
### 15. Can you convert a callback to a promise?
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
### 16. What's the difference between Promise.all() and Promise.allSettled()?
Promise.all() fails fast - if any promise rejects, the entire operation fails. Promise.allSettled() waits for all promises to complete and returns results for both successful and failed promises.
