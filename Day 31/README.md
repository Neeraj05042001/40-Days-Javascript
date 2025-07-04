<div align="center">

# 📚 DAY - 31 : Master JavaScript Prototypes and Object Patterns - Confused to Confident! 🤩

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Prototype](https://img.shields.io/badge/Prototype-Note-orange?style=flat&logo=javascript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat)
![Type](https://img.shields.io/badge/Type-Educational-blue?style=flat&logo=bookstack&logoColor=white)


</div>

> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 💼 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦 | [GitHub: Neeraj05042001](https://github.com/Neeraj05042001) 🐙* |


---

## 🎯 Introduction

**JavaScript Prototypes** are one of the most powerful yet confusing concepts in JavaScript. They form the backbone of JavaScript's object-oriented programming model and inheritance system. Understanding prototypes is crucial for becoming a JavaScript master! 🚀

**What is a Prototype?** 
A prototype is an object that serves as a template for other objects. Every JavaScript object has a prototype, and it can inherit properties and methods from its prototype.

`OR`
 - Prototype is the internal property of an object which indicates from which structure the particular object has been created

---

## 📝 JavaScript Object Literals Pattern

### 🔍 What are Object Literals?

Object literals are the most common way to create objects in JavaScript using curly braces `{}`.

```javascript
// Object Literal Pattern
const person = {
    name: "John",
    age: 25,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log(person.name); // "John"
console.log(person.greet()); // "Hello, I'm John"
```

### ✅ Advantages:
- 🚀 Simple and quick to create
- 📖 Easy to read and understand
- 💡 Perfect for single-use objects

### ❌ Disadvantages:
- 🔄 No reusability
- 📊 Memory inefficient for multiple similar objects

<details>
<summary>💡 Knowledge Check: Object Literals</summary>

**Q: What will be the output?**
```javascript
const car = {
    brand: "Toyota",
    model: "Camry",
    getBrand: function() {
        return this.brand;
    }
};
console.log(car.getBrand());
```

**A: "Toyota"** - The method accesses the brand property using `this`.
</details>

---

## 🎯 Ways To Extract Values From Objects

### 1. 🔗 Dot Notation
```javascript
const user = { name: "Alice", age: 30 };
console.log(user.name); // "Alice"
```

### 2. 🔲 Bracket Notation
```javascript
const user = { name: "Alice", age: 30 };
console.log(user["name"]); // "Alice"
console.log(user["age"]); // 30
```

### 3. 📦 Destructuring Assignment
```javascript
const user = { name: "Alice", age: 30, city: "New York" };

// Object Destructuring
const { name, age } = user;
console.log(name); // "Alice"
console.log(age); // 30

// With Renaming
const { name: userName, age: userAge } = user;
console.log(userName); // "Alice"
```

### 4. 🔍 Object.keys(), Object.values(), Object.entries()
```javascript
const user = { name: "Alice", age: 30 };

console.log(Object.keys(user));    // ["name", "age"]
console.log(Object.values(user));  // ["Alice", 30]
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 30]]
```

<details>
<summary>💡 Knowledge Check: Object Value Extraction</summary>

**Q: What's the difference between dot notation and bracket notation?**

**A:** 
- **Dot notation**: Used with valid identifiers, faster, cleaner syntax
- **Bracket notation**: Can use variables, computed properties, or invalid identifiers as keys
</details>

---

## 🔒 JavaScript Object and The const Keyword

### 📌 Important Concept:
When you declare an object with `const`, you cannot reassign the variable, but you **CAN** modify the object's properties!

```javascript
const person = { name: "John", age: 25 };

// ✅ This works - modifying properties
person.name = "Jane";
person.age = 26;
console.log(person); // { name: "Jane", age: 26 }

// ❌ This throws an error - reassigning the variable
// person = { name: "Bob", age: 30 }; // TypeError!
```

### 🔐 To make objects truly immutable:
```javascript
const person = Object.freeze({ name: "John", age: 25 });
// person.name = "Jane"; // This won't work in strict mode
```

<details>
<summary>💡 Knowledge Check: const with Objects</summary>

**Q: Will this code work?**
```javascript
const car = { brand: "BMW" };
car.model = "X5";
car.brand = "Mercedes";
```

**A: Yes!** - `const` prevents reassignment of the variable, not modification of object properties.
</details>

---

## ⚖️ JavaScript Functions vs Methods

### 🔧 Functions
Functions are independent blocks of code that can be called anywhere.

```javascript
// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Arrow Function
const greet = (name) => `Hello, ${name}!`;
```

### 🏠 Methods
Methods are functions that belong to objects.

```javascript
const person = {
    name: "John",
    // Method
    greet: function() {
        return `Hello, I'm ${this.name}`;
    },
    // ES6 Method Shorthand
    sayGoodbye() {
        return `Goodbye from ${this.name}`;
    }
};

console.log(person.greet()); // "Hello, I'm John"
```

### 🎯 Key Differences:
| Functions | Methods |
|-----------|---------|
| Independent | Belong to objects |
| `this` is undefined or global | `this` refers to the object |
| Can be called directly | Called on objects |

<details>
<summary>💡 Knowledge Check: Functions vs Methods</summary>

**Q: What's the value of `this` in a regular function vs a method?**

**A:** 
- **Regular function**: `this` is `undefined` (strict mode) or `window` (non-strict mode)
- **Method**: `this` refers to the object that owns the method
</details>

---

## 🏗️ The Constructor Function Pattern

### 🎯 What is a Constructor Function?
A constructor function is a special function used to create and initialize objects. It's called with the `new` keyword.

```javascript
// Constructor Function (PascalCase naming convention)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

// Creating instances
const john = new Person("John", 25);
const jane = new Person("Jane", 30);

console.log(john.name); // "John"
console.log(jane.greet()); // "Hello, I'm Jane"
```

### 🔄 What happens when you use `new`?
1. 🆕 Creates a new empty object
2. 🔗 Sets the prototype of the object
3. 🎯 Binds `this` to the new object
4. 📤 Returns the new object (implicitly)

```javascript
// Manual simulation of 'new'
function createPerson(name, age) {
    const obj = {}; // Step 1
    obj.__proto__ = Person.prototype; // Step 2
    Person.call(obj, name, age); // Step 3
    return obj; // Step 4
}
```

<details>
<summary>💡 Knowledge Check: Constructor Functions</summary>

**Q: What happens if you forget to use `new` with a constructor function?**

**A:** Without `new`, `this` refers to the global object (or undefined in strict mode), potentially causing errors or polluting the global scope.
</details>

---

## 🧩 Composing Objects and References

### 📚 Object Composition
Objects can contain other objects as properties, creating complex data structures.

```javascript
const address = {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
};

const person = {
    name: "John",
    age: 25,
    address: address // Object composition
};

console.log(person.address.city); // "New York"
```

### 🔗 References vs Copies
Objects are passed by reference, not by value!

```javascript
const original = { name: "John", age: 25 };
const reference = original; // Reference, not copy!

reference.name = "Jane";
console.log(original.name); // "Jane" - original is modified!

// Creating a shallow copy
const shallowCopy = { ...original };
// or
const shallowCopy2 = Object.assign({}, original);

// Deep copy (for nested objects)
const deepCopy = JSON.parse(JSON.stringify(original));
```

<details>
<summary>💡 Knowledge Check: Object References</summary>

**Q: What will be the output?**
```javascript
const a = { x: 1 };
const b = a;
b.x = 2;
console.log(a.x);
```

**A: 2** - Both `a` and `b` reference the same object, so modifying `b.x` also changes `a.x`.
</details>

---

## 🧬 Object Prototypes

### 🔍 What is a Prototype?
Every JavaScript object has a hidden property called `[[Prototype]]` (accessible via `__proto__` or `Object.getPrototypeOf()`).

```javascript
const person = { name: "John" };

// Accessing prototype
console.log(person.__proto__); // Object.prototype
console.log(Object.getPrototypeOf(person)); // Object.prototype

// All objects inherit from Object.prototype
console.log(person.toString()); // "[object Object]"
```

### 🏗️ Creating Objects with Prototypes
```javascript
const animal = {
    speak: function() {
        return "Some sound";
    }
};

const dog = Object.create(animal);
dog.name = "Buddy";
dog.speak = function() {
    return "Woof!";
};

console.log(dog.speak()); // "Woof!"
```

<details>
<summary>💡 Knowledge Check: Prototypes</summary>

**Q: What's the difference between `__proto__` and `prototype`?**

**A:** 
- `__proto__`: Property of all objects, points to the prototype
- `prototype`: Property of functions, used as prototype for instances created with `new`
</details>

---

## ⛓️ Prototype Chain

### 🔗 What is the Prototype Chain?
The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects.

```javascript
// The chain: dog -> animal -> Object.prototype -> null
const animal = {
    eat: function() {
        return "Eating...";
    }
};

const dog = Object.create(animal);
dog.bark = function() {
    return "Woof!";
};

const myDog = Object.create(dog);
myDog.name = "Buddy";

// Prototype chain lookup
console.log(myDog.name);  // "Buddy" (own property)
console.log(myDog.bark()); // "Woof!" (inherited from dog)
console.log(myDog.eat());  // "Eating..." (inherited from animal)
console.log(myDog.toString()); // "[object Object]" (inherited from Object.prototype)
```

### 🔍 Prototype Chain Visualization:
```
myDog
  └── name: "Buddy"
  └── __proto__: dog
      └── bark: function()
      └── __proto__: animal
          └── eat: function()
          └── __proto__: Object.prototype
              └── toString: function()
              └── __proto__: null
```

<details>
<summary>💡 Knowledge Check: Prototype Chain</summary>

**Q: What happens when JavaScript looks for a property?**

**A:** JavaScript searches:
1. Own properties first
2. Then prototype chain (parent objects)
3. Until it finds the property or reaches `null`
</details>

---

## 👁️ Constructor Function Visually

### 🎨 Visual Representation:
```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const john = new Person("John");
const jane = new Person("Jane");
```

### 📊 Memory Layout:
```
Person Constructor Function
├── prototype: Person.prototype
│   └── greet: function()
│   └── constructor: Person
│
john instance
├── name: "John"
└── __proto__: Person.prototype

jane instance
├── name: "Jane"
└── __proto__: Person.prototype
```

<details>
<summary>💡 Knowledge Check: Constructor Visualization</summary>

**Q: How many `greet` functions exist in memory with 1000 Person instances?**

**A: Only 1!** - The `greet` method is stored in `Person.prototype` and shared by all instances.
</details>

---

## 🔧 The "prototype" Property

### 🎯 Understanding Function.prototype
Every function in JavaScript has a `prototype` property that's used as the prototype for instances created with `new`.

```javascript
function Car(brand) {
    this.brand = brand;
}

// Adding methods to prototype
Car.prototype.start = function() {
    return `${this.brand} is starting...`;
};

Car.prototype.stop = function() {
    return `${this.brand} is stopping...`;
};

const toyota = new Car("Toyota");
const bmw = new Car("BMW");

console.log(toyota.start()); // "Toyota is starting..."
console.log(bmw.start());    // "BMW is starting..."

// Both instances share the same methods
console.log(toyota.start === bmw.start); // true
```

### 🔍 Important Points:
- 📦 `prototype` is only available on functions
- 🏗️ It becomes the `__proto__` of instances created with `new`
- 💾 Methods on prototype are shared, saving memory

<details>
<summary>💡 Knowledge Check: prototype Property</summary>

**Q: What's the relationship between `Car.prototype` and `toyota.__proto__`?**

**A:** They reference the same object! `toyota.__proto__ === Car.prototype` returns `true`.
</details>

---

## 👁️ The "prototype" Visually

### 🖼️ Visual Representation:
```
Function: Car
├── prototype: Car.prototype
│   ├── start: function()
│   ├── stop: function()
│   └── constructor: Car
│
Instance: toyota
├── brand: "Toyota"
└── __proto__: ──────┐
                     │
Instance: bmw        │
├── brand: "BMW"     │
└── __proto__: ──────┴──► Car.prototype
```

### 📝 Code Example:
```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

const dog = new Animal("Dog");
const cat = new Animal("Cat");

// Visual proof
console.log(dog.__proto__ === Animal.prototype); // true
console.log(cat.__proto__ === Animal.prototype); // true
console.log(dog.speak === cat.speak); // true (same function reference)
```

---

## 💾 Prototype To Save Memory

### 🎯 Memory Efficiency
Using prototypes prevents method duplication, saving memory when creating multiple instances.

```javascript
// ❌ Memory Inefficient - Each instance has its own copy
function Person(name) {
    this.name = name;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

// ✅ Memory Efficient - Shared method via prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};
```

### 📊 Memory Comparison:
```javascript
// Creating 1000 instances
const people = [];
for (let i = 0; i < 1000; i++) {
    people.push(new Person(`Person${i}`));
}

// With prototype: 1000 objects + 1 shared method
// Without prototype: 1000 objects + 1000 individual methods
```

<details>
<summary>💡 Knowledge Check: Memory Efficiency</summary>

**Q: With 10,000 instances, how many `greet` methods exist using prototypes vs constructor functions?**

**A:** 
- **With prototype**: 1 method (shared)
- **Without prototype**: 10,000 methods (individual copies)
</details>

---

## 👁️ Prototype Chain (Lookup) Visually

### 🔍 Property Lookup Process:
```javascript
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.start = function() {
    return "Starting vehicle...";
};

function Car(brand, type) {
    Vehicle.call(this, type);
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
    return "Beep beep!";
};

const myCar = new Car("Toyota", "Sedan");
```

### 📊 Lookup Chain Visualization:
```
myCar.honk() lookup:
1. myCar (own properties) ❌
2. Car.prototype ✅ Found honk()

myCar.start() lookup:
1. myCar (own properties) ❌
2. Car.prototype ❌
3. Vehicle.prototype ✅ Found start()

myCar.toString() lookup:
1. myCar (own properties) ❌
2. Car.prototype ❌
3. Vehicle.prototype ❌
4. Object.prototype ✅ Found toString()
```

---

## 🏫 JavaScript Class Pattern

### 🎯 ES6 Classes
Classes provide a cleaner syntax for creating constructor functions and prototypes.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    getAge() {
        return this.age;
    }
    
    static species() {
        return "Homo sapiens";
    }
}

const john = new Person("John", 25);
console.log(john.greet()); // "Hello, I'm John"
console.log(Person.species()); // "Homo sapiens"
```

### 🔄 Class vs Constructor Function:
```javascript
// Class syntax
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    
    start() {
        return `${this.brand} is starting...`;
    }
}

// Equivalent constructor function
function Car(brand) {
    this.brand = brand;
}

Car.prototype.start = function() {
    return `${this.brand} is starting...`;
};
```

<details>
<summary>💡 Knowledge Check: Classes</summary>

**Q: Are JavaScript classes true classes like in Java or C++?**

**A:** No! JavaScript classes are syntactic sugar over prototypes. They still use prototype-based inheritance under the hood.
</details>

---

## 🧬 JavaScript Class Inheritance

### 📈 Extending Classes
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
    
    wagTail() {
        return `${this.name} wags tail`;
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.speak()); // "Buddy barks"
console.log(myDog.wagTail()); // "Buddy wags tail"
```

### 🔧 Key Concepts:
- **`extends`**: Creates inheritance relationship
- **`super()`**: Calls parent constructor
- **Method overriding**: Child methods override parent methods

<details>
<summary>💡 Knowledge Check: Class Inheritance</summary>

**Q: What happens if you don't call `super()` in a child class constructor?**

**A:** You'll get a ReferenceError! `super()` must be called before using `this` in the child constructor.
</details>

---

## 🏗️ The Object.create() Pattern

### 🎯 Alternative to Constructor Functions
`Object.create()` creates a new object with a specified prototype.

```javascript
const animal = {
    type: "Animal",
    speak: function() {
        return `${this.name} makes a sound`;
    }
};

// Create object with animal as prototype
const dog = Object.create(animal);
dog.name = "Buddy";
dog.speak = function() {
    return `${this.name} barks`;
};

console.log(dog.speak()); // "Buddy barks"
console.log(dog.type); // "Animal" (inherited)
```

### 🔄 Object.create() vs new:
```javascript
// Using Object.create()
const dog1 = Object.create(animal);
dog1.name = "Rex";

// Using constructor function
function Animal(name) {
    this.name = name;
}
const dog2 = new Animal("Max");
```

### 💡 Benefits:
- 🎯 More explicit prototype setting
- 🔧 No need for constructor functions
- 🎨 Flexible object creation

<details>
<summary>💡 Knowledge Check: Object.create()</summary>

**Q: What's the difference between `Object.create(null)` and `{}`?**

**A:** 
- `Object.create(null)`: Creates object with no prototype (no inherited methods)
- `{}`: Creates object with `Object.prototype` as prototype (has inherited methods like `toString`)
</details>

---

## 🔍 How To Get Prototype Of An Object

### 🎯 Methods to Access Prototype:
```javascript
const person = { name: "John" };

// Method 1: Object.getPrototypeOf() (Recommended)
console.log(Object.getPrototypeOf(person)); // Object.prototype

// Method 2: __proto__ property (Deprecated)
console.log(person.__proto__); // Object.prototype

// Method 3: constructor.prototype (for instances)
function Car(brand) {
    this.brand = brand;
}
const myCar = new Car("Toyota");
console.log(myCar.constructor.prototype); // Car.prototype
```

### 🔍 Checking Prototype Chain:
```javascript
function Animal() {}
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog();

// Check if object is in prototype chain
console.log(Animal.prototype.isPrototypeOf(myDog)); // true
console.log(Dog.prototype.isPrototypeOf(myDog)); // true
```

<details>
<summary>💡 Knowledge Check: Getting Prototypes</summary>

**Q: Which method is preferred for getting an object's prototype?**

**A:** `Object.getPrototypeOf()` is preferred because `__proto__` is deprecated and may not be available in all environments.
</details>

---

## ⚙️ How To Set An Object Prototype

### 🎯 Methods to Set Prototype:
```javascript
const animal = {
    speak: function() {
        return "Some sound";
    }
};

// Method 1: Object.setPrototypeOf() (Use with caution)
const dog = { name: "Buddy" };
Object.setPrototypeOf(dog, animal);
console.log(dog.speak()); // "Some sound"

// Method 2: Object.create() (Recommended)
const cat = Object.create(animal);
cat.name = "Whiskers";

// Method 3: Using constructor and prototype
function Bird(name) {
    this.name = name;
}
Bird.prototype = animal;
const parrot = new Bird("Polly");
```

### ⚠️ Important Notes:
- 🐌 `Object.setPrototypeOf()` is slow and should be avoided
- 🏗️ `Object.create()` is preferred for setting prototypes
- 🎯 Set prototypes at object creation time, not later

<details>
<summary>💡 Knowledge Check: Setting Prototypes</summary>

**Q: Why is `Object.setPrototypeOf()` not recommended?**

**A:** It's slow because it changes the prototype chain of existing objects, which can deoptimize JavaScript engines. It's better to set prototypes at creation time.
</details>

---

## 🎯 The Closing Notes

### 🏆 Key Takeaways:
1. **Prototypes** are the foundation of JavaScript inheritance
2. **Constructor functions** create objects with shared prototypes
3. **Classes** are syntactic sugar over prototypes
4. **Prototype chain** enables property inheritance
5. **Memory efficiency** is achieved through prototype methods

### 🚀 Best Practices:
- ✅ Use `Object.getPrototypeOf()` instead of `__proto__`
- ✅ Prefer `Object.create()` for setting prototypes
- ✅ Use classes for cleaner syntax
- ✅ Add methods to prototypes for memory efficiency
- ❌ Avoid `Object.setPrototypeOf()` for performance

---

## 📋 Common Interview Questions

<details>
<summary>🤔 Q1: What's the difference between `__proto__` and `prototype`?</summary>

**Answer:**
- `__proto__`: A property of all objects that points to the object's prototype
- `prototype`: A property of functions that becomes the `__proto__` of instances created with `new`

```javascript
function Person() {}
const john = new Person();

console.log(john.__proto__ === Person.prototype); // true
```
</details>

<details>
<summary>🤔 Q2: How does prototype chain work?</summary>

**Answer:**
When accessing a property, JavaScript searches:
1. Own properties first
2. Then up the prototype chain
3. Until found or reaches `null`

```javascript
const obj = { a: 1 };
console.log(obj.toString()); // Found in Object.prototype
```
</details>

<details>
<summary>🤔 Q3: What happens when you call a function with `new`?</summary>

**Answer:**
1. Creates a new empty object
2. Sets object's prototype to function's prototype
3. Binds `this` to the new object
4. Returns the new object (implicitly)

```javascript
function Person(name) {
    this.name = name;
}
const john = new Person("John"); // All 4 steps happen
```
</details>

<details>
<summary>🤔 Q4: How do you create an object without a prototype?</summary>

**Answer:**
Use `Object.create(null)`:

```javascript
const obj = Object.create(null);
console.log(obj.toString); // undefined (no inherited methods)
```
</details>

<details>
<summary>🤔 Q5: What's the difference between classical inheritance and prototypal inheritance?</summary>

**Answer:**
- **Classical**: Classes are templates, objects are instances
- **Prototypal**: Objects inherit directly from other objects, more flexible

JavaScript uses prototypal inheritance, even with class syntax.
</details>

---

## 🎯 Practice Tasks

### 📝 Task 1: Basic Prototype Understanding
```javascript
// Create a constructor function 'Vehicle' with properties 'brand' and 'year'
// Add a method 'getInfo' to the prototype that returns brand and year
// Create two instances and test the method

// Your code here...
```

<details>
<summary>💡 Solution</summary>

```javascript
function Vehicle(brand, year) {
    this.brand = brand;
    this.year = year;
}

Vehicle.prototype.getInfo = function() {
    return `${this.brand} ${this.year}`;
};

const car1 = new Vehicle("Toyota", 2020);
const car2 = new Vehicle("Honda", 2019);

console.log(car1.getInfo()); // "Toyota 2020"
console.log(car2.getInfo()); // "Honda 2019"
```
</details>

### 📝 Task 2: Prototype Chain
```javascript
// Create a prototype chain: Animal -> Dog -> Labrador
// Each level should have its own method
// Test method inheritance

// Your code here...
```

<details>
<summary>💡 Solution</summary>

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    return `${this.name} barks`;
};

function Labrador(name, color) {
    Dog.call(this, name, "Labrador");
    this.color = color;
}

Labrador.prototype = Object.create(Dog.prototype);
Labrador.prototype.constructor = Labrador;
Labrador.prototype.swim = function() {
    return `${this.name} swims`;
};

const myDog = new Labrador("Buddy", "Golden");
console.log(myDog.eat());  // "Buddy is eating"
console.log(myDog.bark()); // "Buddy barks"
console.log(myDog.swim()); // "Buddy swims"
```
</details>

### 📝 Task 3: Class Inheritance
```javascript
// Convert the above prototype chain to use ES6 classes
// Include proper constructor chaining with super()

// Your code here...
```

<details>
<summary>💡 Solution</summary>

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    bark() {
        return `${this.name} barks`;
    }
}

class Labrador extends Dog {
    constructor(name, color) {
        super(name, "Labrador");
        this.color = color;
    }
    
    swim() {
        return `${this.name} swims`;
    }
}

const myDog = new Labrador("Buddy", "Golden");
console.log(myDog.eat());  // "Buddy is eating"
console.log(myDog.bark()); // "Buddy barks"
console.log(myDog.swim()); // "Buddy swims"
```
</details>

### 📝 Task 4: Object.create() Pattern
```javascript
// Create a base object 'shape' with area() method
// Create specific shapes (circle, rectangle) using Object.create()
// Each shape should have its own area calculation

// Your code here...
```

<details>
<summary>💡 Solution</summary>

```javascript
const shape = {
    area: function() {
        return 0; // Default implementation
    },
    getInfo: function() {
        return `Shape with area: ${this.area()}`;
    }
};

const circle = Object.create(shape);
circle.radius = 5;
circle.area = function() {
    return Math.PI * this.radius * this.radius;
};

const rectangle = Object.create(shape);
rectangle.width = 10;
rectangle.height = 5;
rectangle.area = function() {
    return this.width * this.height;
};

console.log(circle.getInfo()); // "Shape with area: 78.54"
console.log(rectangle.getInfo()); // "Shape with area: 50"
```
</details>

### 📝 Task 5: Prototype Method Sharing
```javascript
// Create a Calculator constructor with basic operations
// Add methods to prototype for memory efficiency
// Test with multiple instances

// Your code here...
```

<details>
<summary>💡 Solution</summary>

```javascript
function Calculator(name) {
    this.name = name;
    this.result = 0;
}

Calculator.prototype.add = function(num) {
    this.result += num;
    return this;
};

Calculator.prototype.subtract = function(num) {
    this.result -= num;
    return this;
};

Calculator.prototype.multiply = function(num) {
    this.result *= num;
    return this;
};

Calculator.prototype.divide = function(num) {
    if (num !== 0) {
        this.result /= num;
    }
    return this;
};

Calculator.prototype.getResult = function() {
    return this.result;
};

Calculator.prototype.reset = function() {
    this.result = 0;
    return this;
};

const calc1 = new Calculator("Basic");
const calc2 = new Calculator("Advanced");

console.log(calc1.add(10).multiply(2).getResult()); // 20
console.log(calc2.add(5).subtract(3).divide(2).getResult()); // 1
console.log(calc1.add === calc2.add); // true (shared method)
```
</details>

### 📝 Task 6: Prototype Chain Debugging
```javascript
// Debug this code - find and fix the prototype chain issues
function Animal() {}
Animal.prototype.speak = function() { return "Sound"; };

function Dog() {}
Dog.prototype.speak = function() { return "Woof"; };

function Puppy() {}
Puppy.prototype.play = function() { return "Playing"; };

const myPuppy = new Puppy();
console.log(myPuppy.speak()); // Should work but doesn't
```

<details>
<summary>💡 Solution</summary>

```javascript
// Fixed version - proper prototype chain setup
function Animal() {}
Animal.prototype.speak = function() { return "Sound"; };

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function() { return "Woof"; };

function Puppy() {}
Puppy.prototype = Object.create(Dog.prototype);
Puppy.prototype.constructor = Puppy;
Puppy.prototype.play = function() { return "Playing"; };

const myPuppy = new Puppy();
console.log(myPuppy.speak()); // "Woof" - now works!
console.log(myPuppy.play()); // "Playing"
```
</details>

### 📝 Task 7: Mixed Patterns
```javascript
// Create a library management system using:
// 1. Constructor function for Book
// 2. Class for Library
// 3. Object.create() for SpecialBook
// Implement proper inheritance and method sharing

// Your code here...
```

<details>
<summary>💡 Solution</summary>

```javascript
// 1. Constructor function for Book
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isCheckedOut = false;
}

