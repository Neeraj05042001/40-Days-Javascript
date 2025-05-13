# <div align="center">✨ DAY - 01 : Introduction to Javascript🚀 ✨</div>

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Level-Beginner-brightgreen" alt="Level: Beginner"/>
</div>

<br>



## What is JavaScript❓

**`Javascript`** is a light-weight `object-oriented programming language` which is used by several or many websites for scripting the webpages.

It is  an `interpreted`, `full-fledged programming language` that enables dynamic interactivity on websites when applied to an `HTML` document.

`Javascript` has no connectivity with `JAVA` programming language.They are completely different in both concept and design.

The name was suggested and provided in times when `JAVA` was gaining popularity in the market.

In addition to web-browsers, `databases` such as `Couch DB` and `Mongo DB` uses javascript as their scripting and query language.



# History of Javascript:

![history of js](/images/Screenshot%202025-04-17%20112702.png)



# 🧠 Ways to Include JavaScript in HTML

There are mainly **four methods** to include JavaScript in your HTML and how each affects **HTML parsing**, **script downloading**, and **execution**.

---

## 🔑 Legend

| Color            | Action                         |
|------------------|--------------------------------|
| 🟫 Brown          | Download HTML & Build DOM      |
| 🟥 Red            | Download Script                |
| 🟩 Green          | Execute Script                 |


![Alt text](/images/Screenshot%202025-04-17%20115108.png)
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
![Alt text](/images/Screenshot%202025-04-17%20123536.png)

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

<div align="center" justify="center" style="background: linear-gradient(135deg, #f0f4f8 0%, #e2ecf3 100%); padding: 30px; border-radius: 16px; margin-top: 50px; box-shadow: 0 6px 20px rgba(0,0,0,0.08); max-width: 700px;">

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