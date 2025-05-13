// TODO Question 1:
/**
 *  Output :- It's a normal day.
 * this is because of the case sensitive as the variable is having "Monday " in which the "M" is capital while in case "monday" has small "m".
 **/

// TODO Question 2:

let amount = 12500;
if (amount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid Amount");
}

// TODO Question 3: Calculator using switch-case

let a = 12;
let b = 3;

let operator = "*";

switch (operator) {
  case "+": {
    console.log(a + b);
    break;
  }
  case "-": {
    console.log(a - b);
    break;
  }
  case "*": {
    console.log(a * b);
    break;
  }
  case "/": {
    console.log(a / b);
    break;
  }
  case "%": {
    console.log(a % b);
    break;
  }
  default:
    console.log("Invalid operator");
}

// TODO Question 4: Pay for your movie ticket

let age = 93;
let ticketPrice = 0;
if (age < 18) {
  console.log("Children");
  console.log("Ticket Price is $3");
} else if (age >= 18 && age <= 60) {
  console.log("Adult");
  console.log("Ticket Price is $10");
} else {
  console.log("seniors");

  console.log("Ticket Price is $8");
}

// TODO Question 5: Horoscope Sign Checker:

let month = "april";

switch (month) {
  case "january": {
    console.log("Capricorn ♑ ");
    break;
  }
  case "feburary": {
    console.log("Aquarius ♒ ");
    break;
  }
  case "march": {
    console.log("Pisces ♓ ");
    break;
  }
  case "april": {
    console.log("Aries ♈  ");
    break;
  }
  case "may": {
    console.log("Taurus ♉ ");
    break;
  }
  case "june": {
    console.log("Cancer ♋  ");
    break;
  }
  case "july": {
    console.log("Gemini ♊ ");
    break;
  }
  case "august": {
    console.log("Leo ♌ ");
    break;
  }
  case "september": {
    console.log("Virgo ♍ ");
    break;
  }
  case "october": {
    console.log("Libra ♎");
    break;
  }
  case "november": {
    console.log("Scorpio ♏  ");
    break;
  }
  case "december": {
    console.log("Sagittarius ♐ ");
    break;
  }
  default:
    console.log("Invalid Entry");
}

// TODO     Question 6: Which Triangle?

const p = 10;
const q = 10;
const r = 10;

if (p === q && q === r) {
  console.log("Equilateral Triangle");
} else if (p === q || q === r || r === p) {
  console.log("Isosceles Triangle");
} else {
  console.log("scalene Triangle");
}