Book.prototype.checkOut = function() {
    this.isCheckedOut = true;
    return `${this.title} checked out`;
};

Book.prototype.returnBook = function() {
    this.isCheckedOut = false;
    return `${this.title} returned`;
};

Book.prototype.getInfo = function() {
    return `${this.title} by ${this.author}`;
};

// 2. Class for Library
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
        return `${book.title} added to ${this.name}`;
    }
    
    findBook(title) {
        return this.books.find(book => book.title === title);
    }
    
    getAvailableBooks() {
        return this.books.filter(book => !book.isCheckedOut);
    }
}

// 3. Object.create() for SpecialBook
const specialBookProto = Object.create(Book.prototype);
specialBookProto.reserve = function() {
    return `${this.title} reserved (special book)`;
};

function createSpecialBook(title, author, isbn, specialty) {
    const book = Object.create(specialBookProto);
    Book.call(book, title, author, isbn);
    book.specialty = specialty;
    return book;
}

// Usage
const library = new Library("City Library");
const book1 = new Book("1984", "George Orwell", "123456789");
const book2 = createSpecialBook("Rare Manuscript", "Unknown", "987654321", "Historical");

console.log(library.addBook(book1));
console.log(library.addBook(book2));
console.log(book1.checkOut());
console.log(book2.reserve());
console.log(library.getAvailableBooks().length); // 1
```
</details>

### 📝 Task 8: Prototype Performance
```javascript
// Create two versions of a Person constructor:
// Version 1: Methods in constructor (inefficient)
// Version 2: Methods in prototype (efficient)
// Compare memory usage conceptually

