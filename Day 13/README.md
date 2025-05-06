# 🌟 DAY - 13 : Why JavaScript this is So Tricky? "this" keyword in javascript 🌟

---

## 📚 1. Introduction

The `this` keyword is one of JavaScript's most powerful yet confusing features. It's a special identifier that's automatically defined in every function's scope, but what it references can change dramatically depending on how a function is called. Understanding `this` is essential for writing effective JavaScript code, especially when working with objects and event handlers.

Today's notes will demystify the `this` keyword by exploring its different behaviors in various contexts and providing practical examples to solidify your understanding.

---

## 🔍 2. What is "this"?

In JavaScript, `this` is a special keyword that refers to the "context" or "owner" of the code that is currently executing. Unlike other programming languages where `this` might be more predictable, JavaScript's `this` value is determined by _how a function is called_, not where or when it was defined.

Key points about `this`:

- 🔹 It's automatically defined in the scope of every function
- 🔹 Its value is determined at runtime, when the function is called
- 🔹 Its value depends on the function's "call site" (how and where the function is called)
- 🔹 It provides a way to access properties and methods of the current execution context

⚠️ **Important**: The value of `this` is not fixed - it can change even for the same function if called in different ways!

### 💡 Knowledge Check

What determines the value of `this` in JavaScript?

