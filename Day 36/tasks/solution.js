//TODO QUESTION 1: Debounced Live Character Counter
/**
 * Build a character counter for a `<textarea>` that updates the live character count only after the user pauses typing for 500ms.
 * - ✅ Use debounce
 * - ✅ UI should display: “Characters typed: X”
 * - ✅ Bonus: Warn if character count exceeds 200
 */

const textArea = document.getElementById("textArea");
const detail = document.getElementById("detail");
detail.innerText = `Characters typed: 0`;
const warning = document.getElementById("warn");

function counter(value) {
  detail.innerText = `Characters typed: ${value.length}`;
  if (value.length > 200) {
    warning.textContent = `Total character exceeded, please write under 200 characters only.`;
  } else {
    warning.textContent = "";
  }
}

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debounceCounter = debounce(counter, 500);

textArea.addEventListener("input", (e) => {
  debounceCounter(e.target.value);
});

// TODO QUESTION 2 : Throttled Window Resize Logger
/** Create a page that logs the window dimensions to the console — but only once every 250ms as the user resizes the browser.
 * - ✅ Use throttle
 * - ✅ Show current width × height on screen
 * - ✅ Bonus: Highlight screen size category (Mobile, Tablet, Desktop)
 */

const height = document.getElementById("height");
height.textContent = `Height: ${window.innerHeight}`;
const width = document.getElementById("width");
width.textContent = `Width: ${window.innerWidth}`;
const screenCategory = document.getElementById("screen");

function windowDimension() {
  height.textContent = `Height: ${window.innerHeight}`;
  width.textContent = `Width: ${window.innerWidth}`;

  if (window.innerWidth <= 430) {
    screenCategory.textContent = "Screen Category: Mobile";
  } else if (window.innerWidth > 430 && window.innerWidth <= 1024) {
    screenCategory.textContent = `Screen Category: Tablet`;
  } else {
    screenCategory.textContent = `Screen Category: Desktop`;
  }
}

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const throttleWindowDimension = throttle(windowDimension, 250);
window.addEventListener("resize", throttleWindowDimension);

windowDimension();

//TODO QUESTION 3: Memoized Temperature Converter
/** Write a function to convert Celsius to Fahrenheit and vice versa.
 * Use memoization to cache previous conversions.
 * - ✅ Use memoize() wrapper
 * - ✅ Bonus: Add a counter to show how many times the real function runs
 */
const celsiusInput = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
fahrenheit.textContent = `Temperature in Fahrenheit:`;
const btn = document.getElementById("btn");

const form = document.getElementById("form");

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("From Cache");
      return cache[key];
    } else {
      console.log("Calculating");
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function convertToF(celsius) {
  return celsius * 1.8 + 32;
}

const memoizeConvert = memoize(convertToF);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = celsiusInput.value;
  // console.time("start");
  const result = memoizeConvert(value);
  // console.timeEnd("start");
  fahrenheit.textContent = `Temperature in Fahrenheit: ${result}`;
});

//TODO QUESTION 4:  Debounced API Search Simulation
/** Simulate a fetch to search GitHub users using a mock API.
 * Fire the search only when the user pauses typing for 600ms.
 * - ✅ Use debounce()
 * - ✅ Simulate delay with setTimeout()
 * - ✅ Bonus: Show loading spinner during wait
 */

const gitInput = document.getElementById("git-user");
const userTitle = document.getElementById("userTitle");
const image = document.getElementById("image");
const gitForm = document.getElementById("gitForm");
const loader = document.getElementById("loader");

const gitBtn = document.getElementById("git-btn");

async function gitUser(username) {
  loader.style.display = "block";
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) throw new Error("API Does't Work");

    const data = await response.json();
    console.log(data);
    userTitle.textContent = `User Name: ${data.name}`;
    image.setAttribute("src", `${data.avatar_url}`);
  } catch (err) {
    console.log(err.message);
  } finally {
    loader.style.display = "none";
  }
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debounceGit = debounce(gitUser, 600);