// Your code here...
```

<details>
<summary>💡 Solution</summary>

```javascript
// Version 1: Inefficient - methods in constructor
function PersonInefficient(name, age) {
    this.name = name;
    this.age = age;
    
    // Each instance gets its own copy of these methods
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
    
    this.getAge = function() {
        return this.age;
    };
}

// Version 2: Efficient - methods in prototype
function PersonEfficient(name, age) {
    this.name = name;
    this.age = age;
}

// All instances share these methods
PersonEfficient.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

PersonEfficient.prototype.getAge = function() {
    return this.age;
};

// Testing
const people1 = Array.from({length: 1000}, (_, i) => 
    new PersonInefficient(`Person${i}`, 20 + i)
);

const people2 = Array.from({length: 1000}, (_, i) => 
    new PersonEfficient(`Person${i}`, 20 + i)
);

// Memory comparison
console.log('Inefficient version: 1000 objects + 2000 methods (2 per instance)');
console.log('Efficient version: 1000 objects + 2 methods (shared via prototype)');

// Proof they work the same
console.log(people1[0].greet()); // "Hello, I'm Person0"
console.log(people2[0].greet()); // "Hello, I'm Person0"

// Proof of sharing (efficient version)
console.log(people2[0].greet === people2[999].greet); // true
console.log(people1[0].greet === people1[999].greet); // false
```
</details>

### 📝 Task 9: Advanced Prototype Manipulation
```javascript
// Create a plugin system where base functionality can be extended
// Use prototype manipulation to add features dynamically

