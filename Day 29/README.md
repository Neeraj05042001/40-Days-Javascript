# 🎯 Object Oriented Programming (OOP) Explained with Real-Life Analogies

<div align="center">

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)
[![OOPs](https://img.shields.io/badge/OOPS-blue?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

</div>

---
> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 💼 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦 | [GitHub: Neeraj05042001](https://github.com/Neeraj05042001) 🐙* |

## 📚 Things to Learn Today

Today we'll explore the fascinating world of Object-Oriented Programming (OOP) in JavaScript! We'll understand how programming concepts mirror real-world scenarios and learn the five fundamental principles that make code more organized, reusable, and maintainable.

**Learning Objectives:**
- 🎯 Understand Objects, Classes, and Functions
- 🏗️ Master OOP principles with real-world analogies
- 🔧 Apply OOP concepts in JavaScript
- 🌟 Build maintainable and scalable code

---

## 🧩 Objects

**Definition:** An object is a collection of related data (properties) and functionality (methods) that represents a real-world entity or concept.

### Creating Objects

#### 1. Object Literal Syntax
```javascript
const person = {
    name: "John",
    age: 25,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};
```

#### 2. Constructor Function
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

const john = new Person("John", 25);
```

#### 3. Object.create()
```javascript
const personPrototype = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

const person = Object.create(personPrototype);
person.name = "John";
person.age = 25;
```

### 🌟 Real-Life Analogy
Think of a **smartphone** 📱:
- **Properties**: brand, model, color, battery percentage, storage
- **Methods**: makeCall(), sendMessage(), takePicture(), playMusic()


### 💻 JavaScript Example
```javascript
const smartphone = {
    // Properties (data)
    brand: "iPhone",
    model: "15 Pro",
    color: "Space Gray",
    batteryPercentage: 85,
    storage: "256GB",
    
    // Methods (functionality)
    makeCall: function(number) {
        return `Calling ${number}...`;
    },
    
    sendMessage: function(contact, message) {
        return `Message sent to ${contact}: ${message}`;
    },
    
    takePicture: function() {
        return "📸 Picture taken!";
    }
};

console.log(smartphone.brand); // iPhone
console.log(smartphone.makeCall("123-456-7890")); // Calling 123-456-7890...
```

### 🧠 Knowledge Check
<details>
<summary><strong>Q: What's the difference between properties and methods in an object?</strong></summary>

**Answer:** 
- **Properties** are the data/characteristics of an object (like `brand`, `color`)
- **Methods** are the actions/functions that the object can perform (like `makeCall()`, `sendMessage()`)
</details>


### 🧠 Knowledge Check: Objects
<details>
<summary>What are the three ways to create objects in JavaScript?</summary>

1. **Object Literal Syntax**: `const obj = {}`
2. **Constructor Function**: `function Obj() {}` with `new Obj()`
3. **Object.create()**: `Object.create(prototype)`
</details>

---

## 🏗️ Classes

**Definition:** A class is a blueprint or template for creating objects with similar properties and methods. It defines the structure and behavior that objects of that type will have.

### 🌟 Real-Life Analogy
Think of a **house blueprint** 🏠:
- The blueprint defines: rooms, doors, windows, roof
- Each house built from this blueprint will have the same structure
- But each house can have different colors, furniture, or decorations


### Class Syntax (ES6+)
```javascript
class Person {
    // Constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    // Static method
    static getSpecies() {
        return "Homo sapiens";
    }
}

// Creating instances
const john = new Person("John", 25);
const jane = new Person("Jane", 30);
```

### 💻 JavaScript Example
```javascript
class Car {
    // Constructor - runs when creating new object
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.speed = 0;
    }
    
    // Methods
    startEngine() {
        return `${this.brand} ${this.model} engine started! 🚗`;
    }
    
    accelerate(increment) {
        this.speed += increment;
        return `Speed: ${this.speed} km/h`;
    }
    
    brake() {
        this.speed = 0;
        return "Car stopped! 🛑";
    }
}

// Creating objects from the class
const car1 = new Car("Toyota", "Camry", "White");
const car2 = new Car("Honda", "Civic", "Black");

console.log(car1.startEngine()); // Toyota Camry engine started! 🚗
console.log(car1.accelerate(50)); // Speed: 50 km/h
```

### 🧠 Knowledge Check
<details>
<summary><strong>Q: What is a constructor in a class?</strong></summary>

**Answer:** A constructor is a special method that runs automatically when a new object is created from a class. It's used to initialize the object's properties with values passed during object creation.
</details>

<details>
<summary><strong>Q: What is the difference between a class and an object?</strong></summary>

- **Class**: A blueprint or template that defines the structure and behavior
- **Object**: An actual instance created from the class with specific values
- Analogy: Class is like a cookie cutter, Object is like the actual cookie
</details>

---

## ⚙️ Functions

**Definition:** Functions are reusable blocks of code that perform specific tasks. In OOP context, functions become methods when they're part of objects or classes.

- **Function**: Standalone piece of code that performs a task.
- **Method**: A function that belongs to an object or class.

### 🌟 Real-Life Analogy
Think of a **coffee machine** ☕:
- **Input**: Coffee beans, water, milk
- **Process**: Grind, heat, mix
- **Output**: Your favorite coffee

### Types of Methods

#### 1. Instance Methods
```javascript
class Calculator {
    add(a, b) {
        return a + b; // Called on instances
    }
}

const calc = new Calculator();
calc.add(5, 3); // 8
```

#### 2. Static Methods
```javascript
class MathUtils {
    static multiply(a, b) {
        return a * b; // Called on the class itself
    }
}

MathUtils.multiply(4, 5); // 20
```

### 💻 JavaScript Example
```javascript
// Regular function
function calculateArea(length, width) {
    return length * width;
}

// Function as a method in an object
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    
    multiply: function(a, b) {
        return a * b;
    },
    
    calculateCircleArea: function(radius) {
        return Math.PI * radius * radius;
    }
};

console.log(calculateArea(5, 3)); // 15
console.log(calculator.add(10, 5)); // 15
console.log(calculator.calculateCircleArea(3)); // 28.27
```

---

## 🎯 Object Oriented Programming (OOP)

**Definition:** OOP is a programming paradigm that organizes code around objects and classes rather than functions and logic. It helps create modular, reusable, and maintainable code by modeling real-world entities.

### 🌟 Why OOP is Important?

1. **🔄 Reusability**: Write once, use multiple times
2. **🛡️ Security**: Control access to data
3. **🧩 Modularity**: Break complex problems into smaller parts
4. **🔧 Maintainability**: Easy to update and debug
5. **👥 Collaboration**: Multiple developers can work on different classes


### 🧠 Knowledge Check: OOP Benefits
<details>
<summary>Name three main benefits of using OOP?</summary>

1. **Code Reusability**: Classes can be reused to create multiple objects
2. **Better Organization**: Related data and functions are grouped together
3. **Easier Maintenance**: Changes to a class affect all instances automatically
</details>


### 💻 Real-World Structure Example
```javascript
// City structure using OOP thinking
/*
City 🏙️
├── Houses 🏠
│   ├── Roof
│   ├── Doors
│   └── Windows
├── Cars 🚗
│   ├── Model
│   ├── Brand
│   ├── Color
│   └── Wheels
├── People 👥
├── Hospitals 🏥
└── Roads 🛣️
*/
```

---

## 🌍 Real-world Examples of OOP

### 1. 🎮 Game Development
```javascript
class Player {
    constructor(name, health, level) {
        this.name = name;
        this.health = health;
        this.level = level;
    }
    
    attack(enemy) {
        return `${this.name} attacks ${enemy.name}!`;
    }
}

class Enemy {
    constructor(type, health, damage) {
        this.type = type;
        this.health = health;
        this.damage = damage;
    }
}
```

### 2. 🛒 E-commerce Website
```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.cart = [];
    }
    
    addToCart(product) {
        this.cart.push(product);
    }
}

