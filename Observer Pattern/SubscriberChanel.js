// Subject (Publisher)
class YouTubeChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  }

  notify(videoTitle) {
    this.subscribers.forEach(sub => sub.update(videoTitle));
  }

  uploadVideo(title) {
    console.log(`📹 Uploaded: ${title}`);
    this.notify(title);
  }
}

// Observer (Subscriber)
class User {
  constructor(name) {
    this.name = name;
  }

  update(videoTitle) {
    console.log(`🔔 ${this.name} được thông báo: Video mới - ${videoTitle}`);
  }
}

// Sử dụng
const channel = new YouTubeChannel();
const alice = new User("Alice");
const bob = new User("Bob");

channel.subscribe(alice);
channel.subscribe(bob);

channel.uploadVideo("Observer Pattern Explained");
// 🔔 Alice được thông báo: ...
// 🔔 Bob được thông báo: ...
