👉 Thay vì làm từng bước đó → bạn chỉ gọi đại lý du lịch → đại lý là Facade → họ xử lý tất cả các bước kia cho bạn.

👉 Facade Pattern là một mẫu thiết kế thuộc nhóm Structural Patterns – dùng để đơn giản hóa giao diện của một hệ thống phức tạp bằng cách cung cấp một "lớp bao bọc" (facade) giúp client dễ sử dụng hơn.

🔍 1. Facade Pattern là gì?
Facade (mặt tiền) giúp:
Ẩn đi sự phức tạp nội tại của hệ thống.
Cung cấp một API đơn giản, gọn gàng cho client sử dụng.
Không thay đổi code gốc, chỉ bọc lại logic và đơn giản hóa việc gọi.

✅ 1. Thực tế đời sống: Đại lý du lịch
Tình huống:

- Bạn muốn đi du lịch → cần:
- Đặt vé máy bay
- Đặt khách sạn
- Thuê xe đưa đón
- Mua bảo hiểm du lịch

✅ 2. Frontend: Giao diện thanh toán
Tình huống:
Bạn xây một CheckoutPage trong React. Để thanh toán, bạn cần:
Validate giỏ hàng
Gọi API đặt hàng
Gửi email xác nhận
Hiển thị thông báo
Chuyển hướng sang trang thành công
Thay vì xử lý riêng từng logic đó trong component, bạn tạo một CheckoutFacade.js:

✅ 3. Backend: User Registration API
Tình huống:
Khi người dùng đăng ký, bạn cần:
Tạo user trong database
Gửi email xác nhận
Ghi log vào hệ thống
Tạo session / JWT

→ Facade giúp gộp toàn bộ lại: UserRegistrationFacade.js
