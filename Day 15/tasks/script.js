//Todo Question 1: Create an array of 5 elements using the Array Constructor.

const array1 = new Array("Neeraj", "John", "Bob", "Daniel", "Tom");
console.log(array1);

//Todo Question 2: Create an array of 3 empty slots.

const array2 = new Array(3);
console.log(array2);

//Todo Question 3: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

const array3 = ["A", "B", "C", "D", "E", "F"];
console.log(array3[array3.length - 3]);

//Todo Question 4: Use the for loop on the above array to print elements in the odd index.
console.log("Question 4");
for (let i = 0; i < array3.length; i++) {
  if (i % 2 !== 0) {
    console.log(array3[i]);
  }
}

//Todo Question 5: Add one element at the front and the end of an array.
console.log("Question 5");
const array4 = ["P", "Q", "R", "S", "T", "U"];
array4.unshift("Start");
array4.push("End");
console.log(array4);
//Todo Question 6: Remove an element from the front and the end of an array.
console.log("Question 6");
// array4.shift();
// array4.pop();
// console.log(array4);

//or
const frontRemoved = array4.shift();
const endRemoved = array4.pop();
console.log("removed", frontRemoved, endRemoved);
console.log("Update array is", array4);

//Todo Question 7: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

console.log("Question 7");

const favouriteFoods = [
  "Chicken",
  "Paneer",
  "Malai Chaap",
  "Idli",
  "Dosa",
  "Biryani",
  "Fish",
  "Egg Roll",
  "Burger",
  "Pizza",
];
// const [,,,,,eatToday,,,,,] = favouriteFoods // or
const [, , , , , eatToday, ...rest] = favouriteFoods;
console.log(eatToday);

//Todo Question 8: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
console.log("Question 8");
const [, , ...last8FoodItems] = favouriteFoods;
console.log("last 8 food items:", last8FoodItems);

//Todo Question 9: Clone an Array(Shallow cloning)
console.log("Question 9");

const cloneFavouriteFood = [...favouriteFoods]; // or
// const cloneFavouriteFood = favouriteFoods.slice()
console.log(cloneFavouriteFood);

//Todo Question 10: Empty an array using its length property
console.log("Question 10");

favouriteFoods.length = 0;
console.log(favouriteFoods);

//Todo Question 11:
//Todo Question 12:
//Todo Question 13:
