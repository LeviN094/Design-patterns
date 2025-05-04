// Observer interface
// interface Nó không có code bên trong – chỉ định nghĩa cấu trúc của một object
interface Observer {
  update(data: string): void;
}

// Subject interface
interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(data: string): void;
}

class YouTubeChannelTS implements Subject {
  private subscribers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.subscribers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  }

  notify(videoTitle: string): void {
    this.subscribers.forEach(sub => sub.update(videoTitle));
  }

  uploadVideo(title: string): void {
    console.log(`🎬 Video mới: ${title}`);
    this.notify(title);
  }
}

class UserTS implements Observer {
  constructor(private name: string) {}

  update(videoTitle: string): void {
    console.log(`📢 ${this.name} được thông báo: ${videoTitle}`);
  }
}

// Demo
const channelTS = new YouTubeChannelTS();
const userA = new UserTS("User A");
const userB = new UserTS("User B");

channelTS.subscribe(userA);
channelTS.subscribe(userB);

channelTS.uploadVideo("Design Pattern Series: Observer");
// 📢 User A được thông báo: ...
// 📢 User B được thông báo: ...
