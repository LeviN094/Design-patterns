class UserRegistrationFacade {
  constructor(
    private db: UserRepository,
    private mailer: MailService,
    private logger: Logger,
    private sessionManager: SessionService
  ) { }

  async register(email: string, password: string) {
    const user = await this.db.create(email, password);
    await this.mailer.sendWelcomeEmail(email);
    this.logger.info(`New user: ${email}`);
    return this.sessionManager.createSession(user.id);
  }
}
