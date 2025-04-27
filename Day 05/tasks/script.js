// TODO Question 1: right angle triangle pattern
let star = "";

for (let i = 1; i <= 5; i++) {
  for (j = i; j <= i; j++) {
    star = star + " " + "*";
    console.log(star);
  }
}

// TODO Question 2: Create Multiplication table (using for loop)

let number = 5;
for (let i = 1; i <= 10; i++) {
  const multiplication = number * i;
  //   console.log(`${number} X ${i} = ${multiplication}`); //using tilde
  console.log(number + " " + "X" + " " + i + " " + "=" + " " + multiplication);
}

// TODO Question 3: summation of all odd numbers between 1 to 500 and print
let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
  
}
console.log("sum of all odd numbers from 1 to 500 is", sum) 



// TODO Question 4: Skipping multiples of 3

for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// TODO Question 5
let num=6789;
let reverse = 0;

while(num>0){
  let digit = num%10;
  reverse = reverse*10 + digit;
  console.log(reverse)
}

console.log("end")