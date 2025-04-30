<div style="text-align: center; font-size: 0.9em; opacity: 0.6;">
  🌞DAY-10 : Mastering Scope And Scope Chain 🌐🤔
</div>

# Tasks

Please complete the following tasks.

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of the following code and why?

```js
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();
```

<details>
  <summary>👉 Click to see answer</summary>
  
  **Answer**: 
  - `undefined`

> Reason: `undefined` is logged because the variable `user` is declared using `let` inside the `outer function` after the `inner function` is defined, but before it is `initialized`. Due to JavaScript's `hoisting`, the `let user declaration` is moved to the top of the outer function's scope, but it remains uninitialized until the actual assignment `(user = "Bob")` happens.

> When `inner()` is called, it tries to access the user variable from the outer function's scope. At that point, the variable exists but is in the `Temporal Dead Zone (TDZ)` — a phase between hoisting and initialization — so its value is undefined.

</details>

---

## 2. What is the mistake in the code below?

```js
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
```

## 3. Create a function with a nested function and log a variable from the parent function.

## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

## 5. Write a function that tries to access a variable declared inside another function.

---

## 6. What will be the output and why?

```js
console.log(a);
let a = 10;
```

<details>
    <summary>👉 Click to see answer</summary>

**Answer:** The output will be `ReferenceError: Cannot access 'a' before initialization`. This is because the variable a is `hoisted`, but because it is declared with let, it enters the temporal dead zone until it is initialized. Therefore, trying to access a before its `initialization` results in a ReferenceError: Cannot access 'a' before initialization.

</details>

---

## 7. Where is the `age` variable accessible?

```js
function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);
```

Options:

- A: In Global
- B: Only inside showAge
- C: It will cause an error
- D: None of the above

<details>
    <summary>👉 Click to see answer</summary>

**Answer:** `B: Only inside showAge`

</details>

---

## 8. What will be the output and explain the output?

```js
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

<details>
    <summary>👉 Click to see answer</summary>

**Answer:** The output will be `Hi` as because when the inner function is called then it tries to find and console the message variable but `message` is not available in the local scope of inner so it will move up to its parent lexical scope and will try to find and access the variable `message` and since `message` is present in its parent(outer()) lexical scope with the value `Hi`, so it will console the value `Hi`.

</details>

---

## 9. What will be the output and why?

```js
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();
```

<details>
    <summary>👉 Click to see answer</summary>

**Answer:** The output will be `Inner` as because inside the `inner()` x is defined as is initialized a value `x = "Inner"`, so since the value of `x` is locally available so its value`Inner` will be log.

</details>

---

## 10. What will be the output and why?

```js
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
```

<details>
    <summary>👉 Click to see answer</summary>

**Answer:**
The outputs are:

      0
     -1
     -2

### Explanation:

- The `counter()` function is called once and creates a local variable `count = 0`.
- It returns an inner function that remembers the `count` variable (**this is due to closure**).
- `reduce` stores this returned function.

Each time `reduce()` is called:

1. It decrements `count` by 1.
2. It logs the updated value of `count`.

**So:**

- First `reduce()` call: `count` becomes `-1`, logs `-1`.
- Second `reduce()` call: `count` becomes `-2`, logs `-2`.

</details>

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
