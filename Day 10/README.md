<div style="text-align: center; font-size: 0.9em; opacity: 0.6;">
  🌞DAY-10 : Mastering Scope And Scope Chain 🌐🤔
</div>

# 🔍 JavaScript Scope and Scope Chain 

## 📚 Introduction

Scope is one of the fundamental concepts in JavaScript that determines the accessibility and visibility of variables. Understanding scope is essential for writing clean, bug-free code and avoiding unexpected behaviors in your applications.

---

## 🤔 What is Scope?

**`Scope`** refers to the current context of your code, which determines what variables are accessible to JavaScript and where. Think of scope as the "neighborhood" where variables live and can be accessed.

> 💡 **Key Points:**
> - Variables defined inside a scope are not accessible from outside that scope
> - Scopes can be nested inside other scopes
> - Variables defined in outer scopes are accessible in inner scopes

## 🏠 Types of Scope

JavaScript has three main types of scope:

### 1. 🌐 Global Scope

Variables declared outside any function or block have global scope. These variables can be accessed from anywhere in the code, including all functions and blocks.

```javascript
// Global variable
let message = "Hello, world!";

function sayHello() {
  // We can access message here
  console.log(message);
}

sayHello(); // Output: "Hello, world!"
```

#### ⚔️ Var vs Let/Const in Global Scope

- Variables declared with `var` in the global scope are attached to the global object (`window` in browsers)
- Variables declared with `let` or `const` in the global scope are not attached to the global object

```javascript
var x = 10;
let y = 20;
const z = 30;

console.log(window.x); // 10
console.log(window.y); // undefined
console.log(window.z); // undefined
```

### 2. 🧩 Function Scope

Variables declared inside a function are only accessible within that function. They are not visible outside the function.

```javascript
function calculateTax() {
  // Function-scoped variable
  let taxRate = 0.07;
  let amount = 100;
  let tax = amount * taxRate;
  
  console.log(`Tax: ${tax}`);
}

calculateTax(); // Output: "Tax: 7"
console.log(taxRate); // ❌ ReferenceError: taxRate is not defined
```

### 3. 📦 Block Scope

Variables declared with `let` or `const` inside a block (denoted by curly braces `{}`) are only accessible within that block. This includes blocks in `if` statements, `for` loops, `while` loops, etc.

```javascript
if (true) {
  // Block-scoped variable
  let blockVar = "I'm in a block";
  const blockConst = "I'm also in a block";
  
  console.log(blockVar); // "I'm in a block"
  console.log(blockConst); // "I'm also in a block"
}

console.log(blockVar); // ❌ ReferenceError: blockVar is not defined
```
---

## 📝 Var, Let, Const and Scope

The three ways to declare variables in JavaScript have different scoping behaviors:

## 🔄 Comparison Table: `var` vs `let` vs `const`

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function scope | Block scope `{}` | Block scope `{}` |
| Hoisting | Hoisted & initialized as `undefined` | Hoisted but in Temporal Dead Zone (TDZ) | Hoisted but in Temporal Dead Zone (TDZ) |
| Attached to `window`? | ✅ Yes | ❌ No | ❌ No |
| Can be Re-declared? | ✅ Yes | ❌ No | ❌ No |
| Can be Reassigned? | ✅ Yes | ✅ Yes | ❌ No |
| Initial Value Required? | ❌ No | ❌ No | ✅ Yes (Must be initialized) |
| Mutability | Mutable | Mutable | Immutable (Can't be reassigned but mutable if it's an object or array) |
| Use in Loops | Allowed but not recommended (function scope issues) | ✅ Recommended | ❌ Not recommended for changing values |

### ⚠️ var
- Function-scoped (not block-scoped)
- Gets hoisted to the top of its scope
- Can be redeclared within the same scope

```javascript
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - var is not block-scoped!
}
```

### 🔒 let
- Block-scoped
- Does not get hoisted in the same way as `var` (exists in the Temporal Dead Zone before declaration)
- Cannot be redeclared within the same scope

```javascript
function example() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ❌ ReferenceError: y is not defined
}
```

### 🔐 const
- Block-scoped like `let`
- Cannot be reassigned after declaration
- Must be initialized when declared
- For objects and arrays, the content can still be modified

```javascript
const PI = 3.14159;
PI = 3; // ❌ TypeError: Assignment to constant variable

// But for objects:
const person = { name: "John" };
person.name = "Jane"; // ✅ This works!
```
---

## ⛓️ Scope Chain

The scope chain is how JavaScript looks for variables. When you try to access a variable, JavaScript will:

