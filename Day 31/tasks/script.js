//TODO QUESTION 1: Create a Simple Prototype Chain
/** Define a base object animal with a method eat.
Create another object dog that inherits from animal using Object.create.
Call eat from dog and explain how the prototype chain resolves it.*/

const animal = {
  eat: function () {
    console.log("I am eating");
  },
};

const dog = Object.create(animal);

dog.eat();

/**EXPLANATION: The animal object defines a method eat. Using Object.create(animal), we create a new object dog that has animal as its prototype. This means dog inherits all properties and methods from animal. When we call dog.eat(), JavaScript doesn't find eat directly on dog, so it looks up the prototype chain and finds it on animal. The method is then executed, demonstrating how prototypal inheritance works. */

//TODO QUESTION 2: Build a Custom Constructor Function

/**- Create a constructor function Book(title, author).
- Add a method getDetails() to the prototype of Book.
- Instantiate two books and show they share the method from the prototype. */

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getDetails = function () {
  console.log(
    `The title of the book is: ${this.title} and its author is: ${this.author}`
  );
};

const b1 = new Book("Physics", "Neeraj");
const b2 = new Book("Biology", "Amartya");

b1.getDetails();
b2.getDetails();

//TODO QUESTION 3: Compare Object Creation Patterns
/**Create three objects using:

- Object literals
- Constructor functions
- Object.create

Add similar methods and compare how inheritance works in each pattern. */

/**SYNTAX LITERAL */
const ob1 = {
  name: "Neeraj",
  email: "nk056612gmail.com",
  details: function () {
    console.log(
      `My name is ${this.name} and my contact email is ${this.email} `
    );
  },
};

ob1.details();

/**EXPLANATION: Object literals are the simplest way to create a single object. Here, ob1 is a standalone object with its own details method. No constructor or inheritance is involved. The method is directly attached to the object. */

function Ob2(name, email) {
  this.email = email;
  this.name = name;
}

Ob2.prototype.details = function () {
  console.log(`My name is ${this.name} and my contact email is ${this.email} `);
};

const obCalling = new Ob2("Amartya", "Amart@gmail.com");
obCalling.details();
/**EXPLANATION: Constructor functions are templates for creating multiple similar objects. Using new, we create instances where each has its own name and email, while the details method is shared via the prototype — optimizing memory usage.. */

const obj3 = Object.create(ob1);
obj3.details();

/**EXPLANATION: Object.create() creates a new object and sets its prototype to the object passed in. So obj3 inherits from ob1 — meaning it has access to ob1's details method via the prototype chain, even though it's not defined directly on obj3. */

//TODO QUESTION 4: Simulate a Real-World Inheritance Chain

/** - Simulate a real-life hierarchy: Person → Student → GraduateStudent.
- Each level should add its own methods or properties using prototypes.
- Show how a GraduateStudent can access methods from both Student and Person.*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.details = function () {
  console.log(`Hi, my name is ${this.name} and i am ${this.age} years old.`);
};

const p1 = new Person("Neeraj", "24");
p1.details();

function Student(name, age, profession) {
  Person.call(this, name, age);

  this.profession = profession;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.details = function () {
  console.log(
    `Hi, my name is ${this.name} and i am ${this.age} years old and i am a ${this.profession}`
  );
};

const p2 = new Student("Amartya", "23", "Writer");
p2.details();

function GraduateStudent(name, age, profession, thesis) {
  Student.call(this, name, age, profession, thesis);

  this.thesis = thesis;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.details = function () {
  console.log(
    `Hi, my name is ${this.name} and i am ${this.age} years old and i am a ${this.profession} and my thesis is ${this.thesis}`
  );
};

const p3 = new GraduateStudent("Ishika", "23", "Poet", "corona");
p3.details();

//TODO QUESTION 5:
/**- Implement the same User entity using:
  - Constructor Function
  - ES6 Class
  - Object.create
- Write a summary comparing syntax, readability, and prototype behavior. */



