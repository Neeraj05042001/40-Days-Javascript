 export class Expense {
  constructor(paidBy, amount, description="No Description") {
    if (!paidBy || typeof paidBy !== "string") {
      throw new Error("PaidBy must be a non-empty string");
    }
    // if (!amount || typeof amount !== "number" || amount <= 0) {
    //   throw new Error("Amount must be a positive integer");
    // }
    this.paidBy = paidBy.trim();
    // this.amount = parseFloat(amount.to);
    this.amount = amount
    this.description = description;
    this.timestamp = new Date().toISOString();

    this.generateId = this.generateId();
  }

  generateId() {
    return crypto.randomUUID();
  }
}
