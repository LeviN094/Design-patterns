// Subsystem: API Service
class UserService {
  getUser(id: number) {
    return { id, name: "Alice", age: 25 };
  }
}

class NotificationService {
  sendWelcomeMessage(userName: string) {
    console.log(`Welcome message sent to ${userName}`);
  }
}

class LoggerService {
  log(message: string) {
    console.log(`[Log]: ${message}`);
  }
}

// Facade
class UserFacade {
  private userService = new UserService();
  private notify = new NotificationService();
  private logger = new LoggerService();

  registerUser(id: number) {
    const user = this.userService.getUser(id);
    this.logger.log(`Registering user ${user.name}`);
    this.notify.sendWelcomeMessage(user.name);
  }
}

// Client
const userFacade = new UserFacade();
userFacade.registerUser(1);
