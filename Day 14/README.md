# <div align="center">🛠️ DAY - 14 : Error Handling in JavaScript 🛠️</div>

<div align="center">
<code>try { learnJavaScript() } catch (error) { fixAndLearnMore() }</code>
</div>

## 📌 1. Why Error Handling?

Error handling is a critical aspect of programming that allows your code to gracefully respond to unexpected situations rather than crashing completely. Without proper error handling:

- ❌ A single error can crash your entire application
- ❌ Users may see confusing technical messages
- ❌ Debugging becomes more difficult
- ❌ Critical operations might be left incomplete

**Benefits of good error handling:**

- ✅ Improves user experience by showing helpful messages
- ✅ Enhances application reliability and stability
- ✅ Makes debugging easier by providing clear error information
- ✅ Allows your program to recover from errors and continue running

> 💡 **Knowledge Check:** What might happen if you don't implement error handling in your code?

---

## 📌 2. Errors in JavaScript

Before diving into specific error types, it's important to understand the two main categories of errors:

### 1. 🔠 Parsing Errors (Syntax Errors)

- Occur during code parsing, before execution even begins
- Caused by invalid JavaScript syntax that the engine cannot understand
- `Examples:` **missing parentheses**, **invalid variable names**, or **unclosed string literals**
- These errors cannot be caught with try-catch because the code never runs

### 2. 🔄 Runtime Errors

- Occur during program execution (while your code is running)
- The syntax is valid, but something goes wrong when the code executes
- Examples: trying to access properties of null, dividing by zero, or calling undefined functions
- These are the errors we can catch with try-catch blocks

### JavaScript has several built-in error types:

|      Error Type       | Description                                           | Example                                             |
| :-------------------: | ----------------------------------------------------- | --------------------------------------------------- |
|  **🔤 SyntaxError**   | Occurs when the code structure is invalid             | `console.log("hello"` (missing closing parenthesis) |
| **🔍 ReferenceError** | Occurs when referencing an undefined variable         | `console.log(undefinedVariable)`                    |
|   **🔠 TypeError**    | Occurs when a value is not of the expected type       | `null.toString()`                                   |
|   **📏 RangeError**   | Occurs when a value is outside the allowed range      | `new Array(-1)`                                     |
|    **🔗 URIError**    | Occurs with incorrect URI encoding/decoding           | `decodeURIComponent('%')`                           |
|   **⚙️ EvalError**    | Occurs with the `eval()` function (rare in modern JS) | `eval('var a = ;')`                                 |

> 💡 **Knowledge Check:** What type of error would you expect if you tried to call a method on `null`?

---

## 📌 3. Handling Errors With try and catch

The `try...catch` statement lets you handle errors gracefully:

```javascript
try {
  // 🧪 Code that might cause an error
  console.log("Start of try block");
  // Potentially problematic code here
  console.log("End of try block");
} catch (error) {
  // 🧯 Code to handle the error
  console.error("An error occurred:", error.message);
}
```

**How it works:**

1. ▶️ Code inside the `try` block is executed normally
2. ⏭️ If no errors occur, the `catch` block is skipped
3. ⚠️ If an error occurs in the `try` block, execution jumps to the `catch` block
4. 📦 The error object is passed to the `catch` block

**Example:**

```javascript
try {
  console.log("Starting calculation...");
  let result = 10 / 0; // This won't cause an error in JS (returns Infinity)
  console.log(undefinedVariable); // This WILL cause an error
  console.log("This line never runs");
} catch (error) {
  console.error("Caught an error:", error.message);
}
console.log("Program continues running");
```

> 💡 **Knowledge Check:** If an error occurs in the `try` block, will the remaining code in the `try` block still execute?

---

## 📌 4. The Error Object

When an error occurs, JavaScript creates an `Error` object with useful properties:

|   Property   | Description                                  |
| :----------: | -------------------------------------------- |
|  `📛 name`   | The type of error (e.g., "ReferenceError")   |
| `💬 message` | Human-readable description of the error      |
|  `📚 stack`  | Stack trace showing where the error occurred |

