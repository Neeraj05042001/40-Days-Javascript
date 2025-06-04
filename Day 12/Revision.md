# 🚀 JavaScript Objects - Quick Revision Summary

## 🎯 Core Concept
Objects = Collections of **key-value pairs** (like real-world entities)

## 🛠️ Creating Objects (4 Ways)
```javascript
// 1. Object Literal (most common)
let obj = { name: "John", age: 30 };

// 2. Constructor Function
function Person(name) { this.name = name; }
let p = new Person("John");

// 3. Factory Function
function createPerson(name) { return { name }; }

// 4. Object() Constructor
let obj = new Object();
```

## 🔑 Property Access & Manipulation

### Access
- **Dot notation**: `obj.name` (standard)
- **Bracket notation**: `obj["name"]` (dynamic/special chars)

### CRUD Operations
```javascript
obj.newProp = "value";      // Add
obj.name = "New Name";      // Update
delete obj.age;             // Delete
"name" in obj;              // Check existence
```

## 🔄 Iteration Methods
```javascript
for (let key in obj) { }           // Loop through keys
Object.keys(obj)                   // Array of keys
Object.values(obj)                 // Array of values
Object.entries(obj)                // Array of [key,value] pairs
```

## 📋 Copying (CRITICAL CONCEPT)

### Shallow Copy 🌊
```javascript
let copy = { ...original };        // Spread operator
let copy = Object.assign({}, obj); // Object.assign
```
**⚠️ Nested objects still SHARED!**

### Deep Copy 🏊‍♂️
```javascript
let copy = structuredClone(obj);   // Modern way
```
**✅ Completely independent copies**

## 🔒 Object Protection
- `Object.freeze(obj)` → No changes at all ❄️
- `Object.seal(obj)` → Can modify existing props only 🔒

## 📦 Destructuring (ES6 Magic)
```javascript
const { name, age } = person;           // Basic
const { name: fullName } = person;     // Rename
const { address: { city } } = person;  // Nested
const { name = "Default" } = person;   // Default values
```

## ⛓️ Optional Chaining (Safety First)
```javascript
user.address?.city?.zipCode  // No errors if undefined
```

## 🧠 Memory Model (Interview Favorite!)
```javascript
let a = { x: 1 };
let b = { x: 1 };
let c = a;

a === b;  // false (different objects)
a === c;  // true (same reference)
```

## 🎯 Quick Tests (Practice These!)
1. What's the difference between `obj.prop` and `obj["prop"]`?
2. Why does shallow copy share nested objects?
3. When would you use a constructor vs factory function?
4. How do you safely access deeply nested properties?

## 💡 Pro Tips
- Use **object shorthand**: `{ name, age }` instead of `{ name: name, age: age }`
- **Methods shorthand**: `{ method() {} }` instead of `{ method: function() {} }`
- Always use `Object.hasOwn()` over `hasOwnProperty()`
- Convert arrays to objects with `Object.fromEntries()`

## 🔥 Common Pitfalls to Avoid
1. Forgetting `new` keyword with constructors
2. Shallow vs deep copy confusion
3. Using `for...in` with arrays (use `for...of` instead)
4. Not handling undefined nested properties

## ⚡ Speed Revision Checklist
- [ ] Can create objects 4 different ways
- [ ] Know dot vs bracket notation usage
- [ ] Understand shallow vs deep copy difference
- [ ] Can use destructuring with nested objects
- [ ] Know when to use optional chaining
- [ ] Understand object references vs values

---
**🎯 Next Topic**: `this` keyword behavior in different contexts