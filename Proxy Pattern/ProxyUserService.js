class RealUserService {
  getUserData() {
    return "Thông tin cá nhân của người dùng";
  }
}

class ProxyUserService {
  constructor(realService, isAuthenticated) {
    this.realService = realService;
    this.isAuthenticated = isAuthenticated;
  }

  getUserData() {
    if (!this.isAuthenticated) {
      throw new Error("Bạn phải đăng nhập để xem dữ liệu!");
    }
    return this.realService.getUserData();
  }
}

// Sử dụng:
const realService = new RealUserService();
const proxy = new ProxyUserService(realService, false);

try {
  console.log(proxy.getUserData());
} catch (e) {
  console.error(e.message); // => Bạn phải đăng nhập để xem dữ liệu!
}
