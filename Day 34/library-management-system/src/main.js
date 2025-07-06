import { Member } from "./modules/Member";
import { Admin } from "./modules/Admin";
import {Book} from "./modules/Book"

const userSwitcher = document.getElementById("userSwitcher");

const bookSection = document.getElementById("bookSection");
const availableSection = document.getElementById("availableSection");
const borrowSection = document.getElementById("borrowSection");
const bookForm = document.getElementById("bookForm");

let currentUser = new Member("John Doe", "johndoe@gmsil.com");

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
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;

  const book = new Book(title, author, genre);
  console.log(book);
});

// Initial rendering

bookSection.style.display = "none";
