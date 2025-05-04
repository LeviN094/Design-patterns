const userPrototype = {
  role: "user",
  active: true,
  clone() {
    return { ...this }; // shallow copy
  }
};

const user1 = userPrototype.clone();
user1.name = "Alice";

const user2 = userPrototype.clone();
user2.name = "Bob";

console.log(user1); // { role: 'user', active: true, name: 'Alice', clone: [Function] }
console.log(user2); // { role: 'user', active: true, name: 'Bob', clone: [Function] }
