# <div align="center">✨ DAY - 19: MASTER JavaScript Events ✨</div>

<div align="center">
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
</div>

## 📋 Table of Contents
1. [🌟 Introduction to Events](#introduction-to-events)
2. [🔄 Event Handling Methods](#event-handling-methods)
3. [🎯 Event Listeners](#event-listeners)
4. [⏱️ DOM Content Loaded](#dom-content-loaded)
5. [📝 Event Object](#event-object)
6. [🔄 Event Propagation](#event-propagation)
7. [👥 Event Delegation](#event-delegation)
8. [🚫 Preventing Default Behavior](#preventing-default-behavior)
9. [🎭 Custom Events](#custom-events)
10. [💪 Practice Tasks](#practice-tasks)
11. [🎤 Interview Questions](#interview-questions)
12. [📊 Quick Reference](#quick-reference)

<div align="center">
👇▼ ▼ ▼👇
</div>

## 🌟 Introduction to Events 🚀

### What is an Event? 🤔
An event in JavaScript is an action that occurs in the browser, which can be triggered by the user or by the browser itself.

- 🖱️ A user clicking a button
- 🌐 A webpage finishing loading
- 📝 A form being submitted
- ⌨️ A key being pressed
- 🖱️ The mouse moving over an element

Events are the core of interactive web applications, allowing your code to respond to user actions and browser activities.

### Common Types of Events:
- **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`
- **Keyboard Events**: `keydown`, `keyup`, `keypress`
- **Form Events**: `submit`, `change`, `focus`, `blur`
- **Window Events**: `load`, `resize`, `scroll`, `unload`
- **Touch Events**: `touchstart`, `touchmove`, `touchend`

### Why Events Matter?
Events allow your website to respond to user interactions, making your application dynamic and interactive. Without events, websites would be static and non-responsive.

> 💡 **Knowledge Check**: What are three common mouse events?
<details>
<summary>Answer</summary>
Three common mouse events are click, mouseover, and mouseout.
</details>

---

## 🛠️ Event Handling Methods

There are three main ways to handle events in JavaScript:

### 1. Event Handling in HTML Markup
You can add event handlers directly in HTML tags using attributes that start with "on" like `onclick`, `onmouseover`, etc.

```html
<button id="myBtn" onClick="handleClick('Hello')">Click Me</button>
```

```javascript
function handleClick(greeting) {
    console.log(`Button Clicked with a ${greeting}`);
}
```

**Pros**:
- ✅ Simple and straightforward
- ✅ Directly visible in HTML

**Cons**:
- ❌ Mixes HTML and JavaScript (poor separation of concerns)
- ❌ Limited functionality
- ❌ Limited to one handler per event type
- ❌ Harder to maintain in larger applications
- ❌ Can become messy for complex interactions



### 2. Event Handling in JavaScript 📝

You can assign event handlers using DOM properties in JavaScript:

```javascript
const myBtn2Elem = document.getElementById("myBtn2");
myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked");
}
```

**Pros**:
- ✅ Better separation of concerns
- ✅ More flexibility in handler assignment

**Cons**:
- ❌ Still limited to one handler per event type
- ❌ Previous handlers are overwritten:

```javascript
// This second handler REPLACES the first one
myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked Again");
}
```

> 🧠 **Knowledge Check**: What's the main disadvantage of using the `onclick` property to handle events?
> 
> <details>
> <summary>Click for answer</summary>
> The main disadvantage is that you can only assign one handler per event type. If you assign a new handler, it overwrites any previously assigned handler.
> </details>

> 💡 **Knowledge Check**: What happens if you assign multiple onclick handlers using the same property?
<details>
<summary>Answer</summary>
The later assignment overwrites the earlier one. Only the last assigned handler will execute when the event occurs.
</details>


---

## 3. Event Listeners 🎧

### addEventListener() Method 📥

The most powerful way to handle events is using the `addEventListener()` method:

```javascript
element.addEventListener(eventType, handlerFunction, [options]);
```

**Example**:
```javascript
const countBtn = document.getElementById("countBtn");
let counter = 0;

function handleCount() {
    console.log(counter);
    counter++;
}

countBtn.addEventListener("click", handleCount);
```

**Pros**:
- ✅ Can add multiple listeners for the same event
- ✅ More control over event handling
- ✅ Clean separation of concerns
- ✅ Better event handling options

### removeEventListener() Method 📤

To stop listening to an event, you can remove the event listener:

```javascript
element.removeEventListener(eventType, handlerFunction);
```

**Important**: ⚠️ The function reference must be the same one used in `addEventListener`!

```javascript
// This works because we're using the same function reference
countBtn.removeEventListener("click", handleCount);

// This would NOT work because it's a new anonymous function
countBtn.removeEventListener("click", function() {
    console.log(counter);
    counter++;
});
```

### Handling Multiple Listeners 👥

With `addEventListener()`, you can attach multiple handlers to the same event/element:

```javascript
const counBtnElem = document.getElementById("countBtn");

function handleCount() {
    console.log(counter);
    counter++;
}

function greetMe() {
    console.log("Thank You!");
}

// Both functions will run when button is clicked
counBtnElem.addEventListener("click", handleCount);
counBtnElem.addEventListener("click", greetMe);
```
Now when the button is clicked, both functions will execute in the order they were added.

> 🧠 **Knowledge Check**: How would you correctly remove an event listener that was previously added?
> 
> <details>
> <summary>Click for answer</summary>
> You must use the same function reference that was used when adding the event listener:
> 
> ```javascript
> // First, store the function reference
> const myHandler = function() { console.log("Handler"); };
> 
> // Add the listener
> element.addEventListener("click", myHandler);
> 
> // Later, remove it using the same reference
> element.removeEventListener("click", myHandler);
> ```
> </details>


> 💡 **Knowledge Check**: Why won't this code successfully remove the event listener?
```javascript
button.addEventListener("click", function() { alert("Clicked!"); });
button.removeEventListener("click", function() { alert("Clicked!"); });
```
<details>
<summary>Answer</summary>
The two anonymous functions are different function objects even though they have the same code. To successfully remove an event listener, you need to use the exact same function reference that was used when adding it.
</details>

---

## ⏱️ DOM Content Loaded 📄

The `DOMContentLoaded` event fires when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading:

**Wrong way** (won't work):

```javascript
// This won't work (property approach)
document.onDOMContentLoaded = function() {
    console.log("DOM Content Loaded...");
};

**Correct way**:

// This will work (addEventListener approach)
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded...");
});
```
**Why is this important?**
This ensures your JavaScript doesn't try to access DOM elements before they're available, preventing "null" or "undefined" errors.

**When to use it**:
- 🚀 When you need to manipulate DOM elements before the page is fully loaded
- ⚡ When you want your JavaScript to run as soon as the DOM is ready, without waiting for images and other resources

**Difference from `window.onload`**:
- 🔄 `DOMContentLoaded` fires when the DOM is ready
- 🌐 `window.onload` fires when everything (images, stylesheets, etc.) is loaded

> 🧠 **Knowledge Check**: When does the `DOMContentLoaded` event fire compared to the `load` event?
> 
> <details>
> <summary>Click for answer</summary>
> `DOMContentLoaded` fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. The `load` event fires when the whole page has loaded, including all dependent resources such as stylesheets and images.
> </details>

---

## 📝 Event Object 📦

When an event occurs, the browser creates an **event object** that contains details about the event. This object is automatically passed to your event handler function.

```javascript
const searchElem = document.getElementById("search-id");
function handleChange(event) {
    console.log(event); // The entire event object
    console.log("Target:", event.target); // The element that triggered the event
    console.log("Target Name:", event.target.name); // Name attribute of the target
    console.log("Target Value:", event.target.value); // Current value of the target
    console.log("Event Type:", event.type); // Type of event (e.g., "change")
    console.log("Current Target:", event.currentTarget); // Element that the listener is attached to
    console.log("this:", this); // Same as currentTarget in regular function (not arrow function)
}

searchElem.addEventListener("change", handleChange);
```

### Key Properties of the Event Object 🔑

| Property | Description |
|----------|-------------|
| `target` | 🎯 The element that triggered the event |
| `currentTarget` | 🔄 The element that the event listener is attached to |
| `type` | 📋 The type of event (e.g., "click", "submit") |
| `preventDefault()` | 🚫 Method to prevent default browser behavior |
| `stopPropagation()` | 🛑 Method to stop event bubbling |
| `timeStamp` | ⏰ When the event occurred |
| `clientX/clientY` | 📍 Mouse coordinates (for mouse events) |
| `key` | ⌨️ Key pressed (for keyboard events) |

> 🧠 **Knowledge Check**: What's the difference between `event.target` and `event.currentTarget`?
> 
> <details>
> <summary>Click for answer</summary>
> `event.target` is the element that triggered the event (the element that was actually clicked, for instance).
> 
> `event.currentTarget` is the element that the event listener is attached to. During event bubbling, these can be different elements.
> </details>

---

## 🔄 Event Propagation

When an event occurs on an element, it doesn't just trigger handlers on that element. The event "propagates" through the DOM tree in two main phases:

### Event Bubbling 🛁
By default, events "bubble" up from the target element to the root of the document.

```
Child Element → Parent → Grandparent → ... → document
```


**Example**:
```html
<div id="outer">
    <div id="inner">
        <button id="button">Click Me</button>
    </div>
</div>
```

```javascript
document.getElementById("button").addEventListener("click", function() {
    console.log("Button clicked");
});

document.getElementById("inner").addEventListener("click", function() {
    console.log("Inner div clicked");
});

document.getElementById("outer").addEventListener("click", function() {
    console.log("Outer div clicked");
});
```
 If you have a button inside a div and both have click handlers, clicking the button will:
1. First trigger the button's click handler
2. Then trigger the div's click handler

Clicking the button will log:
1. "Button clicked"
2. "Inner div clicked"
3. "Outer div clicked"

---

### Event Capturing 🎯

The opposite of bubbling - events are first captured by the outermost element and then propagated to the inner elements.

```
document → ... → Grandparent → Parent → Target element
```

To use event capturing, set the third parameter of `addEventListener` to `true`:

```javascript
element.addEventListener("click", handler, true); // Use capturing phase
```

**Example with capturing**:
```javascript
document.getElementById("outer").addEventListener("click", function() {
    console.log("Outer div - CAPTURE phase");
}, true);

document.getElementById("inner").addEventListener("click", function() {
    console.log("Inner div - CAPTURE phase");
}, true);

document.getElementById("button").addEventListener("click", function() {
    console.log("Button - CAPTURE phase");
}, true);
```

Clicking the button with both sets of listeners would log:
1. "Outer div - CAPTURE phase"
2. "Inner div - CAPTURE phase"
3. "Button - CAPTURE phase"
4. "Button clicked" (bubbling)
5. "Inner div clicked" (bubbling)
6. "Outer div clicked" (bubbling)

---

### Stop Propagation 🛑
To prevent an event from propagating further, use `event.stopPropagation()`, means to prevent an event from bubbling up (or capturing down):


```javascript
element.addEventListener("click", function(event) {
    event.stopPropagation(); // Stops the event from bubbling up
    console.log("This handler will run, but the event won't propagate further");
});
```

> 💡 **Knowledge Check**: In what order will these event handlers execute when the button is clicked?
```html
<div id="outer">
  <div id="inner">
    <button id="btn">Click</button>
  </div>
</div>

<script>
  document.getElementById("outer").addEventListener("click", () => console.log("Outer"), true);
  document.getElementById("inner").addEventListener("click", () => console.log("Inner"), false);
  document.getElementById("btn").addEventListener("click", () => console.log("Button"), false);
</script>
```
<details>
<summary>Answer</summary>
The order will be: "Outer" (capturing phase), "Button" (target phase), "Inner" (bubbling phase). 
</details>

> 🧠 **Knowledge Check**: If you have event listeners on nested elements and want the event to only trigger on the most specific element, what method would you use?
> 
> <details>
> <summary>Click for answer</summary>
> You would use `event.stopPropagation()` in the event handler of the most specific element to prevent the event from bubbling up to parent elements.
> </details>

---


## 👥 Event Delegation 👨‍👧‍👦

Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners on child elements:

**Without delegation** (inefficient for many items):
```javascript
// Assuming we have a list with many items
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", function() {
        console.log("Item clicked:", this.textContent);
    });
});
```

**With delegation** (more efficient):
```javascript
// Single listener on the parent
document.getElementById("list").addEventListener("click", function(event) {
    // Check if the clicked element is an li
    if (event.target.tagName === "LI") {
        console.log("Item clicked:", event.target.textContent);
    }
});
```

### Benefits of Event Delegation 🌟

1. 🚀 **Memory Efficiency**: One listener instead of many
2. ✨ **Dynamic Elements**: Works with elements added after page load
3. 📝 **Less Code**: Simpler implementation for large numbers of similar elements

> 🧠 **Knowledge Check**: Why is event delegation especially useful for dynamically created elements?
> 
> <details>
> <summary>Click for answer</summary>
> Event delegation is useful for dynamically created elements because you don't need to attach new event listeners each time elements are created. The event listener on the parent element will automatically work for any matching child elements, even if they're added after the page loads.
> </details>

> 💡 **Knowledge Check**: Why would event delegation be particularly useful for a to-do list application where items can be added or removed?
<details>
<summary>Answer</summary>
Event delegation is perfect for to-do lists because you only need one event listener on the container rather than attaching/detaching listeners for each item as they're added or removed. New items will automatically work with the delegation pattern.
</details>


---

## 🚫 Preventing Default Behavior

Many events have default actions associated with them. For example:
- 🔗 Clicking a link navigates to its URL
- 📝 Submitting a form sends the data and reloads the page
- ✅ Clicking a checkbox toggles its state

To prevent these default behaviors, use `event.preventDefault()`:

```javascript
// Prevent a link from navigating to its URL
document.getElementById("websiteLink").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Default link behavior prevented!");
});

// Prevent a form from submitting and reloading the page
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submission prevented!");
    // Here you could validate the form or submit via AJAX instead
});
```
**Common use cases**:
- ✅ Custom form validation before submission
- 🔄 AJAX form submissions without page reload
- 🧭 Custom navigation behavior for links
- 🎛️ Creating custom UI controls

> 🧠 **Knowledge Check**: In a form submit event handler, what method should you call if you want to handle the form submission with JavaScript instead of letting the browser submit it?
> 
> <details>
> <summary>Click for answer</summary>
> You should call `event.preventDefault()` in the submit event handler to prevent the browser's default form submission behavior.
> </details>



> 💡 **Knowledge Check**: What would happen if you removed the `preventDefault()` call from a form submit handler?
<details>
<summary>Answer</summary>
Without `preventDefault()`, the form would submit normally, sending the data to the server and refreshing the page (or navigating to the URL specified in the form's action attribute).
</details>

---
## 🎭 Custom Events

Custom events allow you to create your own event types for component communication.

### Creating and Dispatching Custom Events:

```javascript
// Step 1: Create a CustomEvent
const myEvent = new CustomEvent("userLoggedIn", {
    detail: {
        username: "tapascript",
        role: "admin",
    },
});

