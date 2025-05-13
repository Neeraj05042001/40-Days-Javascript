# <div align="center">✨ DAY - 02 : Variables and Datatypes ✨</div>

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Level-Beginner-brightgreen" alt="Level: Beginner"/>
</div>

<br>

## 📦 What is a Variable?

A variable in JavaScript is a named container that stores data values. Think of it as a labeled box where you can put information that you want to use or manipulate in your program.

```javascript
let message = "Hello, JavaScript!";
```

In this example, `message` is a variable that stores the text value "Hello, JavaScript!".

### 🔑 Key Points:
- Variables allow us to store and reuse data throughout our code
- They have names (identifiers) that we choose
- Their values can be changed (except for constants)
- They make our code more readable and maintainable

## 🔍 How to Visualize Variables?

Visualizing variables helps us understand how they work in memory:

```
┌─────────────┐  
│ let age = 25│  
└─────┬───────┘  
      │         
 ┌────▼─────┐   
 │   age    │ ← Variable name (label)  
 ├──────────┤   
 │    25    │ ← Value stored  
 └──────────┘   
```

1. **Name/Label**: Each variable has a unique name (like a label on a box)
2. **Value**: The actual data stored inside the variable
3. **Memory Location**: The place in computer memory where the value is stored

```javascript
// Visualizing variables as labeled boxes
let age = 25;        // Box labeled "age" containing number 25
let name = "Sarah";  // Box labeled "name" containing text "Sarah"
```

### 🧠 Knowledge Check:
<details>
<summary>❓ What's wrong with this variable declaration?</summary>

```javascript
let 2ndPlace = "Silver";
```

<div style="background-color: #e6f7ff; padding: 10px; border-left: 4px solid #1890ff; margin-top: 10px;">
✅ Variable names cannot start with numbers. A correct version would be: <code>let secondPlace = "Silver";</code>
</div>
</details>

## 💾 How Variables Get Stored?

JavaScript organizes memory into two main areas:

<div align="center">

```
┌─────────────────────┐      ┌──────────────────────┐
│    STACK MEMORY     │      │     HEAP MEMORY      │
│                     │      │                      │
│  ┌───────┐          │      │   ┌──────────────┐   │
│  │name   │ "John"   │      │   │              │   │
│  ├───────┤          │      │   │  {complex    │   │
│  │age    │ 25       │      │   │   objects}   │   │
│  ├───────┤          │      │   │              │   │
│  │isValid│ true     │      │   └──────┬───────┘   │
│  ├───────┤          │      │          │           │
│  │user   │ 0x123ABC │──────┼──────────┘           │
│  └───────┘          │      │                      │
│                     │      │                      │
└─────────────────────┘      └──────────────────────┘
   (Primitive Types)              (Reference Types)
```

</div>

### 📚 Stack Memory
- Stores primitive data types (numbers, strings, etc.)
- Fixed size, fast access
- Variables store the actual value directly

### 📚 Heap Memory
- Stores non-primitive data types (objects, arrays, functions)
- Dynamic size, slower access
- Variables store a reference (pointer) to the actual data

```javascript
// Stack storage (primitive)
let count = 42;      // Value 42 stored directly in stack

// Heap storage (non-primitive)
let person = {       // Reference to heap stored in stack
  name: "John",      // Actual object stored in heap
  age: 30
};
```

This memory organization affects how variables behave when copied or compared.

## 🔢 JavaScript Data Types

JavaScript has two categories of data types:

### 📊 Primitive Types

<div align="center">

| Type | Description | Example |
|------|-------------|---------|
| 🔢 **Number** | Integers and floating-point numbers | `let age = 25;` |
| 📝 **String** | Text characters | `let name = "JavaScript";` |
| ⚖️ **Boolean** | Logical true/false values | `let isActive = true;` |
| 🚫 **Undefined** | Variable declared but not assigned | `let result;` |
| 🗑️ **Null** | Intentional absence of value | `let data = null;` |
| 🔣 **Symbol** | Unique and immutable identifier | `let id = Symbol('id');` |
| 📏 **BigInt** | Large integers | `let bigNum = 9007199254740991n;` |

</div>

#### Examples:

```javascript
// Number
let age = 25;        // Integer
let price = 99.99;   // Floating-point

// String
let name = "JavaScript";
let message = 'Learning is fun!';
let template = `Age: ${age}`;  // Template literal (uses backticks)

// Boolean
let isActive = true;
let isCompleted = false;

// Undefined
let result;  // Value is automatically undefined

// Null
let data = null;  // Explicitly assigned null

// Symbol
let id = Symbol('id');  // Creates a unique identifier

// BigInt
let bigNumber = 9007199254740991n;  // n suffix makes it BigInt
```

