// TODO Addition of even numbers between 1 to 100
let sum = 0;
for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
  console.log(sum);
}
console.log("sum of even numbers from 1 to 100 is", sum);

// Break statement

for (let i = 0; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}
console.log("break statement used");

// continue

for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
console.log("continue statement was used");

// Multiple counters for single loop

for (let i = 0, j = 10; i <= 10, j >= 1; i++, j--) {
  console.log(i, j);
}
console.log("PATTERN")
// TODO print this star pattern
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
for(let i=0; i<=5; i++){
    for(j=1;j<=i; j++){
        console.log("*")
    }
}

// do while loop
// A do while loop ensures that the code executes at least once befrore checking the condition.
let num = 1
do{
    console.log(num)
    num++

}while(num<=5)
  