// Your code here...
```

<details>
<summary>💡 Solution</summary>

```javascript
// Base App constructor
function App(name) {
    this.name = name;
    this.plugins = [];
}

App.prototype.start = function() {
    return `${this.name} starting...`;
};

App.prototype.addPlugin = function(plugin) {
    this.plugins.push(plugin);
    // Dynamically add plugin methods to prototype
    for (let method in plugin) {
        if (typeof plugin[method] === 'function') {
            App.prototype[method] = plugin[method];
        }
    }
    return `Plugin added: ${plugin.name || 'unnamed'}`;
};

// Plugin objects
const authPlugin = {
    name: 'Authentication',
    login: function(user) {
        return `${user} logged in to ${this.name}`;
    },
    logout: function() {
        return `Logged out from ${this.name}`;
    }
};

const cachePlugin = {
    name: 'Cache',
    cache: function(key, value) {
        return `Cached ${key}: ${value} in ${this.name}`;
    },
    getCached: function(key) {
        return `Retrieved ${key} from cache in ${this.name}`;
    }
};

// Usage
const myApp = new App("MyApp");
console.log(myApp.start()); // "MyApp starting..."

myApp.addPlugin(authPlugin);
console.log(myApp.login("John")); // "John logged in to MyApp"

myApp.addPlugin(cachePlugin);
console.log(myApp.cache("user", "John")); // "Cached user: John in MyApp"

