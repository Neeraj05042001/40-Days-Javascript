# DAY - 24: "Async JavaScript - async/await"
> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 💼 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦 | [GitHub: Neeraj05042001](https://github.com/Neeraj05042001) 🐙* |
---

## 📚 Introduction

Async/await is a powerful feature in JavaScript that makes working with asynchronous code much easier and more readable. It's built on top of Promises and provides a cleaner, more synchronous-looking way to handle asynchronous operations without falling into callback hell.

Think of async/await as a way to write asynchronous code that reads like synchronous code, making it easier to understand and maintain.

---

## 🎯 What Will We Learn?

In this comprehensive guide, we'll cover:
- Understanding the need for async/await
- How to use the `async` and `await` keywords
- Error handling in async functions
- Top-level await
- Handling multiple async operations
- Real-world project implementation
- Best practices and common pitfalls

---

## 🤔 Why async/await?

Before async/await, we had to rely on callbacks and Promises, which could lead to complex nested code:

**Promise-based approach:**
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    return fetch(`https://api.example.com/user/${data.userId}`);
  })
  .then(response => response.json())
  .then(user => {
    console.log(user);
  })
  .catch(error => console.error(error));
```

**Async/await approach:**
```javascript
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    const userResponse = await fetch(`https://api.example.com/user/${data.userId}`);
    const user = await userResponse.json();
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
```

### 🧠 Knowledge Check
<details>
<summary>Question: What are the main advantages of async/await over Promises?</summary>

**Answer:** 
1. **Cleaner syntax** - Code looks more like synchronous code
2. **Better error handling** - Can use try/catch blocks
3. **Easier debugging** - Stack traces are more meaningful
4. **Reduced nesting** - Avoids "Promise hell"
5. **Better readability** - Easier to understand the flow of execution
</details>

---

## 🔑 The async Keyword

The `async` keyword is used before a function declaration to make it an asynchronous function. An async function always returns a Promise, even if you don't explicitly return one.

### Basic Syntax:
```javascript
async function myFunction() {
  return "Hello World";
}

// Arrow function syntax
const myAsyncFunction = async () => {
  return "Hello World";
};

// Method syntax
const obj = {
  async myMethod() {
    return "Hello World";
  }
};
```

### Key Points:
- Async functions always return a Promise
- If you return a value, it gets wrapped in a resolved Promise
- If you throw an error, it becomes a rejected Promise

**Example:**
```javascript
async function foo() {
    return Promise.resolve(101);
}