// Step 2: Listen for the Custom Event
document.addEventListener("userLoggedIn", (event) => {
    console.log("User login detected:", event.detail.username);
});

// Step 3: Dispatch the Custom Event
document.dispatchEvent(myEvent);
```

### Practical Example - Module Communication:

```javascript
// Module 1: Authentication logic
function loginUser(username) {
    const event = new CustomEvent("userLoggedIn", {
        detail: { username },
    });
    document.dispatchEvent(event);
}

// Module 2: Navbar or Sidebar
document.addEventListener("userLoggedIn", (event) => {
    const user = event.detail.username;
    document.getElementById("welcome").textContent = `Welcome, ${user}!`;
});

// Later, when user logs in
loginUser("tapascript");
```

**Benefits of Custom Events**:
1. 🔗 **Loose Coupling**: Components don't need direct references to each other
2. 🧰 **Maintainability**: Easier to maintain and test components in isolation
3. 📈 **Scalability**: Makes it easier to add new components that respond to the same events



🧠 **Knowledge Check**: How do you pass data with a custom event?
> 
> <details>
> <summary>Click for answer</summary>
> You pass data with a custom event using the `detail` property in the CustomEvent constructor options:
> 
> ```javascript
> const myEvent = new CustomEvent("myCustomEvent", {
>     detail: {
>         // Your data here
>         name: "John",
>         id: 123
>     }
> });
> ```
> 
> This data can then be accessed in the event handler via `event.detail`.
> </details>

---

## 💪 Practice Tasks

1. 🎨 **Basic Event Handler**: Create a button that changes the background color of the page when clicked.

2. 🔢 **Multiple Event Listeners**: Add two different event listeners to a single button - one that changes text color and another that changes font size.

3. 🔍 **Event Object Exploration**: Create a text input that logs the key code whenever a key is pressed, using the event object.

4. 🔄 **Bubbling Demo**: Create a nested structure (div > div > button) where each element has a click handler. Observe how events bubble through all elements.

5. 🛑 **Stop Propagation**: Modify the above example to prevent the click event from reaching the outer div.

6. 👨‍👧‍👦 **Event Delegation**: Create a to-do list where you can add new items. Use event delegation to handle clicks on the "delete" button for each item.

7. 🚫 **Prevent Default**: Create a form that normally submits to a different page, but prevent its default behavior and log the form data to the console instead.

8. 🎭 **Custom Event**: Create a custom "theme-changed" event that gets dispatched when the user selects a different theme. Have multiple components listen for and respond to this event.

9. 📱 **Mobile Events**: Create an element that responds to both click events (on desktop) and touch events (on mobile).

10. 🏆 **Advanced Challenge**: Create a simple drag-and-drop interface using mousedown, mousemove, and mouseup events.

---
## 🎤 Interview Questions 🎯

### Q1: What is event bubbling and event capturing in JavaScript? How do they differ?
<details>
<summary>Answer</summary>
Event bubbling and event capturing are two ways that events propagate through the DOM:

- **Event Bubbling**: Events start at the target element and "bubble up" through ancestors to the root. This is the default behavior.
  
- **Event Capturing**: Events start at the root and "capture down" through descendants to the target element.

To use capturing, set the third parameter of addEventListener to true:
```javascript
element.addEventListener("click", handler, true);
```

The main difference is the direction of propagation and the order in which listeners are called.
</details>

### Q2: Explain the difference between event.preventDefault() and event.stopPropagation().
<details>
<summary>Answer</summary>

- **preventDefault()**: Prevents the default action of the element (e.g., prevents a form from submitting or a link from navigating). It does not stop the event from bubbling up or capturing down.

- **stopPropagation()**: Stops the event from continuing its path through bubbling or capturing phases. It doesn't prevent the default action of the element itself.

Use preventDefault() when you want to handle an action yourself instead of letting the browser handle it, and use stopPropagation() when you want to prevent parent elements from receiving the event.
</details>

### Q3: What is event delegation and why is it useful?
<details>
<summary>Answer</summary>
Event delegation is a technique where you attach an event listener to a parent element instead of multiple child elements. When an event occurs on a child element, it bubbles up to the parent, where you can handle it.

Benefits:
1. **Memory efficiency**: Fewer event listeners means less memory usage
2. **Works with dynamically added elements**: No need to attach listeners to new elements
3. **Less code**: Simplifies your JavaScript

Example:
```javascript
// Instead of this:
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", handleClick);
});

