🎭 1. Proxy Pattern là gì?
Proxy nghĩa là “đại diện”. Mẫu thiết kế Proxy Pattern dùng để đóng vai trò trung gian giữa client và một object thực, nhằm kiểm soát quyền truy cập, tối ưu hiệu suất, hoặc thêm logic bổ sung.

🎯 Proxy không thay thế object chính, mà đứng trung gian, ủy quyền công việc sau khi đã xử lý trước/sau theo mục đích.

📌 2. Khi nào dùng Proxy?
Cần kiểm soát quyền truy cập (authorization).
Cần cache dữ liệu, lazy loading, hoặc delay khởi tạo object nặng.
Cần log, đo thời gian, thống kê mà không sửa logic object gốc.

🔧 3. Cấu trúc đơn giản

Client ---> Proxy ---> Real Object

📌 Proxy thường dùng trong...
Auth middleware: kiểm tra JWT trước khi vào route.
Reverse proxy (Nginx): đứng giữa client và server.
ORM: delay load dữ liệu khi cần.
Caching Proxy: cache kết quả truy vấn API.

✅ middleware trong backend (ví dụ: Express.js, NestJS, Koa, Fastify) là một ứng dụng rất rõ ràng và phổ biến của Proxy Pattern – tuy không phải 100% middleware đều là proxy, nhưng rất nhiều middleware đóng vai trò là "proxy trung gian" để kiểm soát truy cập, xử lý trước/sau khi đến logic chính.