class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
```

### 3. 🏦 Banking Software

```javascript
class BankAccount {
    constructor(accountNumber, ownerName, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance: $${this.balance}`;
        }
        return "Invalid amount";
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.balance}`;
        }
        return "Invalid amount or insufficient funds";
    }
    
    getBalance() {
        return this.balance;
    }
}
```

### 🧠 Knowledge Check: Real-world Examples
<details>
<summary>How would you model a "Library Book" using OOP concepts?</summary>

```javascript
class LibraryBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
        this.borrower = null;
    }
    
    borrow(borrowerName) {
        if (this.isAvailable) {
            this.isAvailable = false;
            this.borrower = borrowerName;
            return `Book borrowed by ${borrowerName}`;
        }
        return "Book is not available";
    }
    
    return() {
        this.isAvailable = true;
        this.borrower = null;
        return "Book returned successfully";
    }
}
```
</details>


---

## 🎭 The Five Pillars of OOP

## 1. 🎪 Abstraction

**Definition:** **Abstraction** means hiding complex implementation details and showing only the essential features of an object. It's like using a TV remote - you don't need to know how it works internally, just which buttons to press.

### 🌟 Real-Life Analogy
When you drive a car 🚗, you use:
- **Steering wheel** to turn
- **Accelerator** to speed up
- **Brake** to slow down

You don't need to know how the engine combusts fuel or how the transmission works!

### 💻 JavaScript Example
```javascript
class ATM {
    #bankConnection; // Private property
    #securitySystem; // Private property
    
    constructor() {
        this.#bankConnection = "Connected to Bank Server";
        this.#securitySystem = "Active";
    }
    
    // Public interface - user only sees these methods
    withdrawMoney(amount, pin) {
        if (this.#validatePin(pin)) {
            return this.#processWithdrawal(amount);
        }
        return "Invalid PIN";
    }
    
    checkBalance(pin) {
        if (this.#validatePin(pin)) {
            return "Your balance is $1,500";
        }
        return "Invalid PIN";
    }
    
    // Private methods - hidden from user
    #validatePin(pin) {
        // Complex validation logic hidden
        return pin === "1234";
    }
    
    #processWithdrawal(amount) {
        // Complex banking logic hidden
        return `Dispensing $${amount}`;
    }
}

const atm = new ATM();
console.log(atm.withdrawMoney(100, "1234")); // Dispensing $100
// atm.#validatePin("1234"); // Error! Private method not accessible
```

### 🧠 Knowledge Check
<details>
<summary><strong>Q: What's the benefit of abstraction in programming?</strong></summary>

**Answer:** **Abstraction** simplifies complex systems by:
- Hiding implementation details
- Providing a simple interface to interact with
- Reducing complexity for the user
- Making code more maintainable

Example: You don't need to know how `Array.sort()` works internally, just how to use it.
</details>

---

## 2. 📦 Encapsulation

**Definition:** 

**Encapsulation** is the bundling of data and methods that operate on that data within a single unit (class), and restricting access to some of the object's components. It's like a capsule that protects the medicine inside.

### 🌟 Real-Life Analogy
Think of a **medicine capsule** 💊:
- The active ingredients are protected inside
- You can't directly access or modify the medicine
- You interact with it through a controlled interface (swallowing it)

### 💻 JavaScript Example
```javascript
class BankAccount {
    #balance; // Private property
    #pin; // Private property
    
