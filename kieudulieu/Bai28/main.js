//Caching hàm trong JavaScript
function slow(x) {
    // có thể có các tác vụ nặng, tốn CPU
    console.log(`Đã được gọi với ${x}`);
    return x;
  }
  
  // hàm wrapper
  function cachingDecorator(func) {
    let cache = new Map(); // tạo map để cache
  
    return function (x) {
      if (cache.has(x)) {
        // nếu tồn tại key là x thì trả về kết quả đã tương ứng
        return cache.get(x);
      }
  
      let result = func(x); // ngược lại thì gọi hàm
  
      cache.set(x, result); // thêm kết quả vào cache
  
      return result; // trả về kết quả
    };
  }
  
  slow = cachingDecorator(slow);
  
  console.log(slow(1)); // cache lại kết quả của slow(1) rồi trả về kết quả
  console.log("Gọi lại: " + slow(1)); // kết quả của slow(1) được lấy từ cache
  
  console.log(slow(2)); // cache lại kết quả của slow(2) rồi trả về kết quả
  console.log("Gọi lại: " + slow(2)); // kết quả của slow(1) được lấy từ cache
  Kết quả
  Đã được gọi với 1 1 Gọi lại: 1 Đã được gọi với 2 2 Gọi lại: 2

  //Sử dụng func.call

  "use strict";

// hàm slow là phương thức của object worker
let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    // có thể có thao tác tốn CPU
    console.log("Được gọi với " + x);
    return x * this.someMethod(); // (*)  },
};
}
// code giống như trên
function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)    cache.set(x, result);
    return result;
  };
}
console.log(worker.slow(1)); // gọi code bình thường vẫn đúng
worker.slow = cachingDecorator(worker.slow); // khi sử dụng với caching
console.log(worker.slow(2));
// Lỗi:
// Cannot read properties of undefined (reading 'someMethod')


//Caching hàm với nhiều tham số
let worker = {
    slow(min, max) {
      // giả sử có thao tác tốn CPU
      return min + max;
    },
  };
  
  // ghi nhớ kết quả với các tham số truyền vào
  worker.slow = cachingDecorator(worker.slow);

// Sử dụng func.apply
let wrapper = function () {
    return func.apply(this, arguments);
  };