// New instances also have the plugins
const anotherApp = new App("AnotherApp");
console.log(anotherApp.login("Jane")); // "Jane logged in to AnotherApp"
```
</details>

### 📝 Task 10: Real-world Scenario
```javascript
// Create a game character system with:
// - Base Character class
// - Warrior, Mage, Archer subclasses
// - Equipment system using composition
// - Skill system using prototype extension

// Your code here...
```

<details>
<summary>💡 Solution</summary>

```javascript
// Base Character class
class Character {
    constructor(name, health = 100) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.level = 1;
        this.equipment = {};
        this.skills = [];
    }
    
    attack() {
        return `${this.name} attacks for ${this.getAttackPower()} damage`;
    }
    
    getAttackPower() {
        return 10 + (this.level * 2);
    }
    
    heal(amount) {
        this.health = Math.min(this.health + amount, this.maxHealth);
        return `${this.name} healed for ${amount}. Health: ${this.health}`;
    }
    
    equipItem(slot, item) {
        this.equipment[slot] = item;
        return `${this.name} equipped ${item.name}`;
    }
    
    levelUp() {
        this.level++;
        this.maxHealth += 20;
        this.health = this.maxHealth;
        return `${this.name} leveled up to ${this.level}!`;
    }
}

// Warrior subclass
class Warrior extends Character {
    constructor(name) {
        super(name, 150); // More health
        this.rage = 0;
    }
    
