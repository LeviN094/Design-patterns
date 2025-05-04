🔍 1. Định nghĩa Observer Pattern là gì?

- Observer Pattern cho phép một đối tượng (gọi là Subject) thông báo thay đổi cho các đối tượng khác (gọi là Observers) khi có sự thay đổi trạng thái.
- Một Subject có thể có nhiều Observers.
- Khi trạng thái Subject thay đổi → tất cả Observers sẽ được thông báo.
  📦 Mục tiêu: Giảm sự phụ thuộc chặt chẽ (low coupling) giữa các component.

🎯 Khi nào dùng Observer Pattern?

- UI update theo dữ liệu (data-binding).
- Hệ thống thông báo, sự kiện (event-based system).
- Realtime apps: Chat, stock, live score.
- Logging system, audit trail...
