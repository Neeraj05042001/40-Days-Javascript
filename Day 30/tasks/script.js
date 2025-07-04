// TODO QUESTION 1: Create a Book class
/**- Create a Book class with properties: title, author, pages.
- Add a method describe() that logs:
    "Title: [title], Author: [author], Pages: [pages]"
- Create at least two book objects and call the describe() method. */

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  describe() {
    console.log(
      `Title : ${this.title}, Author: ${this.author}, Pages: ${this.pages}`
    );
  }
}

const book1 = new Book("Good Habbits", "Neeraj", "295");
const book2 = new Book("Hyigiene", "Amartya", "120");

book1.describe();
book2.describe();

//TODO QUESTION 2: 2. Use Getters and Setters with a Temperature Class
/**- Create a Temperature class with a private field _celsius.
- Add a getter to return Fahrenheit value.
- Add a setter to set Celsius temperature.
- Test setting temperature and logging Fahrenheit. */

class Temperature {
  #celsius;
  constructor(temp) {
    this.#celsius = temp;
  }

  get fahrenheit() {
    const tempInFahren = (9 / 5) * this.#celsius + 32;
    return tempInFahren;
  }

  set degreeCelsius(temp) {
    this.#celsius = temp;
  }
}

const t = new Temperature(30);
t.degreeCelsius = 24;
console.log(t.fahrenheit);

// TODO QUESTION 3:  Build a User Class with Public & Private Fields
/**- Fields: name, `#password`
- Add a method checkPassword(pw) that checks if it matches #password.
- Show how private fields can’t be accessed directly outside the class. */

class User {
  #password;
  constructor(name, password) {
    this.#password = password;
    this.name = name;
  }

  checkPassword(pwd) {
    if (pwd === this.#password) {
      console.log("Password matched");
    } else {
      console.log("Incorrect Password");
    }
  }
}

const p = new User("Neeraj", 123);
p.checkPassword(12);
// console.log(p.#password);

//TODO QUESTION 4: Inheritance — Vehicle and Car

/**- Vehicle class has fields: make, model, and method start()
- Car extends Vehicle, adds fuelType
- Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]" */

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting`);
  }
}

class Car extends Vehicle {
  constructor(make, model, fuelType) {
    super(make, model);
    this.fuelType = fuelType;
  }

  start() {
    console.log(`Starting ${this.fuelType} car: ${this.make} ${this.model}`);
  }
}

// const vehicle = new Vehicle()
// vehicle.start()

const car = new Car("Mahindra", "THAR", "petrol");
car.start();

// TODO QUESTION 5: Use a Static Method

/**- Create a class MathUtils with static methods:
    add(a, b), subtract(a, b), randomInt(min, max)
- Call the methods without creating an object. */

class MathUtils {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

console.log(MathUtils.add(2, 3));
console.log(MathUtils.subtract(2, 3));
console.log(MathUtils.randomInt(2, 3));

//TODO QUESTION 6: Smart Light Bulb Class with Access Control

/**- Create a SmartLightBulb class:
  - Public method: turnOn(), turnOff()
  - Private method: #connectToWiFi()
  - turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
  - Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
- Try accessing the private method directly and observe the error. */

class SmartLightBulb {
  #connectionToWifi() {
    console.log("connected to Wifi successfully");
  }
  turnOn() {
    this.#connectionToWifi();
    console.log("Light is ON");
  }
  turnOff() {
    console.log("Turning Light off");
  }
  static info() {
    console.log("SmartLightBulb v1.0 supports remote control and scheduling");
  }
}

SmartLightBulb.info();
const l = new SmartLightBulb();
l.turnOn();
l.turnOff();

// console.log(l.#connectionToWifi())

//TODO QUESTION 7: Animal Class and Subclasses

/**- Base Class: Animal(name, sound)
  - Method: makeSound() logs: "The [name] says [sound]"
- Subclass 1: Dog(name) — inherits from Animal
  - Overrides makeSound() → "The Dog [name] barks!"
- Subclass 2: Cat(name)
  — overrides makeSound() → "The Cat [name] meows!"
- Call super() inside each subclass constructor
- Add a shared method sleep() in Animal and test with both Dog and Cat instances. */

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
  sleep() {
    console.log(`The ${this.name} is sleeping`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Barks");
  }
  makeSound() {
    console.log(`The dog ${this.name} barks`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, "Meows");
  }

  makeSound() {
    console.log(`The cat ${this.name} Meows`);
  }
}

const ani = new Animal("dog", "barks");
ani.makeSound();

const dog = new Dog("Labra");
dog.makeSound();
dog.sleep();

const cat = new Cat("brownie");
cat.makeSound();
cat.sleep();

/**END OF Tasks of day 30 */