// This function returns a Promise that resolves to 101
console.log(foo()); // Promise { <resolved>: 101 }
```

### 🧠 Knowledge Check
<details>
<summary>Question: What happens when you return a regular value from an async function?</summary>

**Answer:** When you return a regular value from an async function, JavaScript automatically wraps it in a resolved Promise. For example, `return "hello"` becomes `Promise.resolve("hello")`.
</details>

---

## ⏳ The await Keyword

The `await` keyword can only be used inside async functions. It pauses the execution of the function until the Promise is resolved or rejected.

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

### 🧠 Knowledge Check
<details>
<summary>Question: Can you use await outside of an async function?</summary>

**Answer:** No, you cannot use `await` outside of an async function (except for top-level await in modules). Attempting to do so will result in a SyntaxError. You must wrap await calls inside an async function.
</details>

---

## 🔄 Is await Synchronous?

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

### 🧠 Knowledge Check
<details>
<summary>Question: Does await block the entire JavaScript thread?</summary>

**Answer:** No, await does not block the entire JavaScript thread. It only pauses the execution of the current async function. The main thread continues to execute other code, and the function resumes when the awaited Promise settles.
</details>

---

## 🛡️ Error Handling

Error handling in async/await is done using traditional `try/catch` blocks, which is much cleaner than `.catch()` with Promises.

### Basic Error Handling:
```javascript
async function handleErrors() {
  try {
    const result = await riskyOperation();
    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
```

### Complete Example:
```javascript
const errorPromise = new Promise((resolve, reject) => {
    reject("Error Occured!");
});

async function handleErrorPromise() {
    try {
        const result = await errorPromise;
        console.log(result);
    } catch(error) {
        console.error("Caught error:", error);
    }
}

handleErrorPromise(); // Outputs: "Caught error: Error Occured!"
```

### Advanced Error Handling:
```javascript
async function robustErrorHandling() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    return processedData;
  } catch (error) {
    if (error.name === 'NetworkError') {
      console.log('Network issue, retrying...');
      // Retry logic
    } else if (error.name === 'ValidationError') {
      console.log('Data validation failed');
      // Handle validation error
    } else {
      console.log('Unexpected error:', error);
      throw error; // Re-throw if we can't handle it
    }
  } finally {
    console.log('Cleanup operations');
  }
}
```

### 🧠 Knowledge Check
<details>
<summary>Question: How do you handle errors in async/await functions?</summary>

**Answer:** Use try/catch blocks around await statements. Put the await calls inside the try block, and handle any errors in the catch block. You can also use a finally block for cleanup operations that should run regardless of success or failure.
</details>

---

## 🌤️ Project - Weather App Concepts

When building a weather app with async/await, you would typically:

1. **Fetch weather data from an API**
2. **Handle loading states**
3. **Manage errors gracefully**
4. **Update the UI based on results**

```javascript
async function getWeatherData(city) {
  try {
    // Show loading state
    showLoading(true);
    
    const response = await fetch(`https://api.weather.com/v1/current?city=${city}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const weatherData = await response.json();
    displayWeather(weatherData);
    
  } catch (error) {
    displayError(`Failed to fetch weather: ${error.message}`);
  } finally {
    showLoading(false);
  }
}
```

---

## 🔝 Top Level await

Top-level await allows you to use `await` outside of async functions in ES modules. This is useful for module initialization.

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

**Important Notes:**
- Only works in ES modules (type="module")
- Can delay module loading
- Use sparingly for initialization tasks

### 🧠 Knowledge Check
<details>
<summary>Question: When can you use top-level await?</summary>

**Answer:** Top-level await can only be used in ES modules (files with type="module" or .mjs extension). It allows you to use await at the top level of a module without wrapping it in an async function, but it can delay the module's loading.
</details>

---

## 🤹 Handling Multiple async/await

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

### Real Example (Pokemon API):
```javascript
const BULBASAUR_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

async function resolvePokemonsV2() {
    const responses = await Promise.allSettled([
        fetch(BULBASAUR_URL).then(response => response.json()),
        fetch(RATICATE_URL).then(response => response.json()),
        fetch(KAKUNA_URL).then(response => response.json())
    ]);
    
    console.log(responses);
    // Each response contains: { status: 'fulfilled'/'rejected', value/reason: ... }
}
```

### 🧠 Knowledge Check
<details>
<summary>Question: What's the difference between Promise.all() and Promise.allSettled()?</summary>

**Answer:** 
- **Promise.all()**: Fails fast - if any Promise rejects, the entire operation fails immediately
- **Promise.allSettled()**: Waits for all Promises to complete (resolve or reject) and returns an array with the status and result/reason for each Promise. It never rejects.
</details>

---

## 🍕 The Pizzahub with async/await

Converting Promise-based code to async/await makes it more readable:

**Before (Promises):**
```javascript
fetch('http://localhost:3000/api/pizzahub')
  .then(response => response.json())
  .then(stores => {
    console.log(stores);
    return fetch(`http://localhost:3000/api/pizzahub/${stores[0].id}/menu`);
  })
  .then(response => response.json())
  .then(menu => console.log(menu))
  .catch(error => console.error(error));
```

**After (async/await):**
```javascript
async function getPizzaData() {
  try {
    const storeResponse = await fetch('http://localhost:3000/api/pizzahub');
    const stores = await storeResponse.json();
    console.log(stores);
    
    const menuResponse = await fetch(`http://localhost:3000/api/pizzahub/${stores[0].id}/menu`);
    const menu = await menuResponse.json();
    console.log(menu);
  } catch (error) {
    console.error('Error fetching pizza data:', error);
  }
}
```

---

## 📋 Common Patterns and Best Practices

### 1. Always Handle Errors
```javascript
async function goodPractice() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    console.error('Operation failed:', error);
    throw error; // Re-throw if the caller needs to handle it
  }
}
```

### 2. Avoid Mixing async/await with .then()
```javascript
// ❌ Don't do this
async function mixed() {
  const result = await somePromise().then(data => data.value);
  return result;
}

