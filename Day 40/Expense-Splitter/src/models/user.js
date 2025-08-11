 export class User {
  constructor(name) {
    if (!name || typeof name !== "string") {
      throw new Error("User name must be a non-empty string");
    }
    this.name = name.trim();
    this.id = this.generateId();
  }

  generateId(){
    return crypto.randomUUID()
  }
 
}
