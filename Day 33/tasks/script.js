// TODO QUESTION 1:  Create a Map of Student IDs and Names
/**- Add at least 5 students.
- Retrieve a name using a student ID.
- Delete one entry and print the Map. */
const students = new Map();
students.set("student1", "Neeraj");
students.set("student2", "Amartya");
students.set("student3", "Arnav");
students.set("student4", "Abhijeetj");
students.set("student5", "Aman");

console.log(students.get("student1"));
students.delete("student2");

console.log(students);

// TODO QUESTION 2: Create a Set of Programming Languages

/**- Add duplicate languages to test uniqueness.
- Iterate and print all unique entries. */

const programmingLanguages = new Set([
  "Javascipt",
  "Java",
  "C++",
  "C#",
  "Python",
  "Ruby",
  "Go",
]);

programmingLanguages.add("Java");

for (const lang of programmingLanguages) {
  console.log(lang);
}

// or

programmingLanguages.forEach((lang) => {
  console.log(lang);
});

// TODO QUESTION 3: Compare Object vs Map for Key-Value Storage

/**- Store the same data in both.
- Compare insertion order and key types (e.g., object keys). */

const objects = {
  name: "Neeraj",
  age: 24,
  profession: "student",
  lang: "javaScript",
  role: "frontend engineer",
  1: "one",
  4: "four",
  2: "two",
  $: "dollar",
  "@": "at rate",
  "%": "percentage",
};
console.log(objects);

const map = new Map();
map.set("name", "Neeraj");
map.set("age", 24);
map.set("profession", "student");
map.set("lang", "javascript");
map.set("role", "frontend engineer");
map.set(1, "one");
map.set(4, "four");
map.set(2, "two");
map.set("$", "dollar");
map.set("@", "at rate");
map.set("%", "percentage");

console.log(map);

// Comaprison: In Objects the key are arranged in alphabetical order(strings), ascending order(numbers) & insertion order(symbols) whereas in the map the key values are arranged in order of the insertion.

// TODO Question 4: Build a Contact List Using Map

/**- Use phone numbers as keys and names as values.
- Add, update, delete contacts.
- Search for a contact by number. */

const contact = new Map();

contact.set(9112345242, "Neeraj");
contact.set(9112345243, "Amartya");
contact.set(9112345244, "Arnav");
contact.set(9112345245, "Abhijeet");
contact.set(9112345246, "Kesri");
contact.set(9112345247, "Gourav");

contact.set(9112345243, "Updated");

contact.delete(9112345247);

console.log(contact.get(9112345242));

console.log(contact);

// TODO QUESTION 5: Remove Duplicates from Array Using Set

/**```js
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
```

Convert to a Set and back to an array with only unique values. */

const fruits = ["apple", "banana", "apple", "orange", "banana"];

const removeDuplicate = [...new Set(fruits)];

console.log(removeDuplicate);

// TODO QUESTION 6: Track User Logins with Set
/**- Add user IDs when users log in.
- Remove them on logout.
- Check if a specific user is currently logged in. */

const loggedInUsers = new Set();

loggedInUsers.add("user1");
loggedInUsers.add("user2");
loggedInUsers.add("user3");
loggedInUsers.add("user4");
loggedInUsers.add("user5");

loggedInUsers.delete("user4");

console.log(loggedInUsers.has("user2"));

console.log(loggedInUsers);

// TODO QUESTION 7: Create a Map of Book Titles and Authors
/** - Add at least 5 entries.
- Update an author.
- Count the number of books.*/

const book = new Map();

book.set("Javascipt", "Tapas Adhikary");
book.set("DSA", "Akshay Saini");
book.set("Atomic Habbits", "Neeraj");
book.set("Zero to one", "Peter Thiel");
book.set("Physics", "H.C Verma");

book.set("Physics", "Einstein");

console.log("Total Books are: ", book.size);

console.log(book);

// TODO QUESTION 8: Associate Metadata with DOM Elements Using WeakMap
/**- Create fake DOM elements (objects).
- Store related metadata in a WeakMap.
- Demonstrate benefits for garbage collection. */

let div = { tag: "div" };
let span = { tag: "span" };
let h2 = { tag: "h2" };

