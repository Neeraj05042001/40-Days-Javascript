const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name,
  company: {
    name: companyName,
    location: { city, zip },
  },
} = person;
console.log(name);
console.log(companyName);
console.log(city);
console.log(zip);

/**    TODO Question 4: Build a Student Management System
Store student details in an object (name, age, grades).
Implement a method to calculate the average grade.*/

const student = {
  studentName: "Neeraj",
  age: 23,
  subject: {
    maths: 85,
    physics: 90,
    chemistry: 78,
    biology: 92,
  },
};

const {
  studentName,
  age,
  subject: { maths, physics, chemistry, biology },
} = student;

const average =
  (maths + physics + chemistry + biology) / Object.keys(student.subject).length;

console.log(average);

if (average > 80) {
  console.log("Grade is A");
} else if (average > 60) {
  console.log("Grade is B");
} else {
  console.log("Grade is C");
}

/**
 * Book Store Inventory System
 * Store books in an object.
 * Add functionality to check availability and restock books
 *
 */

const bookStore = {
  selfHelp: {
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    quantity: 5,
  },
  horror: {
    title: "Bhutiya",
    author: "James Clear",
    price: 499,
    quantity: 5,
  },
  scifi: {
    title: "Space",
    author: "James Clear",
    price: 499,
    quantity: 5,
  },
  biography: {
    title: "Elon Musk",
    author: "James Clear",
    price: 499,
    quantity: 5,
  },
};

// const { selfHelp:{title:selfHelpTitle, author:selfHelpAuthor,price:selfHelpPrice, quantity:selfHepQuantity}} = bookS;

//TODOD QUESTION NOTEN1: Create an object called book with properties for title , author , and year . Then add a new property genre , modify the year , and delete the author property.

const book = {
  title: "Atomic Habits",
  author: "Neeraj",
  year: "2000",
};

book.genre = "Self-Help";
book.year = "2025";
delete book.author;

console.log(book)

// TODO QUESTION NOTES 2: 