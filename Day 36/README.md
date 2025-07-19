

# <div align="center">✨ DAY - 36 : Master JavaScript Performance — Debouncing, Throttling, Memoization Explained 🚀 ✨</div>

![JavaScript Performance](https://img.shields.io/badge/JavaScript-Performance%20Optimization-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 
![Learning Day](https://img.shields.io/badge/Learning%20Day-36-4CAF50?style=for-the-badge&logo=calendar&logoColor=white)
![Topics Covered](https://img.shields.io/badge/Topics-Debouncing%20|%20Throttling%20|%20Memoization-2196F3?style=for-the-badge&logo=lightbulb&logoColor=white)
![Level](https://img.shields.io/badge/Level-Advanced%20JavaScript-FF6B6B?style=for-the-badge&logo=rocket&logoColor=white)

> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 💼 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦 | [GitHub: Neeraj05042001](https://github.com/Neeraj05042001) 🐙* |

---


## 🎯 What is Performance?

**Performance** in JavaScript refers to how efficiently and quickly your code executes, uses memory, and responds to user interactions, and how optimally it uses system resources like memory and CPU.

 **Good performance** means your web application loads quickly, responds smoothly to user inputs, and doesn't consume excessive memory or processing power. It encompasses:

- **⚡ Execution Speed**: How fast your code runs
- **🧠 Memory Usage**: How efficiently memory is allocated and freed
- **🖱️ Responsiveness**: How quickly the UI responds to user actions
- **📊 Resource Utilization**: How well your code uses CPU, network, and other resources

### 🔍 Knowledge Check
<details>
<summary>Q: What are the main aspects of JavaScript performance?</summary>

**Answer**: The main aspects are:
1. Execution Speed - how fast code runs
2. Memory Usage - efficient memory allocation/deallocation
3. Responsiveness - UI response to user interactions
4. Resource Utilization - efficient use of CPU, network, etc.
</details>

---

## 🎯 Why Performance is Important?

Performance directly impacts:

### 👤 **User Experience**
- **Fast Loading**: Users expect pages to load within 2-3 seconds
- **Smooth Interactions**: Laggy interfaces frustrate users
- **Battery Life**: Poor performance drains mobile device batteries

### 📈 **Business Impact**
- **Conversion Rates**: 100ms delay can reduce conversions by 7%
- **SEO Rankings**: Google considers page speed for search rankings
- **User Retention**: Slow apps have higher bounce rates

### 💻 **Technical Benefits**
- **Scalability**: Efficient code handles more users
- **Cost Reduction**: Less server resources needed
- **Maintainability**: Optimized code is often cleaner

### 🔍 Knowledge Check
<details>
<summary>Q: How does a 100ms delay affect business metrics?</summary>

**Answer**: A 100ms delay can reduce conversion rates by up to 7%, directly impacting business revenue and user satisfaction.
</details>

---

## 🛠️ Important Performance Techniques

## **1. 🕐 Debouncing - The Patient Wait**

**Debouncing** is a technique that delays the execution of a function until a specified time has passed since the last time it was invoked. Think of it as waiting for someone to finish talking before you respond.

#### **How Debouncing Works:**

- When an event occurs repeatedly, debouncing ensures the function executes only after the user stops triggering the event for a given period.
- It **resets the timer** each time the event is triggered.
- Perfect for scenarios where you only care about the final state.


#### **Common Use Cases:**

- **Search Input**: Wait for user to stop typing before making API calls
- **Form Validation**: Validate only after user finishes entering data
- **Auto-save**: Save document only after user stops editing
- **Resize Events**: Update layout only after window resize is complete
- **API calls triggered by user input**

### 💡 **Implementation**:
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example: Search functionality
const searchInput = document.getElementById('search');
const debouncedSearch = debounce((query) => {
    console.log(`Searching for: ${query}`);
    // API call here
}, 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});
```

### 🔍 Knowledge Check
<details>
<summary>Q: What happens if a user types rapidly in a debounced search field?</summary>

**Answer**: The search function will only execute once, 300ms after the user stops typing. Each new keystroke resets the timer, preventing excessive API calls.
</details>

<details>
<summary>Q: When would you use debouncing over throttling?</summary>

**Answer:**
Use debouncing when:
- You only care about the final result after user stops an action
- Making expensive operations like API calls
- Implementing search suggestions or auto-complete
- Form validation where intermediate states don't matter
- Auto-save functionality
- Window resize handlers where you only need the final size

</details>

---

## **2. 🏎️ Throttling - The Rate Limiter**

**Throttling** limits how often a function can be executed, ensuring it runs at most once per specified time interval, regardless of how many times it's called. It's like taking photos at regular intervals during a concert, regardless of how exciting it gets.

#### **How Throttling Works:**

- Executes the function immediately on first call
- Ignores subsequent calls until the time limit has passed
- Maintains a consistent execution rate
- Perfect for scenarios requiring regular updates


#### **Common Use Cases:**

- **Scroll Events**: Update scroll position indicators
- **Mouse Movement**: Track cursor position for games or animations
- **Button Clicks**: Prevent rapid-fire submissions 
- **API Rate Limiting**: Ensure you don't exceed API call limits
- **Real-time Updates**: Send periodic updates to servers

### 💡 **Implementation:**
```javascript
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Example: Scroll tracking
const throttledScroll = throttle(() => {
    console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', throttledScroll);
```

### 🔄 **Debouncing vs Throttling**:
| Aspect | Debouncing | Throttling |
|--------|------------|------------|
| **Execution** | After delay ends | At regular intervals |
| **Use Case** | Search, resize | Scroll, mouse move |
| **Behavior** | Waits for pause | Executes periodically |

### 🔍 Knowledge Check
<details>
<summary>Q: In throttling with a 100ms limit, how many times will a function execute if called 10 times in 500ms?</summary>

**Answer**: The function will execute 5 times (once every 100ms), regardless of being called 10 times.
</details>

<details>
<summary>Q: What's the key difference between debouncing and throttling?</summary>

**Answer:**
- **Debouncing**: Waits for inactivity before executing (delays execution until events stop)
- **Throttling**: Executes at regular intervals regardless of event frequency (rate limiting)
- **Debouncing**: "Wait until they stop" - good for search, validation
- **Throttling**: "Execute regularly" - good for scroll, resize, real-time updates

</details>

---

## **3. 🧠 Memoization - The Smart Cache**

**Definition**: Memoization is a caching technique that stores function results to avoid redundant calculations for the same inputs.

It's like remembering the answer to a math problem you've already solved.


- Stores function results using input parameters as cache keys
- On subsequent calls with same parameters, returns cached result instantly
- Trades memory for computational speed
- Most effective for functions with overlapping subproblems


#### 🎯**When to Use Memoization:**

- **Recursive Functions**: Fibonacci, factorial calculations 
- **Expensive Computations**: Complex mathematical operations
- **Repeated API Calls**: Cache API responses for same requests 
- **Dynamic Programming**: Solving optimization problems
- **Pure Functions**: Functions that always return same output for same input


### 💡 **Implementation**:
```javascript
// Simple memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            console.log('Cache hit!');
            return cache[key];
        }
        console.log('Computing...');
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Example: Expensive calculation
const expensiveOperation = memoize((n) => {
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
});

console.log(expensiveOperation(100)); // Computing...
console.log(expensiveOperation(100)); // Cache hit!
```

✅Example 2:

```javascript
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Cache hit!');
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Example: Memoized Fibonacci
const fibonacci = memoize((n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Fast execution due to memoization
```

### 🏆 **Advanced Memoization with LRU Cache**:
```javascript
class LRUCache {
    constructor(maxSize = 100) {
        this.maxSize = maxSize;
        this.cache = new Map();
    }
    
    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value); // Move to end
            return value;
        }
        return undefined;
    }
    
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.maxSize) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}
```

### 🔍 Knowledge Check
<details>
<summary>Q: What's the main benefit of memoization?</summary>

**Answer**: Memoization improves performance by caching function results, avoiding expensive recalculations for the same inputs. It trades memory for computation speed.
</details>

<details>
<summary>Q: What are the trade-offs of using memoization?</summary>

**Answer:**
**Benefits:**
- Dramatically faster execution for repeated calls
- Reduces computational complexity
- Improves user experience for expensive operations

**Drawbacks:**
- Increased memory usage (space-time trade-off)
- Memory leaks if cache grows unbounded
- Not suitable for functions with side effects
- Cache invalidation complexity
- May not help if inputs are always different

</details>

---

## **⚠️ Memory Leaks - The Silent Performance Killer**

A **memory leak** occurs when your application allocates memory but fails to release it when it's no longer needed, causing memory usage to grow continuously

### ⚠️ **Common Causes**:

#### **1. Global Variables** 

```javascript
// ❌ Memory Leak
function createLeak() {
    leakedVar = "I'm global!"; // Missing var/let/const
}

// ✅ Fix
function noLeak() {
    let localVar = "I'm scoped!";
}
```

#### **2. Event Listeners Not Removed**
```javascript
// ❌ Memory leak
function attachListener() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', handleClick);
    // Button reference and listener not cleaned up
}

// ✅ Proper cleanup
function attachListener() {
    const button = document.getElementById('myButton');
    const handleClick = () => console.log('clicked');
    
    button.addEventListener('click', handleClick);
    
    // Cleanup when done
    return () => {
        button.removeEventListener('click', handleClick);
    };
}
```

#### **3. Closures Holding References**
```javascript
// ❌ Memory leak
function createHandler() {
    const largeData = new Array(1000000).fill('data');
    
    return function() {
        // Even though largeData isn't used,
        // closure keeps it in memory
        console.log('Handler called');
    };
}

// ✅ Better approach
function createHandler() {
    // Only keep what you need
    return function() {
        console.log('Handler called');
    };
}
```

#### **4. Timers Not Cleared**
```javascript
// ❌ Memory leak
function startTimer() {
    setInterval(() => {
        console.log('Timer running');
    }, 1000);
    // Timer keeps running forever
}

// ✅ Proper cleanup
function startTimer() {
    const intervalId = setInterval(() => {
        console.log('Timer running');
    }, 1000);
    
    // Clear when needed
    return () => clearInterval(intervalId);
}
```

### 🔧 **Memory Leak Detection**:



1. **Chrome DevTools Memory Tab** 
2. **Performance Timeline** for memory usage patterns
3. **Heap Snapshots** to identify growing objects 
4. **Memory usage monitoring** in production

```javascript
// Monitor memory usage
function monitorMemory() {
    if (performance.memory) {
        console.log({
            used: Math.round(performance.memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(performance.memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
    }
}

// Call periodically to track memory usage
setInterval(monitorMemory, 5000);
```

### 🔍 Knowledge Check
<details>
<summary>Q: What are three common causes of memory leaks in JavaScript?</summary>

**Answer**: 
1. Event listeners not properly removed
2. Closures holding references to large objects
3. Timers (setInterval/setTimeout) not cleared
</details>

<details>
<summary>Q: How can you prevent memory leaks in JavaScript applications?</summary>

**Answer:**
1. **Always declare variables** with `let`, `const`, or `var`
2. **Remove event listeners** when elements are removed from DOM
3. **Clear timers and intervals** when no longer needed
4. **Avoid circular references** between objects
5. **Use WeakMap and WeakSet** for temporary references
6. **Set large objects to null** when done
7. **Use AbortController** for cleanup in modern browsers
8. **Regular monitoring** with browser dev tools

</details>

---

## 5. 🚀 DOM Performance Optimization

### 🎯 **Key Principles**:

#### **1. Minimize DOM Queries**
```javascript
// ❌ Multiple queries
function updateElements() {
    document.getElementById('title').textContent = 'New Title';
    document.getElementById('title').style.color = 'blue';
    document.getElementById('title').classList.add('highlight');
}

// ✅ Single query
function updateElements() {
    const titleElement = document.getElementById('title');
    titleElement.textContent = 'New Title';
    titleElement.style.color = 'blue';
    titleElement.classList.add('highlight');
}
```

#### **2. Batch DOM Updates**
```javascript
// ❌ Multiple reflows
function addItems(items) {
    const list = document.getElementById('list');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li); // Triggers reflow each time
    });
}

// ✅ Single reflow
function addItems(items) {
    const list = document.getElementById('list');
    const fragment = document.createDocumentFragment();
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li);
    });
    
    list.appendChild(fragment); // Single reflow
}
```

#### **3. Use Efficient Selectors**
```javascript
// ❌ Slow selectors
document.querySelectorAll('div.container > p.text');

