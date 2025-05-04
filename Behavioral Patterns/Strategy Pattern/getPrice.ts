// ✅ 1. Định nghĩa các hàm chiến lược

const preorderPrice = (price: number) => price * 0.9;
const promotionPrice = (price: number) => price * 0.85;
const blackFriday = (price: number) => price * 0.5;
const dayPrice = (price: number) => price - 10;
const defaultPrice = (price: number) => price;
// ✅ 2. Định nghĩa loại promotion dùng type

type PromotionType = 'preorder' | 'promotion' | 'blackFriday' | 'dayPrice' | 'default';
// ✅ 3. Object chứa các chiến lược với kiểu rõ ràng

const getPriceStrategies: Record<PromotionType, (price: number) => number> = {
  preorder: preorderPrice,
  promotion: promotionPrice,
  blackFriday: blackFriday,
  dayPrice: dayPrice,
  default: defaultPrice,
};

// 🔐 Gợi ý: Nếu bạn muốn ép buộc chỉ dùng PromotionType hợp lệ, bạn có thể chỉnh như sau:

function getPriceSafe(price: number, typePromotion: PromotionType): number {
  return getPriceStrategies[typePromotion](price);
}
// Dùng như vầy sẽ an toàn hơn vì truyền sai sẽ báo lỗi ngay từ lúc compile:


console.log(getPriceSafe(200, 'blackFriday')); // ✅ OK
// console.log(getPriceSafe(200, 'summerSale')); ❌ Lỗi compile



// ✅ 5. Kết quả test

console.log(getPrice(200, 'dayPrice'));      // 190
console.log(getPrice(200, 'blackFriday'));   // 100
console.log(getPrice(200, 'notFoundType'));  // fallback: 200