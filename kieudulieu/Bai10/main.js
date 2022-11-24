//Symbol.iterator
let range = {
  from: 1,
  to: 5,
};

for (let num of range) {
  console.log(num);
}

// Uncaught TypeError: range is not iterable


// phương thức Symbol.iterator
let range = {
  from: 1,
  to: 5,

  // phương thức `Symbol.iterator`
  [Symbol.iterator]() {
    // phương thức này trả về một iterator object - object có phương thức next
    return {
      current: this.from,
      last: this.to,

      // khi for...of cần giá trị tiếp theo thì nó sẽ gọi phương thức next
      next() {
        // phương thức next trả về object dạng: {done:..., value:...}
        if (this.current <= this.last) {
          // done=false là chưa kết thúc
          return { done: false, value: this.current++ };
        } else {
          // done=true là kết thúc
          return { done: true };
        }
      },
    };
  },
};

// Bây giờ thì range có thể hoạt động được với for...of
for (let num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

// gọi trực tiếp 
let str = "Hello";

// gọi phương thức [Symbol.iterator]()
// phương thức này trả về đối tượng iterator chứa phương thức next()
let iterator = str[Symbol.iterator]();

// sử dụng vòng lặp while(true) để duyệt
while (true) {
  // gọi phương thức next() để lấy giá trị kế tiếp
  // phương thức next() trả về đối tượng có dạng {done:..., value:...}
  let result = iterator.next();

  // kiểm tra nếu done=true thì break để kết thúc
  if (result.done) break;

  // ngược lại thì in ra giá trị value
  console.log(result.value);
}


// Phương thức Array.from 
let arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};

let arr = Array.from(arrayLike);
console.log(arr.pop()); // b


// tạo array từ iterable range
let range = {
  from: 1,
  to: 5,

  // phương thức `Symbol.iterator`
  [Symbol.iterator]() {
    // phương thức này trả về một iterator object - object có phương thức next
    return {
      current: this.from,
      last: this.to,

      // khi for...of cần giá trị tiếp theo thì nó sẽ gọi phương thức next
      next() {
        // phương thức next trả về object dạng: {done:..., value :...}
        if (this.current <= this.last) {
          // done=false là chưa kết thúc
          return { done: false, value: this.current++ };
        } else {
          // done=true là kết thúc
          return { done: true };
        }
      },
    };
  },
};

let arr = Array.from(range);
console.log(arr); // (5) [1, 2, 3, 4, 5]