import { DOMHelpers } from "./DOMHelper";
import { showSuccessToast } from "../utils/toastUtil";
import { showErrorToast } from "../utils/toastUtil";

export class ExpenseUI {
  constructor(userService, expenseService, storageService) {
    this.userService = userService;
    this.expenseService = expenseService;

    this.initializeElements();
    this.bindEvents();
    this.initializeSelectBox();
    this.storageService = storageService;
  }

  initializeElements() {
    this.elements = {
      addUserForm: DOMHelpers.getElementById("addUserForm"),
      userInput: DOMHelpers.getElementById("userInput"),
      expenseUserInput: DOMHelpers.getElementById("expenseUserInput"),
      expenseAmountInput: DOMHelpers.getElementById("expenseAmountInput"),
      expenseReasonInput: DOMHelpers.getElementById("expenseReasonInput"),
      paymentList: DOMHelpers.getElementById("payment-list"),
      addExpenseForm: DOMHelpers.getElementById("addExpenseForm"),
      // paymentList: DOMHelpers.getElementById("payment-list"),
      simplifyBtn: DOMHelpers.getElementById("simplifyBtn"),
      resultArea: DOMHelpers.getElementById("resultArea"),
      exportBtn: DOMHelpers.getElementById("exportBtn"),
      importBtn: DOMHelpers.getElementById("importBtn"),
      importFile: DOMHelpers.getElementById("importFile"),
    };
  }

  bindEvents() {
    this.elements.addUserForm.addEventListener("submit", (e) => {
      // e.preventDefault()
      this.handleAddUser(e);
    });

    this.elements.addExpenseForm.addEventListener("submit", (e) => {
      this.handleExpense(e);
    });

    this.elements.simplifyBtn.addEventListener("click", (e) => {
      this.handleSimplify(e);
    });

    this.elements.exportBtn.addEventListener("click", () =>
      this.handleExport()
    );
    this.elements.importFile.addEventListener("change", (e) =>
      this.handleImport(e)
    );

    // Add click event for export button to trigger file input
    this.elements.exportBtn.addEventListener("click", (e) => {
      // Check if it's the export functionality or import trigger
      if (e.target.dataset.action === "Export") {
        this.handleExport();
      }
    });

    // Add import button functionality
    this.elements.importBtn.addEventListener("click", (e) => {
      this.elements.importFile.click();
    });
  }

  initializeSelectBox() {
    const defaultOption = DOMHelpers.createOption("select User", "");
    this.elements.expenseUserInput.add(defaultOption);
  }
  handleAddUser(e) {
    e.preventDefault();
    try {
      //Get the user name provided by the user
      const name = this.elements.userInput.value.trim();
      //check if user name is given

      if (!name) {
        throw new Error("User name is mandatory");
      }
      //use the user service to add the user
      const user = this.userService.addUser(name);
      // Add user to select
      this.addUserToSelect(user.name);
      //reset the form
      this.elements.addUserForm.reset();

      showSuccessToast(`User ${user.name} added`);
      console.log(`user ${user.name} added`);
      console.log(`All Users ${this.userService.getUserCount()} added`);
    } catch (error) {
      console.error("Error adding User:", error);
      showErrorToast(error.message);
    }
  }

  addUserToSelect(userName) {
    const option = DOMHelpers.createOption(userName, userName);
    this.elements.expenseUserInput.add(option);
  }

  handleExpense(e) {
    e.preventDefault();
    try {
      const paidBy = this.elements.expenseUserInput.value.trim();
      const amount = this.elements.expenseAmountInput.value.trim();
      const description = this.elements.expenseReasonInput.value.trim();

      if (!paidBy || typeof paidBy !== "string") {
        throw new Error("Please select a User");
      }
      if (!amount || amount <= 0) {
        throw new Error("Please Enter amount");
      }
      const expense = this.expenseService.addExpense(
        paidBy,
        amount,
        description
      );

      this.renderExpense(expense);
      //reset the selected field
      this.elements.expenseAmountInput.value = "";
      this.elements.expenseReasonInput.value = "";

      //show Toast message
      showSuccessToast(
        `Expense ${amount} for ${description} added by ${paidBy}`
      );
    } catch (error) {
      console.error("Error adding Expense", error);
      showErrorToast(error.message);
    }
  }

  handleExport() {
    try {
      this.storageService.exportData();
      showSuccessToast("Data exported successfully");
    } catch (error) {
      showErrorToast(`Export failed: ${error.message}`);
      console.error("Export error:", error);
    }
  }

  async handleImport(e) {
    try {
      console.log("importing");
      const file = e.target.files[0];
      if (!file) return;

      await this.storageService.importData(file);
      this.refreshUI();

      showSuccessToast("Data imported successfully");
      console.log("Data imported successfully");
    } catch (error) {
      showErrorToast(`Import failed: ${error.message}`);
      console.error("Import error:", error);
    } finally {
      // Reset file input
      e.target.value = "";
    }
  }

  renderExpense(expense) {
    const text =
      expense.description !== "No Description"
        ? `${expense.paidBy} paid ₹${expense.amount} for ${expense.description}`
        : `${expense.paidBy} paid ₹${expense.amount}`;
    const listItem = DOMHelpers.createListItem(text);
    this.elements.paymentList.appendChild(listItem);
  }

  handleSimplify() {
    try {
      const results = this.expenseService.simplifyExpenses();
      this.displayResults(results);
    } catch (error) {
      console.error("Error simplifying expenses:", error);
      showErrorToast(`Error Simplifying expenses ${error.message}`);
    }
  }
  displayResults(results) {
    console.log(results);
    DOMHelpers.clearElement(this.elements.resultArea);

    if (results.length === 0) {
      const noResultsItem = DOMHelpers.createListItem(
        "All expenses are settled!",
        "no-results"
      );
      this.elements.resultArea.appendChild(noResultsItem);
      return;
    }

    DOMHelpers.appendFragment(this.elements.resultArea, results, (result) =>
      DOMHelpers.createListItem(result, "settlement-item")
    );
  }
}
