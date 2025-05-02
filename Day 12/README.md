# <div align="center">🏆 DAY - 12 : JavaScript Objects 🏆</div>

## 📘 Introduction to Objects

Objects are one of the most fundamental and powerful concepts in JavaScript. Unlike primitive data types (strings, numbers, booleans), objects allow you to store collections of data and more complex entities.

**🤔 Why Objects?**
- 📦 Group related data together
- 🌍 Represent real-world entities in code
- 🗄️ Store complex data structures
- 🧩 Enable object-oriented programming concepts

## 🔷 JavaScript Objects

In JavaScript, an object is a collection of **key-value pairs**, where:
- Each **key** (also called property) is a string or symbol
- Each **value** can be any JavaScript data type (primitives, functions, or even other objects)

## 🛠️ Create Objects with Literal Syntax

The simplest way to create an object is using the **object literal syntax** with curly braces `{}`:

```javascript
// Empty object
let emptyObject = {};

// Object with properties
let person = {
    name: "John",
    age: 30,
    isEmployed: true
};
```

## 🔑 Accessing Object Properties

There are two main ways to access object properties:

1. **Dot Notation** (most common) ⭐
```javascript
let person = {
    name: "John",
    age: 30
};

console.log(person.name); // "John"
console.log(person.age);  // 30
```

2. **Bracket Notation** (useful for dynamic keys or keys with special characters) 🔲
```javascript
console.log(person["name"]); // "John"
console.log(person["age"]);  // 30
```

### 🧠 Knowledge Check:
What will be the output of the following code?
```javascript
const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008
};

console.log(book.title);
console.log(book["author"]);
```

<details>
<summary>✅ Answer</summary>
<pre>
"JavaScript: The Good Parts"
"Douglas Crockford"
</pre>
</details>

## ➕ Adding New Property to Object

You can add new properties to an existing object at any time:

```javascript
let user = {
    name: "John",
    age: 30
};

// Adding new properties
user.email = "john@example.com";
user["phone"] = "555-1234";

console.log(user);
// Output: {name: "John", age: 30, email: "john@example.com", phone: "555-1234"}
```

## 🔣📌 Keys With Special Characters

When property names contain spaces or special characters, you must use bracket notation:

```javascript
let user = {
    name: "John",
    age: 30,
    "user id": "U12345",     // 👈 Special character in key
    "home-address": "123 Main St"  // 👈 Special character in key
};

// Accessing properties with special characters
console.log(user["user id"]);     // "U12345"
console.log(user["home-address"]); // "123 Main St"

// ⚠️ This would NOT work:
// console.log(user.user id); // SyntaxError
// console.log(user.home-address); // Will evaluate as user.home minus address
```
---

## 🔄 Modifying Existing Property Value

You can change the value of existing properties:

```javascript
let user = {
    name: "John",
    age: 30
};

user.age = 31;
user["name"] = "John Smith";

console.log(user); // {name: "John Smith", age: 31}
```
---

## 🗑️ Deleting a Key From Object

The `delete` operator removes a property from an object:

```javascript
let user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

delete user.email;
// or delete user["email"];

console.log(user); // {name: "John", age: 30}
```

### 🧠 Knowledge Check:
What will be the final state of this object?
```javascript
const product = {
    name: "Laptop",
    price: 999,
    inStock: true,
    brand: "TechPro"
};

product.price = 899;
product.color = "Silver";
delete product.inStock;
```

<details>
<summary>✅ Answer</summary>
<pre>
{
    name: "Laptop",
    price: 899,
    brand: "TechPro",
    color: "Silver"
}
</pre>
</details>

---

## 🔍 Accessing Dynamic Key Value

You can use variables to dynamically access properties:

```javascript
let user = {
    name: "John",
    age: 30
};

const propertyName = "name";
console.log(user[propertyName]); // "John"

// ⚠️ This is NOT the same:
console.log(user.propertyName); // undefined (looks for key literally named "propertyName")
```
---

## 🌟 Create Object With Dynamic Values

You can use square brackets in object literals to create properties with dynamic keys:

