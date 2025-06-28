function createPost() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  if (!title || !body) {
    console.warn("Please fill in both fields");
    return;
  }
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("✅ Post created successfully:", data);
      alert("Post sent! Check console.");
    })
    .catch((error) => {
      console.error("❌ Failed to send post:", error);
      alert("Something went wrong.");
    });
}

//TODO QUESTION 1:  Use `fetch()` to retrieve a list of users from `https://jsonplaceholder.typicode.com/users` and log the names to the console

async function retrieve() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    if (!response.ok) throw new Error(`HTTP Error": ${response.status}`);

    console.log(data);
    data.forEach((user) => {
      console.log(`Person ${user.id} : ${user.name}`);
    });
  } catch (error) {
    console.log("Error fetching user", error);
  }
}
retrieve();

console.log("QUESTION 2");
// TODO QUESTION 2: Fetch all posts by userId=1 from https://jsonplaceholder.typicode.com/posts?userId=1 and display the titles in the DOM

async function fetchByUserId() {
  //using direct link with query parameter
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();

    const solutionDiv = document.getElementById("solution-div");
    data.forEach((user) => {
      const title = document.createElement("h3");
      title.textContent = `Title ${user.id}: ${user.title}`;
      solutionDiv.appendChild(title);
    });
    console.log(data);
  } catch (error) {
    console.log("Error fetching by userId:", error);
  }
}
fetchByUserId();

//TODO QUESTION 3: Send a POST request to https://jsonplaceholder.typicode.com/posts with a new post (title, body, userId). Show the response in console

async function postRequest(method, id = null, postData) {
  const API_URL = id
    ? `https://jsonplaceholder.typicode.com/posts/${id}`
    : "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(API_URL, {
      method: method,
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();

    if (method === "DELETE") {
      console.log("Deleted Successfully");
    }
    console.log(data);
  } catch (error) {
    console.log("Sending request failed:", error);
  }
}

postRequest("POST", null, {
  title: "Neeraj Kumar",
  body: "This is POST request",
  userId: "1",
});

// TODO QUESTINON 4: Update the post with ID = 1 by sending a PUT request with a new title and body. Use the same endpoint

postRequest("PUT", "1", {
  title: "Amartya Kumar",
  body: "This is a PUT request",
});

//TODO QUESTION 5: Send a PATCH request to update just the title of post ID = 1
// postRequest("PATCH", "1", {
//     title: "Ishika"
// })

//TODO QUESTION 6: Send a DELETE request to remove post with ID = 1. Log the status of the response

postRequest("DELETE", "1");

//TODO QUESTION 7: Send a POST request to https://jsonplaceholder.typicode.com/posts with Content-Type: application/json in headers. Log the response
console.log("QUESTION 7");

async function contentType() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: "Neeraj from Post using content-type",
        body: "Hello this is a post call",
        userId: 1,
      }),
    });
    console.log(response);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed accesing the request:", error);
  }
}

contentType();

//TODO QUESTION 8:  Create a custom function request(url, options) that wraps fetch. Use it to GET users and POST a new post
console.log("QUESTION 8");
const URL = "https://jsonplaceholder.typicode.com/users";
async function request(url, method, callingData = null) {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (method !== "GET" && method !== "HEAD" && callingData) {
      options.body = JSON.stringify(callingData);
    }

    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP failed: ${response.status}`);

    const data = await response.json();
    console.log("QUESTION 8");
    console.log(data);
  } catch (error) {
    console.log("Fetch failed", error);
  }
}
request(URL, "GET");

request(URL, "POST", {
  title: "using request(url, options)",
  body: "request(url) body",
});

//TODO QUESTION 9: Make a fetch call to a broken URL and use .catch() or try...catch to show a user-friendly error message

//Already written code in try can dcatch blcok everytime with handling the error gracefully

//TODO QUESTION 10:
console.log("QUESTION 10");

async function cancel(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;

  //Abort fetch after sometime
  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  //
  try {
    const response = await fetch(url, { signal });

    clearTimeout(timer);
    const data = await response.json();
    console.log("QUESTION 10");
    console.log(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Fetch request was aborted (timeout hit)");
    } else {
      console.error("Fetch failed:", error);
    }
  }
}

cancel("https://jsonplaceholder.typicode.com/posts", 20);