    constructor(initialBalance, pin) {
        this.#balance = initialBalance;
        this.#pin = pin;
        this.accountNumber = Math.random().toString().substr(2, 8);
    }
    
    // Public methods - controlled access
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited $${amount}. New balance: $${this.#balance}`;
        }
        return "Invalid amount";
    }
    
    withdraw(amount, pin) {
        if (this.#validatePin(pin) && amount <= this.#balance && amount > 0) {
            this.#balance -= amount;
            return `Withdrawn $${amount}. Remaining balance: $${this.#balance}`;
        }
        return "Transaction failed";
    }
    
    getBalance(pin) {
        if (this.#validatePin(pin)) {
            return `Your balance is $${this.#balance}`;
        }
        return "Access denied";
    }
    
    // Private method
    #validatePin(pin) {
        return pin === this.#pin;
    }
}

const account = new BankAccount(1000, "1234");
console.log(account.deposit(500)); // Deposited $500. New balance: $1500
console.log(account.getBalance("1234")); // Your balance is $1500
// console.log(account.#balance); // Error! Cannot access private property
```

### Benefits of Encapsulation 🛡️
1. **Data Protection**: Prevents unauthorized access
2. **Controlled Access**: Data can only be modified through defined methods
3. **Maintainability**: Internal implementation can change without affecting external code
4. **Validation**: Can validate data before setting it


### 🧠 Knowledge Check
<details>
<summary><strong>Q: How does encapsulation improve security?</strong></summary>

**Answer:** Encapsulation prevents direct access to sensitive data by making properties private. External code can only interact with the object through public methods, which can include validation and security checks.


</details>

<details>
<summary><strong>How do you create private fields in modern JavaScript?</strong></summary>

Use the `#` symbol before the field name:
```javascript
class MyClass {
    #privateField = "secret";
    
    getPrivateField() {
        return this.#privateField;
    }
}
```
</details>

---

## 3. 👨‍👩‍👧‍👦 Inheritance

**Definition:** Inheritance allows one class (child) to inherit properties and methods from another class (parent), promoting code reuse and establishing relationships between classes.

### 🌟 Real-Life Analogy
Think of **family traits** 👨‍👩‍👧‍👦:
- Children inherit characteristics from parents (eye color, height)
- They also develop their own unique traits
- The family shares common behaviors but each member is unique

### 💻 JavaScript Example
```javascript
// Parent class
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    
    start() {
        return `${this.brand} ${this.model} is starting...`;
    }
    
    accelerate(increment) {
        this.speed += increment;
        return `Speed: ${this.speed} km/h`;
    }
    
    getInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

// Child class - inherits from Vehicle
class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year); // Call parent constructor
        this.doors = doors;
        this.fuelType = "Gasoline";
    }
    
    // Override parent method
    start() {
        return `${super.start()} 🚗 Car engine roaring!`;
    }
    
    // New method specific to Car
    openTrunk() {
        return "Trunk opened! 🚗";
    }
}

// Another child class
class Motorcycle extends Vehicle {
    constructor(brand, model, year, engineSize) {
        super(brand, model, year);
        this.engineSize = engineSize;
        this.hasWindshield = false;
    }
    
    start() {
        return `${super.start()} 🏍️ Motorcycle revving!`;
    }
    
    wheelie() {
        return "Performing wheelie! 🏍️";
    }
}

const myCar = new Car("Toyota", "Camry", 2023, 4);
const myBike = new Motorcycle("Harley", "Sportster", 2022, "883cc");

console.log(myCar.start()); // Toyota Camry is starting... 🚗 Car engine roaring!
console.log(myBike.start()); // Harley Sportster is starting... 🏍️ Motorcycle revving!
console.log(myCar.getInfo()); // 2023 Toyota Camry (inherited method)
```

### 🧠 Knowledge Check
<details>
<summary><strong>Q: What's the difference between `super()` and `this` in inheritance?</strong></summary>

**Answer:** 
- `super()` calls the parent class constructor or methods
- `this` refers to the current object instance
- `super()` must be called before using `this` in a child constructor
</details>

---

## 4. 🎭 Polymorphism

**Definition:** Polymorphism means "many forms" - it allows objects of different classes to be treated as the same type, but behave differently based on their specific implementation.

### 🌟 Real-Life Analogy
Think of **musical instruments** 🎵:
- All can "play music" but each sounds different
- Piano plays music differently than guitar
- Same action ("play"), different results

### 💻 JavaScript Example
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    makeSound() {
        return "Some generic animal sound";
    }
    
    move() {
        return `${this.name} is moving`;
    }
}

class Dog extends Animal {
    makeSound() {
        return `${this.name} says: Woof! Woof! 🐕`;
    }
    
    move() {
        return `${this.name} is running on four legs 🐕`;
    }
}

class Cat extends Animal {
    makeSound() {
        return `${this.name} says: Meow! Meow! 🐱`;
    }
    
    move() {
        return `${this.name} is gracefully walking 🐱`;
    }
}

class Bird extends Animal {
    makeSound() {
        return `${this.name} says: Tweet! Tweet! 🐦`;
    }
    
    move() {
        return `${this.name} is flying high 🐦`;
    }
}

// Polymorphism in action
const animals = [
    new Dog("Buddy"),
    new Cat("Whiskers"),
    new Bird("Tweety")
];

// Same method call, different behaviors
animals.forEach(animal => {
    console.log(animal.makeSound());
    console.log(animal.move());
    console.log("---");
});