// ✅ Fast selectors
document.getElementById('specificId');
document.getElementsByClassName('specificClass');
```

#### **4. Avoid Layout Thrashing**
```javascript
// ❌ Layout thrashing
function animateElement() {
    const element = document.getElementById('box');
    element.style.left = '100px'; // Triggers layout
    const width = element.offsetWidth; // Forces layout calculation
    element.style.top = '100px'; // Triggers layout again
}

// ✅ Batch style changes
function animateElement() {
    const element = document.getElementById('box');
    element.style.cssText = 'left: 100px; top: 100px;'; // Single layout
}
```
#### **5. Virtual Scrolling for Large Lists** [29]

For lists with thousands of items, only render visible elements:

```javascript
// Virtual scrolling implementation concept
function virtualScrolling(items, containerHeight, itemHeight) {
    const visibleItems = Math.ceil(containerHeight / itemHeight);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = startIndex + visibleItems;
    
    return items.slice(startIndex, endIndex);
}
```

### 🔍 Knowledge Check
<details>
<summary>Q: Why is document.createDocumentFragment() useful for DOM performance?</summary>

**Answer**: DocumentFragment allows you to build DOM structures in memory and append them all at once, causing only one reflow instead of multiple reflows for each individual element addition.
</details>

<details>
<summary>What causes DOM performance issues and how can you fix them?</summary>

**Answer:**
**Common Issues:**
- Frequent DOM access and manipulation
- Layout thrashing (mixing reads and writes)
- Too many event listeners
- Large DOM trees
- Forced synchronous layouts

**Solutions:**
- Cache DOM references
- Batch DOM operations using DocumentFragment
- Use event delegation
- Separate DOM reads and writes
- Implement virtual scrolling for large lists
- Use `requestAnimationFrame` for visual updates
- Minimize DOM depth and complexity

</details>

---

## 6. ⚠️ Over-Optimization

**Definition**: Over-optimization occurs when you spend excessive time optimizing code that doesn't significantly impact performance.

### **Why Over-optimization is Problematic:**

#### **1. Premature Optimization Issues**:

- **Wasted Time**: Optimizing non-critical code paths 
- **Increased Complexity**: Making code harder to read and maintain 
- **Reduced Flexibility**: Over-optimized code is harder to modify 
- **Negligible Benefits**: 97% of optimizations have minimal impact


#### **2. When NOT to Optimize**:

- **Before profiling**: Never optimize without data 
- **Non-critical paths**: Focus on actual bottlenecks 
- **Readable code first**: Prioritize maintainability over micro-optimizations 
- **Early development**: Optimize after core functionality is complete

### 🎯 **Guidelines**:

#### **📊 Measure First**
```javascript
// Use Performance API to measure
function measurePerformance(fn, name) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
}

