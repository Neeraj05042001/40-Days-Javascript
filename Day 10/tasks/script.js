// TODO Question 3: Create a function with a nested function and log a variable from the parent function.

function outer() {
  let message =
    "I am in parent(outer) function called from children(inner) function";
  function inner() {
    console.log(message);
  }
  inner();
}

outer();

// TODO Question 4:  Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
// console.log(i) //not accessible as it is outside the function
function variableInsideLoop() {
  // console.log(i)  //var is accessed here as it is a function scope
  for (let i = 0; i < 5; i++) {
    console.log(i); //let or const is only accessible at this point
  }
  // console.log(i) // can be accessed using var but not let or const as var is a function scope and let is or const is a block scope.
}
variableInsideLoop();
// console.log(i) //error: i not defined

// TODO Question 5: Write a function that tries to access a variable declared inside another function.

function first() {
  let message = "first function";
  second(message);
}

function second(messageFromFirst) {
  let message2 = "second function";

  console.log(messageFromFirst);
  console.log(message2);
}

first();


// TODO Question 6: 