gitInput.addEventListener("input", (e) => {
  const value = e.target.value;
  debounceGit(value);
});

//TODO QUESTION 5: Cleanup Forgotten Event Listeners
/** Create a modal popup that registers keyboard events (Esc to close)
 * Ensure those listeners are properly cleaned up when the modal closes.
 * - ✅ Prevent memory leaks
 * - ✅ Bonus: Log to console when cleanup happens
 */

const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

function handleEscape(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

function openModal() {
  modal.classList.add("show");
  overlay.classList.add("show");
  document.addEventListener("keydown", handleEscape);
}

function closeModal() {
  modal.classList.remove("show");
  overlay.classList.remove("show");
  document.removeEventListener("keydown", handleEscape);
  console.log("✅ ESC listener cleaned up");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//TODO QUESTION 6: Profile and Optimize List Rendering
/**
 * Render a list of 1,000 items with buttons to sort, filter, and shuffle.
 * Measure and optimize for performance.
 * - ✅ Use performance.now() or console.time()
 *  - ✅ Use batching or virtual DOM-like diffing
 *  - ✅ Bonus: Only update DOM for changed rows
 */

const listContainer = document.getElementById("listContainer");
let originalData = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  value: Math.floor(Math.random() * 1000),
}));
let listData = [...originalData];

function renderList(data) {
  console.time("Render Time");
  listContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${item.id}, Value: ${item.value}`;
    fragment.appendChild(li);
  });
  listContainer.appendChild(fragment);
  console.timeEnd("Render Time");
}

function sortList() {
  listData.sort((a, b) => a.value - b.value);
  renderList(listData);
}

function filterList() {
  renderList(listData.filter((item) => item.value > 500));
}

function shuffleList() {
  for (let i = listData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [listData[i], listData[j]] = [listData[j], listData[i]];
  }
  renderList(listData);
}

function resetList() {
  listData = [...originalData];
  renderList(listData);
}

renderList(listData);

//TODO QUESTION 7: Performance Race: Debounce vs Throttle vs Memoization
/**
 * Build a demo that lets users toggle between debounce, throttle, and memoized search strategies in a large dataset (e.g., products, cities).
 * ✅ Compare:
 * - Number of function calls
 * - Time taken
 * - Smoothness of UI
 * ✅ Display performance metrics live
 */
const input = document.getElementById("searchBox");
const result = document.getElementById("result");
const calls = document.getElementById("calls");
const strategySelect = document.getElementById("strategy");

let callCount = 0;

const dataset = Array.from({ length: 10000 }, (_, i) => `City ${i + 1}`);

function search(term) {
  callCount++;
  calls.textContent = `Function calls: ${callCount}`;
  const filtered = dataset.filter((item) =>
    item.toLowerCase().includes(term.toLowerCase())
  );
  result.textContent = `Matches: ${filtered.slice(0, 10).join(", ")}`;
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function memoize(fn) {
  const cache = {};
  return function (term) {
    if (cache[term]) {
      callCount++;
      calls.textContent = `Function calls: ${callCount} (from cache)`;
      result.textContent = `Matches: ${cache[term].slice(0, 10).join(", ")}`;
    } else {
      const filtered = dataset.filter((item) =>
        item.toLowerCase().includes(term.toLowerCase())
      );
      cache[term] = filtered;
      fn(term);
    }
  };
}

const debouncedSearch = debounce(search, 500);
const throttledSearch = throttle(search, 500);
const memoizedSearch = memoize(search);

input.addEventListener("input", (e) => {
  const value = e.target.value;
  callCount = 0;

  const strategy = strategySelect.value;
  if (strategy === "debounce") debouncedSearch(value);
  else if (strategy === "throttle") throttledSearch(value);
  else if (strategy === "memoize") memoizedSearch(value);
});
