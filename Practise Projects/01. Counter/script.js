const increase = document.getElementById("increase");

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const count = document.getElementById("count");

function implementClosure() {
  let counter = 0;
  count.innerText = counter;

  increase.addEventListener("click", function () {
    counter++;
    count.innerText = counter;
  });

  decrease.addEventListener("click", function () {
    console.log(counter);
    counter--;
    count.innerText = counter;
  });

  reset.addEventListener("click", function () {
    console.log(counter);
    counter = 0;
    count.innerText = counter;
  });
}

implementClosure()
