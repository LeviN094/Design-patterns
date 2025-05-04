const user = {
  name: "Alice",
  age: 30
};

const proxy = new Proxy(user, {
  get(target, prop) {
    console.log(`Đang đọc ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Đang gán ${prop} = ${value}`);
    target[prop] = value;
    return true;
  }
});

console.log(proxy.name); // -> log + "Alice"
proxy.age = 35;          // -> log + cập nhật
