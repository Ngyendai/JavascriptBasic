// Định nghĩa getter và setter
let obj = {
  // getter
  get propName() {
    // code trả về obj.propName
  },

  // setter
  set propName(value) {
    // code gán giá trị value cho obj.propName
  },
};

"use strict";

let user = {
  name: "David",
  surname: "Walsh",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

user.fullName = "Lam Pham";
console.log(user.fullName);

// Đối tượng mô tả thuộc tính cho getter và setter
let user = {
  name: "David",
  surname: "Walsh",
};

Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});
console.log(user.fullName); // David Walsh

for (let key in user) console.log(key); // name, surname

// Ứng dụng của getter và setter
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Tên quá ngắn, tối thiểu là 4 chữ cái.");
      return;
    }
    this._name = value;
  },
};

user.name = "Alex";
console.log(user.name); // Alex
user.name = ""; // Tên quá ngắn, tối thiểu là 4 chữ cái.