```javascript
const keyName = "dynamicKey";
const keyValue = "dynamicValue";

const obj = {
    regularKey: "regularValue",
    [keyName]: keyValue  // Creates a property named "dynamicKey" with value "dynamicValue"
};

console.log(obj); // {regularKey: "regularValue", dynamicKey: "dynamicValue"}
```

Real-world example:
```javascript
function createUserPreference(setting, value) {
    return {
        [setting]: value  // 🔑 Dynamic key
    };
}

const darkModePreference = createUserPreference("darkMode", true);
console.log(darkModePreference); // {darkMode: true}
```

## 🏗️ Constructor Function To Create Objects

Constructor functions are used to create multiple objects with the same structure:

```javascript
// Constructor function (by convention, starts with capital letter)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Create new objects using the constructor
const person1 = new Person("Alice", 25);  // 🧍‍♀️
const person2 = new Person("Bob", 30);    // 🧍‍♂️

console.log(person1); // Person {name: "Alice", age: 25}
console.log(person2); // Person {name: "Bob", age: 30}
```

The `new` keyword:
1. 🏁 Creates a new empty object
2. 👉 Sets `this` to point to that object
3. ⚙️ Executes the constructor function
4. 🔙 Returns the object (unless the constructor explicitly returns something else)

## 📦 Using Object Constructor

The built-in `Object()` constructor can also create objects:

```javascript
const person = new Object();
person.name = "Charlie";
person.age = 35;

console.log(person); // {name: "Charlie", age: 35}
```

This is less common in modern JavaScript and functionally similar to using object literals.

## 🏭 Using Factory Function

Factory functions are regular functions that return new objects:

```javascript
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            return `Hello, my name is ${this.name}`;
        }
    };
}

const person1 = createPerson("Alice", 25);
const person2 = createPerson("Bob", 30);

console.log(person1.greet()); // "Hello, my name is Alice"
console.log(person2.greet()); // "Hello, my name is Bob"
```

Factory functions don't require the `new` keyword and can have private variables through closures.

### 🧠 Knowledge Check:
What's the difference between these two approaches?
```javascript
// Approach 1: Constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}
const car1 = new Car("Toyota", "Corolla");

// Approach 2: Factory function
function createCar(make, model) {
    return {
        make: make,
        model: model
    };
}
const car2 = createCar("Honda", "Civic");
```

<details>
<summary>✅ Answer</summary>
<pre>
Key differences:
1. Constructor functions use `new` keyword, factory functions don't
2. Constructor functions use `this` to assign properties
3. In constructors, forgetting `new` leads to unexpected behavior
4. Factory functions can easily implement private variables and closures
5. Constructor functions are conventionally named with PascalCase
</pre>
</details>

## ✂️ Object Shorthand

ES6 introduced shorter syntax for defining object properties:

```javascript
// Old syntax 👵
const name = "Alice";
const age = 30;

const user1 = {
    name: name,
    age: age
};

// ES6 shorthand (when variable name matches property name) 🚀
const user2 = {
    name,
    age
};

console.log(user1); // {name: "Alice", age: 30}
console.log(user2); // {name: "Alice", age: 30}
```

## ⚙️ Object Methods

Functions stored as object properties are called methods:

```javascript
const calculator = {
    // Traditional method syntax
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax (ES6)
    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4)); // 6
```

---

## 🪆 Nested Objects

Objects can contain other objects as property values:

```javascript
const person = {
    name: "Alice",
    age: 30,
    address: {  // 🏠 Nested object
        street: "123 Main St",
        city: "Boston",
        zipCode: "02108",
        country: "USA"
    },
    contacts: {  // 📱 Nested object
        email: "alice@example.com",
        phone: "555-1234"
    }
};

// Accessing nested properties
console.log(person.address.city);      // "Boston"
console.log(person.contacts.email);    // "alice@example.com"
```

## 🔍 The "in" operator

The `in` operator checks if a property exists in an object:

```javascript
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log("make" in car);    // true
console.log("color" in car);   // false
```

This is more reliable than checking `undefined`:

```javascript
// Not reliable if property exists but is explicitly undefined
console.log(car.color === undefined);  // true
```

## 🔄 The for...in loop

The `for...in` loop iterates over all enumerable properties of an object:

