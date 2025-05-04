// ✅ 1. Khai báo các chiến lược dưới dạng hàm
const standardShipping = (weight) => weight * 5;
const expressShipping = (weight) => weight * 10 + 20;
const ecoShipping = (weight) => weight * 3;

// 🧱 2. Context – Hàm tính phí sử dụng strategy
function calculateShipping(strategyFn, weight) {
  return strategyFn(weight);
}
// 🧪 3. Gọi thử từng chiến lược
console.log("Standard:", calculateShipping(standardShipping, 5)); // 25
console.log("Express:", calculateShipping(expressShipping, 5));   // 70
console.log("Eco:", calculateShipping(ecoShipping, 5));           // 15

// 🎯 Ưu điểm:
// Đơn giản, dễ hiểu
// Vẫn đúng nguyên lý Strategy Pattern: truyền vào thuật toán cụ thể để sử dụng
// Có thể linh hoạt thay đổi chiến lược tại runtime

// 🧱 Bạn có thể thêm chiến lược mới:
const superFastShipping = (weight) => weight * 15 + 50;

console.log("SuperFast:", calculateShipping(superFastShipping, 5)); // 125
