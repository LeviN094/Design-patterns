// counterSingleton.js
class Counter {
  constructor() {
    if (Counter.instance) return Counter.instance;

    // Đây là dòng kiểm tra xem instance đã được tạo trước đó chưa. Nếu có rồi, trả luôn instance cũ, không tạo mới
    // 📌 Kết quả: Tất cả các lần gọi new Counter() sau lần đầu tiên sẽ trả lại cùng 1 đối tượng.


    this.count = 0;

    // Nếu chưa có instance nào, thì ta tiến hành khởi tạo giá trị ban đầu cho đối tượng (count = 0).
    // Dòng này chỉ chạy 1 lần duy nhất, khi instance đầu tiên được tạo ra.

    Counter.instance = this;

    // Lưu this (tức chính đối tượng vừa được tạo) vào biến static Counter.instance.
    // Lần sau khi gọi lại new Counter(), nó sẽ tìm thấy và trả về đúng đối tượng này.
  }

  increment() {
    this.count++;
    console.log("Current count:", this.count);
  }
}

export default Counter;


// use
import Counter from './counterSingleton.js';

const a = new Counter();
a.increment(); // Current count: 1

const b = new Counter();
b.increment(); // Current count: 2

console.log(a === b); // true: cùng 1 instance
