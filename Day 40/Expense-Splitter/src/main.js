import { ExpenseUI } from "./ui/expenseUI";
import { UserService } from "./sevices/userService";
import { ExpenseService } from "./sevices/expenseService";

console.log("hello world");

class ExpenseApp {
  constructor() {
    this.userService = new UserService();
    this.expenseService = new ExpenseService(this.userService);
    this.ui = null;
  }

  init() {
    try {
      this.ui = new ExpenseUI(this.userService, this.expenseService);
      console.log("Splitter App initialized successfully");
    } catch (error) {
      console.error("Failed to initialize App", error);
    }
  }
}

let expenseApp;
document.addEventListener("DOMContentLoaded", () => {
  expenseApp = new ExpenseApp();
  expenseApp.init();
});

window.addEventListener("load", () => {
  if (!expenseApp) {
    expenseApp = new ExpenseApp();
    expenseApp.init();
  }
});
