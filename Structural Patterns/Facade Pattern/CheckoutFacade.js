class CheckoutFacade {
  constructor(
    private orderService: OrderService,
    private mailer: EmailService,
    private router: NextRouter
  ) { }

  async processCheckout(cart: Cart, userEmail: string) {
    if (cart.total === 0) throw new Error("Cart is empty");

    const order = await this.orderService.placeOrder(cart);
    await this.mailer.sendConfirmation(userEmail, order.id);
    this.router.push("/success");
  }
}