```javascript
const person = {
    name: "John",
    age: 30,
    job: "Developer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// job: Developer
```

**⚠️ Note:** `for...in` is designed for objects, not arrays. For arrays, use `for...of`, `forEach`, or a regular `for` loop.

## 🔑 Object.keys() method

`Object.keys()` returns an array of an object's own enumerable property names:

```javascript
const person = {
    name: "John",
    age: 30,
    job: "Developer"
};

const keys = Object.keys(person);
console.log(keys); // ["name", "age", "job"]

// Useful for iterating
keys.forEach(key => {
    console.log(key + ": " + person[key]);
});
```

Similar methods:
- 📊 `Object.values()` - returns an array of values
- 🔗 `Object.entries()` - returns an array of [key, value] pairs

### 🧠 Knowledge Check:
What will be the output of the following code?
```javascript
const user = {
    id: 101,
    username: "coder123",
    active: true
};

console.log(Object.keys(user).length);
console.log(Object.values(user)[1]);

for (let prop in user) {
    if (typeof user[prop] === "boolean") {
        console.log(prop);
    }
}
```

<details>
<summary>✅ Answer</summary>
<pre>
3
"coder123"
"active"
</pre>
</details>

---

## 🔗 Object References

In JavaScript, objects are reference types, meaning variables don't store the object itself but a reference to it in memory:

```javascript
// Two different objects with same content
const obj1 = { name: "John" };
const obj2 = { name: "John" };

console.log(obj1 === obj2); // false (different objects in memory)

// Copying a reference
const obj3 = obj1;
console.log(obj1 === obj3); // true (same object in memory)

// Modifying through one reference affects all references
obj3.name = "Alice";
console.log(obj1.name); // "Alice"
```

`Note:` When two objects are compare they are compared with the memory location or `reference` they are having not the `values` they are storing.

## 🔄 Object.assign()

`Object.assign()` copies properties from one or more source objects to a target object:

```javascript
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const result = Object.assign(target, source);

console.log(target); // {a: 1, b: 3, c: 4} (target is modified)
console.log(result); // {a: 1, b: 3, c: 4} (same as target)
console.log(target === result); // true (same object)
```

Creating a shallow copy:
```javascript
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);

console.log(copy); // {a: 1, b: 2}
console.log(original === copy); // false (different objects)
```
---
# 📋 Shallow Copy vs. Deep Copy

**Shallow Copy** 🌊: Copies only the first level properties
- `Object.assign()`
- Spread operator: `{...obj}`

**Deep Copy** 🏊‍♂️: Copies all levels of nested objects

```javascript
// Object with nested object
const original = {
    a: 1,
    b: {
        c: 2
    }
};

// 🌊 Shallow copy with Object.assign
const shallowCopy = Object.assign({}, original);

// 🌊 Shallow copy with spread operator
const spreadCopy = { ...original };

// Modify nested object in shallow copy
shallowCopy.b.c = 3;
console.log(original.b.c); // 3 (affected by change to shallowCopy)

// 🏊‍♂️ Deep copy with structured clone (modern browsers)
const deepCopy = structuredClone(original);
deepCopy.b.c = 4;
console.log(original.b.c); // 3 (unaffected by change to deepCopy)
```

Other methods for deep copying:
- `JSON.parse(JSON.stringify(obj))` (with limitations)
- Libraries like Lodash (`_.cloneDeep()`)


## 📋 JavaScript Shallow vs Deep Copy Cheatsheet

## 📌 Quick Reference Card

```
🌊 SHALLOW COPY:
   First level: COPIED (safe to change)
   Nested objects: SHARED (changes affect both)

🏊‍♂️ DEEP COPY:
   All levels: COMPLETELY COPIED (fully independent)
```

## 🏠 Real-World Analogy: The Notebook Copy

**Shallow Copy** = Photocopying a notebook with website URLs
- You get your own copy of the handwritten notes (first level properties)
- The URLs still point to the same websites (nested objects)
- If you cross out a note in your copy, the original stays unchanged
- If a website changes content, both your copy and original notebook point to the same updated website

