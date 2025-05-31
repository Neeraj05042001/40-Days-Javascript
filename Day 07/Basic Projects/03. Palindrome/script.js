

//TODO : Check if a given word or number reads the same backward as forward (palindrome)

const word = prompt("Please Enter a Word to check whether Palindrome or not");

function checkPalindrome(word) {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
    console.log(newWord);
  }
  if (newWord === word) {
    console.log(
      `The entered is ${word} and its reverse is ${newWord} hence it is a PALINDROME`
    );
  } else {
    console.log(
      `The entered is ${word} and its reverse is ${newWord} hence it is  NOT A PALINDROME`
    );
  }
}

checkPalindrome(word);