/* Output:
Buddy says: Woof! Woof! 🐕
Buddy is running on four legs 🐕
---
Whiskers says: Meow! Meow! 🐱
Whiskers is gracefully walking 🐱
---
Tweety says: Tweet! Tweet! 🐦
Tweety is flying high 🐦
---
*/
```

### 🧠 Knowledge Check
<details>
<summary><strong>Q: How does polymorphism make code more flexible?</strong></summary>

**Answer:** Polymorphism allows you to write code that works with the parent class but automatically uses the correct child class behavior. You can add new classes without changing existing code that uses them.
</details>

<details>
<summary><strong>Q; What is the main advantage of polymorphism?</strong></summary>

**Polymorphism** allows:
- Writing code that works with objects of multiple types
- Adding new types without changing existing code
- Treating different objects uniformly through a common interface
- More flexible and extensible code design
</details>

---

## 5. 🧱 Composition

**Definition:** **Composition** is an alternative to inheritance where you build complex objects by combining simpler ones. It follows the principle "has-a" rather than "is-a".

### 🌟 Real-Life Analogy
Think of a **computer** 💻:
- Has-a CPU, RAM, hard drive, keyboard, monitor
- Each component can be replaced independently
- Computer is composed of these parts working together

### 💻 JavaScript Example
```javascript
// Component classes
class Engine {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }
    
    start() {
        return `${this.type} engine started (${this.horsepower} HP)`;
    }
}

class GPS {
    constructor(brand) {
        this.brand = brand;
    }
    
    navigate(destination) {
        return `${this.brand} GPS: Navigating to ${destination}`;
    }
}

class MusicSystem {
    constructor(brand) {
        this.brand = brand;
        this.currentSong = "No song playing";
    }
    
    playMusic(song) {
        this.currentSong = song;
        return `🎵 Now playing: ${song} on ${this.brand} system`;
    }
}

// Main class using composition
class ModernCar {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        
        // Composition - "has-a" relationship
        this.engine = new Engine("V6", 300);
        this.gps = new GPS("Garmin");
        this.musicSystem = new MusicSystem("Bose");
    }
    
    startCar() {
        return this.engine.start();
    }
    
    goTo(destination) {
        return this.gps.navigate(destination);
    }
    
    playMusic(song) {
        return this.musicSystem.playMusic(song);
    }
    
    getCarInfo() {
        return `${this.brand} ${this.model} with ${this.engine.type} engine`;
    }
}

const myCar = new ModernCar("BMW", "X5");
console.log(myCar.startCar()); // V6 engine started (300 HP)
console.log(myCar.goTo("New York")); // Garmin GPS: Navigating to New York
console.log(myCar.playMusic("Bohemian Rhapsody")); // 🎵 Now playing: Bohemian Rhapsody on Bose system
```

### Benefits of Composition 🎯
1. **Flexibility**: Can mix and match behaviors
2. **Avoid Deep Inheritance**: No complex inheritance hierarchies
3. **Runtime Changes**: Can add/remove behaviors dynamically
4. **Better Testing**: Individual components can be tested separately

### 🧠 Knowledge Check
<details>
<summary><strong>Q: When should you use composition over inheritance?</strong></summary>

**Answer:** Use composition when objects have a "has-a" relationship rather than "is-a". Composition is more flexible because you can change components independently and avoid complex inheritance hierarchies.
</details>

---

## 🔄 Quick Recap

### 📋 The Five OOP Principles Summary:

1. **🎪 Abstraction** → Hide complexity, expose interface
2. **📦 Encapsulation** → Bundle + protect state
3. **👨‍👩‍👧‍👦 Inheritance** → Share logic across classes
4. **🎭 Polymorphism** → Same method, different behaviors
5. **🧱 Composition** → Build by combining units

### 💡 Key Relationships:
- **Inheritance**: "is-a" relationship (Car **is-a** Vehicle)
- **Composition**: "has-a" relationship (Car **has-a** Engine)

---

## 🎤 Common Interview Questions

<details>
<summary><strong>Q1: What are the main advantages of OOP?</strong></summary>

**Answer:**
1. **Reusability**: Code can be reused through inheritance and composition
2. **Modularity**: Complex problems broken into smaller, manageable parts
3. **Maintainability**: Easier to update and debug
4. **Security**: Encapsulation protects data
5. **Scalability**: Easy to add new features without affecting existing code
</details>

<details>
<summary><strong>Q2: Explain the difference between inheritance and composition.</strong></summary>

**Answer:**
- **Inheritance (is-a)**: Child class inherits from parent class. Creates tight coupling.
- **Composition (has-a)**: Class contains objects of other classes. Creates loose coupling and is more flexible.

Example: 
- Inheritance: `Dog extends Animal` (Dog is-a Animal)
- Composition: `Car has Engine` (Car has-a Engine)
</details>

<details>
<summary><strong>Q3: What is method overriding in JavaScript?</strong></summary>

**Answer:**
Method overriding is when a child class provides a different implementation of a method that exists in the parent class. The child's version "overrides" the parent's version.

```javascript
class Parent {
    greet() { return "Hello from Parent"; }
}

class Child extends Parent {
    greet() { return "Hello from Child"; } // Overrides parent method
}
```
</details>

<details>
<summary><strong>Q4: How do you achieve private properties in JavaScript classes?</strong></summary>

**Answer:**
Use the `#` symbol before property or method names to make them private:

```javascript
class MyClass {
    #privateProperty = "secret";
    
    #privateMethod() {
        return "private";
    }
    
    publicMethod() {
        return this.#privateProperty; // Can access private members internally
    }
}
```
</details>

