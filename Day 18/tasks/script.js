// TODO QUESTION 1: Create a form dynamically using JavaScript and manipulate its behavior
//creating the elements
const formBody = document.getElementById("form-input");
const form = document.createElement("form");
const name = document.createElement("input");
const email = document.createElement("input");
const age = document.createElement("input");
const phoneNumber = document.createElement("input");

// setting the attributes

(function nameInput() {
  const label = document.createElement("label");
  name.setAttribute("type", "text");
  name.setAttribute("id", "userName");
  name.setAttribute("placeholder", "Enter Your Name...");
  label.setAttribute("for", "userName");
  label.innerText = "Name:";
  form.appendChild(label);
  form.appendChild(name);
})();

(function userAge() {
  const label = document.createElement("label");
  age.setAttribute("type", "number");
  age.setAttribute("id", "age");
  age.setAttribute("placeholder", "Enter Your Age...");
  label.setAttribute("for", "age");
  label.innerText = "Age:";
  form.appendChild(label);
  form.appendChild(age);
})();

(function emailInput() {
  const label = document.createElement("label");
  email.setAttribute("type", "email");
  email.setAttribute("id", "email");
  email.setAttribute("placeholder", "Enter Your @Email...");
  label.setAttribute("for", "email");
  label.innerText = "Email ID:";
  form.appendChild(label);
  form.appendChild(email);
})();

(function userNumber() {
  const label = document.createElement("label");
  phoneNumber.setAttribute("type", "number");

  phoneNumber.setAttribute("id", "phoneNumber");

  phoneNumber.setAttribute("placeholder", "Enter Your phoneNumber...");
  label.setAttribute("for", "phoneNumber");
  label.innerText = "phoneNumber:";
  form.appendChild(label);
  form.appendChild(phoneNumber);
})();

const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
//   submitBtn.setAttribute("onclick", "submitForm()");
submitBtn.innerText = "Submit";
form.appendChild(submitBtn);
// storing the form details in object
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const showDetails = document.getElementById("details");
  const ul = document.createElement("ul");
  const formData = {};
  [...form.elements].forEach((el) => {
    if (el.tagName === "INPUT" && el.type !== "submit" && el.type !== "reset") {
      const value = (formData[el.id] = el.value);
      const li = document.createElement("li");
      li.innerText = `${el.id} : ${value}`;
      ul.appendChild(li);
    }
  });
  showDetails.appendChild(ul);

  console.log(formData);
});

// reset button to reset form
const resetBtn = document.createElement("button");
resetBtn.setAttribute("type", "reset");
resetBtn.innerText = "Reset Form";
form.appendChild(resetBtn);

formBody.appendChild(form);

console.log(form);