**Deep Copy** = Photocopying a notebook AND downloading offline copies of all websites
- You have your own notes AND your own copies of all website content
- Changes to either set of information are completely independent

## 🛠️ Method Mnemonic:

**S**hallow: **S**pread (`{...obj}`) and a**SS**ign (`Object.assign()`)  
**D**eep: **D**eep cloning (`structuredClone()`)

## 📊 Visual Reminder:

```
Original → Shallow Copy      Original → Deep Copy
   │             │             │           │
   │             │             │           │
   ▼             ▼             ▼           ▼
  Name           Name          Name        Name
  Age            Age           Age         Age
   │             │             │           │
   └────┐   ┌────┘             │           │
        ▼   ▼                  ▼           ▼
      Address              Address     Address
      (SHARED)              (Own)       (Own)
```

## 💻 Code Examples

```javascript
// Original object
const user = {
  name: "Alex",
  age: 28,
  settings: {
    darkMode: true,
    notifications: false
  }
};

// Shallow copy
const shallowUser = { ...user };
shallowUser.name = "Taylor";           // Only affects copy
shallowUser.settings.darkMode = false; // Affects BOTH objects

// Deep copy
const deepUser = structuredClone(user);
deepUser.name = "Jordan";              // Only affects copy
deepUser.settings.darkMode = false;    // Only affects copy
```

## 🧠 Remember:

* A shallow copy creates new **containers** but shares the **contents**
* A deep copy duplicates both the **containers** AND the **contents**
* First level changes in shallow copies are safe; nested changes affect both objects

---



### 🧠 Knowledge Check:
What will be logged to the console?
```javascript
const config = {
    theme: "dark",
    settings: {
        notifications: true,
        sound: false
    }
};

const backupConfig = Object.assign({}, config);
backupConfig.theme = "light";
backupConfig.settings.notifications = false;

console.log(config.theme);
console.log(config.settings.notifications);
```

<details>
<summary>✅ Answer</summary>
<pre>
"dark"
false
</pre>
<p>Explanation: The object's top-level property (theme) is copied by value, but the nested object (settings) is copied by reference, so changes to backupConfig.settings also affect config.settings.</p>
</details>

---

## 🔄 Convert an Object to an Array

Use these methods to convert objects to arrays:

1. **Object.keys()** - Array of keys 🔑
```javascript
const user = { id: 1, name: "John", age: 30 };
const keys = Object.keys(user);
console.log(keys); // ["id", "name", "age"]
```

2. **Object.values()** - Array of values 📊
```javascript
const values = Object.values(user);
console.log(values); // [1, "John", 30]
```

3. **Object.entries()** - Array of [key, value] pairs 🔗
```javascript
const entries = Object.entries(user);
console.log(entries);
// [["id", 1], ["name", "John"], ["age", 30]]
```

## 🔄 Convert Map or Array to Object

**Array to Object** using `Object.fromEntries()`:

```javascript
const entries = [
    ["name", "John"],
    ["age", 30],
    ["job", "Developer"]
];

const obj = Object.fromEntries(entries);
console.log(obj); // {name: "John", age: 30, job: "Developer"}
```

**Map to Object**:
```javascript
const map = new Map([
    ["name", "John"],
    ["age", 30]
]);

const obj = Object.fromEntries(map);
console.log(obj); // {name: "John", age: 30}
```
---

## 🧊 Immutability with freeze()

`Object.freeze()` prevents an object from being modified:

```javascript
const settings = {
    theme: "dark",
    notifications: true
};

Object.freeze(settings);

// ❄️ These will have no effect in strict mode (or silently fail otherwise)
settings.theme = "light";        // Cannot modify properties
settings.sound = true;           // Cannot add properties
delete settings.notifications;   // Cannot delete properties

console.log(settings); // {theme: "dark", notifications: true}

// Check if an object is frozen
console.log(Object.isFrozen(settings)); // true
```

## 🔒 Immutability with seal()

`Object.seal()` prevents adding or deleting properties, but allows modifying existing ones:

```javascript
const user = {
    name: "John",
    age: 30
};

Object.seal(user);

user.name = "Jane";       // ✅ Can modify existing properties
user.location = "USA";    // ❌ Cannot add new properties
delete user.age;          // ❌ Cannot delete properties

console.log(user); // {name: "Jane", age: 30}

// Check if an object is sealed
console.log(Object.isSealed(user)); // true
```

