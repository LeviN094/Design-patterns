// ✅ Giải thích từng phần

// Các hàm tinh price
const preorderPrice = (price) => price * 0.9;
const promotionPrice = (price) => price * 0.85;
const blackFriday = (price) => price * 0.5;
const dayPrice = (price) => price - 10;
const defaultPrice = (price) => price;

// Object chứa các chiến lược
const getPriceStrategies = {
  preorder: preorderPrice,
  promotion: promotionPrice,
  blackFriday: blackFriday,
  dayPrice: dayPrice,
  default: defaultPrice
};

// Hàm chọn strategy dựa trên type
function getPrice(originalPrice, typePromotion) {
  const strategyFn = getPriceStrategies[typePromotion];
  if (!strategyFn) {
    throw new Error(`Unknown strategy: ${typePromotion}`);
  }
  return strategyFn(originalPrice);
}


console.log('-->>>', getPrice(200, 'dayPrice')); // Kết quả: 190
console.log('-->>>', getPrice(200, 'blackFriday')); // Kết quả: 100
console.log('-->>>', getPrice(200, 'unknownType')); // fallback: 200