//TODO :  Find the Most Frequent Word in a Paragraph

const Paragraph = document.getElementById("text").innerText;
console.log(Paragraph);

// const words = []
// console.log(wordsInParagraph)

// const frequent = wordsInParagraph.forEach((elem, coint)=>{

// })

// console.log(frequent)

// TODO: Question 2 : Create a zebra pattern

const cars = document.querySelectorAll("ul#cars li");
console.log(cars);

cars.forEach((elem, index) => {
  console.log(index);
  if (index % 2 === 0) {
    elem.style.backgroundColor = "black";
    elem.style.color = "white";
  } else {
    elem.style.backgroundColor = "white";
    elem.style.color = "black";
  }
});

// TODO QUESTION 3: Write different ways we can access DOM and what they returns.

/**
 * There are 5 way by which we can access DOM.
 * 1. getElemmentByID --> it return a single element matching the id and if not found return null
 * 2.getElementByClass --> it return HTMLCollection of elements(array-like) matching the same class
 * 3.getElementByTagName --> it also returns the HTMLCollection of elements of the same tag name
 * 4. querySelector --> returns the first matching element and if not found return null
 * 5. QuerySelectorAll  --> returns NodeList containing all the matching elements , can easily iterate
 * 6.
 */

// TODO QUESTION 4: Find and Replace Text Inside a Page

// TODO QUESTION 5: Extract and Count Unique Links from a Page

const links = document.querySelectorAll("#hyperlink a");
const uniqueLinkDisplay = document.getElementById("uniqueLink")
console.log(links);

const uniqueHref = {};
// let count = 0;
links.forEach((elem) => {
  const href = elem.getAttribute("href");

  if(href){
    if(uniqueHref[href]){
      uniqueHref[href] += 1; 
    }else{
      uniqueHref[href] =1;
    }
  }

});

const ul = document.createElement("ul")

for( const link in uniqueHref){

console.log(`${link} has occured ${uniqueHref[link]} times`)

const li = document.createElement("li")
li.textContent = `${link} has occured ${uniqueHref[link]} times`

ul.appendChild(li)
}

uniqueLinkDisplay.appendChild(ul)

