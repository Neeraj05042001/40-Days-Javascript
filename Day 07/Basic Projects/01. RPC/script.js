const userInput = prompt(
  "Please enter your choice: Rock, Paper or Scissor"
).toLowerCase();
// console.log(userInput);

const computerChoice = Math.floor(Math.random() * 3) + 1;
let options = "";
if (computerChoice === 1) {
  options = "rock";
} else if (computerChoice === 2) {
  options = "paper";
} else {
  options = "scissor";
}
// console.log(options);

function game() {
  let count = 0;
  if (
    (userInput === "rock" && options === "scissor") ||
    (userInput === "paper" && options === "rock") ||
    (userInput === "scissor" && options === "paper")
  ) {
    console.log("Player wins");
  } else if (
    (userInput === "rock" && options === "paper") ||
    (userInput === "paper" && options === "scissor") ||
    (userInput === "scissor" && options === "rock")
  ) {
    console.log("OOPS......!!!!!! You Loose, Computer wins");
  } else if (userInput === options) {
    console.log("Match Tied");
  } else {
    console.log(
      "Invalid Input Please enter between ROCK, PAPER and SCISSOR only"
    );
  }
  count = count + 1;
  console.log(count);
}

game();


// TODO using Switch Case



