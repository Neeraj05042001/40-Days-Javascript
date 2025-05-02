# Tasks

Please complete the following tasks.

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output and why?

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```
<details><summary>👉 Solution</summary>

`Answer:` Not providded

`Explanatin:` This code uses the `nullish coalescing operator (??)`, which returns the right-hand operand only if the left-hand operand is null or undefined.

# 🧠  `??` vs `||` vs `&&`

A quick reference guide to understand the difference between JavaScript’s `??` (Nullish Coalescing), `||` (Logical OR), and `&&` (Logical AND) operators.

---

## ✅ 1. Nullish Coalescing (`??`)

**Returns the right-hand side only if the left-hand side is `null` or `undefined`.**

```js
let a = null ?? "default";      // "default"
let b = undefined ?? "default"; // "default"
let c = 0 ?? "default";         // 0 ✅
let d = false ?? "default";     // false ✅
let e = "" ?? "default";        // "" ✅
```
🔹 Use when you only want to provide a fallback for truly missing values.

## ✅ 2. Logical OR (||)
Returns the right-hand side if the left-hand side is any falsy value
(`false`, `0`, `""`, `null`, `undefined`, `NaN`)`.

```js

let a = null || "default";      // "default"
let b = 0 || "default";         // "default" ❌ (0 is falsy)
let c = "" || "default";        // "default"
let d = false || "default";     // "default"
let e = "Alex" || "default";    // "Alex"

```
🔹 Use when you want to default for any falsy value, not just null or undefined.

## ✅ 3. Logical AND (&&)
Returns the first falsy value, or the last value if all are truthy.

```js

let a = true && "hello";        // "hello"
let b = false && "hello";       // false
let c = "text" && 123;          // 123
let d = 0 && "hello";           // 0
let e = 1 && null;              // null
```
🔹 Great for chaining and safe property access (user && user.name).




## 🧠 Summary



✅ Use `??` when you only want to fall back on null or undefined.

✅ Use `||` to fall back on any falsy value (`0`, `false`, `""` ...).

✅ Use `&&` for chaining/logical conditions or checking truthiness before access.
</details>


## 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```

<details><summary>👉 Solution</summary>

`Answer:` 1

`✅ Explanation:`

- Object.freeze() makes an object immutable.

- You cannot add, remove, or change properties.

- The line obj.a = 2 does nothing (ignored silently in non-strict mode).

> `So, obj.a remains 1`.
</details>

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
```

<details><summary>👉 Solution </summary>

```javascript
 const {name, company:{name:companyName, location:{city, zip}}} = person
  console.log(name)
  console.log(companyName)
  console.log(city)
  console.log(zip)
```

</details>

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

## 7. How do you check if an object has a certain property?

## 8. What will be the output and why?

```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
```

## 9. What’s the best way to deeply copy a nested object? Expalin with examples

## 10. Loop and print values using Object destructuiring

```js
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
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








