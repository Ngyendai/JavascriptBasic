
// cú pháp 
arr.forEach(function callback(currentValue, index, array) {
  // code xử lý
}[, thisArg]);

function printContentArray(array) {
  array.forEach(function print(element) {
    console.log(element);
  });
}

printContentArray([1, 3, 5]);

// ví dụ sử dụng thisArg
function Counter() {
  this.sum = 0;
  this.count = 0;

  this.add = function(array) {
    array.forEach(function(item) {
      this.sum += item;
      ++this.count;
    }, this); // this chính là đối tượng tạo new Counter  }
}

const obj = new Counter();
obj.add([2, 5, 9]);

console.log(obj.count); // 3
console.log(obj.sum); // 16

// Từ khóa return trong forEach
// for thông thường 
function findFirstEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return i;
  }

  return -1;
}

// Ví dụ
const arr = [1, 2, 3, 4, 5];
const ret = findFirstEvenIndex(arr);

console.log("ret=", ret);
// ret= 1

// forEach
function findFirstEvenIndex(arr) {
  arr.forEach(function (item, i) {
    if (arr[i] % 2 === 0) return i;
  });

  return -1;
}

// Ví dụ
const arr = [1, 2, 3, 4, 5];
const ret = findFirstEvenIndex(arr);

console.log("ret=", -1);
// ret= -1

// từ khóa break
// for thường
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (i === 3) break;
  console.log("i=", i);
}

/* Kết quả trên console:
    i= 0
    i= 1
    i= 2
    */
    // forEach
    const arr = [1, 2, 3, 4, 5];

    arr.forEach((item, i) => {
      
      if (i === 3) break;
      console.log("i=", i);
    });

    /* Kết quả trên console:
    Uncaught SyntaxError: Illegal break statement
    */

// sử dụng arr.some()
const arr = [1, 2, 3, 4, 5];

arr.some(function (item, index) {
  if (index === 3) return true;
  console.log("i=", index);
});

/* Kết quả trên console:
    i= 0
    i= 1
    i= 2
    */

// từ khóa continue
//for thường
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (i === 3) continue;
  console.log("i=", i);
}

/* Kết quả trên console:
    i= 0
    i= 1
    i= 2
    i= 4
    */

// forEach
const arr = [1, 2, 3, 4, 5];

    arr.forEach(function(item, i) {
      if (i === 3) continue;
      console.log("i=", i);
    });

    /* Kết quả trên console:
    Uncaught SyntaxError:
    Illegal continue statement: no surrounding iteration statement
    */

    const arr = [1, 2, 3, 4, 5];

    arr.forEach(function (item, i) {
      if (i === 3) return;
      console.log("i=", i);
    });
    
    /* Kết quả trên console:
        i= 0
        i= 1
        i= 2
        i= 4
        */