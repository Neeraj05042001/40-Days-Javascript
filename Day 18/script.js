//  creating elements

const pElem = document.createElement("p");
pElem.innerText = "created: This is a p tag created using js";
document.body.appendChild(pElem);

//inserting elements before any element

const span = document.createElement("span");
span.innerText =
  "inserted: This is a inner Text created in js to insert before the p element";

const pEleme = document.querySelector("p");
document.body.insertBefore(span, pEleme);

const inserting2 = document.createElement("h3");
inserting2.innerText =
  "Inserting 2: This is the second element inserted before h1";

const targetElement2 = document.querySelector("h2");
document.body.insertBefore(inserting2, targetElement2);

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is inserted after";

// Get the reference element
const referenceElement = document.getElementById("reference");

// Insert after ➡️
referenceElement.insertAdjacentElement("afterend", newParagraph);

// remove/replace elements

// let list = document.getElementById("remove");
// const itemToRemove = list.children[0];
// //list.removeChild(itemToRemove);
// //console.log(list.children)
// const pElem = document.querySelector("p");
// list.replaceChildren(pElem);

// document.getElementById("removeMe").remove();

const toggleButton = document.getElementById("toggle-btn");

