const userInput = prompt("Guess any number between 1 to 10");
// console.log("user", userInput);

const computerGeneratedNumber = Math.floor(Math.random() * 10) + 1;

// console.log(computerGeneratedNumber);
function guess() {
  if (isNaN(userInput)) {
    console.log("Please Input a number between 1 to 10 Not a STRING");
  } else if (userInput > 10 || userInput < 1) {
    console.log("Please enter between 1 to 10 only");
  } else {
    if (userInput < computerGeneratedNumber) {
      console.log("Too Low");
    } else if (userInput > computerGeneratedNumber) {
      console.log("Too High");
    } else {
      console.log("Correct Guess");
    }
  }
}
guess();
