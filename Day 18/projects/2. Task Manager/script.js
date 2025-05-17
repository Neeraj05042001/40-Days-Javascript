function addTask() {
  const input = document.getElementById("input");

  const ul = document.getElementById("task-div");
  const task = input.value;

  if (task.trim() === "") return;
  const li = document.createElement("li");
  li.innerText = task;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.style.marginLeft = "20px";
  completeBtn.style.fontSize = "40px";
  completeBtn.onclick = function () {
    li.classList.toggle("task-completed");
    li.classList.toggle("btn")
  };
  li.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.style.marginLeft = "20px";
  deleteBtn.style.fontSize = "40px";

  deleteBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteBtn);

  ul.appendChild(li);

  input.value = "";
}

function searchFilter() {
  const addedTask = document.querySelectorAll("li");
  const search = document.getElementById("search").value.trim().toLowerCase();

  addedTask.forEach((te) => {
    const taskText = te.innerText.trim().toLowerCase();

    if (taskText.includes(search) && search !== "") {
      te.style.backgroundColor = "Yellow";  // highlight match
    } else {
      te.style.backgroundColor = "white"; // reset non-matching items
    }
  });
}


 

  