## 🔍 The hasOwn() Method

`Object.hasOwn()` checks if an object has a specific property (replacing the older `hasOwnProperty` method):

```javascript
const person = {
    name: "Alice",
    age: 30
};

console.log(Object.hasOwn(person, "name"));   // true
console.log(Object.hasOwn(person, "gender")); // false

// The older way (still works but less recommended):
console.log(person.hasOwnProperty("name"));   // true
```

### 🧠 Knowledge Check:
What will this code output?
```javascript
const config = {
    darkMode: true,
    fontSize: 16
};

Object.seal(config);
config.darkMode = false;
config.newSetting = "value";

console.log(config.darkMode);
console.log("newSetting" in config);
console.log(Object.hasOwn(config, "fontSize"));
```

<details>
<summary>✅ Answer</summary>
<pre>
false
false
true
</pre>
</details>

---

## 📦 What is Object Destructuring?

Object destructuring is a convenient way to extract multiple properties from objects into individual variables:

```javascript
const person = {
    name: "Alice",
    age: 30,
    job: "Developer"
};

// Without destructuring 😕
const name1 = person.name;
const age1 = person.age;

// With destructuring ✨
const { name, age } = person;

console.log(name); // "Alice"
console.log(age);  // 30
```

```javascript
const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
   }

const {name, age, meal="bread"} = student;
console.log(name, age, meal); // john williamson, 9 , bread

const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects); // 3

```

## 🏷️ Create a New Variable

You can rename variables during destructuring:

```javascript
const person = {
    name: "Alice",
    age: 30
};

// Rename to different variables
const { name: fullName, age: years } = person;

console.log(fullName); // "Alice"
console.log(years);    // 30
```

## 🔄 Aliases

This is the same concept as creating new variables with different names:

```javascript
const product = {
    productName: "Laptop",
    price: 999
};

// Using aliases
const { productName: item, price: cost } = product;

console.log(item); // "Laptop"
console.log(cost); // 999
```

## 🪆 Nested Object Destructuring

You can destructure nested objects:

```javascript
const user = {
    id: 1,
    name: "Alice",
    address: {
        city: "Boston",
        country: "USA"
    }
};

// Destructuring nested objects
const { name, address: { city, country } } = user;

console.log(name);    // "Alice"
console.log(city);    // "Boston"
console.log(country); // "USA"
```

## 🔄 Destructuring to Function Parameters

Function parameters can use destructuring:

```javascript
// Without destructuring 😕
function displayUser(user) {
    console.log(`${user.name} is ${user.age} years old`);
}

// With destructuring ✨
function displayUserInfo({ name, age }) {
    console.log(`${name} is ${age} years old`);
}

const user = { name: "Alice", age: 30, job: "Developer" };
displayUserInfo(user); // "Alice is 30 years old"
```

## 🔙 Destructure a Function Return Value

You can destructure the object returned by a function:

```javascript
function getUser() {
    return {
        id: 1,
        name: "Alice",
        role: "Admin"
    };
}

const { id, name, role } = getUser();
console.log(id);   // 1
console.log(name); // "Alice"
console.log(role); // "Admin"
```

## 🔄 Destructuring in Loops

You can use destructuring in loops, especially with `Object.entries()`:

```javascript
const ratings = {
    movie1: 4.5,
    movie2: 3.8,
    movie3: 5.0
};

for (const [movie, rating] of Object.entries(ratings)) {
    console.log(`${movie}: ${rating}/5 ⭐`);
}
// Output:
// movie1: 4.5/5 ⭐
// movie2: 3.8/5 ⭐
// movie3: 5.0/5 ⭐
```

## ⛓️ Optional Chaining

Optional chaining (`?.`) allows you to safely access deeply nested properties without checking each level:

