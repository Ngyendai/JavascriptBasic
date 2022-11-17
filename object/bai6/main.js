// 
function Point(x, y) {
  this.x = x;
  this.y = y;
}

let root = new Point(0, 0);
console.log(root.x, root.y); // 0 0

// Hàm khởi tạo không có tham só bỏ qua dấu ngoặc đơn ()
function Point() {
  this.x = 0;
  this.y = 0;
}

let root = new Point();
console.log(root.x, root.y); // 0

// Định nghĩa cú pháp
let root = new (function () {
  this.x = 1;
  this.y = 2;

  /*
   * Code xử lý khác tại đây
   */
})();

console.log(root.x, root.y); // 1 2


// Kiểm tra hàm khởi tọa
function Point() {
  console.log(new.target);
}

Point(); // undefined
new Point(); // ƒ Point() { console.log(new.target); }

// Hàm khởi tạo không gọi từ khóa new
function Point(x, y) {
  if (!new.target) {
    return new Point(x, y);
  }
  this.x = x;
  this.y = y;
}

let root = Point(0, 0);
console.log(root.x, root.y); // 0 0

// Trả về giá trị từ hàn khởi tạo
function Point(x, y) {
  this.x = x;
  this.y = y;

  return { x: 100, y: 100 }; // trả về object này thay vì this}
}

let p = new Point(0, 0);
console.log(p.x, p.y); // 100 100

// Trả về giá trị nguyên thủy
function Point(x, y) {
  this.x = x;
  this.y = y;

  return 1; // return trả về giá trị nguyên thủy bị bỏ qua}
}
let p = new Point(0, 0);
console.log(p.x, p.y); // 0 0

// Định nghĩa phương thức trong hàm khởi tạo
function Point(x, y) {
  this.x = x;
  this.y = y;

  this.printLog = function () {
    console.log(this.x, this.y);
  };
}

let root = new Point(0, 0);
root.printLog(); // 0 0