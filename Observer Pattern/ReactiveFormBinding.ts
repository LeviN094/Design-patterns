// Giả sử bạn có 1 input thay đổi thì component UI được update tự động – giống như các framework reactive (Vue/React).

// Observer interface
interface Observer<T> {
  update(value: T): void;
}

// Observable class
class Observable<T> {
  private observers: Observer<T>[] = [];
  private _value: T;

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  subscribe(observer: Observer<T>) {
    this.observers.push(observer);
    observer.update(this._value); // Gửi giá trị hiện tại ngay lập tức
  }

  set value(newValue: T) {
    this._value = newValue;
    this.notify();
  }

  get value() {
    return this._value;
  }

  private notify() {
    this.observers.forEach(observer => observer.update(this._value));
  }
}

// UI Component (Observer)
class TextComponent implements Observer<string> {
  constructor(private label: string) {}

  update(value: string) {
    console.log(`🖥️ ${this.label} hiển thị: ${value}`);
  }
}

// Sử dụng
const inputField = new Observable<string>("Hello");

const componentA = new TextComponent("Component A");
const componentB = new TextComponent("Component B");

inputField.subscribe(componentA);
inputField.subscribe(componentB);

inputField.value = "Updated text";
// 🖥️ Component A hiển thị: Updated text
// 🖥️ Component B hiển thị: Updated text
