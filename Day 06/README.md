# 🔧 Functions

## 📘 Introduction to Functions

Functions are one of the fundamental building blocks in JavaScript. They allow you to encapsulate a block of code that can be used and reused throughout your program. Think of functions as "code recipes" that you can call whenever you need them.

## 🎯 What is a Function?

A function is a reusable block of code designed to perform a specific task. Functions help:
- 📦 Organize your code into manageable pieces
- 🔄 Make your code reusable (write once, use many times)
- 📝 Keep your code maintainable and easier to understand
- 🏗️ Build modular applications

## 🛠️ Defining a Function

Functions can be defined (created) in several ways in JavaScript:

### Function Declaration

```javascript
function greet() {
    console.log("Hello, Neeraj!");
}
```

**Key components:**
- `function` keyword
- Function name (`greet`)
- Parentheses `()`
- Function body enclosed in curly braces `{}`

### Function with Parameters

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}
```

## 📞 Invoking (Calling) a Function

To use a function after it's defined, you need to invoke/call it:

```javascript
// Define function
function sayHello() {
    console.log("Hello!");
}

// Invoke function
sayHello(); // Output: Hello!
```

When invoking a function with parameters:

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!
```
## 🛠️ Function Declaration

Function declaration (also called function statement) defines a named function using the `function` keyword:

```javascript
function multiply(a, b) {
    return a * b;
}
```

**Key characteristics:**
- Begins with the `function` keyword
- Followed by the function name (`multiply` in this example)
- Parameters in parentheses (`a, b`)
- Function body enclosed in curly braces `{}`
- Can include a `return` statement (not required, but often used)

**Important:** Function declarations are hoisted to the top of their scope, meaning you can call them before they appear in your code:

```javascript
// This works!
console.log(square(5)); // Output: 25

// Function declaration is hoisted
function square(number) {
    return number * number;
}
```
## 🔢 Function as Expression

A function expression assigns a function to a variable:

```javascript
// Function expression
const greet = function(name) {
    console.log(`Hello, ${name}!`);
};

// Invoke function
greet("Sarah"); // Output: Hello, Sarah!
```

**Key differences from function declarations:**
- Function expressions are not hoisted (can't be used before they're defined)
- Can be anonymous (no name) or named
- Often used for callbacks and IIFE

## 📫 Parameters and Arguments

- **Parameters** are variables listed in the function definition
- **Arguments** are the values passed to the function when it's called

```javascript
// 'name' and 'age' are parameters
function introduce(name, age) {
    console.log(`I am ${name} and I am ${age} years old.`);
}

// 'Alice' and 25 are arguments
introduce("Alice", 25);
```

## 🛡️ Default Parameters

Default parameters allow you to specify default values for parameters if no argument is provided:

```javascript
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Tom"); // Output: Hello, Tom!
```

## 📦 Rest Parameter

The rest parameter syntax (`...`) allows a function to accept an indefinite number of arguments as an array:

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2)); // Output: 3
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

**Key points:**
- Must be the last parameter in the function definition
- Collects all remaining arguments into an array
- Only one rest parameter allowed per function

## 🪆 Nested Functions

Functions can be defined inside other functions:

```javascript
function outer() {
    console.log("I am the outer function");
    
    function inner() {
        console.log("I am the inner function");
    }
    
    // Call the inner function
    inner();
}

outer();
// Output:
// I am the outer function
// I am the inner function
```

### How to Execute Inner Functions

There are several ways to execute inner functions:

1. **Call directly from inside the outer function** (as shown above)

2. **Return the inner function and call it later**:
```javascript
function createGreeter(greeting) {
    function greet(name) {
        console.log(`${greeting}, ${name}!`);
    }
    
    return greet; // Return the inner function
}

const sayHello = createGreeter("Hello");
sayHello("Maria"); // Output: Hello, Maria!
```

3. **Immediately invoke the inner function**:
```javascript
function outer() {
    console.log("Outer function");
    
    (function inner() {
        console.log("Inner function executed immediately");
    })();
}

outer();
```

## 🔄 Callback Functions

A callback function is a function passed as an argument to another function, which is then invoked inside the outer function:

```javascript
function processInput(input, callback) {
    // Process the input
    const processed = input.toUpperCase();
    
    // Call the callback function with the processed input
    callback(processed);
}

// Define callback function
function displayResult(result) {
    console.log(`The processed result is: ${result}`);
}

// Pass the callback function to processInput
processInput("hello", displayResult);
// Output: The processed result is: HELLO
```

**Common use cases:**
- Event handlers
- Asynchronous operations (setTimeout, API calls)
- Array methods (forEach, map, filter, etc.)

## ✨ Pure Functions