### 📦 Non-Primitive (Reference) Types 

<div align="center">

| Type | Description | Example |
|------|-------------|---------|
| 🗃️ **Object** | Collection of key-value pairs | `let person = {name: "Alice"};` |
| 📋 **Array** | Ordered collection of values | `let colors = ["red", "green"];` |
| ⚙️ **Function** | Reusable block of code | `function greet() { return "Hello!"; }` |

</div>

#### Examples:

```javascript
// Object
let person = {
  name: "Alice",
  age: 28,
  isStudent: false
};

// Array
let colors = ["red", "green", "blue"];

// Function
function greet() {
  return "Hello!";
}
```

### 🧠 Knowledge Check:
<details>
<summary>❓ Identify the data type of each variable:</summary>

```javascript
let a = 42;
let b = "42";
let c = true;
let d = null;
let e = undefined;
let f = {};
let g = [];
let h = function() {};
```

<div style="background-color: #e6f7ff; padding: 10px; border-left: 4px solid #1890ff; margin-top: 10px;">
✅ a: Number, b: String, c: Boolean, d: Null, e: Undefined, f: Object, g: Array (which is also an Object), h: Function (which is also an Object)
</div>
</details>

## 🔍 Type Checking

You can check the type of a variable using the `typeof` operator:

```javascript
let num = 42;
console.log(typeof num);  // "number"

let text = "Hello";
console.log(typeof text);  // "string"

let active = true;
console.log(typeof active);  // "boolean"

let user = { name: "John" };
console.log(typeof user);  // "object"
```

## 📝 Variable Declaration

JavaScript provides three ways to declare variables:

<div align="center">

```
┌─────────────────────────────────────────────────────┐
│           VARIABLE DECLARATION METHODS              │
├─────────────┬─────────────────────┬─────────────────┤
│    var      │       let           │     const       │
├─────────────┼─────────────────────┼─────────────────┤
│ Function    │     Block           │     Block       │
│  scoped     │     scoped          │     scoped      │
├─────────────┼─────────────────────┼─────────────────┤
│ Can be      │  Cannot be          │  Cannot be      │
│ redeclared  │  redeclared         │  redeclared     │
├─────────────┼─────────────────────┼─────────────────┤
│ Can be      │  Can be             │  Cannot be      │
│ reassigned  │  reassigned         │  reassigned     │
├─────────────┼─────────────────────┼─────────────────┤
│ Hoisted     │  Hoisted but in     │  Hoisted but in │
│             │  "temporal dead zone"│ "temporal dead zone"│
└─────────────┴─────────────────────┴─────────────────┘
```

</div>

### 🔹 `var` (older method)
- Function-scoped
- Can be redeclared
- Hoisted (can be used before declaration)
```javascript
var x = 10;
var x = 20;  // Allowed
```

### 🔹 `let` (ES6)
- Block-scoped
- Cannot be redeclared in same scope
- Not hoisted in the same way as var
```javascript
let y = 15;
// let y = 25;  // Error: Cannot redeclare block-scoped variable
```

### 🔹 `const` (ES6)
- Block-scoped
- Cannot be reassigned after declaration
- Must be initialized when declared
```javascript
const PI = 3.14159;
// PI = 3;  // Error: Assignment to constant variable
```

### 🧠 Knowledge Check:
<details>
<summary>❓ What will be output to the console?</summary>

```javascript
let value = 10;
{
  let value = 20;
  console.log(value);
}
console.log(value);
```

<div style="background-color: #e6f7ff; padding: 10px; border-left: 4px solid #1890ff; margin-top: 10px;">
✅ 20 (inside the block)
<br>10 (outside the block)
</div>
</details>

## 🔄 How JavaScript Sees Code

JavaScript processes our code in multiple phases:

<div align="center">

```
┌─────────────┐     ┌─────────┐     ┌─────────────┐     ┌──────────┐
│  TOKENIZING  │ → │  PARSING  │ → │ INTERPRETING │ → │ EXECUTION │
└──────┬──────┘     └────┬────┘     └──────┬──────┘     └─────┬────┘
       │                 │                  │                  │
       ▼                 ▼                  ▼                  ▼
┌──────────────┐  ┌───────────────┐  ┌────────────────┐  ┌───────────────┐
│ Break code   │  │ Create AST    │  │ Convert to     │  │ Run the code  │
│ into tokens  │  │ (Abstract     │  │ machine code   │  │ line by line  │
│              │  │ Syntax Tree)  │  │                │  │               │
└──────────────┘  └───────────────┘  └────────────────┘  └───────────────┘
```