    attack() {
        this.rage += 10;
        return `${this.name} attacks with sword for ${this.getAttackPower()} damage. Rage: ${this.rage}`;
    }
    
    getAttackPower() {
        return super.getAttackPower() + 5 + Math.floor(this.rage / 10);
    }
    
    berserkerRage() {
        this.rage = 100;
        return `${this.name} enters berserker rage!`;
    }
}

// Mage subclass
class Mage extends Character {
    constructor(name) {
        super(name, 80); // Less health
        this.mana = 100;
    }
    
    attack() {
        return `${this.name} casts spell for ${this.getAttackPower()} damage`;
    }
    
    getAttackPower() {
        return super.getAttackPower() + 8;
    }
    
    castFireball() {
        if (this.mana >= 20) {
            this.mana -= 20;
            return `${this.name} casts Fireball for ${this.getAttackPower() * 2} damage!`;
        }
        return `${this.name} doesn't have enough mana`;
    }
}

// Archer subclass
class Archer extends Character {
    constructor(name) {
        super(name, 100);
        this.arrows = 30;
    }
    
    attack() {
        if (this.arrows > 0) {
            this.arrows--;
            return `${this.name} shoots arrow for ${this.getAttackPower()} damage. Arrows: ${this.arrows}`;
        }
        return `${this.name} is out of arrows!`;
    }
    