// Example usage
const result = measurePerformance(() => {
    return expensiveCalculation(1000);
}, 'Expensive Calculation');
```

#### **🎯 80/20 Rule**
- Focus on the 20% of code that causes 80% of performance issues
- Profile your application to identify bottlenecks
- Don't optimize code that runs infrequently

#### **🏃‍♂️ Premature Optimization**
```javascript
// ❌ Over-optimized for no reason
function addNumbers(a, b) {
    // Micro-optimization that doesn't matter
    return a + b >>> 0; // Unnecessary bitwise operation
}

// ✅ Clear and sufficient
function addNumbers(a, b) {
    return a + b;
}
```

#### **🔧 When to Optimize**:
- ✅ User-facing interactions feel slow
- ✅ Profiler shows clear bottlenecks
- ✅ Memory usage grows continuously
- ✅ App crashes or becomes unresponsive

#### **🚫 When NOT to Optimize**:
- ❌ Code runs once at startup
- ❌ Performance is already acceptable
- ❌ Optimization makes code unreadable
- ❌ No measurable improvement

### 🔍 Knowledge Check
<details>
<summary>Q: What is the 80/20 rule in performance optimization?</summary>

**Answer**: The 80/20 rule states that 80% of performance problems come from 20% of your code. Focus optimization efforts on identifying and fixing these critical bottlenecks rather than optimizing everything.
</details>

<details>
<summary>How do you avoid premature optimization while still writing performant code?</summary>

**Answer:**
1. **Profile before optimizing** - Use tools to identify real bottlenecks
2. **Write clean code first** - Readable, maintainable code should be the priority
3. **Optimize when needed** - Only optimize when you have data showing it's necessary
4. **Measure the impact** - Quantify improvements to ensure they're worthwhile
5. **Focus on user experience** - Optimize things that actually affect users
6. **Use appropriate algorithms** - Choose good algorithms from the start, optimize implementation later
7. **Consider the 80/20 rule** - 80% of performance issues come from 20% of the code

</details>

---

## 🎯 Interview Questions & Answers

<details>
<summary>Q1: Explain the difference between debouncing and throttling with real-world examples.</summary>

**Answer**: 
- **Debouncing**: Delays execution until after a pause. Like an elevator waiting for all passengers before moving.
- **Throttling**: Limits execution frequency. Like an elevator that can only move once per minute, regardless of requests.

**Examples**:
- Debounce: Search autocomplete (wait until user stops typing)
- Throttle: Scroll events (process only every 100ms while scrolling)
</details>

<details>
<summary><strong>Q2: Implement a memoization function that can handle any number of arguments.</strong></summary>

**Answer:**

```javascript
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        // Create cache key from all arguments
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Advanced version with size limit
function memoizeWithLimit(fn, maxSize = 100) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            // Move to end (LRU)
            const value = cache.get(key);
            cache.delete(key);
            cache.set(key, value);
            return value;
        }
        
        if (cache.size >= maxSize) {
            // Remove oldest entry
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
        
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
```

</details>

<details>
<summary>Q: What is memoization and when should you use it?</summary>

**Answer**: Memoization caches function results to avoid recalculating the same inputs. Use it for:
- Expensive computations (mathematical calculations)
- Recursive functions (Fibonacci, factorial)
- API calls with stable data
- Pure functions with predictable outputs

Trade-off: Uses memory to save computation time.
</details>

<details>
<summary>Q: How do you detect and prevent memory leaks?</summary>

**Answer**: 
**Detection**:
- Use browser DevTools Memory tab
- Monitor `performance.memory` API
- Look for continuously growing memory usage

**Prevention**:
- Remove event listeners when done
- Clear timers and intervals
- Avoid circular references
- Set large objects to null when finished
- Use WeakMap/WeakSet for temporary references
</details>

<details>
<summary>Q: What causes DOM performance issues and how do you fix them?</summary>

**Answer**: 
**Causes**:
- Frequent DOM queries
- Multiple style changes causing reflow
- Inefficient selectors

**Solutions**:
- Cache DOM references
- Batch DOM updates using DocumentFragment
- Use efficient selectors (getElementById > getElementsByClassName > querySelector)
- Avoid layout thrashing by batching style changes
</details>

<details>
<summary>Q: Explain the concept of over-optimization.</summary>

**Answer**: Over-optimization is spending excessive time optimizing code that doesn't significantly impact performance. 

**Problems**:
- Reduces code readability
- Wastes development time
- May introduce bugs

**Solution**: Follow the 80/20 rule - profile first, then optimize the 20% of code causing 80% of issues.
</details>

<details>
<summary><strong>Q3: What are memory leaks and how would you detect and prevent them?</strong></summary>

**Answer:**

**What are Memory Leaks:**
Memory leaks occur when allocated memory is not freed when no longer needed, causing memory usage to grow continuously.

**Common Causes:**
1. Global variables
2. Forgotten event listeners
3. Closures holding references
4. Timers not cleared
5. Circular references

**Detection Methods:**
1. Chrome DevTools Memory tab
2. Heap snapshots comparison
3. Performance monitoring
4. Memory usage graphs over time

**Prevention Strategies:**
```javascript
// 1. Proper variable scoping
function goodFunction() {
    let localVar = "scoped"; // Not global
}

// 2. Clean up event listeners
const controller = new AbortController();
element.addEventListener('click', handler, {
    signal: controller.signal
});
// Later: controller.abort();

// 3. Clear timers
const timer = setInterval(callback, 1000);
clearInterval(timer);

// 4. Use WeakMap for temporary references
const weakMap = new WeakMap();
weakMap.set(obj, data); // Auto-cleaned when obj is GC'd
```

</details>
<details>
<summary><strong>Q4: How would you optimize a function that processes large datasets?</strong></summary>

**Answer:**

**Optimization Strategies:**

1. **Use efficient algorithms and data structures**
2. **Implement memoization for repeated calculations**
3. **Use Web Workers for CPU-intensive tasks**
4. **Implement chunking for large datasets**
5. **Use lazy evaluation and streaming**

**Example Implementation:**
```javascript
// Chunked processing to avoid blocking UI
function processLargeDataset(data, chunkSize = 1000) {
    return new Promise((resolve, reject) => {
        const results = [];
        let index = 0;
        
        function processChunk() {
            const chunk = data.slice(index, index + chunkSize);
            
            // Process chunk
            const processed = chunk.map(item => expensiveOperation(item));
            results.push(...processed);
            
            index += chunkSize;
            
            if (index < data.length) {
                // Use setTimeout to yield control to browser
                setTimeout(processChunk, 0);
            } else {
                resolve(results);
            }
        }
        
        processChunk();
    });
}

// Using Web Workers for heavy computation
function processWithWorker(data) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('data-processor.js');
        worker.postMessage(data);
        
        worker.onmessage = (e) => {
            resolve(e.data);
            worker.terminate();
        };
        
        worker.onerror = reject;
    });
}
```

</details>
<details>
<summary><strong>Q5: Explain how you would implement throttling for an API that has rate limits.</strong></summary>

**Answer:**

```javascript
// Advanced throttling with queue and rate limiting
class APIThrottler {
    constructor(maxRequests = 10, timeWindow = 1000) {
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = [];
        this.queue = [];
    }
    
