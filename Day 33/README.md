# 📚 DAY - 33: JavaScript Map, Set, WeakMap, WeakSet - When & Why to Use Them! 🤩


![Day 33](https://img.shields.io/badge/Day%2033-JavaScript%20Collections-brightgreen?style=for-the-badge&logo=javascript&logoColor=white)
![Map](https://img.shields.io/badge/Map-✅%20Mastered-28a745?style=for-the-badge&logo=javascript&logoColor=white)
![Set](https://img.shields.io/badge/Set-✅%20Mastered-28a745?style=for-the-badge&logo=javascript&logoColor=white)
![WeakMap](https://img.shields.io/badge/WeakMap-✅%20Mastered-28a745?style=for-the-badge&logo=javascript&logoColor=white)
![WeakSet](https://img.shields.io/badge/WeakSet-✅%20Mastered-28a745?style=for-the-badge&logo=javascript&logoColor=white)



> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 💼 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦 | [GitHub: Neeraj05042001](https://github.com/Neeraj05042001) 🐙* |




---


## 📖 Table of Contents
1. [Objects and Arrays Recap](#objects-and-arrays-recap)
2. [Object & Array Shortcomings](#object--array-shortcomings)
3. [JavaScript Map](#javascript-map)
4. [JavaScript Set](#javascript-set)
5. [WeakMap](#weakmap)
6. [WeakSet](#weakset)
7. [Interview Questions](#interview-questions)
8. [Practice Tasks](#practice-tasks)

---

## 🔄 Objects and Arrays Recap

### 📝 Quick Review
- **Objects**: Key-value pairs where keys are strings/symbols
- **Arrays**: Ordered collections with numeric indices

```javascript
// Object
let obj = {
    name: "John",
    age: 25
};

// Array
let arr = ["apple", "banana", "orange"];
```

### 🧠 Knowledge Check
<details>
<summary>Q: What are the main differences between objects and arrays?</summary>
<strong>Answer:</strong> Objects use string/symbol keys and are unordered, while arrays use numeric indices and maintain order. Objects are for key-value relationships, arrays for ordered collections.
</details>

---

## ⚠️ Object & Array Shortcomings

### 🔍 Object Limitations
1. **Key Type Restriction**: Only strings and symbols
2. **No Size Property**: Must use `Object.keys().length`
3. **Prototype Pollution**: Inherits properties from prototype chain
4. **Not Iterable**: Cannot use `for...of` directly

### 🔍 Array Limitations
1. **No Uniqueness**: Can contain duplicate values
2. **Performance**: Checking existence can be O(n)
3. **Type Mixing**: No built-in type enforcement

---

## 🗺️ JavaScript Map

### 📖 Definition
**Map** is a collection of key-value pairs where keys can be of **any type** (objects, primitives, functions). It remembers the original insertion order of keys.

### 🎯 Key Features
- ✅ Keys can be any type
- ✅ Maintains insertion order
- ✅ Has size property
- ✅ Iterable
- ✅ Better performance for frequent additions/deletions

### 🏗️ Create & Initialize Map

```javascript
// Empty Map
const map1 = new Map();

// Initialize with values
const map2 = new Map([
    ['name', 'Neeraj'],
    ['type', 'YT'],
    ['owner', 'Neeraj Kumar']
]);

console.log(map2); // Map(3) {"name" => "Neeraj", "type" => "YT", "owner" => "Neeraj Kumar"}
```

### ➕ Adding Map Entries

```javascript
const map = new Map();

// Using set(key, value)
map.set("name", "tapaScript");
map.set('type', 'YT');
map.set('owner', 'Tapas Adhikary');
map.set('owner', 'ts'); // Overwrites previous value

console.log(map); // Map(3) {"name" => "tapaScript", "type" => "YT", "owner" => "ts"}
```

### 📥 Getting Map Values

```javascript
const map = new Map([
    ['name', 'tapaScript'],
    ['type', 'YT']
]);

// Using get(key)
console.log(map.get('name')); // "tapaScript"
console.log(map.get('nonexistent')); // undefined
```

### 🔑 Map Keys - The Power!
- In case of regular JavaScript Object, even if you pass a key as number, JavaScript will treat it as a `string` only.
- But in case of `Map`, if we pass a key as `number` it will treat it as number only.

```javascript
const funMap = new Map();

// Different key types
funMap.set(560, "My House Number");        // Number key
funMap.set(true, "Yes, I love teaching");  // Boolean key
funMap.set({name: 'tapas'}, true);         // Object key

// Key comparison is strict
console.log(funMap.get(560) === funMap.get("560")); // false
```

### 🧠 Knowledge Check
<details>
<summary>Q: What makes Map keys different from Object keys?</summary>
<strong>Answer:</strong> Map keys can be of any type (numbers, booleans, objects, functions), while Object keys are automatically converted to strings. Map preserves key types.
</details>

### 🛠️ Map Properties & Methods

1. size - gives the size of map
2. has - check whether exists or not
3. delete - delete single property
4. clear - delete all entries

```javascript
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// Properties
console.log(map.size); // 3

// Methods
console.log(map.has('a')); // true
console.log(map.get('b')); // 2
map.delete('c');
console.log(map.size); // 2
// map.clear(); // Removes all entries
```

### 🔄 MapIterators
1. keys - gives the all the keys
2. values - gives the values of all keys
3. Entries - gives the key value pair
```javascript
const ageMap = new Map([
    ['Jack', 20],
    ['Alan', 34],
    ['Bill', 10]
]);

// Get iterators
console.log(ageMap.keys());    // MapIterator {"Jack", "Alan", "Bill"}
console.log(ageMap.values());  // MapIterator {20, 34, 10}
console.log(ageMap.entries()); // MapIterator {"Jack" => 20, "Alan" => 34, "Bill" => 10}

// Iterate
for (const [key, value] of ageMap) {
    console.log(`${key} is ${value} years old!`);
}

//ITERATE DIRECTLY
ageMap.forEach((value, key)=>{
    console.log(`${key} is ${value} years old!`)
})
```



### 🔄 Conversion Operations

#### Object to Map 

An Object can be converted into a Map using `Object.entries()`

```javascript
const address = {
    'Tapas': 'Bangalore',
    'James': 'Houston',
    'Selva': 'Srilanka'
};

const addressMap = new Map(Object.entries(address));
console.log(addressMap);
```

#### Map to Object

A Map can be converted into an Object using `Object.fromEntries()`

```javascript
const mapToObj = Object.fromEntries(addressMap);
console.log(mapToObj);
```

#### Map to Array

A Map can be converted into an array using `Array.from()` or `Spread operator`.
```javascript
const map = new Map([
    ['milk', 200],
    ['tea', 300],
    ['coffee', 500]
]);

console.log(Array.from(map)); // [["milk", 200], ["tea", 300], ["coffee", 500]]
console.log([...map]); // Same result using spread
```

### 🧠 Knowledge Check
<details>
<summary>Q: How do you convert a Map to an Array?</summary>
<strong>Answer:</strong> Use `Array.from(map)` or spread operator `[...map]`. Both return an array of [key, value] pairs.
</details>

### 🆚 Map vs Object

| Feature | Map | Object |
|---------|-----|--------|
| **Key Types** | Any type | String/Symbol only |
| **Size** | `map.size` | `Object.keys(obj).length` |
| **Iteration** | Directly iterable | Need `Object.keys()` |
| **Performance** | Better for frequent additions/deletions | Optimized for property access |
| **Prototype** | No default keys | Has default keys |

**🎯 When to use Map:**
- Need non-string keys
- Frequent additions/deletions
- Need to know the size
- Need guaranteed iteration order

**🎯 When to use Object:**
- Need JSON serialization
- Working with records/dictionaries
- Need property access syntax

---

## 📦 JavaScript Set

### 📖 Definition
**Set** is a collection of **unique values** where each value can only occur once. It can store any type of values (primitives or objects).

### 🎯 Key Features
- ✅ Only unique values
- ✅ Maintains insertion order
- ✅ Has size property
- ✅ Iterable
- ✅ Fast lookup performance

### 🏗️ Create & Initialize Set

```javascript
// Empty Set
const set1 = new Set();

// Initialize with values
const fruitsSet = new Set(['🍉', '🍎', '🍈', '🍏']);
console.log(fruitsSet); // Set(4) {"🍉", "🍎", "🍈", "🍏"}
console.log(fruitsSet.size); // 4
```

### 🛠️ Set Properties & Methods

```javascript
const saladSet = new Set();

// Adding values
saladSet.add('🍅'); // tomato
saladSet.add('🥑'); // avocado
saladSet.add('🥕'); // carrot
saladSet.add('🥒'); // cucumber
saladSet.add('🥒'); // Duplicate - ignored

console.log(saladSet.size); // 4 (duplicate ignored)

// Checking existence
console.log(saladSet.has('🥕')); // true
console.log(saladSet.has('🥦')); // false

// Removing values
saladSet.delete('🥑');
console.log(saladSet.size); // 3

// Clear all
 saladSet.clear();
```

### 🔄 SetIterator

```javascript
const houseNos = new Set([360, 567, 101]);

// Note: keys() and values() return the same iterator in Sets
console.log(houseNos.keys());    // SetIterator {360, 567, 101}
console.log(houseNos.values());  // SetIterator {360, 567, 101}
console.log(houseNos.entries()); // SetIterator {360 => 360, 567 => 567, 101 => 101}
```

### 🧠 Knowledge Check
<details>
<summary>Q: What happens when you add a duplicate value to a Set?</summary>
<strong>Answer:</strong> The duplicate value is ignored. Sets only store unique values, so adding the same value multiple times has no effect.
</details>

### 🔄 Set and Array

- When you are going to deal with an unique set of elements(no duplicate) go for set.
- It is an extension of array.

#### Set to Array
- To convert a set to an array use `spread operator`.
- To convert array to a set use simply `new Set([array])`
```javascript
const houseNos = new Set([360, 567, 101]);
const houseNoArr = [...houseNos];
console.log(houseNoArr); // [360, 567, 101]
```

#### Remove Duplicates from Array
```javascript
const mixedFruit = ['🍉', '🍎', '🍉', '🍈', '🍏', '🍎', '🍈'];
const uniqueFruits = [...new Set(mixedFruit)];
console.log(uniqueFruits); // ["🍉", "🍎", "🍈", "🍏"]
```

### 🔄 Set and Objects

```javascript
let person = { name: 'Alex', age: 32 };
const pSet = new Set();
pSet.add(person);

// Object reference matters
person = {}; // Different object
pSet.add(person); // Adds new object
console.log(pSet.size); // 2
```

### 🧮 Set Theories (Mathematical Operations)

```javascript
const first = new Set([1, 2, 3]);
const second = new Set([3, 4, 5]);

// Union (A ∪ B)
const union = new Set([...first, ...second]);
console.log(union); // Set {1, 2, 3, 4, 5}

// Intersection (A ∩ B)
const intersection = new Set([...first].filter(x => second.has(x)));
console.log(intersection); // Set {3}

// Difference (A - B)
const difference = new Set([...first].filter(x => !second.has(x)));
console.log(difference); // Set {1, 2}

// Superset check
const numbers = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const the4Table = new Set([4, 8, 12, 16]);
console.log([...the4Table].every(x => numbers.has(x))); // true
```

### 🧠 Knowledge Check
<details>
<summary>Q: How do you find the intersection of two Sets?</summary>
<strong>Answer:</strong> Convert one Set to array, filter elements that exist in the second Set: `new Set([...set1].filter(x => set2.has(x)))`
</details>

---

## 🗺️💧 WeakMap

### 📖 Definition
**WeakMap** is a collection of key-value pairs where keys must be **objects** and are held **weakly**. This means if the key object is garbage collected, the entry is automatically removed.

### 🎯 Key Features
- ✅ Keys must be objects
- ✅ Weak references (garbage collection friendly)
- ✅ Not iterable
- ✅ No size property
- ✅ Perfect for private data

### 🏗️ Basic Usage

```javascript
let user = { name: 'tapaScript' };
const wMap = new WeakMap();
wMap.set(user, { isActive: true });

// When user is set to null, the WeakMap entry is eligible for garbage collection
user = null;
```

### 🛠️ WeakMap Methods

```javascript
const metadata = new WeakMap();

function setMetadata(el, info) {
    metadata.set(el, info);
}

function getMetadata(el) {
    return metadata.get(el);
}

const div = document.createElement('div');
setMetadata(div, { visible: true });
console.log(getMetadata(div)); // { visible: true }

// Available methods: set(), get(), has(), delete()
```

### 🎯 Use Cases
- **Private data storage**
- **DOM element metadata**
- **Caching without memory leaks**

### 🧠 Knowledge Check
<details>
<summary>Q: Why can't you iterate over a WeakMap?</summary>
<strong>Answer:</strong> Because WeakMap keys are held weakly and can be garbage collected at any time, making iteration unpredictable and potentially unsafe.
</details>

---

## 📦💧 WeakSet

### 📖 Definition
**WeakSet** is a collection of **objects** held **weakly**. Objects in WeakSet are held weakly, meaning they can be garbage collected if there are no other references.

### 🎯 Key Features
- ✅ Only objects as values
- ✅ Weak references
- ✅ Not iterable
- ✅ No size property
- ✅ Automatic cleanup

### 🏗️ Basic Usage

```javascript
const onlineUsers = new WeakSet();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

onlineUsers.add(user1);
onlineUsers.add(user2);

console.log(onlineUsers.has(user1)); // true

// When user1 is dereferenced, it's eligible for garbage collection
user1 = null;
```

### 🛠️ WeakSet Methods

```javascript
const weakSet = new WeakSet();
const obj = { id: 1 };

// Available methods: add(), has(), delete()
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
weakSet.delete(obj);
console.log(weakSet.has(obj)); // false
```

### 🎯 Use Cases
- **Tracking object states**
- **Preventing memory leaks**
- **DOM element tracking**

---

## 🎯 Interview Questions

<details>
<summary>Q1: What's the difference between Map and Object?</summary>
<strong>Answer:</strong> Map allows any type of keys, maintains insertion order, has size property, and is directly iterable. Object keys are strings/symbols, may not preserve order in all engines, requires Object.keys().length for size, and needs Object.keys() for iteration.
</details>

<details>
<summary>Q2: When would you use Set over Array?</summary>
<strong>Answer:</strong> Use Set when you need unique values, fast lookup operations (has() is O(1) vs Array.includes() which is O(n)), or when performing mathematical set operations like union, intersection, or difference.
</details>

<details>
<summary>Q3: What are WeakMap and WeakSet used for?</summary>
<strong>Answer:</strong> WeakMap and WeakSet are used to prevent memory leaks by holding weak references to objects. They're perfect for storing metadata about DOM elements, private data, or temporary object associations without preventing garbage collection.
</details>

<details>
<summary>Q4: Why can't you iterate over WeakMap and WeakSet?</summary>
<strong>Answer:</strong> Because they hold weak references, objects can be garbage collected at any time. This makes iteration unpredictable and potentially unsafe, as the collection size could change during iteration.
</details>

<details>
<summary>Q5: How do you remove duplicates from an array using Set?</summary>
<strong>Answer:</strong> Convert array to Set and back to array: `[...new Set(array)]` or `Array.from(new Set(array))`. Set automatically removes duplicates.
</details>

<details>
<summary>Q6: What's the time complexity of Map.get() vs Object property access?</summary>
<strong>Answer:</strong> Both are generally O(1) on average, but Map may have better performance for frequent additions/deletions. Object property access might be slightly faster for property access due to engine optimizations.
</details>

---

## 🏋️ Practice Tasks

### 📝 Task 1: Map Operations
Create a Map to store student grades and implement functions to:
- Add a student with grade
- Get student's grade
- Check if student exists
- Get all students with grades above 80

<details>
<summary>Solution</summary>

```javascript
const studentGrades = new Map();

function addStudent(name, grade) {
    studentGrades.set(name, grade);
}

function getGrade(name) {
    return studentGrades.get(name);
}

function hasStudent(name) {
    return studentGrades.has(name);
}

function getTopStudents(threshold = 80) {
    const topStudents = [];
    for (const [name, grade] of studentGrades) {
        if (grade > threshold) {
            topStudents.push({ name, grade });
        }
    }
    return topStudents;
}

// Test
addStudent("Alice", 95);
addStudent("Bob", 75);
addStudent("Charlie", 88);
console.log(getTopStudents()); // [{ name: "Alice", grade: 95 }, { name: "Charlie", grade: 88 }]
```
</details>

### 📝 Task 2: Set Operations
Implement functions to perform set operations:
- Union of two arrays
- Intersection of two arrays
- Difference of two arrays
- Check if one array is subset of another

<details>
<summary>Solution</summary>

```javascript
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(x => set2.has(x));
}

function difference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(x => !set2.has(x));
}

function isSubset(subset, superset) {
    const superSet = new Set(superset);
    return subset.every(x => superSet.has(x));
}

// Test
console.log(union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(difference([1, 2, 3], [2, 3, 4])); // [1]
console.log(isSubset([1, 2], [1, 2, 3, 4])); // true
```
</details>

### 📝 Task 3: WeakMap for Private Data
Create a class using WeakMap to store private data:

<details>
<summary>Solution</summary>

```javascript
const privateData = new WeakMap();

class Person {
    constructor(name, age) {
        privateData.set(this, { name, age });
    }
    
    getName() {
        return privateData.get(this).name;
    }
    
    getAge() {
        return privateData.get(this).age;
    }
    
    setAge(age) {
        const data = privateData.get(this);
        data.age = age;
    }
}

// Test
const person = new Person("John", 25);
console.log(person.getName()); // "John"
console.log(person.getAge()); // 25
person.setAge(26);
console.log(person.getAge()); // 26
```
</details>

### 📝 Task 4: Convert Between Data Structures
Write functions to convert between different data structures:

<details>
<summary>Solution</summary>

```javascript
// Object to Map
function objectToMap(obj) {
    return new Map(Object.entries(obj));
}

// Map to Object
function mapToObject(map) {
    return Object.fromEntries(map);
}

// Array to Set (remove duplicates)
function arrayToSet(arr) {
    return new Set(arr);
}

// Set to Array
function setToArray(set) {
    return [...set];
}

// Map to Array of pairs
function mapToArray(map) {
    return [...map];
}

// Test
const obj = { a: 1, b: 2, c: 3 };
const map = objectToMap(obj);
console.log(map); // Map { "a" => 1, "b" => 2, "c" => 3 }

const backToObj = mapToObject(map);
console.log(backToObj); // { a: 1, b: 2, c: 3 }
```
</details>

### 📝 Task 5: Frequency Counter
Create a function that counts character frequency in a string using Map:

<details>
<summary>Solution</summary>

```javascript
function characterFrequency(str) {
    const frequency = new Map();
    
    for (const char of str.toLowerCase()) {
        if (char.match(/[a-z]/)) { // Only count letters
            frequency.set(char, (frequency.get(char) || 0) + 1);
        }
    }
    
    return frequency;
}

function getMostFrequentChar(str) {
    const frequency = characterFrequency(str);
    let maxCount = 0;
    let mostFrequent = '';
    
    for (const [char, count] of frequency) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = char;
        }
    }
    
    return { character: mostFrequent, count: maxCount };
}

// Test
console.log(characterFrequency("hello world")); // Map { "h" => 1, "e" => 1, "l" => 3, "o" => 2, "w" => 1, "r" => 1, "d" => 1 }
console.log(getMostFrequentChar("hello world")); // { character: "l", count: 3 }
```
</details>

---

## 🎯 Key Takeaways

1. **Map** is perfect when you need any type of keys and guaranteed iteration order
2. **Set** is ideal for unique values and fast lookups
3. **WeakMap** and **WeakSet** prevent memory leaks with weak references
4. Choose the right data structure based on your specific needs
5. Modern JavaScript provides powerful collection types beyond arrays and objects

---

<div align="center">

### **Happy Coding! 🎉 Keep practicing and building amazing things with JavaScript!**
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
<p>📆 <em>Next: Day - 34: Build a Full Library App in JavaScript – OOP, ES6 Modules & Tailwind CSS 🤩 </em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>

</div>