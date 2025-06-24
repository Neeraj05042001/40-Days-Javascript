# 🎯 DAY - 30: "From Zero to OOP Hero with JavaScript ES6 Classes"

<div align="center">

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)
[![OOPs](https://img.shields.io/badge/OOPS-blue?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

</div>

---
> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 💼 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦 | [GitHub: Neeraj05042001](https://github.com/Neeraj05042001) 🐙* |

## 📚 Table of Contents
1. [What is a Class?](#what-is-a-class)
2. [ES6 Classes - Syntax](#es6-classes---syntax)
3. [Initialize Objects - "this" in Classes](#initialize-objects---this-in-classes)
4. [The Type of Class](#the-type-of-class)
5. [Class as Expression](#class-as-expression)
6. [Class Fields](#class-fields)
7. [Getters and Setters](#getters-and-setters)
8. [Static Properties](#static-properties)
9. [Private and Public Fields](#private-and-public-fields)
10. [Extending Classes](#extending-classes)
11. [OOP Concepts](#oop-concepts)
12. [Interview Questions](#interview-questions)
13. [Practice Tasks](#practice-tasks)

---

## 🚀 Introduction to ES6 Classes 

**Definition**: ES6 Classes are a syntactic sugar over JavaScript's prototype-based inheritance system, providing a cleaner and more intuitive way to create objects and implement object-oriented programming concepts.

### 🎯 Why Classes Matter
- **Cleaner Syntax**: More readable than prototype-based approach
- **OOP Support**: Enables proper object-oriented programming
- **Industry Standard**: Widely used in modern JavaScript frameworks
- **Better Organization**: Helps structure large applications

### 📋 Knowledge Check
<details>
<summary>🤔 What is the main advantage of ES6 classes over prototype-based inheritance?</summary>

**Answer**: ES6 classes provide a cleaner, more intuitive syntax that's easier to read and write, while still using JavaScript's prototype-based inheritance under the hood.
</details>

---


## 🏗️ What is a Class?

### 📖 Definition
A **Class** is a blueprint or template for creating objects with similar properties and methods. It defines the structure and behavior that objects created from it will have.

> Think of it like a cookie cutter - it defines the shape, but each cookie (object) is unique.

### 📝 Basic Structure
```javascript
class ClassName {
    // Properties and methods go here
}
```

### 🔍 Key Points:
- 📝 Classes are introduced in ES6 (ES2015)
- 🎯 They provide a cleaner syntax for creating objects
- 🔄 They're syntactic sugar over JavaScript's existing prototype-based inheritance
- 🏭 Classes act as factories for creating multiple objects with similar properties and methods

### 🌟 Real-Life Analogy
Think of a class like a **cookie cutter** 🍪:
- The cookie cutter (class) defines the shape
- Each cookie (object) made from it has the same shape but can have different flavors
- You can make many cookies (objects) from one cutter (class)


### 🧠 Knowledge Check:
<details>
<summary> <strong>Q: What is a Class?</strong></summary>

**Q: What is the main purpose of a class in JavaScript?**
A: A class serves as a blueprint or template for creating objects with similar properties and methods.

**Q: Are JavaScript classes a completely new feature?**
A: No, classes are syntactic sugar over JavaScript's existing prototype-based inheritance system.
</details>

<details>
<summary><strong>Q: How is a class similar to a blueprint?</string></summary>

**Answer**: A class defines the structure, properties, and methods that objects created from it will have, just like a blueprint defines how a building should be constructed.
</details>

---

## 🔧 ES6 Classes - Syntax

### 📝 Basic Syntax:
```javascript
class ClassName {
    constructor(parameters) {
        // Initialize properties
    }
    
    method1() {
        // Method implementation
    }
    
    method2() {
        // Method implementation
    }
}
```

### 🎯 Example:

#### 🎨 Basic Class Declaration
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

// Creating objects (instances)
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.greet()); // "Hello, I'm Alice"
```

### 🔑 Key Components:
- **`class`** keyword: Declares a class. `class ClassName`
- **`constructor()`**: Special method that runs when creating new instances
- **Methods**: Functions defined inside the class
- **Properties**: Variables that belong to the class
- **`new`** keyword: Creates a new instance of the class

<details>
<summary>🧠 Knowledge Check: Class Syntax</summary>

**Q: What keyword is used to declare a class in JavaScript?**

A: The `class` keyword is used to declare a class.

**Q: What is the purpose of the constructor method?**

A: The constructor method is automatically called when a new instance of the class is created, used to initialize the object's properties.

**Q: What keyword is used to create a new instance of a class?**

A: The `new` keyword is used to create a new instance of a class.
</details>

---

## 🏗️ Constructor and "this" Keyword 

### 🎯 Constructor Method
**Definition**: The constructor is a special method that runs automatically when a new object is created from the class.

```javascript
class Car {
    constructor(brand, model, year) {
        this.brand = brand;    // this refers to the current instance
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    
    start() {
        this.isRunning = true;
        return `${this.brand} ${this.model} is now running!`;
    }
}

const myCar = new Car("Toyota", "Camry", 2023);
console.log(myCar.start()); // "Toyota Camry is now running!"
```

### 🔍 Understanding "this"
- **In Constructor**: `this` refers to the new object being created
- **In Methods**: `this` refers to the object that called the method
- **Binding**: `this` is automatically bound to the instance

### 🎯 Example:
```javascript
class Car {
    constructor(model) {
        this.model = model; // 'this' refers to the current instance
    }

    printModel() {
        console.log(this.model); // Accessing the instance property
    }
}

const bmwCar = new Car("BMW");
bmwCar.printModel(); // Output: BMW
```

### 🔍 How it Works:
1. **`new Car("BMW")`** creates a new instance
2. **`this.model = model`** assigns "BMW" to the instance's model property
3. **`this.model`** in methods refers to that specific instance's property

<details>
<summary>🧠 Knowledge Check: "this" in Classes</summary>

**Q: What does 'this' refer to inside a class method?**
A: 'this' refers to the current instance of the object that called the method.

**Q: When is the constructor method called?**
A: The constructor method is automatically called when you create a new instance using the 'new' keyword.
</details>

---

## 🔍 The Type of Class

### 📊 Understanding Class Types:
```javascript
class Car {
    constructor(model) {
        this.model = model;
    }
}

console.log(typeof Car); // "function"
console.log(Car.prototype);
console.log(Car.prototype.constructor);
console.log(Car === Car.prototype.constructor); // true
```

### 🎯 Key Insights:
- **Classes are functions** under the hood
- They have a **prototype** property
- The **constructor** property points back to the class itself
- Classes are essentially syntactic sugar over function constructors

<details>
<summary>🧠 Knowledge Check: Class Types</summary>

**Q: What does 'typeof Class' return in JavaScript?**
A: It returns "function" because classes are essentially functions under the hood.
</details>

---

## 🏭 Class as Expression

### 📝 Anonymous Class Expression:
```javascript
const Employee = class {
    welcome() {
        console.log("Hello Employee");
    }
}

const emp = new Employee();
emp.welcome(); // Output: Hello Employee
```

### 🏷️ Named Class Expression:
```javascript
const Dept = class Department {
    welcome() {
        console.log("Welcome to Department");
        console.debug(Department); // Name accessible inside
    }
}

const d = new Dept();
d.welcome();
```

### 🔑 Key Points:
- Classes can be defined as expressions
- Can be anonymous or named
- Named class expressions: name is only accessible inside the class
- Useful for dynamic class creation

<details>
<summary>🧠 Knowledge Check: Class Expressions</summary>

**Q: Can you assign a class to a variable?**
A: Yes, classes can be defined as expressions and assigned to variables.

**Q: In a named class expression, where is the class name accessible?**
A: The class name is only accessible inside the class itself, not outside.
</details>

---

## 🏠 Class Fields

### 📖 Definition:
Class fields allow you to define properties directly in the class body without the constructor.

### 🎯 Example:
```javascript
class Phone {
    brand = "Apple"; // Class field

    make() {
        console.log(this.brand);
    }
}

const phone = new Phone();
console.log(phone.brand); // "Apple"
phone.make(); // "Apple"
```

### 🔍 Comparison:
```javascript
// Without class fields (traditional way)
class Phone1 {
    constructor() {
        this.brand = "Apple";
    }
}

// With class fields (modern way)
class Phone2 {
    brand = "Apple";
}
```

### ✅ Benefits:
- Cleaner syntax
- No need to use constructor for simple property initialization
- More readable code

<details>
<summary>🧠 Knowledge Check: Class Fields</summary>

**Q: Where are class fields defined?**
A: Class fields are defined directly in the class body, outside of any methods.

**Q: Do class fields need to be initialized in the constructor?**
A: No, class fields can be initialized directly where they're declared.
</details>

<details>
<summary>🤔 What type does a class return when checked with typeof?</summary>

**Answer**: A class returns "function" when checked with typeof, because classes are syntactic sugar over constructor functions.
</details>

---

## 🎛️ Getters and Setters

### 📖 Definition:
Getters and setters are special methods that allow you to define how properties are accessed and modified.

### 🎯 Example:
```javascript
class Animal {
    constructor(name) {
        this.name = name; // This will use the setter
    }

    get name() {
        return this._name; // getter
    }

    set name(value) {
        if (!value) {
            console.warn("Need a name");
            return;
        }
        this._name = value; // setter with validation
    }
}

const animal = new Animal("Tiger");
console.log(animal.name); // Uses getter
animal.name = ""; // Uses setter, shows warning
```

### 🔑 Key Points:
- **`get`** keyword defines a getter method
- **`set`** keyword defines a setter method
- Allows data validation and processing
- Properties accessed like regular properties, not method calls
- Common convention: use underscore prefix for private-like properties (`_name`)

### 🎯 Benefits of Getters/Setters
- **Validation**: Check data before setting
- **Computed Properties**: Calculate values on the fly
- **Encapsulation**: Control access to internal data
- **Backward Compatibility**: Change internal implementation without breaking code

### 📋 Knowledge Check
<details>
<summary>🤔 How do you access a getter method?</summary>

**Answer**: Getter methods are accessed like properties (without parentheses), for example: `object.propertyName` instead of `object.propertyName()`.
</details>

<details>
<summary>🧠 Knowledge Check: Getters and Setters</summary>

**Q: How do you define a getter method in a class?**
A: Use the `get` keyword followed by the method name: `get propertyName() { ... }`

**Q: What's the advantage of using setters?**
A: Setters allow you to validate data before setting property values and control how properties are modified.
</details>

---

## ⚡ Static Properties

### 📖 Definition:
Static methods and properties belong to the class itself, not to instances of the class. They can be called without creating an instance.

### 🎯 Basic Example:
```javascript
class MyClass {
    static staticMethod() {
        console.log(this); // 'this' refers to the class itself
    }
}

MyClass.staticMethod(); // Called on class, not instance
```

### 🔧 Static Methods
```javascript
class MathUtils {
    static PI = 3.14159;
    
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static circleArea(radius) {
        return this.PI * radius ** 2;
    }
}

// Called on the class, not on instances
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.circleArea(5)); // 78.53975
```

### 🏭 Static Properties
```javascript
class User {
    static userCount = 0;
    static maxUsers = 100;
    
    constructor(name) {
        if (User.userCount >= User.maxUsers) {
            throw new Error("Maximum users reached");
        }
        
        this.name = name;
        User.userCount++; // Increment static property
    }
    
    static getTotalUsers() {
        return User.userCount;
    }
}

const user1 = new User("Alice");
const user2 = new User("Bob");
console.log(User.getTotalUsers()); // 2
```



### 🏆 Advanced Example:
```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }

    // Static utility method
    static isValidEmail(email) {
        return email.includes("@") && email.includes(".");
    }

    // Static factory method
    static createGuest() {
        return new User("Guest", "guest@example.com");
    }
}

// Using static methods without creating instances
console.log(User.isValidEmail("john@example.com")); // true
const guestUser = User.createGuest();
guestUser.greet(); // Hi, I'm Guest
```

### 🎯 When to Use Static
- **Utility functions**: Helper methods related to the class
- **Factory methods**: Alternative ways to create instances
- **Constants**: Class-level constants
- **Validation methods**: Check data without creating instances

<details>
<summary>🧠 Knowledge Check: Static Properties</summary>

**Q: How do you call a static method?**
A: Static methods are called on the class itself, not on instances: `ClassName.staticMethod()`

**Q: Can static methods access instance properties?**
A: No, static methods cannot directly access instance properties because they don't have access to `this` (instance context).
</details>

---

## 🔒 Private and Public Fields

### 📖 Definition:
- **Public**: Accessible from anywhere (default behavior)
- **Private**: Accessible only from within the class (prefixed with `#`)
- **Protected**: By convention, prefixed with `_` (not truly private)

### 🎯 Comprehensive Example:
```javascript
class WashingMachine {
    // Public field
    brand;

    // Private fields (truly private)
    #powerStatus = false;
    #currentCycle = null;

    // Protected field (naming convention only)
    _log = [];

    constructor(brand) {
        this.brand = brand;
    }

    // Public method
    start(cycle) {
        if (!this.#powerStatus) {
            this.#turnOn();
        }
        this.#currentCycle = cycle;
        console.log(`Starting ${cycle} cycle...`);
        this.#spin();
        this.#drain();
        this._log.push(`Cycle ${cycle} completed.`);
        this.stop();
    }

    // Public method
    stop() {
        console.log("Washing machine stopped.");
        this.#turnOff();
    }

    // Private methods
    #turnOn() {
        this.#powerStatus = true;
        console.log("Power ON");
    }

    #turnOff() {
        this.#powerStatus = false;
        console.log("Power OFF");
    }

    #spin() {
        console.log("Spinning...");
    }

    #drain() {
        console.log("Draining...");
    }

    // Protected method (convention)
    _showLog() {
        console.log("Internal Logs:", this._log);
    }
}

const lgWasher = new WashingMachine("LG");
lgWasher.start("Quick Wash");
console.log(lgWasher.brand); // ✅ Works - public
// console.log(lgWasher.#powerStatus); // ❌ SyntaxError - private
lgWasher._showLog(); // ⚠️ Works but not recommended - protected
```



### 🔍 Access Levels Summary:
| Type | Symbol | Accessibility | Example |
|------|--------|---------------|---------|
| Public | none | Everywhere | `brand` |
| Private | `#` | Class only | `#powerStatus` |
| Protected | `_` | Convention only | `_log` |

### 🛡️ Benefits of Private Fields
- **Encapsulation**: Hide internal implementation
- **Security**: Prevent external tampering
- **Maintainability**: Internal changes don't break external code
- **Clear Interface**: Shows what's meant to be used publicly

<details>
<summary>🧠 Knowledge Check: Private and Public</summary>

**Q: How do you declare a private field in JavaScript classes?**
A: Use the `#` symbol before the field name: `#privateField`

**Q: What happens if you try to access a private field from outside the class?**
A: You'll get a SyntaxError because private fields are not accessible outside the class.
</details>

---

## 🌳 Extending Classes

### 📖 Definition:
Class inheritance allows you to create a new class based on an existing class, inheriting its properties and methods while adding new functionality.

### 🎯 Comprehensive Example:
```javascript
// Parent class (Base class)
class Human {
    species = "Homo Sapiens";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

// Child class (Derived class)
class Student extends Human {
    species = "Homo Sapiens (Student)"; // Override field

    constructor(name, age, grade) {
        super(name, age); // Call parent constructor
        this.grade = grade; // Add new property
    }

    // Method overriding
    introduce() {
        console.log(
            `Hey! I'm ${this.name}, ${this.age} years old and I study in grade ${this.grade}.`
        );
    }

    // New method
    study() {
        console.log(`${this.name} is studying...`);
    }
}

class Teacher extends Human {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    introduce() {
        console.log(`Hello, I'm ${this.name}, a ${this.subject} teacher.`);
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

// Usage
const alice = new Student("Alice", 14, 9);
const bob = new Teacher("Bob", 35, "Mathematics");

alice.introduce(); // Overridden method
bob.introduce();   // Overridden method
alice.sleep();     // Inherited method
bob.sleep();       // Inherited method
```

### 🔑 Key Concepts:
- **`extends`**: Creates inheritance relationship
- **`super()`**: Calls parent constructor or methods
- **Method Overriding**: Child class can redefine parent methods
- **Method Addition**: Child class can add new methods

<details>
<summary>🧠 Knowledge Check: Extending Classes</summary>

**Q: What keyword is used to create inheritance in JavaScript classes?**
A: The `extends` keyword is used to create inheritance.

**Q: What is the purpose of the `super()` method?**
A: `super()` calls the parent class constructor and must be called before using `this` in the child constructor.
</details>

---

## 🏛️ OOP Concepts

### 1. 📦 Abstraction

**📖 Definition**: Hiding complex implementation details while showing only essential features.

**🎯 Example**:
```javascript
class PaymentProcessor {
    processPayment(amount, method) {
        // Abstract the complex payment logic
        this.#validatePayment(amount);
        this.#connectToGateway();
        this.#processTransaction(amount, method);
        return this.#getConfirmation();
    }

    // Hidden complex methods
    #validatePayment(amount) { /* validation logic */ }
    #connectToGateway() { /* gateway connection */ }
    #processTransaction(amount, method) { /* transaction logic */ }
    #getConfirmation() { return "Payment successful"; }
}
```

### 2. 🛡️ Encapsulation

**📖 Definition**: Bundling data and methods together and controlling access to them.

**🎯 Example**:
```javascript
class BankAccount {
    #balance = 0; // Private field

    constructor(accountNumber) {
        this.accountNumber = accountNumber;
    }

    // Public interface
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited: $${amount}`;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrawn: $${amount}`;
        }
        return "Insufficient funds";
    }

    getBalance() {
        return this.#balance;
    }
}
```

### 3. 🧬 Inheritance

**📖 Definition**: Creating new classes based on existing classes, inheriting properties and methods.

**🎯 Example**: (Already covered in Extending Classes section)

### 4. 🎭 Polymorphism

**📖 Definition**: Same interface, different implementations. Objects of different classes can be treated uniformly.

**🎯 Example**:
```javascript
class Animal {
    makeSound() {
        return "Some generic animal sound";
    }
}

class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}

class Bird extends Animal {
    makeSound() {
        return "Chirp!";
    }
}

// Polymorphism in action
const animals = [new Dog(), new Cat(), new Bird()];

animals.forEach(animal => {
    console.log(animal.makeSound()); // Different outputs for same method call
});
```

### 5. 🔧 Composition

**📖 Definition**: Building classes by combining simpler objects rather than inheriting from a base class.

**🎯 Example**:
```javascript
// Components
class Engine {
    start() {
        return "Engine started";
    }
}

class Wheels {
    roll() {
        return "Wheels rolling";
    }
}

class GPS {
    navigate(destination) {
        return `Navigating to ${destination}`;
    }
}

// Composition
class Car {
    constructor() {
        this.engine = new Engine();    // Has-a relationship
        this.wheels = new Wheels();    // Has-a relationship
        this.gps = new GPS();          // Has-a relationship
    }

    start() {
        return this.engine.start();
    }

    drive() {
        return this.wheels.roll();
    }

    navigate(destination) {
        return this.gps.navigate(destination);
    }
}

const myCar = new Car();
console.log(myCar.start());     // "Engine started"
console.log(myCar.drive());     // "Wheels rolling"
console.log(myCar.navigate("Home")); // "Navigating to Home"
```

<details>
<summary>🧠 Knowledge Check: OOP Concepts</summary>

**Q: What's the difference between inheritance and composition?**
A: Inheritance creates "is-a" relationships (Student is-a Human), while composition creates "has-a" relationships (Car has-a Engine).

**Q: What is polymorphism in simple terms?**
A: Polymorphism allows different classes to have methods with the same name but different implementations, enabling uniform treatment of different objects.
</details>

---

## 💼 Interview Questions

<details>
<summary>❓ What are ES6 Classes and how do they differ from function constructors?</summary>

**Answer**: 
ES6 Classes are syntactic sugar over JavaScript's prototype-based inheritance. Key differences:

**Classes:**
- Cleaner, more readable syntax
- Hoisting behavior: not initialized until evaluated
- Always run in strict mode
- Cannot be called without `new`
- Have block scope

**Function Constructors:**
- Function-based syntax
- Fully hoisted
- Can be called with or without `new`
- Have function scope

```javascript
// Function Constructor
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

// ES6 Class
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
```
</details>

<details>
<summary>❓ Explain private fields in JavaScript classes.</summary>

**Answer**:
Private fields are declared with `#` prefix and are truly private - accessible only within the class.

```javascript
class MyClass {
    #privateField = "secret";
    
    #privateMethod() {
        return "private method";
    }
    
    publicMethod() {
        return this.#privateField; // OK - inside class
    }
}

const obj = new MyClass();
// obj.#privateField; // SyntaxError
```

**Benefits:**
- True privacy (not just convention)
- Prevents external access
- No naming conflicts
- Better encapsulation
</details>

<details>
<summary>❓ What is the difference between static and instance methods?</summary>

**Answer**:

**Static Methods:**
- Called on the class itself
- Cannot access instance properties
- Used for utility functions
- `this` refers to the class

**Instance Methods:**
- Called on object instances
- Can access instance properties
- Used for object-specific behavior
- `this` refers to the instance

```javascript
class Calculator {
    constructor(value) {
        this.value = value;
    }
    
    // Instance method
    add(num) {
        this.value += num;
        return this;
    }
    
    // Static method
    static multiply(a, b) {
        return a * b;
    }
}

const calc = new Calculator(10);
calc.add(5); // Instance method
Calculator.multiply(3, 4); // Static method
```
</details>

<details>
<summary>❓ How does inheritance work in JavaScript classes?</summary>

**Answer**:
Inheritance in JavaScript classes uses the `extends` keyword and `super()` method:

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} barks`);
    }
}
```

**Key Points:**
- `extends` creates inheritance relationship
- `super()` must be called in child constructor
- Method overriding is supported
- Child has access to parent methods
- Prototype chain is established
</details>

<details>
<summary>❓ Explain method overriding vs method hiding in classes.</summary>

**Answer**:

**Method Overriding (Instance Methods):**
- Child class replaces parent method
- Uses polymorphism
- Runtime decision

**Method Hiding (Static Methods):**
- Child static method hides parent static method
- Compile-time decision
- No polymorphism

```javascript
class Parent {
    instanceMethod() { return "Parent instance"; }
    static staticMethod() { return "Parent static"; }
}

class Child extends Parent {
    instanceMethod() { return "Child instance"; } // Override
    static staticMethod() { return "Child static"; } // Hide
}

const child = new Child();
child.instanceMethod(); // "Child instance" - overridden
Child.staticMethod(); // "Child static" - hidden
Parent.staticMethod(); // "Parent static" - still accessible
```
</details>

---

## 🎯 Practice Tasks

### 📝 Task 1: Basic Class Creation
Create a `Book` class with the following requirements:
- Properties: title, author, pages, isRead (default false)
- Methods: read() (sets isRead to true), getInfo() (returns book details)

<details>
<summary>💡 Solution</summary>

```javascript
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;
    }
    
    read() {
        this.isRead = true;
        console.log(`You have finished reading "${this.title}"`);
    }
    
    getInfo() {
        return `"${this.title}" by ${this.author}, ${this.pages} pages, ${this.isRead ? 'Read' : 'Not read'}`;
    }
}

const book1 = new Book("1984", "George Orwell", 328);
console.log(book1.getInfo());
book1.read();
console.log(book1.getInfo());
```
</details>

### 📝 Task 2: Getters and Setters
Create a `Temperature` class with:
- Private field for celsius
- Getter and setter for fahrenheit
- Method to display both temperatures

<details>
<summary>💡 Solution</summary>

```javascript
class Temperature {
    #celsius = 0;
    
    constructor(celsius = 0) {
        this.#celsius = celsius;
    }
    
    get celsius() {
        return this.#celsius;
    }
    
    set celsius(value) {
        this.#celsius = value;
    }
    
    get fahrenheit() {
        return (this.#celsius * 9/5) + 32;
    }
    
    set fahrenheit(value) {
        this.#celsius = (value - 32) * 5/9;
    }
    
    display() {
        console.log(`${this.#celsius}°C = ${this.fahrenheit}°F`);
    }
}

const temp = new Temperature(25);
temp.display(); // 25°C = 77°F
temp.fahrenheit = 100;
temp.display(); // 37.77°C = 100°F
```
</details>

### 📝 Task 3: Static Methods
Create a `MathUtils` class with static methods:
- `add(a, b)` - adds two numbers
- `isEven(num)` - checks if number is even
- `factorial(n)` - calculates factorial

<details>
<summary>💡 Solution</summary>

```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static isEven(num) {
        return num % 2 === 0;
    }
    
    static factorial(n) {
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
    }
}

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.isEven(4)); // true
console.log(MathUtils.factorial(5)); // 120
```
</details>

### 📝 Task 4: Inheritance and Polymorphism
Create a `Shape` base class and derived classes `Circle` and `Rectangle`:
- Base class: constructor(color), getColor(), abstract getArea()
- Circle: constructor(color, radius), getArea()
- Rectangle: constructor(color, width, height), getArea()

<details>
<summary>💡 Solution</summary>

```javascript
class Shape {
    constructor(color) {
        this.color = color;
    }
    
    getColor() {
        return this.color;
    }
    
    getArea() {
        throw new Error("getArea() must be implemented by subclass");
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
}

const shapes = [
    new Circle("red", 5),
    new Rectangle("blue", 4, 6)
];

shapes.forEach(shape => {
    console.log(`${shape.getColor()} shape area: ${shape.getArea()}`);
});
```
</details>

### 📝 Task 5: Private Fields and Encapsulation
Create a `BankAccount` class with:
- Private fields: balance, accountNumber
- Public methods: deposit(), withdraw(), getBalance()
- Validation: prevent negative deposits/withdrawals

<details>
<summary>💡 Solution</summary>

```javascript
class BankAccount {
    #balance = 0;
    #accountNumber;
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#balance += amount;
        return `Deposited $${amount}. New balance: $${this.#balance}`;
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        this.#balance -= amount;
        return `Withdrawn $${amount}. New balance: $${this.#balance}`;
    }
    
    getBalance() {
        return this.#balance;
    }
    
    getAccountNumber() {
        return this.#accountNumber;
    }
}

const account = new BankAccount("12345", 1000);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
```
</details>

### 📝 Task 6: Composition Pattern
Create a `Computer` class using composition with `CPU`, `Memory`, and `Storage` components:
- Each component should have its own methods
- Computer should delegate operations to components
- Demonstrate "has-a" relationships

<details>
<summary>💡 Solution</summary>

```javascript
class CPU {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    
    process() {
        return `${this.brand} CPU processing at ${this.speed}GHz`;
    }
}

class Memory {
    constructor(size) {
        this.size = size;
        this.used = 0;
    }
    
    allocate(amount) {
        if (this.used + amount > this.size) {
            return "Not enough memory";
        }
        this.used += amount;
        return `Allocated ${amount}GB. Used: ${this.used}GB/${this.size}GB`;
    }
}

class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.used = 0;
    }
    
    store(data) {
        if (this.used + data > this.capacity) {
            return "Storage full";
        }
        this.used += data;
        return `Stored ${data}GB. Used: ${this.used}GB/${this.capacity}GB`;
    }
}

class Computer {
    constructor(cpuBrand, cpuSpeed, memorySize, storageCapacity) {
        this.cpu = new CPU(cpuBrand, cpuSpeed);
        this.memory = new Memory(memorySize);
        this.storage = new Storage(storageCapacity);
    }
    
    boot() {
        return `Computer booting... ${this.cpu.process()}`;
    }
    
    runProgram(memoryNeeded, storageNeeded) {
        const memResult = this.memory.allocate(memoryNeeded);
        const storageResult = this.storage.store(storageNeeded);
        return `Program running: ${memResult}, ${storageResult}`;
    }
    
    getSpecs() {
        return {
            cpu: `${this.cpu.brand} ${this.cpu.speed}GHz`,
            memory: `${this.memory.size}GB`,
            storage: `${this.storage.capacity}GB`
        };
    }
}

const myComputer = new Computer("Intel", 3.2, 16, 512);
console.log(myComputer.boot());
console.log(myComputer.runProgram(4, 50));
console.log(myComputer.getSpecs());
```
</details>

### 📝 Task 7: Advanced Inheritance
Create a vehicle hierarchy:
- `Vehicle` (base): brand, year, start(), stop()
- `Car` extends Vehicle: doors, accelerate()
- `ElectricCar` extends Car: batteryLevel, charge()
- Demonstrate method overriding and super calls

<details>
<summary>💡 Solution</summary>

```javascript
class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
        this.isRunning = false;
    }
    
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            return `${this.brand} started`;
        }
        return `${this.brand} is already running`;
    }
    
    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            return `${this.brand} stopped`;
        }
        return `${this.brand} is already stopped`;
    }
    
    getInfo() {
        return `${this.year} ${this.brand}`;
    }
}

