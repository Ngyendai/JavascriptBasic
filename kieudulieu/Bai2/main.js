//Strict mode trong JavaScript
//Không sử dụng strict mode
x = 10;
var Infinity = 10;
delete Object.prototype;

//Sử dụng strict mode
"use strict";
x = 10;
// Uncaught ReferenceError: x is not defined
var Infinity = 10;
// Uncaught TypeError: Cannot assign to read only property 'Infinity' of object '#<Window>'
delete Object.prototype;
// Uncaught TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

//Testing trước khi debug JavaScript
function Vector(x, y) {
    this.x = x;
    this.y = y;
  }
  Vector.prototype.plus = function (other) {
    return new Vector(this.x + other.x, this.y + other.y);
  };

  function testVector() {
    var p1 = new Vector(10, 20);
    var p2 = new Vector(-10, 5);
    var p3 = p1.plus(p2);
  
    if (p1.x !== 10) return "fail: x property";
    if (p1.y !== 20) return "fail: y property";
    if (p2.x !== -10) return "fail: negative x property";
    if (p3.x !== 0) return "fail: x from plus";
    if (p3.y !== 25) return "fail: y from plus";
    return "everything ok";
  }
  console.log(testVector());
  // => everything ok

  //Debugging - Debug JavaScript
  function numberToString(n, base) {
    var result = "",
      sign = "";
    if (n < 0) {
      sign = "-";
      n = -n;
    }
    do {
      result = String(n % base) + result;
      n /= base;
    } while (n > 0);
    return sign + result;
  }
  console.log(numberToString(13, 10));
  // => 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…
  function numberToString(n, base) {
    var result = "",
      sign = "";
    if (n < 0) {
      sign = "-";
      n = -n;
    }
    console.log("sign:", sign);
    console.log("n:", n);
    do {
      result = String(n % base) + result;
      console.log("result:", result);
      n /= base;
      console.log("n", n);
    } while (n > 0);
    return sign + result;
  }
  console.log(numberToString(13, 10));
  Kết quả ta có log như sau:
  
  Kết quả
  sign: n: 13 result: 3 n 1.3 result: 1.33 n 0.13 result: 0.131.33 ...
  function numberToString(n, base) {
    var result = "",
      sign = "";
    if (n < 0) {
      sign = "-";
      n = -n;
    }
    do {
      result = String(n % base) + result;
      n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
  }
  console.log(numberToString(13, 10));
  // => 13