A pure function is a function that:
1. Always returns the same output for the same input
2. Has no side effects (doesn't modify external state)

```javascript
// Pure function
function add(a, b) {
    return a + b;
}

// Not a pure function (uses external state)
let total = 0;
function addToTotal(value) {
    total += value; // Side effect: modifies external variable
    return total;
}
```

**Benefits of pure functions:**
- 🔍 Easier to test and debug
- 🔄 More predictable behavior
- 🔒 Safer for concurrent operations
- 📦 More reusable and modular

## 🚀 Higher-Order Functions

A higher-order function is a function that:
- Takes one or more functions as arguments, and/or
- Returns a function as its result

```javascript
// Higher-order function that takes a function as argument
function calculate(operation, a, b) {
    return operation(a, b);
}

// Functions to pass as arguments
function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }

console.log(calculate(add, 5, 3)); // Output: 8
console.log(calculate(subtract, 5, 3)); // Output: 2
```

**Higher-order function that returns a function:**
```javascript
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

## 🏹 Arrow Functions

Arrow functions provide a shorter syntax for writing functions and do not bind their own `this` value:

```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Equivalent arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3)); // Output: 8
```

**Syntax variations:**
- With multiple parameters: `(a, b) => expression`
- With single parameter: `a => expression` (parentheses optional)
- With no parameters: `() => expression`
- Multiple statements: `(a, b) => { statements; return value; }`

**Key differences from regular functions:**
- No `this` binding of their own (inherits from parent scope)
- No `arguments` object
- Can't be used as constructors (no `new` keyword)
- No `super` or `new.target`

## 🔄 IIFE (Immediately Invoked Function Expression)

An IIFE is a function that runs as soon as it is defined:

```javascript
(function() {
    console.log("This function runs immediately!");
})();
// Output: This function runs immediately!
```

**With parameters:**
```javascript
(function(name) {
    console.log(`Hello, ${name}!`);
})("Alice");
// Output: Hello, Alice!
```

**Arrow function IIFE:**
```javascript
(() => {
    console.log("Arrow function IIFE");
})();
```

**Use cases:**
- Creating private scopes to avoid polluting the global namespace
- Avoiding variable hoisting issues
- Module patterns (before ES6 modules)

## 📚 Call Stack

The call stack is a mechanism that JavaScript uses to keep track of function calls:

- When a function is called, it's added to the stack (pushed)
- When a function returns, it's removed from the stack (popped)
- The stack follows the Last In, First Out (LIFO) principle

```javascript
function first() {
    console.log("First function");
    second();
    console.log("First function again");
}

function second() {
    console.log("Second function");
    third();
    console.log("Second function again");
}

function third() {
    console.log("Third function");
}

first();
/* Output:
First function
Second function
Third function
Second function again
First function again
*/
```

Call stack sequence:
1. Push `first()`
2. Execute `first()` and push `second()`
3. Execute `second()` and push `third()`
4. Execute `third()` and pop it
5. Continue executing `second()` and pop it
6. Continue executing `first()` and pop it

**Stack overflow** occurs when the call stack exceeds its size limit, often due to infinite recursion.

## 🔄 Recursion

Recursion is when a function calls itself:

```javascript
function countdown(n) {
    // Exit criteria (base case)
    if (n <= 0) {
        console.log("Done!");
        return;
    }
    
    console.log(n);
    
    // Recursive call with progress toward exit criteria
    countdown(n - 1);
}

countdown(3);
/* Output:
3
2
1
Done!
*/
```

### Key Components of Recursion:

1. **Exit Criteria (Base Case)**: The condition that stops the recursion
   ```javascript
   if (n <= 0) {
       console.log("Done!");
       return;
   }
   ```

2. **Fetch Condition (Recursive Case)**: The part where the function calls itself with modified parameters
   ```javascript
   countdown(n - 1);
   ```

**Common example: Factorial calculation**
```javascript
function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
```

**Best practices:**
- Always define a clear base case
- Ensure progress toward the base case
- Be mindful of stack overflow for deep recursion
- Consider tail-call optimization for better performance

## 🧩 Advanced Function Patterns

### Closures

A closure occurs when a function "remembers" its lexical scope even when executed outside that scope:

```javascript
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### Function Currying

Currying transforms a function with multiple arguments into a sequence of functions with single arguments:

```javascript
// Regular function
function add(a, b, c) {
    return a + b + c;
}

// Curried version
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curriedAdd(1)(2)(3)); // Output: 6
```

## 📝 Summary & Best Practices

- ✅ Use function declarations for main functions and hoisting benefits
- ✅ Use arrow functions for short callbacks and lexical this binding
- ✅ Use default parameters for more robust functions
- ✅ Follow pure function principles when possible
- ✅ Document your functions with clear comments
- ✅ Name functions clearly to describe what they do, not how they do it
- ✅ Keep functions focused on a single task (Single Responsibility)
- ✅ Limit function parameters (ideally 3 or fewer)
- ✅ Use early returns to avoid deep nesting

## 🔍 Key Terms Reference

| Term | Description |
|------|-------------|
| Function | A reusable block of code that performs a specific task |
| Parameter | Variables listed in function definition |
| Argument | Actual values passed to a function when called |
| Function Expression | Assigning a function to a variable |
| Return Value | Data sent back from a function |
| Arrow Function | Shorthand syntax for writing functions |
| Callback | Function passed as argument to another function |
| Pure Function | Function with no side effects that returns same output for same input |
| Higher-Order Function | Function that takes or returns other functions |
| IIFE | Function that runs as soon as it's defined |
| Recursion | Function that calls itself |
| Call Stack | Mechanism to track function execution order |

---


# Next we will be doing some `beginner-friendly projects.`



