interface PaymentService {
  pay(amount: number): void;
}

class RealPaymentService implements PaymentService {
  pay(amount: number) {
    console.log(`💰 Đã thanh toán ${amount} VNĐ`);
  }
}

class LoggingProxy implements PaymentService {
  constructor(private realService: PaymentService) {}

  pay(amount: number) {
    console.log(`[LOG] Sắp thanh toán ${amount}`);
    this.realService.pay(amount);
    console.log(`[LOG] Đã thanh toán xong`);
  }
}

// Dùng thử
const real = new RealPaymentService();
const proxy = new LoggingProxy(real);

proxy.pay(500_000);
