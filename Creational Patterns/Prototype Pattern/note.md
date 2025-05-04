🧬 1. Prototype Pattern là gì?
Prototype Pattern là mẫu thiết kế dùng để tạo object mới bằng cách clone (sao chép) một object đã tồn tại, thay vì tạo mới từ đầu.

📌 Tức là: thay vì gọi new, bạn clone một object "mẫu" (prototype).

🔥 Khi nào dùng Prototype Pattern?
Khi việc tạo object mới tốn chi phí hoặc phức tạp.
Khi bạn muốn tạo nhiều bản sao có cấu hình giống nhau.
Khi bạn cần tùy biến object mới từ một cấu trúc gốc.

📦 2. Cách hoạt động
Client --> clone() --> Prototype (object gốc)

Prototype phải có khả năng tự nhân bản chính nó — nghĩa là có method clone().
