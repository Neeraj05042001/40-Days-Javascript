function highlightText() {
  const paragraph = document.querySelectorAll("p.info");
  

  paragraph.forEach((elem) => {
    elem.style.backgroundColor = "yellow";
  });
}


function filterList(){
    const inputValue = document.getElementById("searchInput")
    // inputValue.value
    const value = inputValue.value;

    const element = document.querySelectorAll("ul#itemList li")
    element.forEach((elem)=>{
        elem.style.display = elem.innerText.toLowerCase().includes(value.toLowerCase()) ? "block" : "none"
    })
}