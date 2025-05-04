// ✅ Ví dụ 2: Logger Singleton trong TypeScript
// 🎯 Ghi log ra console — tất cả module trong hệ thống đều xài chung 1 logger.

// Logger.ts
export class Logger {
  //   Khai báo một biến tĩnh (static) tên là instance dùng để giữ lại logger duy nhất.
  // static nghĩa là biến này gắn với class, không thuộc về instance nào.

  private static instance: Logger;

  // static: Vì ta cần một biến dùng chung cho tất cả, không phụ thuộc vào instance nào.
  // ==> Nếu ko static instance sẽ thuộc về từng đối tượng — mỗi lần tạo new Logger() sẽ có biến riêng → không thể kiểm soát Singleton.
  // private: Để bảo vệ biến này, không cho bên ngoài sửa Logger.instance trực tiếp.


  // ----------------------------------------
  private constructor() {} // chặn new trực tiếp

  // Khi constructor là private, bạn không thể dùng new Logger() ở bên ngoài class.
  // Đây là kỹ thuật then chốt của Singleton: chặn việc tự ý tạo nhiều instance.
  // const log = new Logger(); // ❌ Lỗi: Constructor of class 'Logger' is private

  // ----------------------------------------
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}


// index.ts
import { Logger } from "./Logger";

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("App started");
logger2.log("User logged in");

console.log(logger1 === logger2); // true