    getAttackPower() {
        return super.getAttackPower() + 3;
    }
    
    multiShot() {
        if (this.arrows >= 3) {
            this.arrows -= 3;
            return `${this.name} uses Multi-Shot for ${this.getAttackPower() * 3} damage!`;
        }
        return `${this.name} needs 3 arrows for Multi-Shot`;
    }
}

// Equipment system using composition
function createItem(name, type, stats) {
    return {
        name,
        type,
        stats,
        use: function() {
            return `Used ${this.name}`;
        }
    };
}

// Skill system using prototype extension
const skillSystem = {
    addSkill: function(skill) {
        this.skills.push(skill);
        return `${this.name} learned ${skill.name}`;
    },
    
    useSkill: function(skillName) {
        const skill = this.skills.find(s => s.name === skillName);
        if (skill) {
            return skill.effect.call(this);
        }
        return `${this.name} doesn't know ${skillName}`;
    }
};

// Add skill system to all characters
Object.assign(Character.prototype, skillSystem);

// Define some skills
const skills = {
    doubleStrike: {
        name: "Double Strike",
        effect: function() {
            return `${this.name} performs Double Strike for ${this.getAttackPower() * 2} damage!`;
        }
    },
    heal: {
        name: "Heal",
        effect: function() {
            return this.heal(30);
        }
    }
};