    async makeRequest(requestFn) {
        return new Promise((resolve, reject) => {
            this.queue.push({ requestFn, resolve, reject });
            this.processQueue();
        });
    }
    
    processQueue() {
        const now = Date.now();
        
        // Remove old requests from tracking
        this.requests = this.requests.filter(
            timestamp => now - timestamp < this.timeWindow
        );
        
        // Process queue if under rate limit
        if (this.requests.length < this.maxRequests && this.queue.length > 0) {
            const { requestFn, resolve, reject } = this.queue.shift();
            this.requests.push(now);
            
            requestFn()
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    // Process next in queue after a small delay
                    setTimeout(() => this.processQueue(), 10);
                });
        } else if (this.queue.length > 0) {
            // Wait until we can make another request
            const oldestRequest = Math.min(...this.requests);
            const waitTime = this.timeWindow - (now - oldestRequest);
            setTimeout(() => this.processQueue(), waitTime);
        }
    }
}

// Usage
const throttler = new APIThrottler(5, 1000); // 5 requests per second

// All these will be throttled automatically
throttler.makeRequest(() => fetch('/api/data1'));
throttler.makeRequest(() => fetch('/api/data2'));
throttler.makeRequest(() => fetch('/api/data3'));
```

</details>

---

## 🏋️‍♂️ Practice Tasks

### 📝 **Task 1**: Implement a debounced search function
Create a search input that only triggers after 500ms of no typing.

<details>
<summary>💡 Solution</summary>

```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const searchFunction = (query) => {
    console.log(`Searching for: ${query}`);
    // Simulate API call
};

