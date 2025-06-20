# 🌟 DAY - 25 : Async JavaScript - fetch() API 🌟


<div align="center">

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)
[![Async](https://img.shields.io/badge/Async-Programming-blue?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
[![API](https://img.shields.io/badge/API-fetch()-green?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

</div>



---
> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 💼 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦 | [GitHub: Neeraj05042001](https://github.com/Neeraj05042001) 🐙* |
## 📖 Table of Contents

- [🎯 Learning Objectives](#-learning-objectives)
- [🌐 What is fetch() API?](#-what-is-fetch-api)
- [⚡ Browser Support & Compatibility](#-browser-support--compatibility)
- [🔧 fetch() API Syntax](#-fetch-api-syntax)
- [🚀 async/await with fetch()](#-asyncawait-with-fetch)
- [🌊 HTTP Methods Deep Dive](#-http-methods-deep-dive)
- [📥 GET Requests](#-get-requests)
- [🔍 Query Parameters & URL Building](#-query-parameters--url-building)
- [➕ POST Requests (Create)](#-post-requests-create)
- [🔄 PUT & PATCH Requests (Update)](#-put--patch-requests-update)
- [🗑️ DELETE Requests](#️-delete-requests)
- [🎛️ Custom Headers & Authentication](#️-custom-headers--authentication)
- [📋 Request Objects](#-request-objects)
- [🛡️ Response Handling](#️-response-handling)
- [⚠️ Error Handling Strategies](#️-error-handling-strategies)
- [❌ Request Cancellation](#-request-cancellation)
- [📊 Real-World Patterns](#-real-world-patterns)
- [🔒 Security Considerations](#-security-considerations)
- [🎯 Interview Questions](#-interview-questions)
- [💻 Practice Tasks](#-practice-tasks)
- [📚 Additional Resources](#-additional-resources)

---

## 🌟 Introduction 

The **fetch() API** is a modern, powerful, and promise-based way to make HTTP requests in JavaScript. It's the successor to the older XMLHttpRequest and provides a cleaner, more flexible interface for network requests.

**Why fetch() API?**
- **Promise-based**: Works seamlessly with async/await
- **Modern syntax**: Clean and readable code
- **Flexible**: Supports all HTTP methods
- **Built-in**: Available in all modern browsers
- **Stream-based**: Better handling of large responses

---

## 🔍 What is fetch() API? 

**Definition**: The fetch() API is a web standard that provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.

**Key Characteristics:**
- Returns a Promise that resolves to the Response object
- Does NOT reject on HTTP error status codes (404, 500, etc.)
- Only rejects on network failures or request setup issues
- Supports streaming responses
- Can be cancelled using AbortController

<details>
<summary>🧠 Knowledge Check: What does fetch() return?</summary>

**Answer**: fetch() returns a Promise that resolves to a Response object representing the response to the request.
</details>

---

## 📝 fetch() API Syntax 

### Basic Syntax
```javascript
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Parameters
- **url** (required): The resource URL
- **options** (optional): Configuration object with properties like:
  - `method`: HTTP method (GET, POST, PUT, DELETE, etc.)
  - `headers`: Request headers
  - `body`: Request body data
  - `mode`: CORS mode
  - `credentials`: Include credentials or not

### Basic Example
```javascript
// Simple GET request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

<details>
<summary>🧠 Knowledge Check: What are the two main parameters of fetch()?</summary>

**Answer**: 
1. **url** (required) - The resource URL you want to fetch
2. **options** (optional) - Configuration object for the request
</details>

---

## ⚡ Using fetch() with async/await 

The async/await syntax makes fetch() requests more readable and easier to handle.

### Basic Pattern
```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
```

### Why Use async/await?
- **Cleaner code**: Eliminates callback chains
- **Better error handling**: Use try/catch blocks
- **Sequential execution**: Easy to read flow
- **Return values**: Can return processed data


### 🔄 Comparison: Promises vs async/await

<table>
<tr>
<th>🔗 Promise Chain</th>
<th>🚀 async/await</th>
</tr>
<tr>
<td>

```javascript
fetch('/api/user/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network error');
        }
        return response.json();
    })
    .then(user => {
        console.log(user);
        return fetch(`/api/posts/${user.id}`);
    })
    .then(response => response.json())
    .then(posts => {
        console.log(posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

</td>
<td>

```javascript
async function getUserAndPosts() {
    try {
        const userResponse = await fetch('/api/user/1');
        if (!userResponse.ok) {
            throw new Error('Network error');
        }
        
        const user = await userResponse.json();
        console.log(user);
        
        const postsResponse = await fetch(`/api/posts/${user.id}`);
        const posts = await postsResponse.json();
        console.log(posts);
        
    } catch (error) {
        console.error('Error:', error);
    }
}
```

</td>
</tr>
</table>



<details>
<summary>🧠 Knowledge Check: What's the advantage of using async/await with fetch()?</summary>

**Answer**: async/await makes the code more readable, allows better error handling with try/catch, eliminates callback chains, and makes asynchronous code look like synchronous code.
</details>

<details>
<summary>❓ Question: What happens if you forget to use 'await' with fetch()?</summary>

**💡 Answer:** Without `await`, fetch() returns a Promise object instead of the actual response:

```javascript
// ❌ Wrong - returns Promise<Response>
const response = fetch('/api/data');
console.log(response); // Promise { <pending> }

// ✅ Correct - returns Response object
const response = await fetch('/api/data');
console.log(response); // Response { status: 200, ... }

// ❌ This will cause errors
const data = fetch('/api/data').json(); // TypeError!

// ✅ Correct way
const data = await (await fetch('/api/data')).json();
```
</details>

---

## 🌐 HTTP Methods Overview 

Understanding HTTP methods is crucial for API interactions:

<div style="background: linear-gradient(45deg, #fa709a 0%, #fee140 100%); padding: 20px; border-radius: 10px; color: #333; margin: 15px 0;">

### 🎯 Understanding HTTP Methods

HTTP methods define the **intent** of your request. Each method has a specific purpose and semantic meaning.

</div>

### 📊 HTTP Methods Reference

<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr style="background: #f8f9fa;">
<th>🌊 Method</th>
<th>🎯 Purpose</th>
<th>📦 Body</th>
<th>🔒 Safe</th>
<th>🔄 Idempotent</th>
<th>💡 Use Case</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GET</strong></td>
<td>Retrieve data</td>
<td>❌ No</td>
<td>✅ Yes</td>
<td>✅ Yes</td>
<td>Fetch user profile</td>
</tr>
<tr>
<td><strong>POST</strong></td>
<td>Create resource</td>
<td>✅ Yes</td>
<td>❌ No</td>
<td>❌ No</td>
<td>Create new user</td>
</tr>
<tr>
<td><strong>PUT</strong></td>
<td>Replace resource</td>
<td>✅ Yes</td>
<td>❌ No</td>
<td>✅ Yes</td>
<td>Update entire profile</td>
</tr>
<tr>
<td><strong>PATCH</strong></td>
<td>Partial update</td>
<td>✅ Yes</td>
<td>❌ No</td>
<td>❌ No</td>
<td>Update email only</td>
</tr>
<tr>
<td><strong>DELETE</strong></td>
<td>Remove resource</td>
<td>🔸 Optional</td>
<td>❌ No</td>
<td>✅ Yes</td>
<td>Delete user account</td>
</tr>
<tr>
<td><strong>HEAD</strong></td>
<td>Get headers only</td>
<td>❌ No</td>
<td>✅ Yes</td>
<td>✅ Yes</td>
<td>Check if file exists</td>
</tr>
<tr>
<td><strong>OPTIONS</strong></td>
<td>Get allowed methods</td>
<td>❌ No</td>
<td>✅ Yes</td>
<td>✅ Yes</td>
<td>CORS preflight</td>
</tr>
</tbody>
</table>


### Key Concepts:
- **Idempotent**: Multiple identical requests have the same effect
- **Safe**: Doesn't modify server state
- **Cacheable**: Response can be cached

<details>
<summary>🧠 Knowledge Check: Which HTTP method should you use to partially update a resource?</summary>

**Answer**: **PATCH** - It's designed for partial updates, unlike PUT which replaces the entire resource.
</details>

---

## 📥 GET Resources with fetch() 

GET is the most common HTTP method for retrieving data.

### Basic GET Request
```javascript
async function fetchPosts() {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    
    try {
        const response = await fetch(API_URL);
        
        // Check if request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Check content type
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Response is not JSON!");
        }
        
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
```

### Response Properties
- `response.ok`: Boolean indicating success (status 200-299)
- `response.status`: HTTP status code
- `response.statusText`: Status message
- `response.headers`: Headers object
- `response.url`: Final URL after redirects

<details>
<summary>🧠 Knowledge Check: What does response.ok indicate?</summary>

**Answer**: response.ok is a boolean that indicates whether the response was successful (status codes 200-299). It's false for 4xx and 5xx status codes.
</details>

### 🧠 Knowledge Check
<details>
<summary>❓ Question: Why do we need to check response.ok even for GET requests?</summary>

**💡 Answer:** 

fetch() **only rejects** for network errors, not HTTP error status codes:

```javascript
// ❌ This will NOT throw an error for 404, 500, etc.
try {
    const response = await fetch('/api/nonexistent');
    // response.status = 404, but no error thrown
    const data = await response.json(); // This might fail
} catch (error) {
    // Only catches network errors, not HTTP errors
}

// ✅ Proper error handling
try {
    const response = await fetch('/api/nonexistent');
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
} catch (error) {
    // Catches both network AND HTTP errors
}
```

**🎯 Key Point:** Always check `response.ok` or `response.status` to handle HTTP errors properly.
</details>

---

---

## 🔍 Query Parameters {#query-params}

Query parameters allow you to filter, sort, or modify API responses.

### Manual Query String
```javascript
const url = "https://api.example.com/posts?userId=1&_limit=5";
```

### Using URLSearchParams
```javascript
async function fetchPostsWithComments() {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    
    // Create query parameters object
    const queryParams = {
        userId: 1,
        _limit: 10,
        _sort: 'title',
        _order: 'asc'
    };
    
    try {
        // Build query string
        const queryString = new URLSearchParams(queryParams).toString();
        const url = `${API_URL}?${queryString}`;
        
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### URLSearchParams Methods
- `append(key, value)`: Add parameter
- `set(key, value)`: Set parameter (overwrites)
- `get(key)`: Get parameter value
- `delete(key)`: Remove parameter
- `toString()`: Convert to query string

<details>
<summary>🧠 Knowledge Check: What's the benefit of using URLSearchParams?</summary>

**Answer**: URLSearchParams automatically handles URL encoding, provides methods to manipulate parameters, and creates properly formatted query strings without manual string concatenation.
</details>



---

## 📤 CREATE Resources (POST) 

POST requests are used to create new resources on the server.

### Basic POST Request
```javascript
async function createPost(postData) {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('Created:', result);
        return result;
    } catch (error) {
        console.error('Creation error:', error);
        throw error;
    }
}

// Usage
const newPost = {
    title: "My New Post",
    body: "This is the content of my post",
    userId: 1
};

createPost(newPost);
```

### Important Points
- Always set `Content-Type` header for JSON data
- Use `JSON.stringify()` to convert objects to JSON strings
- Server typically returns the created resource with an ID

<details>
<summary>🧠 Knowledge Check: Why do we need to set Content-Type header in POST requests?</summary>

**Answer**: The Content-Type header tells the server what format the request body is in. For JSON data, we set it to "application/json" so the server knows how to parse the incoming data.
</details>

---

## 🔄 UPDATE Resources (PUT/PATCH) 

### PUT - Complete Resource Replacement
```javascript
async function updatePost(postId, postData) {
    const API_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    
    try {
        const response = await fetch(API_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        
        const result = await response.json();
        console.log('Updated:', result);
        return result;
    } catch (error) {
        console.error('Update error:', error);
    }
}

// Complete replacement
const updatedPost = {
    id: 1,
    title: "Updated Title",
    body: "Updated content",
    userId: 1
};

updatePost(1, updatedPost);
```

### PATCH - Partial Update
```javascript
async function updateViews(postId, viewData) {
    const API_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    
    try {
        const response = await fetch(API_URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(viewData),
        });
        
        const result = await response.json();
        console.log('Partially updated:', result);
        return result;
    } catch (error) {
        console.error('Partial update error:', error);
    }
}

// Only update specific fields
updateViews(1, { views: 150 });
```

<details>
<summary>🧠 Knowledge Check: What's the difference between PUT and PATCH?</summary>

**Answer**: 
- **PUT**: Replaces the entire resource with new data
- **PATCH**: Updates only the specified fields, leaving others unchanged
</details>

---

## 🗑️ DELETE Resources 

DELETE requests remove resources from the server.

```javascript
async function deletePost(postId) {
    const API_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    
    try {
        const response = await fetch(API_URL, {
            method: "DELETE",
        });
        
        if (!response.ok) {
            throw new Error(`Failed to delete: ${response.status}`);
        }
        
        // Some APIs return empty response for DELETE
        const result = response.status === 204 ? 
            { message: 'Deleted successfully' } : 
            await response.json();
            
        console.log('Deleted:', result);
        return result;
    } catch (error) {
        console.error('Delete error:', error);
        throw error;
    }
}

// Usage
deletePost(1);
```

### DELETE Response Codes
- **200**: Success with response body
- **204**: Success with no content
- **404**: Resource not found

<details>
<summary>🧠 Knowledge Check: What HTTP status code indicates successful deletion with no response body?</summary>

**Answer**: **204 No Content** - indicates the request was successful but there's no content to return.
</details>

---

## 🏷️ Custom Headers {#custom-headers}

Headers provide metadata about the request or response.

### Common Headers
```javascript
async function authenticatedRequest() {
    const API_URL = "https://api.example.com/protected";
    
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer your-token-here",
                "X-API-Key": "your-api-key",
                "Accept": "application/json",
                "User-Agent": "MyApp/1.0",
                "X-Custom-Header": "custom-value"
            },
            body: JSON.stringify({
                username: "user123",
                action: "getData"
            }),
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Request error:', error);
    }
}
```

### Important Headers
- **Content-Type**: Format of request body
- **Authorization**: Authentication credentials
- **Accept**: Expected response format
- **User-Agent**: Client identification
- **X-*****: Custom headers (prefix with X-)

<details>
<summary>🧠 Knowledge Check: What header is used for authentication?</summary>

**Answer**: **Authorization** header is commonly used for authentication, often with formats like "Bearer token" or "Basic credentials".
</details>

---

## 📋 Creating Request Objects {#request-objects}

Request objects provide reusable, configurable request templates.

### Basic Request Object
```javascript
const request = new Request("https://api.example.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "New Post",
        content: "Post content"
    }),
});

async function sendRequest(request) {
    try {
        const response = await fetch(request);
        const result = await response.json();
        console.log('Success:', result);
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequest(request);
```

### Cloning and Modifying Requests
```javascript
const baseRequest = new Request("https://api.example.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    }
});

// Create a new request based on the first one
const modifiedRequest = new Request(baseRequest, {
    body: JSON.stringify({
        title: "Different Post",
        content: "Different content"
    }),
});
```

### Benefits of Request Objects
- **Reusability**: Create templates for common requests
- **Immutability**: Original request isn't modified when cloned
- **Consistency**: Ensure similar requests have same configuration

<details>
<summary>🧠 Knowledge Check: Why would you use Request objects instead of passing options directly to fetch()?</summary>

**Answer**: Request objects provide reusability, allow you to create templates for similar requests, ensure consistency across requests, and can be cloned and modified without affecting the original.
</details>

---

## 🛠️ Handling Responses & Errors {#handling-responses}

Proper error handling is crucial for robust applications.

### Complete Response Handling
```javascript
async function robustFetch(url, options = {}) {
    try {
        const response = await fetch(url, options);
        
        // Check if request was successful
        if (!response.ok) {
            // Handle different error types
            switch (response.status) {
                case 400:
                    throw new Error('Bad Request - Check your data');
                case 401:
                    throw new Error('Unauthorized - Check your credentials');
                case 403:
                    throw new Error('Forbidden - Access denied');
                case 404:
                    throw new Error('Not Found - Resource doesn\'t exist');
                case 500:
                    throw new Error('Server Error - Try again later');
                default:
                    throw new Error(`HTTP Error: ${response.status}`);
            }
        }
        
        // Check content type
        const contentType = response.headers.get("content-type");
        
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        } else if (contentType && contentType.includes("text/")) {
            return await response.text();
        } else {
            return await response.blob();
        }
        
    } catch (error) {
        // Network errors, parsing errors, etc.
        if (error.name === 'TypeError') {
            console.error('Network error:', error.message);
        } else {
            console.error('Request error:', error.message);
        }
        throw error;
    }
}
```

### Response Methods
- `response.json()`: Parse JSON data
- `response.text()`: Get text content
- `response.blob()`: Get binary data
- `response.arrayBuffer()`: Get array buffer
- `response.formData()`: Get form data

### Error Types
1. **Network Errors**: No internet, server down
2. **HTTP Errors**: 4xx, 5xx status codes
3. **Parsing Errors**: Invalid JSON, etc.
4. **Timeout Errors**: Request takes too long

<details>
<summary>🧠 Knowledge Check: Does fetch() automatically throw an error for 404 status codes?</summary>

**Answer**: **No**. fetch() only rejects on network errors. HTTP error status codes (like 404, 500) are considered successful requests, so you need to check `response.ok` manually.
</details>

---

## ❌ Canceling fetch() Requests {#canceling-requests}

AbortController allows you to cancel ongoing requests.

### Basic Cancellation
```javascript
let controller;

async function fetchWithCancel(url) {
    // Create new controller for this request
    controller = new AbortController();
    const signal = controller.signal;
    
    try {
        const response = await fetch(url, { signal });
        const data = await response.json();
        console.log('Data received:', data);
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Request was cancelled');
        } else {
            console.error('Fetch error:', error);
        }
    }
}

// To cancel the request
function cancelRequest() {
    if (controller) {
        controller.abort('User cancelled the request');
        console.log('Request cancelled');
    }
}
```

### Timeout Implementation
```javascript
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const signal = controller.signal;
    
    // Set timeout
    const timeoutId = setTimeout(() => {
        controller.abort('Request timeout');
    }, timeout);
    
    try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId); // Clear timeout if request succeeds
        return await response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}
```

### Use Cases for Cancellation
- **User Navigation**: Cancel when user leaves page
- **Search Debouncing**: Cancel previous search when typing
- **Timeouts**: Prevent hanging requests
- **Component Unmounting**: Cancel in React/Vue cleanup

<details>
<summary>🧠 Knowledge Check: What happens when you call controller.abort()?</summary>

**Answer**: When you call controller.abort(), the fetch request is immediately cancelled and throws an AbortError. Any ongoing network activity is stopped.
</details>

---

## 🎯 Interview Questions 

<details>
<summary>1. What is the difference between fetch() and XMLHttpRequest?</summary>

**Answer:**
- **fetch()**: Promise-based, modern syntax, better error handling, supports streaming, built-in JSON parsing
- **XMLHttpRequest**: Callback-based, older API, more verbose, requires manual parsing
- fetch() is the modern standard and preferred approach
</details>

<details>
<summary>2. Why doesn't fetch() reject HTTP error status codes?</summary>

**Answer:**
fetch() only rejects on network failures (no internet, server unreachable). HTTP status codes like 404, 500 are considered valid responses from the server's perspective. You need to check `response.ok` or `response.status` manually to handle HTTP errors.
</details>

<details>
<summary>3. How do you handle CORS errors with fetch()?</summary>

**Answer:**
CORS errors occur when making cross-origin requests. Solutions include:
- Configure server to allow cross-origin requests
- Use `mode: 'cors'` in fetch options
- Use a proxy server for development
- Implement proper CORS headers on the server
</details>

<details>
<summary>4. What's the difference between no-cors and cors mode?</summary>

**Answer:**
- **cors mode**: Default mode, allows cross-origin requests with proper CORS headers
- **no-cors mode**: Makes opaque requests, you can't read the response, mainly for fire-and-forget requests
</details>

<details>
<summary>5. How do you upload files using fetch()?</summary>

**Answer:**
```javascript
const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('/upload', {
    method: 'POST',
    body: formData // Don't set Content-Type header manually
});
```
</details>

<details>
<summary>6. Can you use fetch() in Node.js?</summary>

**Answer:**
Yes, fetch() is available in Node.js 18+ natively. For older versions, you can use packages like `node-fetch` or `isomorphic-fetch`.
</details>

<details>
<summary>7. How do you implement retry logic with fetch()?</summary>

**Answer:**
```javascript
async function fetchWithRetry(url, options, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (response.ok) return response;
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * i));
        }
    }
}
```
</details>

---

## 📝 Practice Tasks 

### Task 1: Basic API Interaction
Create functions to interact with JSONPlaceholder API:
1. Fetch all posts
2. Fetch posts by specific user ID
3. Create a new post
4. Update an existing post
5. Delete a post

<details>
<summary>Solution</summary>

```javascript
const API_BASE = 'https://jsonplaceholder.typicode.com';

// 1. Fetch all posts
async function getAllPosts() {
    const response = await fetch(`${API_BASE}/posts`);
    return await response.json();
}

// 2. Fetch posts by user ID
async function getPostsByUser(userId) {
    const response = await fetch(`${API_BASE}/posts?userId=${userId}`);
    return await response.json();
}

// 3. Create new post
async function createPost(postData) {
    const response = await fetch(`${API_BASE}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    });
    return await response.json();
}

// 4. Update post
async function updatePost(id, postData) {
    const response = await fetch(`${API_BASE}/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    });
    return await response.json();
}

// 5. Delete post
async function deletePost(id) {
    const response = await fetch(`${API_BASE}/posts/${id}`, {
        method: 'DELETE'
    });
    return response.ok;
}
```
</details>

### Task 2: Error Handling Wrapper
Create a robust fetch wrapper that handles all types of errors and provides meaningful error messages.

<details>
<summary>Solution</summary>

```javascript
async function safeFetch(url, options = {}) {
    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorData}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
            return await response.json();
        }
        return await response.text();
        
    } catch (error) {
        if (error.name === 'TypeError') {
            throw new Error('Network error: Check your internet connection');
        }
        throw error;
    }
}
```
</details>

### Task 3: Search with Debouncing
Implement a search function that cancels previous requests when new searches are made.

<details>
<summary>Solution</summary>

```javascript
let searchController = null;

async function searchPosts(query) {
    // Cancel previous request
    if (searchController) {
        searchController.abort();
    }
    
    // Create new controller
    searchController = new AbortController();
    
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?q=${query}`,
            { signal: searchController.signal }
        );
        const results = await response.json();
        return results;
    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error('Search error:', error);
        }
    }
}

// Debounced search
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const debouncedSearch = debounce(searchPosts, 300);
```
</details>

### Task 4: File Upload with Progress
Create a function to upload files with progress tracking.

<details>
<summary>Solution</summary>

```javascript
async function uploadFile(file, onProgress) {
    const formData = new FormData();
    formData.append('file', file);
    
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                onProgress(percentComplete);
            }
        });
        
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`Upload failed: ${xhr.status}`));
            }
        });
        
        xhr.addEventListener('error', () => {
            reject(new Error('Upload failed'));
        });
        
        xhr.open('POST', '/upload');
        xhr.send(formData);
    });
}
```
</details>

### Task 5: API Rate Limiting
Implement a rate-limited fetch function that ensures you don't exceed API limits.

<details>
<summary>Solution</summary>

```javascript
class RateLimiter {
    constructor(requestsPerMinute = 60) {
        this.requests = [];
        this.limit = requestsPerMinute;
    }
    
    async rateLimitedFetch(url, options) {
        await this.waitForRateLimit();
        this.requests.push(Date.now());
        return fetch(url, options);
    }
    
    async waitForRateLimit() {
        const now = Date.now();
        const oneMinuteAgo = now - 60000;
        
        // Remove requests older than 1 minute
        this.requests = this.requests.filter(time => time > oneMinuteAgo);
        
        if (this.requests.length >= this.limit) {
            const oldestRequest = this.requests[0];
            const waitTime = 60000 - (now - oldestRequest);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            return this.waitForRateLimit();
        }
    }
}

const limiter = new RateLimiter(30); // 30 requests per minute
```
</details>

### Task 6: Comprehensive Quiz

**Question 1:** What will happen if you don't check `response.ok` before parsing JSON?

<details>
<summary>Answer</summary>

If the server returns an error status (like 404 or 500) but with a JSON error message, the code might still work. However, if the server returns HTML error pages or non-JSON content, `response.json()` will throw a parsing error. Always check `response.ok` first.
</details>

**Question 2:** How would you implement request/response interceptors similar to Axios?

<details>
<summary>Answer</summary>

```javascript
class FetchInterceptor {
    constructor() {
        this.requestInterceptors = [];
        this.responseInterceptors = [];
    }
    
    addRequestInterceptor(interceptor) {
        this.requestInterceptors.push(interceptor);
    }
    
    addResponseInterceptor(interceptor) {
        this.responseInterceptors.push(interceptor);
    }
    
    async fetch(url, options = {}) {
        // Apply request interceptors
        for (const interceptor of this.requestInterceptors) {
            options = await interceptor(options);
        }
        
        let response = await fetch(url, options);
        
        // Apply response interceptors
        for (const interceptor of this.responseInterceptors) {
            response = await interceptor(response);
        }
        
        return response;
    }
}
```
</details>

**Question 3:** What's the difference between `response.json()` and `JSON.parse(response)`?

<details>
<summary>Answer</summary>

- `response.json()` is a method that reads the response stream and parses it as JSON
- `JSON.parse()` only works on strings, so you'd need `JSON.parse(await response.text())`
- `response.json()` can only be called once per response due to stream consumption
- `response.json()` handles encoding and other response details automatically
</details>

---

## 🎓 Summary

Today you mastered the **fetch() API**, a powerful tool for making HTTP requests in modern JavaScript. Key takeaways:

✅ **Understood fetch() fundamentals** - Promise-based, flexible API

✅ **Learned HTTP methods** - GET, POST, PUT, PATCH, DELETE and their purposes

✅ **Mastered async/await pattern** - Clean, readable asynchronous code

✅ **Implemented CRUD operations** - Create, Read, Update, Delete resources

✅ **Handled errors properly** - Network errors, HTTP errors, parsing errors

✅ **Used query parameters** - URLSearchParams for clean URL building

✅ **Added custom headers** - Authentication, content types, custom metadata

✅ **Created Request objects** - Reusable request templates

✅ **Implemented cancellation** - AbortController for request management

✅ **Built robust applications** - Error handling, timeouts, retries

## 🚀 Next Steps
- Practice with real APIs (GitHub, OpenWeatherMap, etc.)
- Learn about GraphQL and fetch()
- Explore service workers and caching strategies
- Study advanced patterns like request/response interceptors
- Build a complete project using fetch() for all API interactions

## 📚 Additional Resources
- [MDN fetch() Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Free fake API for testing
- [HTTP Status Codes Reference](https://httpstatuses.com/)
- [CORS Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

**Remember:** The fetch() API is your gateway to building modern, interactive web applications. Practice with different APIs and scenarios to become proficient in handling all types of HTTP requests!


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
<p>📆 <em>Next: Day - 26: 6 Common Mistakes with JavaScript Promises & Async Code </em> 📆</p>
<p>🚀 Happy JavaScript coding! 🚀</p>
</div>