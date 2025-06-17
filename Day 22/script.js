//TODO QUESTION KC: Create a simple async example using `setTimeout` that prints numbers 1, 2, 3 with 1-second delays between each.

function asyncExample() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}

asyncExample();

// TODO Q KC:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function arrayCallback(arr, callback) {
  setTimeout(() => {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
      sum += arr[i];
    }
    callback(sum);
  }, 5000);
}

arrayCallback(arr, (result) => {
  console.log("sum of array:", result);
});