<details>
<summary><strong>Q5: What is the purpose of the `super` keyword?</strong></summary>

**Answer:**
The `super` keyword is used to:
1. Call the parent class constructor: `super()`
2. Access parent class methods: `super.methodName()`
3. Must be called before using `this` in child constructor

```javascript
class Child extends Parent {
    constructor(name) {
        super(); // Call parent constructor
        this.name = name;
    }
    
    method() {
        return super.method() + " additional text";
    }
}
```
</details>

---

## 🚀 Practice Tasks

### Task 1: Basic Class Creation
Create a `Book` class with properties: title, author, pages, isRead. Add methods to mark as read and get book info.

<details>
<summary><strong>Solution</strong></summary>

```javascript
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;
    }
    
    markAsRead() {
        this.isRead = true;
        return `"${this.title}" marked as read!`;
    }
    
    getInfo() {
        const status = this.isRead ? "Read" : "Not read";
        return `"${this.title}" by ${this.author} (${this.pages} pages) - ${status}`;
    }
}

const book1 = new Book("1984", "George Orwell", 328);
console.log(book1.getInfo());
console.log(book1.markAsRead());
console.log(book1.getInfo());
```
</details>

### Task 2: Inheritance Challenge
Create a `Person` class and extend it with `Student` and `Teacher` classes. Each should have unique methods.

<details>
<summary><strong>Solution</strong></summary>

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
        this.courses = [];
    }
    
    enrollCourse(course) {
        this.courses.push(course);
        return `${this.name} enrolled in ${course}`;
    }
    
    introduce() {
        return `${super.introduce()} I'm a grade ${this.grade} student.`;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
        this.students = [];
    }
    
    addStudent(student) {
        this.students.push(student);
        return `${student} added to ${this.name}'s class`;
    }
    
    introduce() {
        return `${super.introduce()} I teach ${this.subject}.`;
    }
}
```
</details>

### Task 3: Encapsulation Practice
Create a `BankAccount` class with private balance and methods for deposit, withdraw, and balance inquiry.

<details>
<summary><strong>Solution</strong></summary>

```javascript
class BankAccount {
    #balance;
    #accountNumber;
    
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
        this.#accountNumber = Math.random().toString(36).substr(2, 9);
        this.ownerName = "";
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited $${amount}. New balance: $${this.#balance}`;
        }
        return "Invalid deposit amount";
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrawn $${amount}. Remaining balance: $${this.#balance}`;
        }
        return "Insufficient funds or invalid amount";
    }
    
    getBalance() {
        return `Current balance: $${this.#balance}`;
    }
    
    getAccountInfo() {
        return `Account: ${this.#accountNumber}, Owner: ${this.ownerName}`;
    }
}
```
</details>

### Task 4: Polymorphism Implementation
Create different shape classes that all have a `calculateArea()` method but implement it differently.

<details>
<summary><strong>Solution</strong></summary>

```javascript
class Shape {
    calculateArea() {
        return "Area calculation not implemented";
    }
    