const meta = new WeakMap();
meta.set(div, { id: "div", class: "container" });
meta.set(span, { id: "spantg", class: "spantag" });
meta.set(h2, { id: "h2", class: "heading" });
console.log(meta);
span = null;

console.log(meta.get(span)); //gives undefine GC

// TODO QUESTION 9: Track Instances of a Class with WeakSet
/**- Define a `Session` class.
- Add each instance to a WeakSet when created.
- Discuss how it avoids memory leaks. */

class Session {
  constructor(name, session) {
    this.name = name;
    this.session = session;
  }
}

let s1 = new Session("Neeraj", 1);
let s2 = new Session("Neer", 2);
let s3 = new Session("Nee", 3);
let s4 = new Session("N", 4);
// console.log(s1)

const weakSession = new WeakSet();
weakSession.add(s1);
weakSession.add(s2);
weakSession.add(s3);
weakSession.add(s4);

s2 = null;
console.log(weakSession.has(s2));

//Explanation:  When an object (like s2, s3, etc.) is no longer referenced elsewhere (e.g., s2 = null), it becomes eligible for garbage collection. The WeakSet does not prevent this because it holds a weak reference. This helps avoid memory leaks when managing many short-lived objects.

// TODO QUESTION 10: Build a Shopping Cart Using Map
/** - Product IDs as keys and quantity as values.
- Add, remove, and update quantities.
- Calculate total items in the cart.*/

const shoppingCart = new Map();

shoppingCart.set("PI01", 4);
shoppingCart.set("PI02", 6);
shoppingCart.set("PI03", 3);
shoppingCart.set("PI04", 2);
shoppingCart.set("PI05", 1);

//REMOVE
shoppingCart.delete("PI03");

//UPDATE QUANTITY
shoppingCart.set("PI04", 12);

console.log(shoppingCart);

console.log("Total Items in cart:", shoppingCart.size);
const quantities = shoppingCart.values();

let sum = 0;
quantities.forEach((q) => {
  sum = sum + q;
});
console.log("Total items on cart :", sum);

// TODO QUESTION 11: Anagram Checker with Set
/** - Write a function that checks if two strings are anagrams.
- Use Sets to compare character presence.*/

const str1 = "silent";
const str2 = "listen";

function anagrams(str1, str2) {
  const strSet = new Set(str1);
  const strSet2 = new Set(str2);

  if (strSet.size !== strSet2.size) return "Not Anagram";

  for (st of strSet) {
    if (!strSet2.has(st)) return "Not Anagram";
  }
  return "Anagram";
}
const result = anagrams(str1, str2);
console.log(result);

// TODO QUESTION 12:First Non-Repeating Character with Map
/** - Count character frequencies in a string using a Map.
- Return the first character with count 1.*/

// const string = {
//     str: "my name is neeraj kumar"
// }

function firstNonRepeatingChar(str) {
  const charMap = new Map();

  for (let char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (let char of str) {
    if (charMap.get(char) === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbcddce")); // → "e"
console.log(firstNonRepeatingChar("aabbcc")); // → null

// TODO QUESTION 13: Measure Performance: Object vs Map
/**- Insert 100,000 key-value pairs into both.
- Use `console.time()` to benchmark speed. */

console.time("objectLoop");

const object = {};
for (let i = 0; i <= 100000; i++) {
  object[i] = i;
}
console.timeEnd("objectLoop");

console.time("mapLoop");

const mapObj = new Map();
for (let i = 0; i <= 100000; i++) {
  mapObj.set(i, i);
}
console.timeEnd("mapLoop");

//Map seems to be more time consuming in case of insertion

// TODO QUESTION 14: Voting App with Set to Prevent Duplicate Votes
/** - Track user IDs in a Set.
- Allow each ID to vote only once.*/

const voters = new Set();

function users(userId) {
  if (voters.has(userId)) {
    console.log("cannot vote, Already Voted");
  } else {
    voters.add(userId);
    console.log("Can Vote");
  }
}
users("User1");
users("User2");
users("User3");
users("User1");

// TODO QUESTION 15: Employee Registry Using Object Keys in Map

/**- Use employee objects as keys.
- Add and retrieve job-related info.
- Show that Object keys don't work similarly in plain objects. */