const debouncedSearch = debounce(searchFunction, 500);

// Usage
document.getElementById('search').addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});
```
</details>

### 📝 **Task 2**: Create a throttled button click handler
Prevent button spam-clicking by allowing only one click per 2 seconds.

<details>
<summary>💡 Solution</summary>

```javascript
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const handleClick = () => {
    console.log('Button clicked!');
};

const throttledClick = throttle(handleClick, 2000);

document.getElementById('submitBtn').addEventListener('click', throttledClick);
```
</details>

### 📝 **Task 3**: Implement memoization for Fibonacci sequence
Create a memoized version of the Fibonacci function.

<details>
<summary>💡 Solution</summary>

```javascript
const fibonacci = (() => {
    const cache = {};
    
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        }
        
        if (n <= 1) {
            return n;
        }
        
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
})();

console.log(fibonacci(50)); // Fast with memoization
```
</details>

### 📝 **Task 4**: Fix memory leak in event listener
Identify and fix the memory leak in this code:

```javascript
function setupEventListener() {
    const data = new Array(1000000).fill('large data');
    
    document.getElementById('button').addEventListener('click', function() {
        console.log('Button clicked');
        console.log(data.length);
    });
}
```

<details>
<summary>💡 Solution</summary>

```javascript
function setupEventListener() {
    const button = document.getElementById('button');
    const dataLength = 1000000; // Store only what we need
    
    const clickHandler = function() {
        console.log('Button clicked');
        console.log(dataLength);
    };
    
    button.addEventListener('click', clickHandler);
    
    // Return cleanup function
    return function cleanup() {
        button.removeEventListener('click', clickHandler);
    };
}

