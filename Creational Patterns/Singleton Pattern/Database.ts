// Database.ts
export class Database {
  private static instance: Database;
  private constructor() {
    console.log("🔌 Connected to DB");
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  query(sql: string) {
    console.log(`Running query: ${sql}`);
  }
}


// app.ts
import { Database } from "./Database";

const db1 = Database.getInstance();
const db2 = Database.getInstance();

db1.query("SELECT * FROM users");
db2.query("SELECT * FROM tours");

console.log(db1 === db2); // true
// ✅ Chỉ log Connected to DB đúng 1 lần, dù bạn gọi getInstance() ở đâu.