// Do this:
document.querySelector("ul").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    handleClick(e);
  }
});
```
</details>

### Q4: How would you create and use a custom event in JavaScript?
<details>
<summary>Answer</summary>
Creating and using custom events involves three main steps:

1. **Create the event**:
```javascript
const myEvent = new CustomEvent("userLoggedIn", {
  detail: { username: "john_doe" }
});
```

2. **Add an event listener**:
```javascript
document.addEventListener("userLoggedIn", function(e) {
  console.log(`User logged in: ${e.detail.username}`);
});
```

3. **Dispatch the event**:
```javascript
document.dispatchEvent(myEvent);
```

Custom events help create modular, loosely coupled code where components can communicate without direct dependencies.
</details>

### Q5: What's the difference between the "load" and "DOMContentLoaded" events?
<details>
<summary>Answer</summary>

- **DOMContentLoaded**: Fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This is usually what you want if you're manipulating DOM elements.

- **load**: Fires when the whole page has loaded, including all dependent resources such as stylesheets and images.

```javascript
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is ready");
});

window.addEventListener("load", function() {
  console.log("Page fully loaded");
});
```
</details>

### Q6: How would you properly remove an event listener?
<details>
<summary>Answer</summary>
To properly remove an event listener, you need to reference the same function that was used when adding it:

```javascript
// This won't work
element.addEventListener("click", function() { console.log("Clicked"); });
element.removeEventListener("click", function() { console.log("Clicked"); });