// Usage
const cleanup = setupEventListener();
// Call cleanup() when component unmounts
```
</details>

### 📝 **Task 5**: Optimize DOM manipulation
Optimize this function that adds 1000 list items:

```javascript
function addItems() {
    const list = document.getElementById('list');
    for (let i = 0; i < 1000; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        list.appendChild(li); // Multiple reflows
    }
}
```

<details>
<summary>💡 Solution</summary>

```javascript
function addItems() {
    const list = document.getElementById('list');
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 1000; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        fragment.appendChild(li);
    }
    
    list.appendChild(fragment); // Single reflow
}
```
</details>

### 📝 **Task 6**: Create a performance monitoring utility
Build a simple utility to measure function execution time.

<details>
<summary>💡 Solution</summary>

```javascript
class PerformanceMonitor {
    static measure(fn, name = 'Function') {
        return function(...args) {
            const start = performance.now();
            const result = fn.apply(this, args);
            const end = performance.now();
            
            console.log(`⏱️ ${name} execution time: ${(end - start).toFixed(2)}ms`);
            return result;
        };
    }
    
    static async measureAsync(fn, name = 'Async Function') {
        return async function(...args) {
            const start = performance.now();
            const result = await fn.apply(this, args);
            const end = performance.now();
            
            console.log(`⏱️ ${name} execution time: ${(end - start).toFixed(2)}ms`);
            return result;
        };
    }
    
