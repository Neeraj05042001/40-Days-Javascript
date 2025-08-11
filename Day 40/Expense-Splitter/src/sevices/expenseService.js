import { Expense } from "../models/expense";

export class ExpenseService {
  constructor(userService) {
    this.expenses = [];
    this.userService = userService;
  }

  addExpense(paidBy, amount, description) {
    // if (!this.userService.hasUser(paidBy)) {
    //   throw new Error("User does not exists");
    // }
    const expense = new Expense(paidBy, amount, description);
    this.expenses.push(expense);
    return expense;
  }
  getAllExpenses() {
    return [...this.expenses];
  }
  getExpenseByUser(userName) {
    return this.expenses.filter((expense) => expense.paidBy === userName);
  }
  clear() {
    this.expenses = [];
  }
  simplifyExpenses() {
    //step1: calculate what each person should pay

    //step 2: Figure out who owes money and who should recieve money

    //step 3: match people who owe money with people who should recieve money

    const userCount = this.userService.getUserCount();
    if (userCount === 0) {
      return [];
    }
    console.log(userCount);
    const net = {};
    const userNames = this.userService.getUserNames();

    userNames.forEach((name) => {
      net[name] = 0;
    });

    this.expenses.forEach((expense) => {
      const share = expense.amount / userCount;

      userNames.forEach((name) => {
        if (name === expense.paidBy) {
          net[name] += expense.amount - share;
        } else {
          net[name] -= share;
        }
      });
    });

    return this.calculateSettlements(net);

    //make this logic by yourself
  }

  calculateSettlements(net) {
    const results = [];
    const names = Object.keys(net).filter((name) => Math.abs(net[name]) > 0.01);

    names.sort((a, b) => net[a] - net[b]);

    let i = 0;
    let j = names.length - 1;

    while (i < j) {
      const creditor = names[j];
      const debtor = names[i];
      const settlement = Math.min(-net[debtor], net[creditor]);

      if (settlement > 0.01) {
        net[debtor] += settlement;
        net[creditor] -= settlement;
        results.push(`${debtor} owes ${creditor} ₹${settlement.toFixed(2)}`);
      }

      if (Math.abs(net[debtor]) < 0.01) i++;
      if (Math.abs(net[creditor]) < 0.01) j--;
    }

    return results;
  }

  importExpenses(expenseData) {
    if (!Array.isArray(expenseData)) {
      throw new Error("Expense data must be an array");
    }

    const importedExpenses = expenseData
      .filter((exp) => exp && exp.paidBy && exp.amount)
      .map((exp) => new Expense(exp.paidBy, exp.amount, exp.description));

    this.expenses.push(...importedExpenses);
  }
}
