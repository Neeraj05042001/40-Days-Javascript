# 📊 Day - 18: JavaScript Events - Quick Revision Guide
> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 🔗 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦*

## 🌟 Core Concepts

- **Event**: An action that occurs in the browser (user interaction or browser action)
- **Event Handler**: Function that runs when an event occurs
- **Event Listener**: Method for attaching event handlers to elements
- **Event Object**: Contains information about the event that occurred

## 🛠️ Event Handling Methods

| Method | Example | Multiple Handlers? | Best Practice |
|--------|---------|-------------------|--------------|
| HTML Attribute | `<button onclick="fn()">` | No ❌ | Avoid - Poor separation |
| DOM Property | `element.onclick = fn;` | No ❌ | Avoid - Limited |
| addEventListener | `element.addEventListener("click", fn);` | Yes ✅ | Recommended ⭐ |

```javascript
// Best practice
const btn = document.getElementById("myBtn");
btn.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("Button clicked");
}
```

## 📝 Common Event Types

- **Mouse**: `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`
- **Keyboard**: `keydown`, `keyup`, `keypress`
- **Form**: `submit`, `change`, `focus`, `blur`, `input`
- **Window**: `load`, `DOMContentLoaded`, `resize`, `scroll`
- **Touch**: `touchstart`, `touchmove`, `touchend`

## 🎯 Event Object Properties

```javascript
element.addEventListener("click", function(event) {
  console.log(event.target);        // Element that triggered the event
  console.log(event.currentTarget); // Element with the listener attached
  console.log(event.type);          // "click"
  console.log(this);                // Same as currentTarget (regular function)
});
```

| Property/Method | Purpose |
|-----------------|---------|
| `event.target` | Element that triggered the event |
| `event.currentTarget` | Element the listener is attached to |
| `event.preventDefault()` | Stop default browser behavior |
| `event.stopPropagation()` | Stop event bubbling/capturing |

## 🔄 Event Flow (Propagation)

1. **Capturing Phase** ⬇️: From document to target
   ```javascript
   // Use capturing
   element.addEventListener("click", fn, true);
   ```

2. **Target Phase** 🎯: Event reaches target element

3. **Bubbling Phase** ⬆️: From target back to document
   ```javascript
   // Default (bubbling)
   element.addEventListener("click", fn);
   ```

## 👨‍👧‍👦 Event Delegation

```javascript
// Instead of adding listeners to each li
document.querySelector("ul").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});
```

**Benefits**:
- Memory efficient - one listener instead of many
- Works with dynamically added elements
- Less code to maintain

## ⏱️ Page Load Events

```javascript
// DOM ready (HTML parsed)
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM ready");
});

// Everything loaded (images, styles, etc.)
window.addEventListener("load", function() {
  console.log("Page fully loaded");
});
```

## 🎭 Custom Events

```javascript
// Create custom event
const myEvent = new CustomEvent("userLogin", {
  detail: { username: "dev123" }
});

// Listen for it
document.addEventListener("userLogin", function(event) {
  console.log("User logged in:", event.detail.username);
});

// Dispatch it
document.dispatchEvent(myEvent);
```

## 💡 Key Best Practices

- ✅ Use `addEventListener` for most event handling
- ✅ Store function references when removing listeners
- ✅ Use event delegation for lists and similar elements
- ✅ Prefer `DOMContentLoaded` over `window.load` when possible
- ✅ Handle both mouse and touch events for mobile compatibility
- ✅ Use `preventDefault()` for custom form handling

## 🧠 Remember

- Arrow functions change how `this` works in event handlers
- Event handlers on parent elements will fire for child elements (bubbling)
- To remove a listener, you must use the exact same function reference
- `target` is where the event happened, `currentTarget` is where the listener is