    static memoryUsage() {
        if (performance.memory) {
            return {
                used: Math.round(performance.memory.usedJSHeapSize / 1048576),
                total: Math.round(performance.memory.totalJSHeapSize / 1048576),
                limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
            };
        }
        return 'Memory API not supported';
    }
}

// Usage
const optimizedFunction = PerformanceMonitor.measure(expensiveCalculation, 'Calculation');
const memInfo = PerformanceMonitor.memoryUsage();
console.log('Memory usage:', memInfo);
```
</details>

### 📝 **Task 7**: Implement a simple cache with TTL (Time To Live)
Create a caching system where entries expire after a specified time.

<details>
<summary>💡 Solution</summary>

```javascript
class TTLCache {
    constructor(defaultTTL = 60000) { // 1 minute default
        this.cache = new Map();
        this.timers = new Map();
        this.defaultTTL = defaultTTL;
    }
    
    set(key, value, ttl = this.defaultTTL) {
        // Clear existing timer
        if (this.timers.has(key)) {
            clearTimeout(this.timers.get(key));
        }
        
        // Set value
        this.cache.set(key, value);
        
        // Set expiration timer
        const timer = setTimeout(() => {
            this.delete(key);
        }, ttl);
        
        this.timers.set(key, timer);
    }
    