// ✅ Do this instead
async function clean() {
  const data = await somePromise();
  return data.value;
}
```

### 3. Use Promise.all() for Independent Operations
```javascript
// ❌ Sequential (slower)
async function sequential() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();
  return { user, posts, comments };
}

// ✅ Parallel (faster)
async function parallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  return { user, posts, comments };
}
```

---

## 🎤 Common Interview Questions

<details>
<summary>Q1: What is the difference between async/await and Promises?</summary>

**Answer:** 
- **Syntax**: async/await provides cleaner, more readable syntax that looks like synchronous code
- **Error Handling**: async/await uses try/catch blocks, while Promises use .catch()
- **Debugging**: async/await provides better stack traces and debugging experience
- **Underlying mechanism**: async/await is built on top of Promises - it's syntactic sugar
- **Chaining**: Promises use .then() chaining, async/await uses sequential await statements
</details>

<details>
<summary>Q2: Can you use await without async?</summary>

**Answer:** 
No, you cannot use `await` without `async` (except for top-level await in ES modules). The `await` keyword can only be used inside functions declared with the `async` keyword. Attempting to use await in a regular function will result in a SyntaxError.
</details>

<details>
<summary>Q3: What happens if you don't await an async function?</summary>

**Answer:** 
If you don't await an async function, it returns a Promise immediately and continues executing in the background. The calling code won't wait for the async function to complete, which can lead to:
- Unhandled Promise rejections
- Race conditions
- Unexpected execution order
- The function result being a Promise instead of the actual value
</details>

<details>
<summary>Q4: How do you handle multiple async operations that don't depend on each other?</summary>

**Answer:** 
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
</details>

<details>
<summary>Q5: What is the purpose of Promise.allSettled() vs Promise.all()?</summary>

**Answer:** 
- **Promise.all()**: Fails fast - if any Promise rejects, the entire operation fails immediately. Use when all operations must succeed.
- **Promise.allSettled()**: Waits for all Promises to settle (resolve or reject) and returns results for all. Use when you want results from all operations regardless of individual failures.
</details>

---

## 🏋️ Practice Tasks

### Basic Level (1-3)

**1. Convert Promise to async/await**
```javascript
// Convert this Promise-based code to use async/await
function fetchUserData() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
      console.log(user);
      return user;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}
```

<details>
<summary>Answer</summary>

```javascript
async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user);
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```
</details>

**2. Error Handling**
Create an async function that handles different types of errors when fetching data from an API.

<details>
<summary>Answer</summary>

```javascript
async function robustFetch(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error('Network error or invalid URL:', error.message);
    } else if (error.message.startsWith('HTTP')) {
      console.error('Server error:', error.message);
    } else if (error.name === 'SyntaxError') {
      console.error('Invalid JSON response:', error.message);
    } else {
      console.error('Unexpected error:', error.message);
    }
    throw error;
  }
}
```
</details>

**3. Sequential vs Parallel**
Write two functions: one that fetches three pieces of data sequentially, and another that fetches them in parallel.

<details>
<summary>Answer</summary>

```javascript
// Sequential
async function fetchSequential() {
  console.time('Sequential');
  try {
    const user = await fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json());
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json());
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments/1').then(r => r.json());
    console.timeEnd('Sequential');
    return { user, posts, comments };
  } catch (error) {
    console.error('Sequential fetch failed:', error);
  }
}

