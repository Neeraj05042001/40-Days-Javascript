# 🧠 Quiz Game App

An interactive, timed **Quiz Game** built using **HTML**, **CSS**, and **JavaScript**. This game presents random questions with a countdown timer, automatically evaluates answers, displays the correct answer, and tracks the highest score!

---

## 🌐 Live Demo

🚀 **Check out the Live App on Vercel**:  
👉 [https://your-vercel-project-link.vercel.app](https://your-vercel-project-link.vercel.app)  
_(Replace with your actual Vercel URL)_

---

## 🎯 Features

✅ Randomized Questions  
✅ Countdown Timer (15 seconds per question)  
✅ Auto-selects correct answer if time runs out  
✅ Highlights correct answer if a wrong answer is selected  
✅ Tracks and displays the highest score using Local Storage  
✅ Restart option at the end of the quiz  
✅ Sleek and responsive design  
✅ Clean, modular, and readable code

---

## 📸 Screenshots

> Replace the image paths with your actual screenshots once available.

### 🏠 Home / Quiz Screen
![Quiz Screen](./screenshots/quiz-screen.png)

### ✅ Correct Answer Highlighted
![Correct Answer](./screenshots/correct-answer.png)

### ❌ Wrong Answer Highlighted
![Wrong Answer](./screenshots/wrong-answer.png)

### 🏁 Final Result Screen
![Result Screen](./screenshots/result-screen.png)

---

## 🚀 How It Works

1. **Loads a Random Question** from the quiz data.
2. **Starts a 15-second Timer** per question.
3. If no option is selected within time:
   - Auto-selects the correct answer.
4. If a **Wrong Answer** is selected:
   - Highlights the wrong one.
   - Also highlights the right one.
5. **"Next Question"** button appears after answering or timeout.
6. At the end of all questions:
   - Final **score is displayed**.
   - If current score > previous highest → **new high score saved**.
7. A **Restart** button lets you play again.

---

## 📦 Tech Stack

- **HTML5**: Markup and structure
- **CSS3**: Styling and layout
- **JavaScript (Vanilla)**: Functionality and logic

---

## 🧩 Code Structure

### `index.html`
- Basic structure
- Quiz container with timer, question, options, result, and next button

### `style.css`
- Modern styling with responsive layout
- Visual cues for correct and wrong answers

### `script.js`
- Quiz logic: questions, timer, score, localStorage
- DOM manipulation and event handling

---

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quiz-game.git
   cd quiz-game

2. **Open in browser**

>- Just open index.html in any modern browser.

>- No dependencies, no build tools needed!

🧠 Sample Questions
The game uses a few sample questions like:
```js
{
  question: "What does DOM stand for?",
  options: [
    "Document Order Model",
    "Document Object Model",
    "Data Object Method",
    "Direct Object Management"
  ],
  correct: 1
}
```

# 🙋‍♂️ Author
Neeraj
🔗 LinkedIn
🐦 X (Twitter)
💻 GitHub