// This will work
function handleClick() { console.log("Clicked"); }
element.addEventListener("click", handleClick);
element.removeEventListener("click", handleClick);
```

The key is to use the same function reference for both adding and removing the listener.
</details>

### Q7: What is the difference between event.target and event.currentTarget?
<details>
<summary>Answer</summary>

- **event.target**: The element that triggered the event (the element that was actually clicked on)
- **event.currentTarget**: The element that the event listener is attached to

During event bubbling, if you click on an element inside the element with the listener, target and currentTarget will be different:

```javascript
parentElement.addEventListener("click", function(e) {
  console.log(e.target);        // Could be a child element that was clicked
  console.log(e.currentTarget); // Always the parentElement
  console.log(this);            // Also the parentElement (in regular functions)
});
```
</details>

### Q8: How can you prevent a form from submitting using JavaScript?
<details>
<summary>Answer</summary>
You can prevent a form from submitting by using the preventDefault() method in the submit event handler:

```javascript
document.getElementById("myForm").addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();
  
  // Do your own form validation or AJAX submission
  console.log("Form submission prevented");
});
```

This allows you to handle form submission with JavaScript, such as validating input or submitting data via AJAX without page reload.
</details>

### Q9: What's the difference between the three ways of handling events in JavaScript?
<details>
<summary>Answer</summary>
There are three main ways to handle events in JavaScript:

1. **HTML Attribute**:
```html
<button onclick="handleClick()">Click me</button>
```
- Pros: Simple to implement
- Cons: Mixes HTML with JS, limited to one handler

2. **DOM Property**:
```javascript
element.onclick = function() { /* code */ };
```
- Pros: Better separation of concerns
- Cons: Still limited to one handler per event type

3. **addEventListener**:
```javascript
element.addEventListener("click", function() { /* code */ });
```
- Pros: Multiple handlers, more options, best separation of concerns
- Cons: Slightly more verbose

The addEventListener approach is generally considered the best practice for modern web development.
</details>

### Q10: How does the "this" keyword work in event handlers?
<details>
<summary>Answer</summary>
In event handlers, the value of `this` depends on how the handler is defined:

1. **Regular function**: `this` refers to the element the event listener is attached to (same as event.currentTarget)
```javascript
element.addEventListener("click", function(e) {
  console.log(this);            // The element
  console.log(e.currentTarget); // Also the element
});
```

2. **Arrow function**: `this` inherits from the outer scope (not the element)
```javascript
element.addEventListener("click", (e) => {
  console.log(this);            // Not the element! (Window or outer scope)
  console.log(e.currentTarget); // The element
});
```

This behavior is important to consider when deciding between regular functions and arrow functions for event handlers.
</details>

---

## 📊 Quick Revision ⚡

## 📊 Event Types 🎯
| Event Type | Triggered When |
|------------|---------------|
| `click` | 🖱️ Element is clicked |
| `submit` | 📝 Form is submitted |
| `change` | 🔄 Form element value changes |
| `input` | ⌨️ Value of input/textarea changes |
| `keydown`/`keyup` | ⌨️ Keyboard key is pressed/released |
| `mouseover`/`mouseout` | 🖱️ Mouse enters/leaves element |
| `load` | 🌐 Page and resources are fully loaded |
| `DOMContentLoaded` | 📄 DOM is fully loaded |
| `focus`/`blur` | 🔍 Element gains/loses focus |
| `resize` | 📱 Window is resized |

---

## 🛠️ Event Handling Methods 🧰

| Method | Syntax | Multiple Handlers | Notes |
|--------|--------|-------------------|-------|
| HTML Attributes | `<button onclick="fn()">` | ❌ No | Mixes HTML and JS |
| DOM Properties | `element.onclick = fn` | ❌ No | Overwrites previous |
| addEventListener | `element.addEventListener("click", fn)` | ✅ Yes | Most flexible |

---

## 🔍 Event Object Properties 🔎

| Property | Purpose |
|----------|---------|
| `event.target` | 🎯 Element that triggered the event |
| `event.currentTarget` | 🔄 Element with the attached listener |
| `event.type` | 📋 Type of event (e.g., "click") |
| `event.preventDefault()` | 🚫 Prevents default browser behavior |
| `event.stopPropagation()` | 🛑 Stops event bubbling |

---

## 🌊 Event Flow Summary 🔄

1. **Capturing Phase** ⬇️: Root → Target (with `addEventListener(..., true)`)
2. **Target Phase** 🎯: The element itself
3. **Bubbling Phase** ⬆️: Target → Root (default behavior)

---

## ✨ Best Practices 💯

- 📌 Use `addEventListener` for most event handling
- 🗂️ Use event delegation for lists and similar structures
- 💾 Store function references when you need to remove listeners
- 🔮 Always consider event bubbling when debugging
- 🧩 Use custom events for modular code architecture
- ⚡ Prefer `DOMContentLoaded` over `window.load` when possible

---

<div align="center" style="background: linear-gradient(135deg, #f0f4f8 0%, #e2ecf3 100%); padding: 30px; border-radius: 16px; margin-top: 50px; box-shadow: 0 6px 20px rgba(0,0,0,0.08); max-width: 700px;">

  <h3 style="color: #2c3e50; font-size: 22px; font-weight: 700; margin-bottom: 20px;">
    🚀 <i>Let's Connect & Level Up Together</i>
  </h3>

  <p style="color: #555; font-size: 16px; margin-bottom: 25px;">
    Follow me for daily <strong>JavaScript tips</strong>, insightful notes, and project-based learning.
  </p>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 30px;">
    <a href="https://x.com/@_19_neeraj" style="background-color: #e8f4fd; color: #1da1f2; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none;">
      🔗 X (Twitter)
    </a>
    <a href="https://www.linkedin.com/in/neeraj-kumar1904" style="background-color: #e6f1f8; color: #0077b5; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none;">
      💼 LinkedIn
    </a>
    <a href="https://t.me/yourchannel" style="background-color: #e1f4fb; color: #0088cc; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none;">
      💬 Telegram
    </a>
    <a href="https://www.threads.net/@yourhandle" style="background-color: #f4e6fa; color: #833ab4; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none;">
      🧵 Threads
    </a>
  </div>

  <p style="font-size: 16px; color: #2c3e50; margin-bottom: 20px;">
    🔍 Dive into the full notes on GitHub → 
    <a href="https://github.com/Neeraj05042001/40-Days-Javascript" style="color: #2980b9; font-weight: bold; text-decoration: none;">
      40 Days JavaScript
    </a>
  </p>

  <p style="font-size: 13px; color: #7f8c8d;">
    © 2025 • Crafted with ❤️ by <strong style="color: #34495e;">Neeraj</strong>
  </p>
</div>

---

<div align="center">
<p>📆 <em>Next: Day - 20: Advanced DOM Tips and Tricks</em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>
</div>