```javascript
const user = {
    name: "Alice",
    address: {
        city: "Boston"
    }
};

// Without optional chaining (error-prone) 😖
const country1 = user.address && user.address.country;

// With optional chaining ✨
const country2 = user.address?.country;
const zipCode = user.address?.zipCode;

console.log(country2); // undefined (no error)
console.log(zipCode);  // undefined (no error)

// Works with methods too
console.log(user.getDetails?.());  // undefined (no error if method doesn't exist)
```

### 🧠 Knowledge Check:
What will the output be?
```javascript
const data = {
    user: {
        profile: {
            name: "Alice",
            contact: null
        }
    }
};

const email = data.user?.profile?.contact?.email;
const name = data.user?.profile?.name;

console.log(email);
console.log(name);
```

<details>
<summary>✅ Answer</summary>
<pre>
undefined
"Alice"
</pre>
</details>

## 💯 Practice Tasks (JavaScript Objects)

### Task 1: Basic Object Operations 🔰
Create an object called `book` with properties for `title`, `author`, and `year`. Then add a new property `genre`, modify the `year`, and delete the `author` property.

<details>
<summary>✅ Solution</summary>

```javascript
// Create the book object
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

// Add genre property
book.genre = "Classic Fiction";

// Modify year
book.year = 1926;

// Delete author property
delete book.author;

console.log(book);
// Output: {title: "The Great Gatsby", year: 1926, genre: "Classic Fiction"}
```
</details>

### Task 2: Nested Objects 🪆
Create an object `student` with nested objects for `personalInfo` and `academicInfo`. Access and modify values in the nested objects.

<details>
<summary>✅ Solution</summary>

```javascript
const student = {
    id: 101,
    personalInfo: {
        name: "Emma",
        age: 22,
        contact: {
            email: "emma@example.com",
            phone: "555-1234"
        }
    },
    academicInfo: {
        major: "Computer Science",
        year: 3,
        grades: {
            math: 95,
            programming: 98,
            databases: 87
        }
    }
};

// Access nested properties
console.log(student.personalInfo.name); // "Emma"
console.log(student.academicInfo.grades.programming); // 98

// Modify nested values
student.personalInfo.age = 23;
student.academicInfo.grades.databases = 92;

console.log(student.personalInfo.age); // 23
console.log(student.academicInfo.grades.databases); // 92
```
</details>

### Task 3: Object Constructor and Factory Functions 🏭
Create a `Car` constructor function and a `createCar` factory function that create objects with the same properties. Create two objects using each method.

<details>
<summary>✅ Solution</summary>

```javascript
// Constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
    this.start = function() {
        this.isRunning = true;
        return `${this.make} ${this.model} started`;
    };
}

// Factory function
function createCar(make, model, year) {
    return {
        make,
        model,
        year,
        isRunning: false,
        start() {
            this.isRunning = true;
            return `${this.make} ${this.model} started`;
        }
    };
}

// Create objects with constructor
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Accord", 2021);

// Create objects with factory function
const car3 = createCar("Tesla", "Model 3", 2022);
const car4 = createCar("Ford", "Mustang", 2019);

console.log(car1.start()); // "Toyota Camry started"
console.log(car3.start()); // "Tesla Model 3 started"
```
</details>

### Task 4: Object Methods and References 🔗
Create an original object with a method, then create a shallow copy and modify a property. Observe how the method behaves on both objects.

<details>
<summary>✅ Solution</summary>

```javascript
// Original object with method
const calculator = {
    value: 0,
    add(num) {
        this.value += num;
        return this.value;
    },
    subtract(num) {
        this.value -= num;
        return this.value;
    },
    reset() {
        this.value = 0;
        return this.value;
    }
};

// Create a shallow copy
const calculatorCopy = Object.assign({}, calculator);

// Use original
calculator.add(5);
calculator.add(10);
console.log(calculator.value); // 15

// Use copy (has separate value property)
calculatorCopy.value = 100;
calculatorCopy.add(50);
console.log(calculatorCopy.value); // 150
console.log(calculator.value); // Still 15 (not affected)
```
</details>

### Task 5: Deep vs Shallow Copy Challenge 🏊‍♂️
Create an object with nested objects, then create both a shallow copy and a deep copy. Modify the nested properties in each copy and observe the results.

<details>
<summary>✅ Solution</summary>