    getInfo() {
        return `This is a ${this.constructor.name}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    calculateArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    
    calculateArea() {
        return (this.base * this.height) / 2;
    }
}

// Polymorphism in action
const shapes = [
    new Rectangle(5, 3),
    new Circle(4),
    new Triangle(6, 8)
];

shapes.forEach(shape => {
    console.log(`${shape.getInfo()}: Area = ${shape.calculateArea()}`);
});
```
</details>

### Task 5: Composition Challenge
Create a `Computer` class that uses composition with `CPU`, `RAM`, and `Storage` components.

<details>
<summary><strong>Solution</strong></summary>

```javascript
class CPU {
    constructor(brand, cores, frequency) {
        this.brand = brand;
        this.cores = cores;
        this.frequency = frequency;
    }
    
    getSpecs() {
        return `${this.brand} ${this.cores}-core at ${this.frequency}GHz`;
    }
}

class RAM {
    constructor(size, type) {
        this.size = size;
        this.type = type;
    }
    
    getSpecs() {
        return `${this.size}GB ${this.type}`;
    }
}

class Storage {
    constructor(capacity, type) {
        this.capacity = capacity;
        this.type = type;
    }
    
    getSpecs() {
        return `${this.capacity}GB ${this.type}`;
    }
}

class Computer {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.cpu = null;
        this.ram = null;
        this.storage = null;
        this.isOn = false;
    }
    
    addCPU(cpu) {
        this.cpu = cpu;
        return "CPU installed";
    }
    
    addRAM(ram) {
        this.ram = ram;
        return "RAM installed";
    }
    
    addStorage(storage) {
        this.storage = storage;
        return "Storage installed";
    }
    
    powerOn() {
        if (this.cpu && this.ram && this.storage) {
            this.isOn = true;
            return `${this.brand} ${this.model} powered on!`;
        }
        return "Cannot power on - missing components";
    }
    
    getSpecs() {
        return {
            computer: `${this.brand} ${this.model}`,
            cpu: this.cpu ? this.cpu.getSpecs() : "No CPU",
            ram: this.ram ? this.ram.getSpecs() : "No RAM",
            storage: this.storage ? this.storage.getSpecs() : "No Storage"
        };
    }
}

// Usage
const myPC = new Computer("Dell", "XPS");
myPC.addCPU(new CPU("Intel i7", 8, 3.2));
myPC.addRAM(new RAM(16, "DDR4"));
myPC.addStorage(new Storage(512, "SSD"));

console.log(myPC.powerOn()); // Dell XPS powered on!
console.log(myPC.getSpecs());
```
</details>

### Task 6: Real-World Application
Create a simple library management system using OOP principles.

<details>
<summary><strong>Solution</strong></summary>

```javascript
class Book {
    constructor(isbn, title, author, year) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
        this.borrowedBy = null;
        this.borrowedDate = null;
    }
    
    getInfo() {
        return `"${this.title}" by ${this.author} (${this.year})`;
    }
}

class Member {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
        this.memberSince = new Date();
    }
    
    getInfo() {
        return `${this.name} (ID: ${this.id}) - Books borrowed: ${this.borrowedBooks.length}`;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
        this.members = [];
        this.transactions = [];
    }
    
    addBook(book) {
        this.books.push(book);
        return `Book "${book.title}" added to ${this.name}`;
    }
    
    addMember(member) {
        this.members.push(member);
        return `Member ${member.name} registered`;
    }
    
    borrowBook(memberId, isbn) {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.isbn === isbn);
        
        if (!member) return "Member not found";
        if (!book) return "Book not found";
        if (!book.isAvailable) return "Book is already borrowed";
        
        // Update book status
        book.isAvailable = false;
        book.borrowedBy = member.id;
        book.borrowedDate = new Date();
        
        // Update member record
        member.borrowedBooks.push(isbn);
        
        // Record transaction
        this.transactions.push({
            type: 'borrow',
            memberId,
            isbn,
            date: new Date()
        });
        
        return `"${book.title}" borrowed by ${member.name}`;
    }
    
    returnBook(memberId, isbn) {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.isbn === isbn);
        
        if (!member || !book) return "Member or Book not found";
        if (book.borrowedBy !== memberId) return "Book not borrowed by this member";
        
        // Update book status
        book.isAvailable = true;
        book.borrowedBy = null;
        book.borrowedDate = null;
        
        // Update member record
        member.borrowedBooks = member.borrowedBooks.filter(b => b !== isbn);
        
        // Record transaction
        this.transactions.push({
            type: 'return',
            memberId,
            isbn,
            date: new Date()
        });
        
        return `"${book.title}" returned by ${member.name}`;
    }
    
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }
    
    getMemberBooks(memberId) {
        const member = this.members.find(m => m.id === memberId);
        if (!member) return "Member not found";
        
        return member.borrowedBooks.map(isbn => 
            this.books.find(book => book.isbn === isbn)
        );
    }
}

// Usage Example
const cityLibrary = new Library("City Central Library");

// Add books
const book1 = new Book("978-1", "The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("978-2", "To Kill a Mockingbird", "Harper Lee", 1960);
cityLibrary.addBook(book1);
cityLibrary.addBook(book2);

// Add members
const member1 = new Member("M001", "John Doe", "john@email.com");
const member2 = new Member("M002", "Jane Smith", "jane@email.com");
cityLibrary.addMember(member1);
cityLibrary.addMember(member2);

// Borrow and return books
console.log(cityLibrary.borrowBook("M001", "978-1"));
console.log(cityLibrary.returnBook("M001", "978-1"));
```
</details>

### Task 7: Advanced OOP - Abstract Classes Pattern
Create an abstract-like class structure for different types of employees.

<details>
<summary><strong>Solution</strong></summary>

```javascript
// Base "abstract" class (JavaScript doesn't have true abstract classes)
class Employee {
    constructor(name, id, baseSalary) {
        if (this.constructor === Employee) {
            throw new Error("Cannot instantiate abstract class Employee directly");
        }
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
        this.hireDate = new Date();
    }
    
    // Abstract method - must be implemented by subclasses
    calculateSalary() {
        throw new Error("calculateSalary() must be implemented by subclass");
    }
    
    // Abstract method
    getRole() {
        throw new Error("getRole() must be implemented by subclass");
    }
    
    // Concrete method
    getInfo() {
        return `${this.name} (ID: ${this.id}) - ${this.getRole()}`;
    }
    
    getYearsOfService() {
        const years = (new Date() - this.hireDate) / (1000 * 60 * 60 * 24 * 365);
        return Math.floor(years);
    }
}

class FullTimeEmployee extends Employee {
    constructor(name, id, baseSalary, benefits) {
        super(name, id, baseSalary);
        this.benefits = benefits;
        this.vacationDays = 25;
    }
    
    calculateSalary() {
        return this.baseSalary + this.benefits;
    }
    
    getRole() {
        return "Full-Time Employee";
    }
    
    takeVacation(days) {
        if (days <= this.vacationDays) {
            this.vacationDays -= days;
            return `${days} vacation days taken. Remaining: ${this.vacationDays}`;
        }
        return "Insufficient vacation days";
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, id, hourlyRate, hoursPerWeek) {
        super(name, id, 0); // No base salary for part-time
        this.hourlyRate = hourlyRate;
        this.hoursPerWeek = hoursPerWeek;
    }
    
    calculateSalary() {
        return this.hourlyRate * this.hoursPerWeek * 52; // Annual salary
    }
    
    getRole() {
        return "Part-Time Employee";
    }
    
    updateHours(newHours) {
        this.hoursPerWeek = newHours;
        return `Hours updated to ${newHours} per week`;
    }
}

class Contractor extends Employee {
    constructor(name, id, contractAmount, projectDuration) {
        super(name, id, 0);
        this.contractAmount = contractAmount;
        this.projectDuration = projectDuration;
        this.projectsCompleted = 0;
    }
    
    calculateSalary() {
        return this.contractAmount;
    }
    
    getRole() {
        return "Contractor";
    }
    
    completeProject() {
        this.projectsCompleted++;
        return `Project completed! Total projects: ${this.projectsCompleted}`;
    }
}

// Usage
const employees = [
    new FullTimeEmployee("Alice Johnson", "FT001", 60000, 10000),
    new PartTimeEmployee("Bob Wilson", "PT001", 25, 20),
    new Contractor("Carol Davis", "CT001", 75000, 6)
];

// Polymorphism in action
employees.forEach(employee => {
    console.log(employee.getInfo());
    console.log(`Annual Salary: ${employee.calculateSalary()}`);
    console.log("---");
});
```
</details>

### Task 8: Design Pattern - Factory Pattern
Implement a factory pattern for creating different types of vehicles.

<details>
<summary><strong>Solution</strong></summary>

```javascript
// Vehicle classes
class Car {
    constructor(brand, model) {
        this.type = "Car";
        this.brand = brand;
        this.model = model;
        this.wheels = 4;
        this.fuelType = "Gasoline";
    }
    
    start() {
        return `${this.brand} ${this.model} car started! 🚗`;
    }
    
    getInfo() {
        return `${this.type}: ${this.brand} ${this.model} (${this.wheels} wheels, ${this.fuelType})`;
    }
}

class Motorcycle {
    constructor(brand, model) {
        this.type = "Motorcycle";
        this.brand = brand;
        this.model = model;
        this.wheels = 2;
        this.fuelType = "Gasoline";
    }
    
    start() {
        return `${this.brand} ${this.model} motorcycle started! 🏍️`;
    }
    
    getInfo() {
        return `${this.type}: ${this.brand} ${this.model} (${this.wheels} wheels, ${this.fuelType})`;
    }
}

class Truck {
    constructor(brand, model) {
        this.type = "Truck";
        this.brand = brand;
        this.model = model;
        this.wheels = 6;
        this.fuelType = "Diesel";
        this.cargoCapacity = "5 tons";
    }
    
    start() {
        return `${this.brand} ${this.model} truck started! 🚚`;
    }
    
    getInfo() {
        return `${this.type}: ${this.brand} ${this.model} (${this.wheels} wheels, ${this.fuelType}, ${this.cargoCapacity})`;
    }
}

// Factory class
class VehicleFactory {
    static createVehicle(type, brand, model) {
        switch (type.toLowerCase()) {
            case 'car':
                return new Car(brand, model);
            case 'motorcycle':
                return new Motorcycle(brand, model);
            case 'truck':
                return new Truck(brand, model);
            default:
                throw new Error(`Vehicle type "${type}" not supported`);
        }
    }
    
    static getSupportedTypes() {
        return ['car', 'motorcycle', 'truck'];
    }
}

// Usage
try {
    const vehicles = [
        VehicleFactory.createVehicle('car', 'Toyota', 'Camry'),
        VehicleFactory.createVehicle('motorcycle', 'Harley', 'Sportster'),
        VehicleFactory.createVehicle('truck', 'Ford', 'F-150')
    ];
    
    vehicles.forEach(vehicle => {
        console.log(vehicle.start());
        console.log(vehicle.getInfo());
        console.log("---");
    });
} catch (error) {
    console.error(error.message);
}
```
</details>

---

## 🎯 Final Challenge Project

### Task 9: Mini E-commerce System
Create a complete mini e-commerce system using all OOP principles.

<details>
<summary><strong>Solution</strong></summary>

```javascript
// Product classes using inheritance
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.inStock = true;
        this.reviews = [];
    }
    
    addReview(rating, comment) {
        this.reviews.push({ rating, comment, date: new Date() });
        return "Review added successfully";
    }
    
    getAverageRating() {
        if (this.reviews.length === 0) return 0;
        const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / this.reviews.length).toFixed(1);
    }
    
    getInfo() {
        return `${this.name} - ${this.price} (${this.category})`;
    }
}

class Electronics extends Product {
    constructor(id, name, price, brand, warranty) {
        super(id, name, price, 'Electronics');
        this.brand = brand;
        this.warranty = warranty;
    }
    
    getInfo() {
        return `${super.getInfo()} - ${this.brand}, ${this.warranty} warranty`;
    }
}

class Clothing extends Product {
    constructor(id, name, price, size, color) {
        super(id, name, price, 'Clothing');
        this.size = size;
        this.color = color;
    }
    
    getInfo() {
        return `${super.getInfo()} - Size: ${this.size}, Color: ${this.color}`;
    }
}

// User classes
class User {
    #password;
    
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.#password = password;
        this.registrationDate = new Date();
    }
    
    #validatePassword(password) {
        return password === this.#password;
    }
    
    changePassword(oldPassword, newPassword) {
        if (this.#validatePassword(oldPassword)) {
            this.#password = newPassword;
            return "Password changed successfully";
        }
        return "Invalid current password";
    }
    
    getProfile() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            memberSince: this.registrationDate
        };
    }
}

class Customer extends User {
    constructor(id, name, email, password) {
        super(id, name, email, password);
        this.cart = new ShoppingCart();
        this.orders = [];
        this.loyaltyPoints = 0;
    }
    
    addToCart(product, quantity = 1) {
        return this.cart.addItem(product, quantity);
    }
    
    removeFromCart(productId) {
        return this.cart.removeItem(productId);
    }
    
    placeOrder() {
        if (this.cart.items.length === 0) {
            return "Cart is empty";
        }
        
        const order = new Order(this.id, [...this.cart.items]);
        this.orders.push(order);
        this.loyaltyPoints += Math.floor(order.total / 10); // 1 point per $10
        this.cart.clear();
        
        return `Order placed successfully! Order ID: ${order.id}`;
    }
}

// Shopping Cart using composition
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
            return `Updated quantity for ${product.name}`;
        } else {
            this.items.push({ product, quantity });
            return `${product.name} added to cart`;
        }
    }
    
    removeItem(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index > -1) {
            const removedItem = this.items.splice(index, 1)[0];
            return `${removedItem.product.name} removed from cart`;
        }
        return "Item not found in cart";
    }
    
    getTotal() {
        return this.items.reduce((total, item) => 
            total + (item.product.price * item.quantity), 0
        ).toFixed(2);
    }
    
    clear() {
        this.items = [];
    }
    
    getItems() {
        return this.items.map(item => ({
            product: item.product.getInfo(),
            quantity: item.quantity,
            subtotal: (item.product.price * item.quantity).toFixed(2)
        }));
    }
}

// Order class
class Order {
    static orderCounter = 1000;
    
    constructor(customerId, items) {
        this.id = ++Order.orderCounter;
        this.customerId = customerId;
        this.items = items;
        this.total = this.calculateTotal();
        this.status = 'pending';
        this.orderDate = new Date();
    }
    
    calculateTotal() {
        return this.items.reduce((total, item) => 
            total + (item.product.price * item.quantity), 0
        );
    }
    
    updateStatus(newStatus) {
        const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
        if (validStatuses.includes(newStatus)) {
            this.status = newStatus;
            return `Order status updated to: ${newStatus}`;
        }
        return "Invalid status";
    }
    
    getOrderDetails() {
        return {
            orderId: this.id,
            customerId: this.customerId,
            items: this.items.length,
            total: `${this.total.toFixed(2)}`,
            status: this.status,
            orderDate: this.orderDate
        };
    }
}

// E-commerce Store class - main system
class ECommerceStore {
    constructor(name) {
        this.name = name;
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    
    addProduct(product) {
        this.products.push(product);
        return `Product "${product.name}" added to store`;
    }
    
    registerCustomer(name, email, password) {
        const customerId = `CUST${this.customers.length + 1}`;
        const customer = new Customer(customerId, name, email, password);
        this.customers.push(customer);
        return `Customer ${name} registered successfully`;
    }
    
    findProduct(productId) {
        return this.products.find(product => product.id === productId);
    }
    
    findCustomer(customerId) {
        return this.customers.find(customer => customer.id === customerId);
    }
    
    getProductsByCategory(category) {
        return this.products.filter(product => 
            product.category.toLowerCase() === category.toLowerCase()
        );
    }
    
    processOrder(customerId) {
        const customer = this.findCustomer(customerId);
        if (!customer) return "Customer not found";
        
        const result = customer.placeOrder();
        if (result.includes("successfully")) {
            // Add order to store's order list
            const latestOrder = customer.orders[customer.orders.length - 1];
            this.orders.push(latestOrder);
        }
        return result;
    }
    
    getStoreStats() {
        return {
            totalProducts: this.products.length,
            totalCustomers: this.customers.length,
            totalOrders: this.orders.length,
            totalRevenue: this.orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)
        };
    }
}

// Usage Example
const myStore = new ECommerceStore("TechMart");

// Add products
const laptop = new Electronics("E001", "Gaming Laptop", 1299.99, "ASUS", "2 years");
const phone = new Electronics("E002", "Smartphone", 699.99, "Apple", "1 year");
const tshirt = new Clothing("C001", "Cotton T-Shirt", 29.99, "M", "Blue");

myStore.addProduct(laptop);
myStore.addProduct(phone);
myStore.addProduct(tshirt);

// Register customers
myStore.registerCustomer("John Doe", "john@email.com", "password123");
myStore.registerCustomer("Jane Smith", "jane@email.com", "password456");

// Customer shopping
const john = myStore.findCustomer("CUST1");
john.addToCart(laptop, 1);
john.addToCart(tshirt, 2);

console.log("John's Cart:");
console.log(john.cart.getItems());
console.log(`Total: ${john.cart.getTotal()}`);

// Place order
console.log(myStore.processOrder("CUST1"));

// Store statistics
console.log("Store Stats:", myStore.getStoreStats());
```
</details>

---

## 🏆 Congratulations!

You've successfully completed Day 29 of your JavaScript journey! 🎉

### 📈 What You've Mastered Today:
- ✅ Understanding Objects, Classes, and Functions
- ✅ Five Core OOP Principles (Abstraction, Encapsulation, Inheritance, Polymorphism, Composition)
- ✅ Real-world applications of OOP concepts
- ✅ Advanced patterns and best practices
- ✅ Building complex systems using OOP

### 🚀 Next Steps:
- Practice building more complex applications using OOP
- Explore design patterns (Factory, Observer, Singleton)
- Learn about modules and code organization
- Study advanced JavaScript concepts like Prototypes and Prototype Chain

**Remember:** OOP is not just about syntax—it's about thinking in terms of objects and their relationships. Keep practicing with real-world examples! 💪

---

### 📝 Quick Reference Card:

| Concept | Key Points | When to Use |
|---------|------------|-------------|
| **Abstraction** | Hide complexity, show interface | Complex systems with simple user interactions |
| **Encapsulation** | Bundle data + methods, restrict access | Protecting sensitive data and maintaining state |
| **Inheritance** | Share code between classes (is-a) | When classes have common behavior |
| **Polymorphism** | Same interface, different implementations | When you need flexible, extensible code |
| **Composition** | Build objects from other objects (has-a) | When you need flexible relationships |

---

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
<p>📆 <em>Next: Day - 30: From Zero to OOP Hero with JavaScript ES6 Classes </em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>
</div>


*Happy Coding! 🚀 Keep building amazing things with JavaScript!* ✨