**Example:**

```javascript
try {
  nonExistentFunction();
} catch (error) {
  console.log(error.name); // "ReferenceError"
  console.log(error.message); // "nonExistentFunction is not defined"
  console.log(error.stack); // Full stack trace with line numbers
}
```

> 💡 **Knowledge Check:** What three properties can you access from an error object?

---

## 📌 5. Real World Use Cases

### 🌐 Handling network requests:

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error.message);
    // You could also show a user-friendly message
    return null;
  }
}
```

### ✅ Validating user input:

```javascript
function validateAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error("Age must be a number");
    }
    if (age < 0 || age > 120) {
      throw new Error("Age must be between 0 and 120");
    }
    return true;
  } catch (error) {
    console.error("Validation error:", error.message);
    return false;
  }
}
```

### 🔍 Safely accessing nested object properties:

```javascript
function getPostalCode(user) {
  try {
    return user.address.city.postalCode;
  } catch (error) {
    console.error("Error accessing postal code:", error.message);
    return "Unknown";
  }
}
```

> 💡 **Knowledge Check:** Why is error handling particularly important when making API requests?

---

## 📌 6. Throwing Errors

You can manually create and throw errors using the `throw` statement:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("Math error:", error.message);
}
```

**Creating new Error objects:**

```javascript
// Basic error
throw new Error("Something went wrong");

// You can also use specific error types
throw new TypeError("Expected a string");
throw new RangeError("Value out of acceptable range");
```

> 💡 **Knowledge Check:** When might you want to throw your own errors rather than letting them occur naturally?

---

## 📌 7. A Few More Error Cases

### 📄 Using try-catch with JSON parsing:

```javascript
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Invalid JSON format:", error.message);
    return null;
  }
}

const validData = parseJSON('{"name": "John", "age": 30}');
const invalidData = parseJSON("{name: John}"); // Missing quotes (invalid JSON)
```

### 🔀 Handling multiple error types:

```javascript
function processData(data) {
  try {
    if (typeof data !== "string") {
      throw new TypeError("Data must be a string");
    }

    if (data.length === 0) {
      throw new Error("Data cannot be empty");
    }

    return data.toUpperCase();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Type Error:", error.message);
    } else {
      console.error("Other Error:", error.message);
    }
    return null;
  }
}
```

> 💡 **Knowledge Check:** How can you determine what specific type of error occurred in your catch block?

---

## 📌 8. Rethrowing Errors

Sometimes you want to handle an error partially but pass it up to a higher-level handler:

```javascript
function validateUsername(username) {
  try {
    if (!username) {
      throw new Error("Username is required");
    }
    if (username.length < 3) {
      throw new Error("Username must be at least 3 characters");
    }
    return true;
  } catch (error) {
    console.error("Username validation failed:", error.message);
    throw error; // ↗️ Rethrow the error
  }
}

try {
  validateUsername("");
  console.log("Username is valid");
} catch (error) {
  console.error("Form submission failed:", error.message);
  // Display error to user
}
```

**When to rethrow:**

- 📝 When you want to log the error but still have higher-level code handle it
- 🧹 When you need to perform cleanup but can't fully recover from the error
- ℹ️ When you want to add information to the error but still treat it as an error

> 💡 **Knowledge Check:** What happens when you rethrow an error in a catch block?

---

## 📌 9. The finally Block

The `finally` block contains code that will always execute, regardless of whether an error occurred:

```javascript
function processFile() {
  let file = null;

  try {
    file = openFile("data.txt");
    // Process file data
    return "Processing successful";
  } catch (error) {
    console.error("Error processing file:", error.message);
    return "Processing failed";
  } finally {
    // This will run even if there's a return statement
    // in either the try or catch blocks
    if (file) {
      closeFile(file); // Always close the file
    }
    console.log("Cleanup complete");
  }
}
```