1. First look in the current scope
2. If not found, it looks in the outer scope
3. This process continues until it reaches the global scope
4. If the variable is not found in the global scope, a ReferenceError is thrown

```javascript
let global = "I'm global";

function outer() {
  let outerVar = "I'm in outer function";
  
  function inner() {
    let innerVar = "I'm in inner function";
    
    console.log(innerVar); // Finds in current scope
    console.log(outerVar); // Finds in outer scope
    console.log(global);   // Finds in global scope
  }
  
  inner();
}

outer();
```

This nested lookup system is called the "scope chain" because it forms a chain of scopes that JavaScript traverses to find variables.

![Scope Chain Visualization](/scope%20chain.png)

---

## 🧪 Practice Question to Test Knowledge

**Question**: What will be the output of the following code?

```javascript
let x = 10;

function first() {
  let y = 20;
  
  function second() {
    let z = 30;
    console.log(x + y + z);
  }
  
  second();
}

first();
```

<details>
  <summary>👉 Click to see answer</summary>
  
  **Answer**: `60` (10 + 20 + 30)
  
  This demonstrates the scope chain. The `second()` function can access:
  - Its own variable `z`
  - The variable `y` from its parent function `first()`
  - The global variable `x`
</details>

---

## 👥 Variable Shadowing

Variable shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope. The inner variable "shadows" or hides the outer variable.

```javascript
let name = "Global";

function printName() {
  let name = "Local"; // This shadows the global name variable
  console.log(name);
}

printName(); // Output: "Local"
console.log(name); // Output: "Global"
```
---

## 🧪 Practice Question to Test Shadowing Knowledge

**Question**: What will be the output of the following code?

```javascript
let value = 10;

function test() {
  let value = 20;
  
  function innerTest() {
    let value = 30;
    console.log("A:", value);
  }
  
  innerTest();
  console.log("B:", value);
}

test();
console.log("C:", value);
```