// Usage example
const warrior = new Warrior("Conan");
const mage = new Mage("Gandalf");
const archer = new Archer("Legolas");

console.log(warrior.attack()); // "Conan attacks with sword for 17 damage. Rage: 10"
console.log(mage.castFireball()); // "Gandalf casts Fireball for 38 damage!"
console.log(archer.multiShot()); // "Legolas uses Multi-Shot for 39 damage!"

// Equipment
const sword = createItem("Excalibur", "weapon", { attack: 20 });
console.log(warrior.equipItem("weapon", sword)); // "Conan equipped Excalibur"

// Skills
console.log(warrior.addSkill(skills.doubleStrike)); // "Conan learned Double Strike"
console.log(warrior.useSkill("Double Strike")); // "Conan performs Double Strike for 34 damage!"

// Leveling up
console.log(mage.levelUp()); // "Gandalf leveled up to 2!"
```
</details>

---

## 🎯 Final Assessment Quiz

### 📚 Test Your Knowledge (10 Questions)

1. **What is the main difference between `__proto__` and `prototype`?**
   - A) They are the same thing
   - B) `__proto__` is for objects, `prototype` is for functions
   - C) `__proto__` is newer syntax
   - D) `prototype` is deprecated

2. **When you create an object with `new`, what happens first?**
   - A) The function is called
   - B) A new empty object is created
   - C) `this` is bound
   - D) The prototype is set

3. **How many `greet` methods exist in memory with this code?**
   ```javascript
   function Person(name) { this.name = name; }
   Person.prototype.greet = function() { return "Hello"; };
   const p1 = new Person("John");
   const p2 = new Person("Jane");
   ```
   - A) 0
   - B) 1
   - C) 2
   - D) 3

4. **What does `Object.create(null)` create?**
   - A) An empty object with Object.prototype
   - B) An object with no prototype
   - C) A null value
   - D) An error

5. **In class inheritance, what does `super()` do?**
   - A) Creates a new object
   - B) Calls the parent constructor
   - C) Sets the prototype
   - D) Returns the parent class

6. **Which is the most efficient way to add methods to objects?**
   - A) In the constructor function
   - B) Using Object.assign()
   - C) On the prototype
   - D) As static methods

7. **What happens in prototype chain lookup?**
   - A) Searches from parent to child
   - B) Searches from child to parent
   - C) Searches all objects simultaneously
   - D) Searches randomly

8. **Which method is recommended for getting an object's prototype?**
   - A) `obj.__proto__`
   - B) `obj.prototype`
   - C) `Object.getPrototypeOf(obj)`
   - D) `obj.constructor.prototype`

9. **What's the relationship between ES6 classes and prototypes?**
   - A) Classes replace prototypes
   - B) Classes are syntactic sugar over prototypes
   - C) Classes and prototypes are unrelated
   - D) Prototypes are deprecated

10. **Why should you avoid `Object.setPrototypeOf()`?**
    - A) It's not supported
    - B) It's deprecated
    - C) It can cause performance issues
    - D) It doesn't work with classes

<details>
<summary>🎯 Answer Key</summary>

1. **B** - `__proto__` is a property of objects pointing to their prototype, `prototype` is a property of functions used for instances
2. **B** - First, a new empty object is created
3. **B** - Only 1 method exists, shared via prototype
4. **B** - Creates an object with no prototype (no inherited methods)
5. **B** - Calls the parent constructor
6. **C** - On the prototype for memory efficiency
7. **B** - Searches from child to parent up the chain
8. **C** - `Object.getPrototypeOf()` is the recommended method
9. **B** - Classes are syntactic sugar over the prototype system
10. **C** - It can cause performance issues by changing existing prototype chains

**Scoring:**
- 9-10: 🏆 Prototype Master!
- 7-8: 🎯 Almost there!
- 5-6: 📚 Need more practice
- 0-4: 🔄 Review the concepts again
</details>

---

<div align = "center">

#### Keep coding and stay curious! 🌟


##### *Understanding prototypes is like understanding the DNA of JavaScript objects - once you get it, everything else makes sense!* 💡

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
<p>📆 <em>Next: Day - 32: Master JavaScript Modules: import, export, and Organize Like a Pro! 🤩 </em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>

</div>