<details>
<summary>Answer</summary>
The value of `this` is determined by how a function is called (the function's call site), not where or when the function was defined.
</details>

---

## 🌐 3. this in Global Context

When used in the global scope (outside of any function), `this` refers to the global object:

- 🌐 In browsers, the global object is `window`
- 🌐 In Node.js, the global object is `global`

```javascript
// In a browser
console.log(this === window); // true

// Global variables are properties of the global object
var globalVar = "I'm global";
console.log(window.globalVar); // "I'm global"
```

In strict mode (`'use strict'`), the global `this` value remains the global object. However, in strict mode inside functions, `this` behaves differently, as we'll see.

### 💡 Knowledge Check

What does `this` refer to in the global scope of a browser?

<details>
<summary>Answer</summary>
In the global scope of a browser, `this` refers to the `window` object.
</details>

---

## 🔄 4. Implicit Binding

When a function is called as a method of an object, `this` is set to the object the method is called on. This is called **implicit binding**.

Implicit binding is a way in which we understand that if method is called on an object using `dot notation` the `context` of this is bound or associated tot he object in which we have envoked the `method`.

```javascript
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // "Hello, my name is John"
```

In the above example, when `greet()` is called as a method of `person`, `this` inside the function refers to `person`.

⚠️ **Important**: The reference to the object must be used when calling the function:

```javascript
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Breaking the implicit binding
const greetFunc = person.greet;
greetFunc(); // "Hello, my name is undefined"
```

When we store `person.greet` in `greetFunc` and call it directly, the connection to `person` is lost, and `this` no longer refers to `person`.

More example:

```js
const employee = {
  id: "A5748",
  firstName: "Alex",
  lastName: "B",
  returnThis: function () {
    return this;
  },
  getfullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log("employee ID", employee.id); //A5748
console.log("this inside the employee object", employee.returnThis()); //
console.log("constructed full name using this", employee.getfullName()); //constructed full name using this Alex B
```

### 💡 Knowledge Check

What happens to `this` in the following code?

```javascript
const calculator = {
  value: 0,
  add: function (num) {
    this.value += num;
    return this.value;
  },
};

const addFunc = calculator.add;
addFunc(5);
console.log(calculator.value);
```

<details>
<summary>Answer</summary>
`calculator.value` will still be 0. When `addFunc` is called directly, `this` no longer refers to the `calculator` object but to the global object (or undefined in strict mode). Therefore, `this.value` doesn't modify the `calculator.value` property.
</details>

---

## ➡️ 5. this inside a stand alone function

Inside a stand alone function `this` keyword always points to the window object, even in the `nested function` it points to the window object only.

But when js is used in `strict mode` then the `this` always gives an `undefined` as value.

```js
function outer(a) {
  console.log("this is under outer function", this); //undefined

  return function inner(b) {
    console.log("this is under outer function", this); //undefined
  };
}
const outerResult = outer(5);
outerResult(6);
```

---

## ➡️ 6. this Inside an Arrow Function

Arrow functions behave differently with respect to `this`. Unlike regular functions, arrow functions don't have their own `this` binding. Instead, they inherit `this` from the surrounding (lexical) scope at the time they are defined.

```javascript
const person = {
  name: "John",
  // Regular function
  regularGreet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  // Arrow function
  arrowGreet: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.regularGreet(); // "Hello, my name is John"
person.arrowGreet(); // "Hello, my name is undefined"
```

In the example above, `arrowGreet` doesn't have its own `this` binding. Instead, it inherits `this` from its surrounding scope (the global scope in this case), where `this.name` is undefined.

Arrow functions are particularly useful when you want to preserve the `this` value from the enclosing context:

```javascript
const person = {
  name: "John",
  hobbies: ["reading", "gaming", "coding"],
  listHobbies: function () {
    // `this` here refers to person
    this.hobbies.forEach((hobby) => {
      // `this` here also refers to person because it's inherited
      console.log(`${this.name} enjoys ${hobby}`);
    });
  },
};

person.listHobbies();
// "John enjoys reading"
// "John enjoys gaming"
// "John enjoys coding"
```

### 💡 Knowledge Check

What will the following code output?

```javascript
const team = {
  members: ["Alice", "Bob"],
  leader: "Charlie",
  describeTeam: function () {
    return this.members.map((member) => {
      return `${member} reports to ${this.leader}`;
    });
  },
};
console.log(team.describeTeam());
```

<details>
<summary>Answer</summary>
It will output: ["Alice reports to Charlie", "Bob reports to Charlie"]

The arrow function inside `map()` inherits `this` from its surrounding scope (the `describeTeam` function), where `this` refers to the `team` object.

</details>

---
# 🚀Recap 👇
1. With global scope `this` always referred to the `window object` for browser environment for node environment to the global object.
2. For `stand Alone Function` in `strict mode` it always point to `undefine`. For `non-strict mode` it always point to `window object`.
3. For `implicit binding` whenever you ae calling object name with `.` method you have to check what is that particular method is about:
> 1. If the method is a `standard JS function` and a `non-arrow function` and if that function has `this` keyword then the `this` keyword is bound to the object on which you are calling the function or the method.

>2. If that function is an `arrow-function` either inside or outside an object it all depends on where the `arrow-function` is `lexically` placed or define in the code.

>> Check the `parent-scope` of the place where arrow function is defined as because arrow function does not have its own `this`, the `this` always refers for an arrow function to the parent scope of the scope where arrow function is defined.

---

## 🎯 7 Explicit Binding

JavaScript provides methods that allow you to explicitly specify what object should be referenced by `this` when calling a function. The three primary methods for explicit binding are:

- 📞 `call()`
- 📋 `apply()`
- 🔗 `bind()`

Explicit binding is used when there are more than one execution context and we want to bind them altogether.

These methods allow you to "borrow" functions and methods from one object to use with another object.

---

## 📞 8. The call() method

The `call()` method calls a function with a given `this` value and arguments provided individually.

Syntax: `function.call(thisArg, arg1, arg2, ...)`

```javascript
function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person1 = { name: "John" };
const person2 = { name: "Sarah" };

greet.call(person1, "Hello"); // "Hello, my name is John"
greet.call(person2, "Hi"); // "Hi, my name is Sarah"
```

In this example, the same function `greet()` is used with different objects by explicitly setting `this` using `call()`.

```js
function greeting(){
  console.log("Hello," ${this.name} "belongs to" ${this.address});
};
const user = {
  name: "Neeraj",
  address: "All of You"
};

greeting.call(user);

// this call method bind the `this` keyword of greeting function to the user object.
```

## What if a function takes a parameter

```js
const likes = function(hobby1, hobby2){
  console.log(${this.name} + "likes" + "hobby1" + "," + hobby)
};

const person = {
  name: "Neeraj
};

likes.call(person, "Teaching", "Blogging") // Tapas likes Teaching , blogging.

// teaching and blogging is passed as an argument.
```



### 💡 Knowledge Check

How would you use `call()` to make the following code work?

```javascript
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
};

function cite() {
  return `"${this.title}" by ${this.author}`;
}

// How would you call the cite function so that it uses the book object as its context?
```

<details>
<summary>Answer</summary>
```javascript
cite.call(book); // Returns: "JavaScript: The Good Parts" by Douglas Crockford
```
</details>

---

## 📋 9. The apply() method

The `apply()` method is similar to `call()`, but it accepts arguments as an array.

Syntax: `function.apply(thisArg, [argsArray])`

```javascript
function introduce(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: "John" };

introduce.apply(person, ["Hello", "!"]); // "Hello, my name is John!"
```

`apply()` is particularly useful when you have an array of arguments that you want to pass to a function:

```javascript
const numbers = [5, 9, 1, 3, 7];

// Without apply
console.log(Math.max(5, 9, 1, 3, 7)); // 9

// With apply
console.log(Math.max.apply(null, numbers)); // 9
```

In modern JavaScript, you can use the spread operator (`...`) instead of `apply()` in many cases:

```javascript
console.log(Math.max(...numbers)); // 9
```

### What if there are more than 2 parameters
When there are more than two parameters then instead of passing the argument manually we store the arguments in an array and then pass that array as an argument.

For example:
```js
const likes = function(hobby1, hobby2){
  console.log(${this.name} + "likes" + "hobby1" + "," + hobby)
};

const person = {
  name: "Neeraj
};
const hobbiesToApply = ["sleeping", "Eating"]

likes.apply(person, hobbiesToApply) 
```

### 💡 Knowledge Check

What's the difference between `call()` and `apply()`?

<details>
<summary>Answer</summary>
Both methods allow you to specify the `this` value for a function call, but they differ in how additional arguments are passed:
- `call()` accepts arguments individually, separated by commas
- `apply()` accepts arguments as a single array
</details>

---

## 🔗 10. The bind() method

Unlike `call()` and `apply()` which invoke the function immediately, `bind()` creates a new function with the `this` value permanently set to the provided object, regardless of how the function is called later.

Syntax: `function.bind(thisArg[, arg1[, arg2[, ...]]])`

```javascript
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = { name: "John" };

const greetJohn = greet.bind(person);

greetJohn(); // "Hello, my name is John"

// Even when we try to change `this` later, it remains bound to `person`
const anotherPerson = { name: "Sarah" };
greetJohn.call(anotherPerson); // Still outputs: "Hello, my name is John"
```

`bind()` is particularly useful for ensuring that a function always operates with a specific `this` context, regardless of how it's later used or passed around.

`Note:` If we want to execute a function immediately we should use call method and if we want to execute when required or any time later then we should use bind method.

### 💡 Knowledge Check

In what situation would you prefer `bind()` over `call()` or `apply()`?

<details>
<summary>Answer</summary>
Use `bind()` when you want to create a new function with a permanently fixed `this` value that can be called later, especially when:
1. Passing methods as callbacks
2. Using methods from one object with another object
3. Setting up event handlers that need to access properties of a specific object
</details>

---

## 🆕 11. The new Keyword and this Keyword

When a function is used as a constructor with the `new` keyword, `this` refers to the newly created instance.

```javascript
function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const john = new Person("John");
john.greet(); // "Hello, my name is John"
```

When using `new`:

1. 🔹 A new empty object is created
2. 🔹 The function is called with `this` set to this new object
3. 🔹 The object is automatically returned (unless you explicitly return another object)

⚠️ **Important**: If you call a function with `new` that was intended to be a regular function, or vice versa, you can get unexpected results because of how `this` is assigned.

### 💡 Knowledge Check

What happens if you forget to use the `new` keyword when creating an instance?

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = Car("Toyota", "Corolla");
console.log(myCar);
console.log(window.make, window.model); // In a browser
```

<details>
<summary>Answer</summary>
If you forget the `new` keyword:
1. `myCar` will be `undefined` because the `Car` function doesn't explicitly return anything
2. `this` inside the function will refer to the global object (`window` in browsers)
3. `make` and `model` properties will be added to the global object instead of a new car instance
4. `window.make` would be "Toyota" and `window.model` would be "Corolla"
</details>

---

## 📝 12. A Quick Recap

Here's a summary of how `this` works in different contexts:

1. **🌐 Global Context**: `this` refers to the global object (`window` in browsers, `global` in Node.js)

2. **🔄 Function Context (non-strict)**: In a regular function call, `this` refers to the global object

   ```javascript
   function showThis() {
     console.log(this);
   }
   showThis(); // window (in browsers)
   ```

3. **⚠️ Function Context (strict)**: In strict mode, `this` is `undefined` in regular function calls

   ```javascript
   "use strict";
   function showThis() {
     console.log(this);
   }
   showThis(); // undefined
   ```

4. **🔄 Method Context (Implicit Binding)**: When a function is called as a method of an object, `this` refers to that object

   ```javascript
   const obj = {
     name: "Object",
     showThis: function () {
       console.log(this);
     },
   };
   obj.showThis(); // {name: "Object", showThis: ƒ}
   ```

5. **➡️ Arrow Functions**: Don't have their own `this`; they inherit `this` from the surrounding scope

   ```javascript
   const obj = {
     name: "Object",
     showThis: () => {
       console.log(this);
     },
   };
   obj.showThis(); // window (in browsers)
   ```

6. **🎯 Explicit Binding**: Using `call()`, `apply()`, or `bind()` to explicitly set `this`

   ```javascript
   function showThis() {
     console.log(this.name);
   }
   const obj = { name: "Object" };
   showThis.call(obj); // "Object"
   ```

7. **🆕 Constructor Context**: When a function is called with `new`, `this` refers to the newly created instance

   ```javascript
   function Person(name) {
     this.name = name;
   }
   const john = new Person("John");
   console.log(john.name); // "John"
   ```

8. **🖱️ Event Handlers**: In DOM event handlers, `this` refers to the element that triggered the event
   ```javascript
   button.addEventListener("click", function () {
     console.log(this); // The button element
   });
   ```

### 💡 Knowledge Check

For each of the following scenarios, what will `this` refer to?

1. A function called directly in the global scope
2. A method called on an object
3. An arrow function defined inside a method
4. A function called with `new`
5. A function called with `call()`
<details>
<summary>Answer</summary>
6. In a function called directly in the global scope:

   - In non-strict mode: The global object (`window` in browsers)
   - In strict mode: `undefined`

7. In a method called on an object: The object itself

8. In an arrow function defined inside a method: The same value as `this` in the enclosing method

9. In a function called with `new`: The newly created object instance

10. In a function called with `call()`: The first argument passed to `call()`
</details>

---

## 🎓 13. Interview Questions and Answers

**Q1: What is `this` in JavaScript?**
A1: In JavaScript, `this` is a special keyword that refers to the context in which a function is executed. Its value is determined by how a function is called, not where it is defined.

**Q2: How does `this` behave in arrow functions?**
A2: Arrow functions don't have their own `this` binding. Instead, they inherit `this` from the surrounding lexical scope at the time they are defined. This makes them useful in scenarios where you want to preserve the `this` value from the enclosing context.

**Q3: What's the difference between `call()`, `apply()`, and `bind()`?**
A3:

- 📞 `call()` invokes a function with a specified `this` value and arguments passed individually
- 📋 `apply()` invokes a function with a specified `this` value and arguments passed as an array
- 🔗 `bind()` creates a new function with a permanently bound `this` value but doesn't invoke it immediately

**Q4: What happens to `this` when a method is passed as a callback?**
A4: When a method is passed as a callback, it loses its connection to the original object, and `this` will usually refer to the global object (or `undefined` in strict mode) unless you explicitly bind it.

```javascript
const user = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

// This works as expected
user.greet(); // "Hello, John"

// This loses the `this` binding
setTimeout(user.greet, 100); // "Hello, undefined"

// Solution: Use bind to fix the context
setTimeout(user.greet.bind(user), 100); // "Hello, John"
```

**Q5: How can you solve the `this` context issue in callbacks?**
A5: There are several solutions:

1. 🔗 Use `bind()` to create a new function with the correct `this` value
2. ➡️ Use an arrow function to capture the surrounding `this` value
3. 📝 Store `this` in a variable (often called `self` or `that`) that can be accessed from the inner function
4. 🖱️ Use the third parameter of `addEventListener` to set `this`

**Q6: What is the output of the following code and why?**

```javascript
const obj = {
  value: 42,
  getValue: function () {
    return this.value;
  },
  getValueArrow: () => {
    return this.value;
  },
};

console.log(obj.getValue());
console.log(obj.getValueArrow());
```

A6: The output will be:

```
42
undefined
```

The regular function `getValue()` has its `this` set to `obj` when called as a method, so `this.value` is 42.
The arrow function `getValueArrow()` inherits `this` from the surrounding scope (the global scope), where `this.value` is undefined.

**Q7: What does `this` refer to in event handlers?**
A7: In traditional DOM event handlers, `this` refers to the DOM element that triggered the event. However, if you use an arrow function as an event handler, `this` will refer to the value of `this` in the surrounding scope.

**Q8: What is the output of the following code?**

```javascript
function Pet(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
  this.getNameArrow = () => {
    return this.name;
  };
}

const cat = new Pet("Fluffy");
const { getName, getNameArrow } = cat;

console.log(getName());
console.log(getNameArrow());
```

A8: The output will be:

```
undefined
Fluffy
```

When we destructure methods from an object and call them directly, regular functions lose their `this` binding. So `getName()` has `this` as the global object or `undefined` in strict mode. The arrow function `getNameArrow()` has `this` permanently bound to the `cat` instance when it was created, so it still returns "Fluffy".

---

## 🏋️‍♂️ Practice Tasks

Test your understanding of the `this` keyword with these exercises:

### 🧩 Task 1

Predict the output of the following code:

```javascript
const calculator = {
  value: 0,
  add: function (a, b) {
    this.value = a + b;
    return this.value;
  },
  subtract: function (a, b) {
    this.value = a - b;
    return this;
  },
  multiply: function (a) {
    this.value *= a;
    return this;
  },
};

console.log(calculator.add(5, 3));
const subtractFunc = calculator.subtract;
console.log(subtractFunc(10, 4));
console.log(calculator.value);
```

### 🧩 Task 2

Fix the following code so that it correctly displays the user's name:

```javascript
const user = {
  name: "Alice",
  greetAfterDelay: function () {
    setTimeout(function () {
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  },
};

user.greetAfterDelay(); // Should log "Hello, my name is Alice" after 1 second
```

### 🧩 Task 3

Write a `Person` constructor function with a method that uses `this` correctly:

```javascript
// Write your code here to create a Person constructor
// Each person should have name and friends array
// Add a method to introduce themselves and list their friends

// Example usage:
const alice = new Person("Alice", ["Bob", "Charlie"]);
alice.introduce(); // Should output "Hi, I'm Alice and my friends are Bob, Charlie"
```

### 🧩 Task 4

Explain what's happening with `this` in the following code and fix any issues:

```javascript
const counter = {
  count: 0,
  increment: function () {
    this.count++;
  },
  decrement: function () {
    this.count--;
  },
  reset: () => {
    this.count = 0;
  },
};

counter.increment();
counter.increment();
console.log(counter.count); // 2
counter.reset();
console.log(counter.count); // Should be 0 but isn't! Why?
```

### 🧩 Task 5

Create an object with methods that can be chained together using `this`:

```javascript
// Create a stringBuilder object that can chain methods together
// It should have methods: append, prepend, and toString

// Example usage:
const result = stringBuilder
  .append("Hello")
  .append(" ")
  .append("World")
  .prepend("✨ ")
  .append("! ✨")
  .toString();

console.log(result); // Should output "✨ Hello World! ✨"
```

### 🧩 Task 6

Explain what happens in each scenario with `this` and fix any issues:

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMake = function () {
  return this.make;
};

Car.prototype.getDetails = () => {
  return `${this.make} ${this.model}`;
};

const toyota = new Car("Toyota", "Corolla");
console.log(toyota.getMake()); // Works as expected
console.log(toyota.getDetails()); // What's the issue here?
```

### 🧩 Task 7

What is the output of the following code and why?

```javascript
const obj1 = {
  value: "obj1",
  showValue: function () {
    console.log(this.value);
  },
};

const obj2 = {
  value: "obj2",
  showValue: obj1.showValue,
};

obj1.showValue();
obj2.showValue();
```

### 🧩 Task 8

Create a button that changes its text when clicked, using `this` correctly:

```javascript
// HTML: <button id="myButton">Click me</button>

// JavaScript:
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  this.textContent = "Clicked!";
});

// Now write a version that wouldn't work correctly with `this` and explain why
```

### 🧩 Task 9

How would you use `call`, `apply`, and `bind` in the following scenario?

```javascript
function multiply(a, b) {
  return a * b * this.factor;
}

const obj = { factor: 2 };

// Use call to multiply 3 and 4 with obj as context
// Use apply to multiply 3 and 4 with obj as context
// Use bind to create a new function that always uses obj as context
```

### 🧩 Task 10

Predict what `this` will refer to in each console.log:

```javascript
const laptop = {
  brand: "MacBook",
  getBrand: function () {
    console.log(this.brand); // What's logged here?

    function nestedFunc() {
      console.log(this.brand); // What's logged here?
    }

    const arrowFunc = () => {
      console.log(this.brand); // What's logged here?
    };

    nestedFunc();
    arrowFunc();
  },
};

laptop.getBrand();
```

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
<p>📆 <em>Next: Day - 14: Error handling in Javascript</em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>
</div>