class Car extends Vehicle {
    constructor(brand, year, doors) {
        super(brand, year);
        this.doors = doors;
    }
    
    accelerate() {
        if (this.isRunning) {
            return `${this.brand} is accelerating`;
        }
        return "Car must be started first";
    }
    
    getInfo() {
        return `${super.getInfo()} with ${this.doors} doors`;
    }
}

class ElectricCar extends Car {
    constructor(brand, year, doors, batteryCapacity) {
        super(brand, year, doors);
        this.batteryCapacity = batteryCapacity;
        this.batteryLevel = 100;
    }
    
    start() {
        if (this.batteryLevel <= 0) {
            return "Battery empty! Please charge first.";
        }
        return super.start() + " (Electric motor)";
    }
    
    accelerate() {
        if (this.isRunning && this.batteryLevel > 10) {
            this.batteryLevel -= 5;
            return `${super.accelerate()} silently. Battery: ${this.batteryLevel}%`;
        }
        return this.batteryLevel <= 10 ? "Low battery!" : super.accelerate();
    }
    
    charge() {
        this.batteryLevel = 100;
        return `${this.brand} fully charged`;
    }
    
    getInfo() {
        return `${super.getInfo()}, ${this.batteryCapacity}kWh battery`;
    }
}

const tesla = new ElectricCar("Tesla Model 3", 2023, 4, 75);
console.log(tesla.getInfo());
console.log(tesla.start());
console.log(tesla.accelerate());
console.log(tesla.accelerate());
console.log(tesla.charge());
```
</details>

### 📝 Task 8: Class Factory Pattern
Create a factory function that creates different types of employees based on role:
- `Employee` (base class)
- `Developer`, `Manager`, `Designer` (derived classes)
- Factory function to create appropriate employee type

<details>
<summary>💡 Solution</summary>

```javascript
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    work() {
        return `${this.name} is working`;
    }
    
    getDetails() {
        return `${this.name} - ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }
    
    work() {
        return `${this.name} is coding in ${this.language}`;
    }
    
    debug() {
        return `${this.name} is debugging code`;
    }
}

class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }
    
    work() {
        return `${this.name} is managing a team of ${this.teamSize}`;
    }
    
    conductMeeting() {
        return `${this.name} is conducting a team meeting`;
    }
}

class Designer extends Employee {
    constructor(name, salary, tool) {
        super(name, salary);
        this.tool = tool;
    }
    
    work() {
        return `${this.name} is designing using ${this.tool}`;
    }
    
    createMockup() {
        return `${this.name} created a new mockup`;
    }
}

// Factory Function
class EmployeeFactory {
    static createEmployee(type, name, salary, extra) {
        switch(type.toLowerCase()) {
            case 'developer':
                return new Developer(name, salary, extra);
            case 'manager':
                return new Manager(name, salary, extra);
            case 'designer':
                return new Designer(name, salary, extra);
            default:
                return new Employee(name, salary);
        }
    }
}

// Usage
const employees = [
    EmployeeFactory.createEmployee('developer', 'John', 80000, 'JavaScript'),
    EmployeeFactory.createEmployee('manager', 'Sarah', 90000, 5),
    EmployeeFactory.createEmployee('designer', 'Mike', 70000, 'Figma')
];

employees.forEach(emp => {
    console.log(emp.getDetails());
    console.log(emp.work());
});
```
</details>

### 📝 Task 9: Mixin Pattern
Implement mixins to add functionality to classes:
- `Flyable` mixin
- `Swimmable` mixin
- Apply to `Bird`, `Fish`, and `Duck` classes

<details>
<summary>💡 Solution</summary>

```javascript
// Mixin functions
const Flyable = {
    fly() {
        return `${this.name} is flying high!`;
    },
    
    land() {
        return `${this.name} has landed safely`;
    }
};

const Swimmable = {
    swim() {
        return `${this.name} is swimming gracefully`;
    },
    
    dive() {
        return `${this.name} dived underwater`;
    }
};

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
}

// Mixin helper function
function mixin(target, ...sources) {
    sources.forEach(source => {
        Object.getOwnPropertyNames(source).forEach(name => {
            if (name !== 'constructor') {
                target.prototype[name] = source[name];
            }
        });
    });
}

// Classes with mixins
class Bird extends Animal {
    constructor(name, species) {
        super(name);
        this.species = species;
    }
}

class Fish extends Animal {
    constructor(name, species) {
        super(name);
        this.species = species;
    }
}

class Duck extends Animal {
    constructor(name) {
        super(name);
        this.species = 'Duck';
    }
}

// Apply mixins
mixin(Bird, Flyable);
mixin(Fish, Swimmable);
mixin(Duck, Flyable, Swimmable); // Duck can both fly and swim

// Usage
const eagle = new Bird('Eagle', 'Bald Eagle');
const shark = new Fish('Shark', 'Great White');
const duck = new Duck('Donald');

console.log(eagle.fly());
console.log(shark.swim());
console.log(duck.fly());
console.log(duck.swim());
```
</details>

### 📝 Task 10: Complete OOP Project
Create a simple **Library Management System** with:
- `Book` class with private fields
- `Member` class with borrowing history
- `Library` class managing books and members
- Implement all OOP principles

<details>
<summary>💡 Solution</summary>

```javascript
class Book {
    #isbn;
    #isAvailable = true;
    
    constructor(title, author, isbn, genre) {
        this.title = title;
        this.author = author;
        this.#isbn = isbn;
        this.genre = genre;
    }
    
    get isbn() {
        return this.#isbn;
    }
    
    get isAvailable() {
        return this.#isAvailable;
    }
    
    borrow() {
        if (this.#isAvailable) {
            this.#isAvailable = false;
            return true;
        }
        return false;
    }
    
    return() {
        this.#isAvailable = true;
    }
    
    getInfo() {
        return `"${this.title}" by ${this.author} (${this.genre})`;
    }
}

class Member {
    #membershipId;
    #borrowedBooks = [];
    
    constructor(name, membershipId) {
        this.name = name;
        this.#membershipId = membershipId;
    }
    
    get membershipId() {
        return this.#membershipId;
    }
    
    get borrowedBooks() {
        return [...this.#borrowedBooks]; // Return copy
    }
    
    borrowBook(book) {
        if (this.#borrowedBooks.length >= 3) {
            return "Cannot borrow more than 3 books";
        }
        
        if (book.borrow()) {
            this.#borrowedBooks.push(book);
            return `Successfully borrowed: ${book.getInfo()}`;
        }
        
        return "Book is not available";
    }
    
    returnBook(isbn) {
        const bookIndex = this.#borrowedBooks.findIndex(book => book.isbn === isbn);
        
        if (bookIndex !== -1) {
            const book = this.#borrowedBooks[bookIndex];
            book.return();
            this.#borrowedBooks.splice(bookIndex, 1);
            return `Successfully returned: ${book.getInfo()}`;
        }
        
        return "Book not found in borrowed list";
    }
    
    getBorrowedBooksInfo() {
        return this.#borrowedBooks.map(book => book.getInfo());
    }
}

class Library {
    #books = [];
    #members = [];
    
    constructor(name) {
        this.name = name;
    }
    
    addBook(book) {
        this.#books.push(book);
        return `Added book: ${book.getInfo()}`;
    }
    
    addMember(member) {
        this.#members.push(member);
        return `Added member: ${member.name}`;
    }
    
    findBook(isbn) {
        return this.#books.find(book => book.isbn === isbn);
    }
    
    findMember(membershipId) {
        return this.#members.find(member => member.membershipId === membershipId);
    }
    
    getAvailableBooks() {
        return this.#books.filter(book => book.isAvailable);
    }
    
    lendBook(membershipId, isbn) {
        const member = this.findMember(membershipId);
        const book = this.findBook(isbn);
        
        if (!member) return "Member not found";
        if (!book) return "Book not found";
        
        return member.borrowBook(book);
    }
    
    receiveBook(membershipId, isbn) {
        const member = this.findMember(membershipId);
        
        if (!member) return "Member not found";
        
        return member.returnBook(isbn);
    }
    
    getLibraryStats() {
        const totalBooks = this.#books.length;
        const availableBooks = this.getAvailableBooks().length;
        const totalMembers = this.#members.length;
        
        return {
            name: this.name,
            totalBooks,
            availableBooks,
            borrowedBooks: totalBooks - availableBooks,
            totalMembers
        };
    }
}

// Usage Example
const library = new Library("City Central Library");

// Add books
const book1 = new Book("1984", "George Orwell", "978-0-452-28423-4", "Dystopian Fiction");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4", "Fiction");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5", "Classic");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Add members
const member1 = new Member("Alice Johnson", "M001");
const member2 = new Member("Bob Smith", "M002");

library.addMember(member1);
library.addMember(member2);

// Borrow books
console.log(library.lendBook("M001", "978-0-452-28423-4"));
console.log(library.lendBook("M002", "978-0-06-112008-4"));

// Check library stats
console.log(library.getLibraryStats());

// Return book
console.log(library.receiveBook("M001", "978-0-452-28423-4"));

// Final stats
console.log(library.getLibraryStats());
```
</details>

---

# Summary

✅ **ES6 Classes** - Modern way to create objects  
✅ **Class Features** - Fields, methods, getters/setters  
✅ **Static Properties** - Class-level functionality  
✅ **Private/Public** - Proper encapsulation  
✅ **Inheritance** - Code reuse and extension  
✅ **OOP Principles** - Abstraction, Encapsulation, Inheritance, Polymorphism  
✅ **Advanced Patterns** - Composition, Mixins, Factory  

### 📝 Key Takeaways:
1. **Classes are blueprints** for creating objects
2. **Encapsulation** protects data integrity
3. **Inheritance** enables code reuse
4. **Polymorphism** allows flexible interfaces
5. **Composition** can be better than inheritance
6. **Private fields** provide true data hiding

Keep practicing these concepts and you'll become a JavaScript OOP master! 🚀


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
<p>📆 <em>Next: Day - 31: Master JavaScript Prototypes and Object Patterns - Confused to Confident! </em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>
<p>*Happy Coding! 💻✨*</p>
</div>