    get(key) {
        return this.cache.get(key);
    }
    
    has(key) {
        return this.cache.has(key);
    }
    
    delete(key) {
        if (this.timers.has(key)) {
            clearTimeout(this.timers.get(key));
            this.timers.delete(key);
        }
        return this.cache.delete(key);
    }
    
    clear() {
        this.timers.forEach(timer => clearTimeout(timer));
        this.cache.clear();
        this.timers.clear();
    }
    
    size() {
        return this.cache.size;
    }
}

// Usage
const cache = new TTLCache(5000); // 5 seconds TTL
cache.set('user:123', { name: 'John' });
console.log(cache.get('user:123')); // { name: 'John' }

// After 5 seconds, the entry will be automatically removed
```
</details>

### 📝 **Task 8**: Create a rate limiter
Implement a rate limiter that allows only N requests per time window.

<details>
<summary>💡 Solution</summary>

```javascript
class RateLimiter {
    constructor(maxRequests = 5, timeWindow = 60000) { // 5 requests per minute
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = new Map();
    }
    
    isAllowed(identifier) {
        const now = Date.now();
        const userRequests = this.requests.get(identifier) || [];
        
        // Remove old requests outside time window
        const validRequests = userRequests.filter(
            timestamp => now - timestamp < this.timeWindow
        );
        
        if (validRequests.length >= this.maxRequests) {
            return false;
        }
        
        // Add current request
        validRequests.push(now);
        this.requests.set(identifier, validRequests);
        
        return true;
    }
    
    getRemaining(identifier) {
        const userRequests = this.requests.get(identifier) || [];
        const validRequests = userRequests.filter(
            timestamp => Date.now() - timestamp < this.timeWindow
        );
        return Math.max(0, this.maxRequests - validRequests.length);
    }
    
    reset(identifier) {
        this.requests.delete(identifier);
    }
}

// Usage
const limiter = new RateLimiter(3, 10000); // 3 requests per 10 seconds

function makeRequest(userId) {
    if (limiter.isAllowed(userId)) {
        console.log('Request allowed');
        console.log(`Remaining: ${limiter.getRemaining(userId)}`);
    } else {
        console.log('Rate limit exceeded');
    }
}

// Test
makeRequest('user1'); // Request allowed
makeRequest('user1'); // Request allowed  
makeRequest('user1'); // Request allowed
makeRequest('user1'); // Rate limit exceeded
```
</details>

---

## 🎊 Summary

Today you mastered crucial JavaScript performance optimization techniques:

- 🕐 **Debouncing**: Delay execution until activity stops
- 🏎️ **Throttling**: Limit execution frequency
- 🧠 **Memoization**: Cache results to avoid recalculation
- 🐛 **Memory Leak Prevention**: Proper cleanup of resources
- 🚀 **DOM Optimization**: Efficient manipulation techniques
- ⚠️ **Smart Optimization**: When and when not to optimize

These techniques will make your JavaScript applications faster, more responsive, and more efficient! 🌟

---



<div align="center">

### **Happy Coding! 🎉 Keep practicing and building amazing things with JavaScript!**
</div>


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
<p>📆 <em>Next: Day - 37: JavaScript Web APIs Explained – Geolocation, Clipboard, Notifications, Playground, & More! 🤩 🤩 </em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>

</div>