// Parallel
async function fetchParallel() {
  console.time('Parallel');
  try {
    const [user, posts, comments] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/comments/1').then(r => r.json())
    ]);
    console.timeEnd('Parallel');
    return { user, posts, comments };
  } catch (error) {
    console.error('Parallel fetch failed:', error);
  }
}
```
</details>

### Intermediate Level (4-6)

**4. Retry Logic**
Create an async function that retries a failed operation up to 3 times with exponential backoff.

<details>
<summary>Answer</summary>

```javascript
async function retryOperation(operation, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await operation();
      return result;
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${attempt} failed:`, error.message);
      
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw new Error(`Operation failed after ${maxRetries} attempts. Last error: ${lastError.message}`);
}

// Usage
async function unreliableOperation() {
  if (Math.random() < 0.7) {
    throw new Error('Random failure');
  }
  return 'Success!';
}

retryOperation(unreliableOperation);
```
</details>

**5. Timeout Wrapper**
Create a function that adds timeout functionality to any async operation.

<details>
<summary>Answer</summary>

```javascript
function withTimeout(asyncOperation, timeoutMs) {
  return new Promise(async (resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Operation timed out after ${timeoutMs}ms`));
    }, timeoutMs);
    
    try {
      const result = await asyncOperation();
      clearTimeout(timeoutId);
      resolve(result);
    } catch (error) {
      clearTimeout(timeoutId);
      reject(error);
    }
  });
}

// Usage
async function slowOperation() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return 'Finally done!';
}

// This will timeout after 2 seconds
withTimeout(slowOperation(), 2000)
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
```
</details>

**6. Batch Processing**
Create a function that processes an array of items in batches using async/await.

<details>
<summary>Answer</summary>

```javascript
async function processBatch(items, processor, batchSize = 3) {
  const results = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1}...`);
    
    const batchPromises = batch.map(item => processor(item));
    const batchResults = await Promise.allSettled(batchPromises);
    
    results.push(...batchResults);
    
    // Optional: Add delay between batches
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  return results;
}

// Usage
async function processItem(item) {
  // Simulate async processing
  await new Promise(resolve => setTimeout(resolve, 500));
  return `Processed: ${item}`;
}

const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
processBatch(items, processItem, 2);
```
</details>

### Advanced Level (7-10)

**7. Rate Limiting**
Implement a rate-limited async function that ensures no more than N operations execute per second.

<details>
<summary>Answer</summary>

```javascript
class RateLimiter {
  constructor(maxRequests, timeWindow) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindow;
    this.requests = [];
  }
  
  async execute(asyncFunction) {
    await this.waitForSlot();
    this.requests.push(Date.now());
    return asyncFunction();
  }
  
  async waitForSlot() {
    const now = Date.now();
    
    // Remove old requests outside the time window
    this.requests = this.requests.filter(
      timestamp => now - timestamp < this.timeWindow
    );
    
    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = Math.min(...this.requests);
      const waitTime = this.timeWindow - (now - oldestRequest);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return this.waitForSlot(); // Recursive check
    }
  }
}

// Usage: Max 3 requests per 2 seconds
const limiter = new RateLimiter(3, 2000);

async function makeAPICall(id) {
  console.log(`Making API call ${id} at ${new Date().toISOString()}`);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  return `Response ${id}`;
}

// This will automatically rate limit the calls
Promise.all([
  limiter.execute(() => makeAPICall(1)),
  limiter.execute(() => makeAPICall(2)),
  limiter.execute(() => makeAPICall(3)),
  limiter.execute(() => makeAPICall(4)),
  limiter.execute(() => makeAPICall(5))
]);
```
</details>

