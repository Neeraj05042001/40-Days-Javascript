// TODO Question 1: celsius to fahrenheit

function celsiusToFahrenheit(celsius) {
  // let fahrenheit = (celsius*9/5) +32
  console.log("Celsius in Fahrenheit is", (celsius * 9) / 5 + 32);
}
celsiusToFahrenheit(37);

// TODO Question 2: Find the Maximum of Two Numbers

function findMax(num1, num2) {
  if (num1 > num2) {
    console.log("The larger number is ", num1);
  } else {
    console.log("The larger number is ", num2);
  }
}
findMax(-12, 8);

// TODO Question 3: Find the Maximum of Two Numbers
function isPalindrome(str) {
  let newStr = "";
  let reverseStr = "";

  for (let i = 0, j = str.length - 1; i <= str.length - 1, j >= 0; i++, j--) {
    newStr = newStr + str[i];
    reverseStr = reverseStr + str[j];
  }

  console.log(
    "The string you typed is",
    newStr + " " + "And the reverse of this string is",
    reverseStr + " " + "so"
  );

  if (reverseStr === newStr) {
    console.log("The string is a Palindrome");
  } else {
    console.log("The string is not a Palindrome");
  }
}
isPalindrome("Neeraj");

// TODO Question 3: Find Factorial of a Number

function factorial(n) {
  let factors = 1;
  for (let i = 2; i <= n; i++) {
    factors = factors * i;
  }
  return factors;
}
console.log("factors =", factorial(6));

console.log("COUNT VOWELS");
// TODO Question 5: Count Vowels in a String

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count = count + 1;
    }
  }
  console.log("Total number of Vowels in this string is", count);
  if (count === 0) {
    console.log("Vowels not found");
  }
}

countVowels("neeraj");

console.log("FIRST LETTER OF EACH WORD IN A SENTENCE");

// TODO Question 6: Capitalize the First Letter of Each Word in a Sentence

function capitalizeWords(sentence) {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    if (i === 0 || sentence[i - 1] === " ") {
      newSentence = newSentence + sentence[i].toUpperCase();
    } else {
      newSentence = newSentence + sentence[i];
    }
  }
  console.log(newSentence);
}

capitalizeWords("my name is neeraj kumar and i am learning javascript");

console.log("IIFE");
// TODO Question 7:  Use an IIFE to Print “Hello, JavaScript!

(function abc(str) {
  console.log("Hello" + " " + str);
})("javascript");


// TODO Question 7: Simple Callback Function
// Step 1: You have a function
function sayHello(name) {
  console.log("Hello, " + name);
}

// Step 2: Another function accepts a function
function processUser(callback) {
  let userName = "Neeraj";
  
  // Step 3: It calls the callback function
  callback(userName);
}

// Step 4: You call main function and give your function
processUser(sayHello);