</div>

### 1️⃣ Tokenizing
- JavaScript breaks down the code into individual tokens
- Tokens are the smallest units of code like keywords, operators, identifiers
- Validates that these tokens follow ECMAScript syntax rules

For example, `let name = "John";` becomes tokens:
- Keyword: `let`
- Identifier: `name`
- Operator: `=`
- String literal: `"John"`
- Semicolon: `;`

### 2️⃣ Parsing
- Tokens are organized into a tree structure called Abstract Syntax Tree (AST)
- AST represents the grammatical structure of the code
- It helps JavaScript understand how the tokens relate to each other

### 3️⃣ Interpreting (Compiling)
- The JavaScript engine converts the AST into machine code
- In modern engines, this includes Just-In-Time (JIT) compilation for better performance

### 4️⃣ Execution
- The compiled code is executed line by line
- Memory is allocated for variables
- Operations are performed as specified

## 🔄 Type Coercion

JavaScript automatically converts types when operations involve different data types:

<div align="center">

```
┌───────────────────┐     ┌────────────────────┐
│ "5" + 3 = "53"    │     │ String + Number    │
│                   │ → │     = String        │
│ (String)          │     │                    │
└───────────────────┘     └────────────────────┘

┌───────────────────┐     ┌────────────────────┐
│ 10 - "4" = 6      │     │ Number - String    │
│                   │ → │     = Number        │
│ (Number)          │     │                    │
└───────────────────┘     └────────────────────┘

┌───────────────────┐     ┌────────────────────┐
│ true + 1 = 2      │     │ Boolean + Number   │
│                   │ → │     = Number        │
│ (Number)          │     │                    │
└───────────────────┘     └────────────────────┘
```

</div>

```javascript
// String + Number -> String
let result = "5" + 3;  // "53"

// Number - String -> Number
let diff = 10 - "4";   // 6

// Boolean as Number
let sum = true + 1;    // 2 (true is treated as 1)
```

This can sometimes lead to unexpected results, so it's important to understand type coercion.

### 🧠 Knowledge Check:
<details>
<summary>❓ What will be the output of this code?</summary>

```javascript
console.log(10 + "20");
console.log("10" - 5);
console.log(true + true);
```

<div style="background-color: #e6f7ff; padding: 10px; border-left: 4px solid #1890ff; margin-top: 10px;">
✅ "1020" (string concatenation)
<br>5 (numeric subtraction)
<br>2 (true is coerced to 1)
</div>
</details>

## 💻 Practice Tasks

### 🏋️ Task 1: 
Declare variables using `let`, `const`, and `var`. Try reassigning them and see what happens.

### 🏋️ Task 2: 
Create variables to store your personal information (name, age, isStudent) and display them using console.log.

### 🏋️ Task 3: 
Perform arithmetic operations with different data types and observe type coercion.
```javascript
// Examples:
console.log("5" + 3);
console.log("10" - 5);
console.log(true + 10);
```

### 🏋️ Task 4: 
Create an array of different data types and use the `typeof` operator to check each element's type.

### 🏋️ Task 5: 
Write a program that swaps the values of two variables without using a third variable.

### 🏋️ Task 6: 
Create an object representing a book with properties like title, author, year, and isAvailable.

### 🏋️ Task 7: 
Write code that demonstrates the difference between primitive and reference types when copying variables.

### 🏋️ Task 8: 
Try to access a variable before it's declared using `var`, `let`, and `const`. Note the differences.

### 🏋️ Task 9: 
Create a variable with a number and convert it to a string, then back to a number using different methods.

### 🏋️ Task 10: 
Write a small program that calculates the area of a rectangle using variables for length and width. Then modify the variables and recalculate.

---

## 🌟 Additional Challenge:
<div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 10px;">
Create a shopping cart program that:
<ol>
  <li>Uses variables to store item names, prices, and quantities</li>
  <li>Calculates the total cost</li>
  <li>Applies a discount if the total is above a certain amount</li>
  <li>Displays an itemized receipt with the final amount</li>
</ol>
</div>

<div align="center">
<h3>💯 Remember: Practice is key to mastering JavaScript variables and data types! 💯</h3>
</div>




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
<p>📆 <em>Next: Day - 03: Operators & Expressions</em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>
</div>
