//

console.log("40 days javascript -- learning control flow");

let catchingBus = false;

if (catchingBus) {
  console.log("I will reach Home on time");
} else {
  console.log("I will reach home late");
}

// elgible to vote or not

let age = 24;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}

// Switch Case

let position = 14;

switch (position) {
  case 1: {
    console.log("Print 1");
    break;
  }
  case 2: {
    console.log("Print 2");
    break;
  }
  case 3: {
    console.log("Print 3");
    break;
  }
  case 4: {
    console.log("Print 4");
    break;
  }
  case 5: {
    console.log("Print 5");
    break;
  }
  default:
    console.log("Invalid input");
}

// Detecting a number based on day number

let day = 3;

switch (day) {
  case 1: {
    console.log("Today is Monday");
    break;
  }
  case 2: {
    console.log("Today is Tuesday");
    break;
  }
  case 3: {
    console.log("Today is Wednesday");
    break;
  }
  case 4: {
    console.log("Today is Thursday");
    break;
  }
  case 5: {
    console.log("Today is Friday");
    break;
  }
  case 6: {
    console.log("Today is Saturday");
    break;
  }
  case 7: {
    console.log("Today is Sunday");
    break;

  }

  default: console.log("Invalid Day Input")
}