<details>
  <summary>👉 Click to see answer</summary>
  
  **Answer**:
  - A: 30 (from innerTest's local scope)
  - B: 20 (from test's local scope)
  - C: 10 (from global scope)
  
  Each scope has its own `value` variable that shadows the outer ones.
</details>

---

## 🔄 Loop with Var and Let

Using `var` vs `let` in loops shows an important difference in scoping behavior:

### 🔁 Using var in a loop

```javascript
function varLoop() {
  for (var i = 0; i < 3; i++) {
    // i is function-scoped
  }
  console.log(i); // 3 - i is still accessible!
}

varLoop();
```

### 🔂 Using let in a loop

```javascript
function letLoop() {
  for (let j = 0; j < 3; j++) {
    // j is block-scoped to the for loop
  }
  console.log(j); // ❌ ReferenceError: j is not defined
}

letLoop();
```
---
### 🎭 Special Case: Closures in Loops

This classic example shows the difference between `var` and `let` in loops when using closures:

```javascript
// Using var
function createFunctionsVar() {
  var funcs = [];
  
  for (var i = 0; i < 3; i++) {
    funcs.push(function() {
      console.log(i);
    });
  }
  
  return funcs;
}

var functionsVar = createFunctionsVar();
functionsVar[0](); // 3
functionsVar[1](); // 3
functionsVar[2](); // 3 - All reference the same i!

// Using let
function createFunctionsLet() {
  var funcs = [];
  
  for (let i = 0; i < 3; i++) {
    funcs.push(function() {
      console.log(i);
    });
  }
  
  return funcs;
}

var functionsLet = createFunctionsLet();
functionsLet[0](); // 0
functionsLet[1](); // 1
functionsLet[2](); // 2 - Each has its own copy of i!
```

With `var`, all functions share the same `i` (which ends up as 3).
With `let`, each iteration creates a new block-scoped `i` that is captured by the closure.

---

## 🧠 Additional Practice Questions

### Question 1: Scope Chain & Shadowing

What will be the output of the following code?

```javascript
let x = 5;

function outer() {
  let x = 10;
  
  function inner() {
    let x = 15;
    console.log("A:", x);
    
    {
      let x = 20;
      console.log("B:", x);
    }
    
    console.log("C:", x);
  }
  
  inner();
  console.log("D:", x);
}

outer();
console.log("E:", x);
```

<details>
  <summary>👉 Click to see answer</summary>
  
  **Answer**:
  - A: 15 (from inner's local scope)
  - B: 20 (from block scope inside inner)
  - C: 15 (back to inner's scope)
  - D: 10 (from outer's scope)
  - E: 5 (from global scope)
  
  This demonstrates both the scope chain and variable shadowing at multiple levels.
</details>

### Question 2: Hoisting with Different Variable Types

What will be the output of the following code?

```javascript
console.log("A:", x);
console.log("B:", y);
console.log("C:", z);

var x = 1;
let y = 2;
const z = 3;
```

<details>
  <summary>👉 Click to see answer</summary>
  
  **Answer**:
  - A: undefined (var is hoisted and initialized with undefined)
  - B: ReferenceError: Cannot access 'y' before initialization (let is hoisted but in TDZ)
  - C: The code won't reach here due to the error in B
  
  This demonstrates the difference in hoisting behavior between var, let, and const.
</details>

### Question 3: Block Scoping with Functions

What will be the output of this code?

```javascript
function example() {
  if (true) {
    var varVariable = "I'm var";
    let letVariable = "I'm let";
    function innerFunc() {
      console.log("Inside function");
    }
  }
  
  console.log(varVariable);       // A
  console.log(letVariable);       // B
  innerFunc();                   // C
}

example();
```

<details>
  <summary>👉 Click to see answer</summary>
  
  **Answer**:
  - A: "I'm var" (var is function-scoped)
  - B: ReferenceError: letVariable is not defined (let is block-scoped)
  - C: The behavior depends on the JavaScript environment!
  
  In strict mode (ES2015+), function declarations are block-scoped in most browsers, causing a ReferenceError. In non-strict mode or older environments, the function might be hoisted to the containing function scope.
  
  This shows how functions can have complex scoping rules that differ from variables.
</details>

### Question 4: Loop Closures Challenge

What will each alert display in this code?

```javascript
const buttons = [];

// Using var
for (var i = 0; i < 3; i++) {
  const button = document.createElement('button');
  button.innerText = 'Button ' + i;
  button.onclick = function() {
    alert('Button ' + i + ' clicked');
  };
  buttons.push(button);
}

// What alerts will be shown when clicking each button?
```

<details>
  <summary>👉 Click to see answer</summary>
  
  **Answer**:
  All three buttons will alert "Button 3 clicked"
  
  This is because var is function-scoped, and by the time any button is clicked, the loop has finished and i has the value 3. All onclick callbacks reference the same variable i, which by then has the value 3.
  
  To fix this, you would use let instead of var:
  
  ```javascript
  for (let i = 0; i < 3; i++) {
    // Now each iteration creates its own i
  }
  ```
  
  Then each button would correctly alert its number (0, 1, or 2).
</details>

### Question 5: Global vs Window Object

Consider this code running in a browser:

```javascript
var globalVar = "I'm a var";
let globalLet = "I'm a let";
const globalConst = "I'm a const";

function checkGlobals() {
  console.log("A:", window.globalVar);
  console.log("B:", window.globalLet);
  console.log("C:", window.globalConst);
  
  console.log("D:", window.hasOwnProperty('globalVar'));
  console.log("E:", window.hasOwnProperty('globalLet'));
  console.log("F:", window.hasOwnProperty('globalConst'));
}

checkGlobals();
```

<details>
  <summary>👉 Click to see answer</summary>
  
  **Answer**:
  - A: "I'm a var" 
  - B: undefined
  - C: undefined
  - D: true
  - E: false
  - F: false
  
  This demonstrates that variables declared with var at the global level become properties of the window object, while those declared with let and const are in the global scope but don't get attached to the window object.
</details>

## 📝 Summary

| Concept | Description |
|---------|-------------|
| 🌐 Global Scope | Variables accessible everywhere |
| 🧩 Function Scope | Variables accessible only within function |
| 📦 Block Scope | Variables accessible only within code block |
| ⚠️ var | Function-scoped, hoisted, redeclarable |
| 🔒 let | Block-scoped, not hoisted the same way, not redeclarable |
| 🔐 const | Block-scoped, not reassignable, not redeclarable |
| ⛓️ Scope Chain | How JavaScript searches for variables in nested scopes |
| 👥 Shadowing | Inner variable hiding outer variable with same name |

## 🎯 Key Takeaways

- **Scope** determines where variables are accessible in your code
- **Global scope** is the outermost scope (accessible everywhere)
- **Function scope** restricts variables to within a function
- **Block scope** (introduced with ES6) restricts variables to within a block `{}`
- `var` is function-scoped, while `let` and `const` are block-scoped
- The **scope chain** determines how JavaScript looks for variables in nested scopes
- **Variable shadowing** occurs when inner variables have the same name as outer variables
- Using `let` instead of `var` in loops creates a new variable for each iteration

**`Note:-`** Understanding scope and the scope chain is essential for writing predictable JavaScript code and will help you avoid many common bugs related to variable access.

---
# NEXT: 🌞DAY - 11 : JavaScript Closures

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

