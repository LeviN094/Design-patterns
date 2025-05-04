🧩 1. Singleton Pattern là gì?
Singleton đảm bảo rằng một class chỉ có đúng 1 instance (đối tượng) trong suốt vòng đời của ứng dụng và cung cấp một global access point đến instance đó.

📌 Mục tiêu: tránh việc tạo nhiều bản sao của đối tượng cần giữ nguyên trạng thái, chẳng hạn: logger, config, DB connection, cache...

📦 2. Khi nào nên dùng?
Khi bạn cần:

- Chia sẻ dữ liệu giữa nhiều nơi (ví dụ: config app, logger, store,...).
- Tiết kiệm tài nguyên: ví dụ database chỉ nên có 1 kết nối duy nhất.
- Global service: ví dụ EventBus, AuthManager.

📌 Tổng kết

- Tính chất của Singleton Mục đích
- Chỉ có 1 instance duy nhất Tránh tạo lại tài nguyên tốn kém
- Có method getInstance() Cung cấp điểm truy cập toàn cục
- Ngăn new trực tiếp Đảm bảo không tạo nhiều instance
