# Javascript

## What is JavaScript?

# History of Javascript:

![history of js](images/Screenshot%202025-04-17%20112702.png)



# 🧠 Ways to Include JavaScript in HTML

There are mainly **four methods** to include JavaScript in your HTML and how each affects **HTML parsing**, **script downloading**, and **execution**.

---

## 🔑 Legend

| Color            | Action                         |
|------------------|--------------------------------|
| 🟫 Brown          | Download HTML & Build DOM      |
| 🟥 Red            | Download Script                |
| 🟩 Green          | Execute Script                 |


![Alt text](images/Screenshot%202025-04-17%20115108.png)
---

## 1. `<script>` Tag in `<head>`

- 🟫 The browser starts parsing HTML and building the DOM.
- 🟥 It **stops parsing** to **download the script**.
- 🟩 Then **executes the script** before continuing.

**⚠️ Drawback:**  
This approach **blocks HTML parsing**, causing a delay in rendering. Avoid unless absolutely necessary.

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    console.log('Hello from internal JS');
  </script>
</head>
<body>
  <!-- Page content -->
</body>
</html>
```

>>**`Notes:`** When we add script in the head of `Html` then what happens is that html starts parsin the code or executing the code line by line and when it comes at the script tag in which have passed our `js code` it stops there for a while and `download the js code`.  Once the code is downloaded  then html again stats parsing/executing after the `script` tag.

>> In this what happens is that the js code is not applied to the remaining `dom` as because the dom has not renders yet. 


---

## 2. `<script>` Tag at the End of `<body>`

- 🟫 The browser **completes parsing** HTML and building the DOM.
- 🟥 Then it **downloads the script**.
- 🟩 And **executes it** right after.

**✅ Advantage:**  
No blocking occurs during HTML parsing. It’s a **commonly used and effective approach**.

```html
<!DOCTYPE html>
<html>
<head>
  
</head>
<body>
  <!-- Page content -->

   <script src="main.js"></script>
</body>
</html>
```
![Alt text](images/Screenshot%202025-04-17%20123536.png)

>> **`Note:`** When JavaScript is placed at the end of the <body> tag, the HTML DOM is fully parsed and rendered before the JavaScript code is downloaded and executed. This approach improves initial page load performance since users can see content while JavaScript is still loading.

>>*`However, this creates a limitation:`* any elements that depend on JavaScript for their initial values or content will appear empty at first. This happens because the DOM elements are created and displayed before the JavaScript code that would populate them has been downloaded and executed.

>>For example, if you have a div that should display dynamic data from JavaScript, it will initially render as empty until the JavaScript at the bottom of the page loads and executes the code that populates the div's content.

---

## 3. `<script async>`

- 🟫 The browser **continues parsing HTML**.
- 🟥 **Downloads the script in parallel** (non-blocking).
- 🟩 **Executes it as soon as it's downloaded**, even **before DOM is fully built**.

**⚠️ Use Case:**  
Best for scripts **independent** of the DOM (e.g., analytics, ads). Not suitable for DOM-manipulating code.

---

## 4. `<script defer>`

- 🟫 The browser **parses the DOM while downloading the script in parallel**.
- 🟩 The script is **executed only after the DOM is fully built**.

**✅ Ideal Choice:**  
Perfect for scripts that need access to the DOM but should **not block HTML parsing**.

---

## ✅ Best Practice Summary

| Use Case                     | Recommended Method    |
|-----------------------------|------------------------|
| DOM-dependent scripts        | `<script defer>`       |
| Independent/external scripts | `<script async>`       |
| Fallback/simple HTML         | End of `<body>`        |
| Critical early scripts       | Avoid blocking `<head>`|

---
