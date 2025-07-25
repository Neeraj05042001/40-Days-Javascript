import { Member } from "./modules/Member";
import { Admin } from "./modules/Admin";
import { Book } from "./modules/Book";
import { LibrarySystem } from "./services/LibraryService";

const userSwitcher = document.getElementById("userSwitcher");

const bookSection = document.getElementById("bookSection");
const availableSection = document.getElementById("availableSection");
const borrowSection = document.getElementById("borrowSection");
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const borrowedList = document.getElementById("borrowedList");
// const bookList = document.getElementById("bookList")
let currentUser = new Member("John Doe", "johndoe@gmsil.com");

const library = new LibrarySystem();

userSwitcher.addEventListener("change", (e) => {
  const selected = e.target.value;
  console.log(selected);

  currentUser =
    selected === "Admin"
      ? new Admin("Alice", "alice@gmail.com")
      : new Member("John Doe", "johndoe@gmsil.com");
  console.log(currentUser);

  bookSection.style.display = selected === "Admin" ? "block" : "none";
  borrowSection.style.display = selected === "member" ? "block" : "none";

  renderBooks();
   renderBorrowed()
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;

  const book = new Book(title, author, genre);
  library.addBook(book);
  renderBooks();
  bookForm.reset();
});

function renderBooks() {
  bookList.innerHTML = "";

  library.getAllBooks().forEach((book) => {
    const li = document.createElement("li");
    li.className =
      "bg-white p-4 rounded shadow flex justify-between items-center";

    let controls = "";
    if (currentUser.getRole() === "Member" && book.isAvailable) {
      controls = `<button class="bg-green-500 text-white px-3 py-1 rounded" data-action="borrow" data-id="${book.id}">Borrow</button>`;
    } else if (currentUser.getRole() === "Admin") {
      controls = `<span class="text-sm text-gray-500">${
        book.isAvailable ? "Available" : "Borrowed"
      }</span>`;
    }

    li.innerHTML = `
    <div>
    <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em>
    </div>
    ${controls}
    
    `;

    bookList.appendChild(li);
  });
}


function renderBorrowed() {
    // borrowedList.innerHTML = "";

    if (currentUser.getRole() !== "Member") return;

    const borrowedBooks = currentUser.getBorrowedBooks();

    borrowedBooks.forEach((book) => {
        const li = document.createElement("li");

        li.className =
            "bg-yellow-100 p-4 rounded shadow flex justify-between items-center";

        li.innerHTML = `
        <div>
            ${book.title} by ${book.author}
        </div>
        <button class="bg-red-500 text-white px-3 py-1 rounded" data-action="return" data-id="${book.id}">Return</button>
    `;
        borrowedList.appendChild(li);
    });
}

bookList.addEventListener("click", (e) => {
  if ((e.target.tagName === "BUTTON")) {
    const id = e.target.getAttribute("data-id");
    const action = e.target.getAttribute("data-action");
    const book = library.getBooksById(id);

    if (
      action === "borrow" &&
      currentUser.getRole() === "Member" &&
      book.isAvailable
    ) {
      currentUser.borrowBook(book);
      renderBooks()
      renderBorrowed()
    }
  }
});
// Initial rendering

bookSection.style.display = "none";

renderBooks();
 renderBorrowed()
