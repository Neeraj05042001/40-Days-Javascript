//TODO QUESTION 1: Create an array of your five favorite foods.

/**
 * Access elements:
 * Get the first and last elements of your array.
 * Try accessing an element at an index that doesn't exist. What happens?
 */

/**
 * Modify your array:
 *  Add a new food to the beginning of your array.
 *  Add a new food to the end of your array.
 *  Remove the first food from your array.
 * Remove the last food from your array.
 */

const favouriteFoods = [
  "Pizza",
  "Burger",
  "Samosa",
  "Curd",
  "Dal",
  "Paneer",
  "Chawal",
];

const [first, last] = [
  favouriteFoods[0],
  favouriteFoods[favouriteFoods.length - 1],
];
console.log(first);
console.log(last);

console.log(favouriteFoods[10]); //it will return undefined

favouriteFoods.unshift("Butter chicken ");
favouriteFoods.push("Chaap");

console.log(favouriteFoods);

favouriteFoods.shift(favouriteFoods[0]);
favouriteFoods.pop(favouriteFoods[favouriteFoods.length - 1]);
console.log(favouriteFoods);

//TODO QUESTION 4: Create a function that takes your array and returns a new array with all elements in reverse order.

function newArray(oldArray) {
  const newArray = [];
  oldArray.forEach((element) => {
    newArray.unshift(element);
  });

  console.log(newArray);
}

newArray(favouriteFoods);

//TODO QUESTION 5: Create a function that merges two arrays and removes any duplicate elements.
const drinks = ["chai", "Pizza", "Curd", "coffee", "Lassi", "Butter chicken"];

const nearray = [...drinks, ...favouriteFoods];

console.log(nearray);

function mergedArray(arr1, arr2) {
  const nearray = [...arr1, ...arr2];

  const mergedArray = [];

  nearray.forEach((element) => {
    if (!mergedArray.includes(element)) {
      mergedArray.push(element);
    }
  });
  console.log(mergedArray);
}

mergedArray(favouriteFoods, drinks);

console.log("ARRAY OF OBJECTS");

//TODO QUESTION 6: Array of objects:
/**
 *  Create an array of objects where each object represents a person with properties for name,age, and city.
 *  Write code to find all people who are older than 30.
 * Sort the array by age in descending order
 */

const person = [
  { name: "Neeraj", age: "44", city: "Greater Noida" },
  { name: "Amartya Kumar", age: "25", city: "Delhi" },
  { name: "Ishika", age: "23", city: "Mumbai" },
  { name: "Ishita", age: "16", city: "Banglaore" },
  { name: "Arnav", age: "26", city: "Patna" },
  { name: "Kesri", age: "32", city: "Bihar" },
];

// Convert ages to numbers, filter people older than 30, and sort by age (descending)
const olderThan30 = person
  .map((p) => ({ ...p, age: Number(p.age) })) // Convert age to number
  .filter((p) => p.age > 30) // Filter people older than 30
  .sort((a, b) => b.age - a.age); // Sort by age descending

console.log(olderThan30);

//TODO QUESTION 7: Nested arrays:
/**
 * Create a 3x3 grid represented as a nested array.
 *  Write a function to get the element at a specific row and column.
 *  Write a function to calculate the sum of all elements in the grid.
 */

const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function getElement(row, column) {
  if (
    row >= 0 &&
    row < nestedArray.length &&
    column >= 0 &&
    column < nestedArray[0].length
  ) {
    const element = nestedArray[row][column];
    console.log(element);
  } else {
    if (row > nestedArray.length) {
      console.log(
        `Invalid row, please enter a row between 0 And ${nestedArray.length}`
      );
    } else {
      console.log(
        `Invalid Column, please enter a column between 0 And ${nestedArray.length}`
      );
    }
  }
}

getElement(1, 0);

function sum(nestedArray) {
  let sum = 0;
  for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
      sum += nestedArray[i][j];
    }
  }
  console.log(sum);
}

sum(nestedArray);

//TODO QUESTION 8: Destructuring challenge:
/**
 * Given the array const data = [1, [2, 3], 4, [5, [6, 7]]] , use destructuring to get the values 1, 3, and 7 in separate variables in one line.
 *
 */

const data = [1, [2, 3], 4, [5, [6, 7]]];
const [a, [, b], , [, [, c]]] = data;

console.log(a);
console.log(b);
console.log(c);

//TODO QUESTION 9: Given two arrays const arr1 = [1, 2, 3] and const arr2 = [4, 5, 6] , create a new array that has the elements in the following order: [4, 5, 6, 1, 2, 3, 0]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr2, ...arr1, 0];
console.log(arr3);