**The `finally` block is perfect for:**

- 🗃️ Closing database connections
- 🔓 Releasing resources (files, network connections)
- 📝 Completing logging
- 🧹 Any cleanup operations that should happen regardless of success or failure

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Always runs ✨
}
```

> 💡 **Knowledge Check:** If you have a `return` statement in both the `try` and `catch` blocks, will the `finally` block still execute?

---

## 📌 10. Custom Errors

You can create your own error types by extending the built-in Error class:

**Using ES6 class syntax (modern approach):**

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Form data is invalid");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation failed:", error.message);
  } else {
    console.error("Other error:", error.message);
  }
}
```

**Using function constructor (older approach):**

```javascript
function DatabaseError(message) {
  this.name = "DatabaseError";
  this.message = message;
  this.stack = new Error().stack;
}
DatabaseError.prototype = Object.create(Error.prototype);
```

**Benefits of custom errors:**

- 🔍 You can check for specific error types using `instanceof`
- 📝 Errors are more descriptive and meaningful
- 🛠️ You can add custom properties relevant to the error

> 💡 **Knowledge Check:** What's the advantage of creating custom error types instead of using generic Error objects?

---

## 📌 11. The Self Assignment Operator (?=)

The Self Assignment Operator is a newer addition to JavaScript that sets a value only if the current value is nullish (null or undefined):

```javascript
// The ?= operator (nullish coalescing assignment)
let x;           // undefined
x ?= 10;         // x is now 10 (because x was undefined)

let y = 5;
y ?= 20;         // y is still 5 (not changed because y already had a value)

// Compared to:
let z;
z = z ?? 10;     // Same as z ?= 10
```

**This is especially useful for:**

- 🎛️ Setting default values only when needed
- 🚀 Initializing variables conditionally
- 🔒 Avoiding overwriting existing values

> 💡 **Knowledge Check:** What will be the value of `count` after this code runs?
>
> ```javascript
> let count;
> count ?= 5;
> count ?= 10;
> ```

---

## 🏋️‍♀️ Practice Tasks

1. **🧪 Basic Error Handling:** Write a function `safelyParseInt(str)` that tries to parse a string to an integer and returns the number. If parsing fails, it should return 0.

2. **🔍 Error Types:** What type of error would each of these operations produce?

   - `console.log(undefinedVariable)`
   - `null.toString()`
   - `JSON.parse('{"name": John}')`
   - `new Array(-1)`

3. **🔄 The finally Block:** Write a function that simulates opening a database connection, querying data (which might fail), and then always closes the connection using a finally block.

4. **🛠️ Custom Error:** Create a custom error class called `NetworkError` that extends the standard Error class. It should accept a message and a status code in its constructor.

5. **↗️ Rethrowing Error:** Write a function that validates a user's password (must be at least 8 characters, contain a number and a special character). If validation fails, throw a descriptive error. In a try-catch block, call this function and rethrow any errors after logging them.

6. **⚙️ Self Assignment Operator:** What will be the output of the following code?

   ```javascript
   let config = { theme: "dark" };
   let userConfig;
   userConfig ?= config;
   config.theme = "light";
   console.log(userConfig.theme);
   ```

7. **📋 Error Object Properties:** Write code that deliberately causes an error, catches it, and then logs all three main properties of the error object.

8. **🧩 Multiple Error Types:** Write a function `divide(a, b)` that handles different types of errors: throws a TypeError if inputs aren't numbers and a custom `DivisionError` if b is zero.

9. **🌐 Practical Application:** Create a function that fetches user data from a (simulated) API. Handle network errors, invalid JSON responses, and missing data errors differently. Use try-catch-finally.

10. **⛓️ Error Chain:** Create a program with three nested functions, each with its own try-catch block. Make the innermost function throw an error, then demonstrate how that error can be caught, modified, and rethrown through the chain.

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
<p>📆 <em>Next: Day - 15: Javascript Array</em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>
</div>
