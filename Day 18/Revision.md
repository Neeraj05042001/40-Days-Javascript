# 🌐 Day - 18:  DOM Manipulation - Quick Revision Guide

> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 🔗 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦*


## 🔍 Selection Methods
```javascript
document.getElementById("id")          // Single element (fastest)
document.getElementsByClassName("cls")  // Live HTMLCollection
document.getElementsByTagName("p")      // Live HTMLCollection
document.querySelector(".cls")          // First matching element
document.querySelectorAll("div.cls")    // NodeList (static)
```

## ✨ Creation & Insertion
```javascript
// Create & modify
const el = document.createElement("div");
el.textContent = "Content";  // Safe from XSS
el.innerHTML = "<span>HTML</span>";  // XSS risk!

// Insert
parent.appendChild(el);                         // Add as last child
parent.insertBefore(newEl, refEl);              // Insert before reference
el.insertAdjacentElement("afterend", newEl);    // Insert after element
parent.replaceChild(newEl, oldEl);              // Replace element
el.remove();                                    // Remove element
```

## 🧭 DOM Traversal
```javascript
// Up ⬆️
el.parentNode               // Parent node
el.parentElement            // Parent element

// Down ⬇️
el.children                 // Child elements
el.firstElementChild        // First child element
el.lastElementChild         // Last child element

// Sideways ↔️
el.nextElementSibling       // Next element
el.previousElementSibling   // Previous element
```

## 🎨 Style & Class
```javascript
// Styling
el.style.color = "blue";    // Inline style (camelCase)
el.style.backgroundColor = "red";

// Classes
el.classList.add("active");             // Add class
el.classList.remove("disabled");        // Remove class
el.classList.toggle("highlighted");     // Toggle class
el.classList.contains("active");        // Check class
```

## 👁️ Visibility
```javascript
el.style.display = "none";      // Hide (removes from flow)
el.style.visibility = "hidden"; // Hide (keeps space)
el.style.opacity = "0";         // Hide (can animate)
el.classList.toggle("hidden");  // Toggle display:none class
```

## 📝 Attributes
```javascript
el.setAttribute("src", "img.jpg");      // Set attribute
el.getAttribute("href");                // Get attribute
el.removeAttribute("disabled");         // Remove attribute
el.dataset.info = "custom";             // Set data-info attribute
```

## ⚠️ Security Guidelines
- Never use `innerHTML` with unfiltered user input (XSS risk)
- Use `textContent` instead for user content
- Sanitize HTML before insertion

## 💡 Common Patterns
```javascript
// Event handling
el.addEventListener("click", function() {
  // Handle event
});

// Event delegation
parent.addEventListener("click", function(e) {
  if (e.target.matches(".btn")) {
    // Handle clicks on .btn elements
  }
});

// Toggle visibility
function toggleVisibility(id) {
  document.getElementById(id).classList.toggle("hidden");
}
```

## 📈 Performance Tips
1. Batch DOM operations
2. Use document fragments for multiple insertions
3. Cache DOM references in variables
4. Use event delegation for similar elements
5. Prefer `textContent` over `innerHTML`

---
<div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
  <p>Made with ❣️ by Neeraj</p>
  <p>
    <a href="https://www.linkedin.com/in/neeraj-kumar1904" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" height="18" />
    </a>
    <a href="https://twitter.com/_19_neeraj" target="_blank">
      <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" height="18" />
    </a>
  </p>
</div>
