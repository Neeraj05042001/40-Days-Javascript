# 🚦 JavaScript Control Flow and Branching 🔀

## 🌟 Introduction to Control Flow

Control flow is the order in which the computer executes statements in a program. JavaScript provides several structures that control the flow of your code based on different conditions, allowing you to make decisions in your programs.

>**`NOTE:`** Control flow gives the ability to skip the execution of few lines of code which we don't need once the truthy value is encountered. It means that once it encounters a truth value it then executes upto that only line and skip the remaing line of code of that particular block.
## 🔍 if-else Statements

The `if-else` statement is a fundamental control structure that lets your code make decisions based on conditions.

### ✨ Basic Syntax

```javascript
if (condition) {
  // Code to execute when condition is true
} else {
  // Code to execute when condition is false
}
```

### 🗳️ The Voting Problem Example

```javascript
const age = 18;

if (age >= 18) {
  console.log("You can vote! 🎉");
} else {
  console.log("You cannot vote yet. ⏳");
}
```

### ⚠️ Omitting Brackets

For single statements, you can omit the curly brackets (but this is generally not recommended for readability):

```javascript
if (age >= 18) console.log("You can vote! 🎉");
else console.log("You cannot vote yet. ⏳");
```

### 📊 Multiple if-else (else if)

```javascript
const score = 85;

if (score >= 90) {
  console.log("Grade: A 🌟");
} else if (score >= 80) {
  console.log("Grade: B ✨");
} else if (score >= 70) {
  console.log("Grade: C 👍");
} else {
  console.log("Grade: F 📚");
}
```

### 🪆 Nesting if-else

You can place if-else statements inside other if-else statements:

```javascript
const hasLicense = true;
const age = 19;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive a car. 🚗");
  } else {
    console.log("You need to get a license first. 📝");
  }
} else {
  console.log("You're too young to drive. ⏳");
}
```

## 🔄 Switch-Case Statements

The `switch` statement evaluates an expression and matches it against multiple possible cases.

### ✨ Basic Syntax

```javascript
switch (expression) {
  case value1:
    // Code to execute when expression equals value1
    break;
  case value2:
    // Code to execute when expression equals value2
    break;
  default:
    // Code to execute when no cases match
}
```

### 📅 Example

```javascript
const day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday
```

### 🪜 Fall Through

Without the `break` statement, code execution "falls through" to the next case:

```javascript
const month = 2;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter ❄️";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring 🌱";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer ☀️";
    break;
  case 9:
  case 10:
  case 11:
    season = "Fall 🍂";
    break;
  default:
    season = "Invalid month ⚠️";
}

console.log(season); // Output: Winter ❄️
```

## 🔄 Ternary Operator

The ternary operator is a shorthand way to write simple if-else statements:

### ✨ Syntax

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

### 🎯 Example

```javascript
const age = 20;
const canVote = age >= 18 ? "Yes, can vote ✓" : "No, cannot vote ✗";
console.log(canVote); // Output: Yes, can vote ✓
```

You can also nest ternary operators, though this can reduce readability:

```javascript
const score = 85;
const grade = score >= 90 ? "A 🌟" : score >= 80 ? "B ✨" : score >= 70 ? "C 👍" : "F 📚";
console.log(grade); // Output: B ✨
```

## 🔍 Comparison: if-else vs. switch-case

| Feature | if-else | switch-case |
|---------|---------|-------------|
| 🎯 Purpose | Good for testing multiple different conditions | Best for comparing a single value against many options |
| 📏 Range Testing | Can test ranges (>, <, >=, <=) | Tests only for equality (===) |
| 🧩 Flexibility | More flexible for complex conditions | More concise for multiple equality checks |
| ⚡ Performance | Slower for many equality checks | More efficient for multiple equality comparisons |
| 📊 Usage | More commonly used in general | Better for enumerations and discrete values |

### 🕒 When to use if-else
- When you need to test different conditions
- When you need comparison operators (>, <, >=, <=)
- When conditions are complex (using logical operators &&, ||)

### 🕒 When to use switch
- When comparing a single variable against multiple values
- When you have many conditions based on the same variable
- When the conditions are simple equality checks

## 💡 Practice Task Example

Here's a task combining these concepts:

```javascript
// Task: Determine ticket price based on age and day 🎟️
const age = 25;
const day = "Wednesday";
let ticketPrice;

// Using if-else
if (age < 12) {
  ticketPrice = 5; // Child price 👶
} else if (age >= 65) {
  ticketPrice = 7; // Senior price 👴
} else {
  // Regular adult price 👨
  if (day === "Wednesday") {
    // Discount day 🏷️
    ticketPrice = 8;
  } else {
    ticketPrice = 10;
  }
}

console.log(`Ticket price: $${ticketPrice}`); // Output: Ticket price: $8

// The same logic using ternary operators
const ticketPrice2 = age < 12 ? 5 : age >= 65 ? 7 : day === "Wednesday" ? 8 : 10;
console.log(`Ticket price (ternary): $${ticketPrice2}`); // Output: Ticket price (ternary): $8
```

## 🎓 Summary

- **Control Flow** 🚦 determines the order of code execution
- **if-else** 🔍 is versatile for various conditions and comparisons
- **switch-case** 🔄 is efficient for comparing a single value against multiple options
- **Ternary Operator** ⚡ offers a concise alternative for simple conditions
- **Choose the right tool** 🛠️ based on your specific programming needs