```javascript
// Original object with nested data
const company = {
    name: "TechCorp",
    founded: 2010,
    address: {
        city: "San Francisco",
        state: "CA",
        building: {
            floor: 5,
            room: 512
        }
    }
};

// 🌊 Shallow copy
const shallowCopy = { ...company };

// 🏊‍♂️ Deep copy (using structuredClone for modern browsers)
const deepCopy = structuredClone(company);
// Alternative deep copy: JSON.parse(JSON.stringify(company));

// Modify shallow copy's nested property
shallowCopy.address.city = "New York";
shallowCopy.address.building.floor = 10;

// Modify deep copy's nested property
deepCopy.address.city = "Chicago";
deepCopy.address.building.floor = 20;

console.log("Original:", company.address.city, company.address.building.floor);
// Original: New York 10 (affected by shallow copy)

console.log("Shallow Copy:", shallowCopy.address.city, shallowCopy.address.building.floor);
// Shallow Copy: New York 10

console.log("Deep Copy:", deepCopy.address.city, deepCopy.address.building.floor);
// Deep Copy: Chicago 20
```
</details>

### Task 6: Object Destructuring and Optional Chaining ⛓️
Use destructuring and optional chaining to safely extract values from a complex nested object.

<details>
<summary>✅ Solution</summary>

```javascript
const response = {
    status: "success",
    data: {
        user: {
            id: 123,
            username: "codemaster",
            settings: null,
            profile: {
                fullName: "Jane Doe",
                location: "New York"
            }
        },
        meta: {
            timestamp: 1635520832,
            server: "api-server-01"
        }
    }
};

// Destructure with default values
const { status, data: { user } = {} } = response;

// Destructure nested properties with renaming
const { username, profile: { fullName: name } = {} } = user;

// Optional chaining for potentially null/undefined paths
const theme = user.settings?.theme?.color;
const country = user.profile?.address?.country;

console.log(status);   // "success"
console.log(username); // "codemaster"
console.log(name);     // "Jane Doe"
console.log(theme);    // undefined (safely accessed)
console.log(country);  // undefined (safely accessed)
```
</details>

### Task 7: Object Freeze vs Seal
Demonstrate the difference between `Object.freeze()` and `Object.seal()` by creating two similar objects and applying these methods to them.

<details>
<summary>Solution</summary>

```javascript
// Create two similar objects
const frozenConfig = {
    theme: "dark",
    fontSize: 16,
    animations: true
};

const sealedConfig = {
    theme: "dark",
    fontSize: 16,
    animations: true
};

// Freeze one object
Object.freeze(frozenConfig);

// Seal the other object
Object.seal(sealedConfig);

// Try modifications on both
try {
    // Attempts on frozen object
    frozenConfig.theme = "light";           // Won't work
    frozenConfig.newProp = "value";         // Won't work
    delete frozenConfig.animations;         // Won't work
    
    // Attempts on sealed object
    sealedConfig.theme = "light";           // Will work
    sealedConfig.newProp = "value";         // Won't work
    delete sealedConfig.animations;         // Won't work
    
    console.log("Frozen after attempts:", frozenConfig);
    // Still {theme: "dark", fontSize: 16, animations: true}
    
    console.log("Sealed after attempts:", sealedConfig);
    // {theme: "light", fontSize: 16, animations: true}
    
    console.log("Is frozen?", Object.isFrozen(frozenConfig)); // true
    console.log("Is sealed?", Object.isSealed(sealedConfig)); // true
} catch (error) {
    console.error("Error in strict mode:", error);
}
```
</details>

### Task 8: Create a Product Catalog
Create a small product catalog system using objects. Include methods for adding products, updating prices, and displaying product information.

<details>
<summary>Solution</summary>