**8. Async Queue**
Implement an async queue that processes items one at a time in order.

<details>
<summary>Answer</summary>

```javascript
class AsyncQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }
  
  async add(asyncFunction) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        asyncFunction,
        resolve,
        reject
      });
      
      this.process();
    });
  }
  
  async process() {
    if (this.running || this.queue.length === 0) {
      return;
    }
    
    this.running = true;
    
    while (this.queue.length > 0) {
      const { asyncFunction, resolve, reject } = this.queue.shift();
      
      try {
        const result = await asyncFunction();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
    
    this.running = false;
  }
}

// Usage
const queue = new AsyncQueue();

async function task(name, duration) {
  console.log(`Starting ${name}`);
  await new Promise(resolve => setTimeout(resolve, duration));
  console.log(`Completed ${name}`);
  return `Result of ${name}`;
}

// Add tasks to queue - they'll execute in order
queue.add(() => task('Task 1', 2000));
queue.add(() => task('Task 2', 1000));
queue.add(() => task('Task 3', 1500));
```
</details>

**9. Async Pipeline**
Create a pipeline that passes the result of one async operation to the next.

<details>
<summary>Answer</summary>

```javascript
class AsyncPipeline {
  constructor(...functions) {
    this.functions = functions;
  }
  
  async execute(initialValue) {
    let result = initialValue;
    
    for (let i = 0; i < this.functions.length; i++) {
      try {
        console.log(`Step ${i + 1}: Processing...`);
        result = await this.functions[i](result);
        console.log(`Step ${i + 1}: Complete`);
      } catch (error) {
        throw new Error(`Pipeline failed at step ${i + 1}: ${error.message}`);
      }
    }
    
    return result;
  }
}

// Pipeline functions
async function addPrefix(text) {
  await new Promise(resolve => setTimeout(resolve, 500));
  return `Prefix: ${text}`;
}

async function makeUpperCase(text) {
  await new Promise(resolve => setTimeout(resolve, 300));
  return text.toUpperCase();
}

async function addSuffix(text) {
  await new Promise(resolve => setTimeout(resolve, 400));
  return `${text} :Suffix`;
}

// Usage
const pipeline = new AsyncPipeline(addPrefix, makeUpperCase, addSuffix);
pipeline.execute('hello world')
  .then(result => console.log('Final result:', result));
```
</details>

**10. Advanced Error Recovery**
Create a robust async function that implements circuit breaker pattern for external API calls.

<details>
<summary>Answer</summary>

```javascript
class CircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5;
    this.timeout = options.timeout || 60000; // 1 minute
    this.monitor = options.monitor || this.defaultMonitor;
    
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.lastFailureTime = null;
    this.successCount = 0;
  }
  
  async execute(asyncFunction) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime >= this.timeout) {
        this.state = 'HALF_OPEN';
        this.successCount = 0;
        console.log('Circuit breaker: Attempting to recover...');
      } else {
        throw new Error('Circuit breaker is OPEN - service unavailable');
      }
    }
    
    try {
      const result = await asyncFunction();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failureCount = 0;
    
    if (this.state === 'HALF_OPEN') {
      this.successCount++;
      if (this.successCount >= 3) {
        this.state = 'CLOSED';
        console.log('Circuit breaker: Service recovered - CLOSED');
      }
    }
  }
  
  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
      console.log('Circuit breaker: Too many failures - OPEN');
    }
  }
  
  defaultMonitor(error) {
    // You can customize this to handle specific error types
    return true; // Count all errors as failures
  }
  
  getState() {
    return {
      state: this.state,
      failureCount: this.failureCount,
      lastFailureTime: this.lastFailureTime
    };
  }
}

// Usage
const circuitBreaker = new CircuitBreaker({
  failureThreshold: 3,
  timeout: 5000 // 5 seconds
});

async function unreliableAPICall() {
  // Simulate unreliable API
  if (Math.random() < 0.7) {
    throw new Error('API call failed');
  }
  return 'API Success!';
}

// Test the circuit breaker
async function testCircuitBreaker() {
  for (let i = 1; i <= 10; i++) {
    try {
      const result = await circuitBreaker.execute(unreliableAPICall);
      console.log(`Call ${i}: ${result}`);
    } catch (error) {
      console.log(`Call ${i}: ${error.message}`);
    }
    
    console.log(`State: ${circuitBreaker.getState().state}\n`);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// testCircuitBreaker();
```
</details>