```javascript
const productCatalog = {
    products: [],
    
    addProduct(name, price, category) {
        const product = {
            id: this.products.length + 1,
            name,
            price,
            category,
            dateAdded: new Date().toISOString().split('T')[0]
        };
        
        this.products.push(product);
        return product.id;
    },
    
    updatePrice(productId, newPrice) {
        const product = this.products.find(p => p.id === productId);
        
        if (product) {
            product.price = newPrice;
            return true;
        }
        return false;
    },
    
    removeProduct(productId) {
        const initialLength = this.products.length;
        this.products = this.products.filter(p => p.id !== productId);
        return this.products.length !== initialLength;
    },
    
    getProductInfo(productId) {
        return this.products.find(p => p.id === productId);
    },
    
    listProductsByCategory(category) {
        return this.products.filter(p => p.category === category);
    }
};

// Using the product catalog
productCatalog.addProduct("Laptop", 999, "Electronics");
productCatalog.addProduct("Headphones", 149, "Electronics");
productCatalog.addProduct("Coffee Mug", 12, "Kitchen");

productCatalog.updatePrice(2, 129);
console.log(productCatalog.getProductInfo(2)); 
// {id: 2, name: "Headphones", price: 129, category: "Electronics", dateAdded: "2023-10-20"}

const electronics = productCatalog.listProductsByCategory("Electronics");
console.log(electronics.length); // 2
```
</details>

### Task 9: Convert Between Object Formats
Convert between different object representations using `Object.entries()`, `Object.fromEntries()`, and array methods.

<details>
<summary>Solution</summary>

```javascript
// Original object
const studentGrades = {
    "John": 85,
    "Emma": 92,
    "Michael": 78,
    "Sophia": 95,
    "Daniel": 88
};

// 1. Convert to array of [name, grade] entries
const entriesArray = Object.entries(studentGrades);
console.log(entriesArray);
// [["John", 85], ["Emma", 92], ["Michael", 78], ["Sophia", 95], ["Daniel", 88]]

// 2. Transform the data (add passing status)
const entriesWithStatus = entriesArray.map(([name, grade]) => {
    const status = grade >= 80 ? "Pass" : "Needs Improvement";
    return [name, { grade, status }];
});
console.log(entriesWithStatus);
// [["John", {grade: 85, status: "Pass"}], ["Emma", {grade: 92, status: "Pass"}], ...]

// 3. Convert back to object
const enhancedGrades = Object.fromEntries(entriesWithStatus);
console.log(enhancedGrades);
/*
{
    "John": {grade: 85, status: "Pass"},
    "Emma": {grade: 92, status: "Pass"},
    "Michael": {grade: 78, status: "Needs Improvement"},
    ...
}
*/

// 4. Filter only passing students and convert to new object
const passingStudents = Object.fromEntries(
    Object.entries(enhancedGrades)
        .filter(([_, data]) => data.status === "Pass")
);
console.log(passingStudents);
// {John: {grade: 85, status: "Pass"}, Emma: {grade: 92, status: "Pass"}, ...}
```
</details>

### Task 10: Object Methods and "this" Context
Create an object with methods that use "this" to reference the object itself. Demonstrate how "this" behaves when methods are called in different ways.

<details>
<summary>Solution</summary>

```javascript
const counter = {
    count: 0,
    
    increment() {
        this.count++;
        return this.count;
    },
    
    decrement() {
        this.count--;
        return this.count;
    },
    
    reset() {
        this.count = 0;
        return this.count;
    },
    
    display() {
        console.log(`Current count: ${this.count}`);
    }
};

// Normal method calls - "this" refers to counter object
counter.increment(); // 1
counter.increment(); // 2
counter.display();   // "Current count: 2"

// Storing a method reference and calling it
const incrementFn = counter.increment;
// incrementFn();   // Error: this is undefined or window in browser

// Fixing with bind
const boundIncrement = counter.increment.bind(counter);
boundIncrement(); // 3
counter.display(); // "Current count: 3"

// Using call/apply
const obj = { count: 10 };
counter.increment.call(obj); // "this" becomes obj
console.log(obj.count); // 11

// Using arrow functions (which don't have their own "this")
const counterWithArrow = {
    count: 0,
    
    // Regular function uses "this" from the object
    increment() {
        this.count++;
        
        // Arrow function uses "this" from parent scope
        const display = () => {
            console.log(this.count); // "this" refers to counterWithArrow
        };
        
        display();
    }
};

counterWithArrow.increment(); // Logs: 1
```
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


---

<div align="center">
<p>📆 <em>Next: Day - 13: this keyword in Javascript</em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>
</div>