---

## 📝 Summary

Async/await is a powerful feature that makes asynchronous JavaScript code more readable and maintainable. Key takeaways:

### Essential Concepts:
- **async** functions always return Promises
- **await** pauses function execution until Promise settles
- Use **try/catch** for error handling
- **await** can only be used inside async functions (except top-level await)

### Best Practices:
- Always handle errors with try/catch
- Use Promise.all() for parallel operations
- Avoid mixing async/await with .then()
- Consider using Promise.allSettled() when you need all results regardless of failures
- Implement proper error recovery strategies for production code

### Performance Considerations:
- Sequential await calls are slower than parallel execution
- Use Promise.all() when operations don't depend on each other
- Consider implementing rate limiting and circuit breakers for external APIs
- Be mindful of memory usage with large datasets

### Common Pitfalls:
- Forgetting to await async functions
- Using await in loops without considering performance
- Not handling errors properly
- Mixing async/await with Promise chains unnecessarily

Master these concepts and you'll be able to write clean, efficient asynchronous JavaScript code that's easy to read, debug, and maintain!

---

## 🎯 Next Steps

Tomorrow, we'll likely cover:
- **Fetch API in depth**
- **Working with REST APIs**
- **Handling different HTTP methods**
- **Request and response interceptors**
- **Building a complete API client**

Keep practicing async/await patterns, as they're fundamental to modern JavaScript development!

---
<div align="center" style="background: linear-gradient(135deg, #f0f4f8 0%, #e2ecf3 100%); padding: 30px; border-radius: 16px; margin-top: 50px; box-shadow: 0 6px 20px rgba(0,0,0,0.08); max-width: 700px;">

  <h3 style="color: #2c3e50; font-size: 22px; font-weight: 700; margin-bottom: 20px;">
    🚀 <i>Let's Connect & Level Up Together</i>
  </h3>

  <p style="color: #555; font-size: 16px; margin-bottom: 25px;">
    Follow me for daily <strong>JavaScript tips</strong>, insightful notes, and project-based learning.
  </p>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 30px;">
    <a href="https://x.com/@_19_neeraj" style="background-color: #e8f4fd; color: #1da1f2; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none;">
      🔗 X (Twitter)
    </a>
    <a href="https://www.linkedin.com/in/neeraj-kumar1904" style="background-color: #e6f1f8; color: #0077b5; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none;">
      💼 LinkedIn
    </a>
    <a href="https://t.me/yourchannel" style="background-color: #e1f4fb; color: #0088cc; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none;">
      💬 Telegram
    </a>
    <a href="https://www.threads.net/@yourhandle" style="background-color: #f4e6fa; color: #833ab4; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none;">
      🧵 Threads
    </a>
  </div>

  <p style="font-size: 16px; color: #2c3e50; margin-bottom: 20px;">
    🔍 Dive into the full notes on GitHub → 
    <a href="https://github.com/Neeraj05042001/40-Days-Javascript" style="color: #2980b9; font-weight: bold; text-decoration: none;">
      40 Days JavaScript
    </a>
  </p>

  <p style="font-size: 13px; color: #7f8c8d;">
    © 2025 • Crafted with ❤️ by <strong style="color: #34495e;">Neeraj</strong>
  </p>
</div>

---

<div align="center">
<p>📆 <em>Next: Day - 25: fetch( ) </em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>
</div>