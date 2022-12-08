//Khởi tạo Regular Expression
var re1 = new RegExp("abc");
var re2 = /abc/;

var re1 = new RegExp("abc");
var re2 = /abc/; [var re1 = new regexp ("abc"); var re2 = /abc /;] x

//Một số phương thức của Regular Expression
//Phương thức Test
console.log(/abc/.test("abcde"));
// => true
console.log(/abc/.test("12abcde"));
// => true
console.log(/abc/.test("abxcde"));
// => false

//Kiểm tra trùng khớp với tập hợp các kí tự
console.log(/[0123456789]/.test("in 1992"));
// => true
console.log(/[0-9]/.test("in 1992"));
// => true
console.log(/[0-9]/.test("Hello "));
// => false
console.log(/[0-5]/.test("Gold 9999"));
// => false
var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20"));
// => true
console.log(dateTime.test("30-jan-2003 15:20"));
// => false

//Đảo ngược tập hợp các kí tự
var notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// => false
console.log(notBinary.test("1100100010200110"));
// => true

//Lặp lại khuôn mẫu
//"+": biểu thị phần tử xuất hiện >= 1 lần
console.log(/'\d+'/.test("'123'"));
// => true
console.log(/'\d+'/.test("''"));
// => false

//"*": biểu thị phần tử xuất hiện >= 0 lần (có thể không xuất hiện)
console.log(/'\d*'/.test("'123'"));
// => true
console.log(/'\d*'/.test("''"));
// => true

//"?": biểu thị phần tử xuất hiện 0 hoặc 1 lần
var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// => true
console.log(neighbor.test("neighbor"));
// => true
console.log(neighbor.test("neighbouur"));
// => false

//{n}: biểu thị phần tử xuất hiện đúng n lần
console.log(/\d{4}/.test("1234"));
// => true
console.log(/\d{4}/.test("12345"));
// => true
console.log(/\d{4}/.test("123"));
// => false


//{x,y}: biểu thị phần tử xuất hiện từ x đến y lần
console.log(/\d{2,4}/.test("12345"));
// => true
console.log(/\d{2,4}/.test("1234"));
// => true
console.log(/\d{2,4}/.test("123"));
// => true
console.log(/\d{2,4}/.test("12"));
// => true
console.log(/\d{2,4}/.test("1"));
// => false

//{x, }: biểu thị phần tử xuất hiện >= x lần
console.log(/\d{2,}/.test("12"));
// => true
console.log(/\d{2,}/.test("1234"));
// => true
console.log(/\d{2,}/.test("1"));
// => false

//Nhóm các phần tử
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// => true

//Lựa chọn khuôn mẫu
var animalCount = /\d+ (pig|cow|chicken)s?/;
console.log(animalCount.test("15 pigs"));
// => true
console.log(animalCount.test("15 pigchickens"));
// => false

//Phương thức Exec
var match = /\d+/.exec("one two 100 200");
console.log(match);
// => ["100", index: 8, input: "one two 100 200"]
console.log(match.index);
// => 8
var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// => ["'hello'", "hello", index: 9, input: "she said 'hello'"]

console.log(/bad(ly)?/.exec("bad"));
// => ["bad", undefined, index: 0, input: "bad"]

console.log(/(\d)+/.exec("123"));
// => ["123", "3", index: 0, input: "123"]

//Trích xuất dữ liệu từ string
function findDate(string) {
    var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    var match = dateTime.exec(string);
    return {
      day: match[1],
      month: match[2],
      year: match[3],
    };
  }
  var obj = findDate("30-1-2003");
  console.log(obj);
  // => Object {day: "30", month: "1", year: "2003"}

  //Ranh giới của string

  //Sử dụng kí tự biểu diễn bắt đầu (^) và kết thúc ($) string
  function findDate(string) {
    var dateTime = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    var match = dateTime.exec(string);
    if (!match) return null;
    return {
      day: match[1],
      month: match[2],
      year: match[3],
    };
  }
  var obj1 = findDate("30-1-2003");
  console.log(obj1);
  // => Object {day: "30", month: "1", year: "2003"}
  
  var obj2 = findDate("0030-1-200300");
  console.log(obj2);
  // => null
  
  var obj3 = findDate("Hello 30-1-2003 Haha");
  console.log(obj3);
  // => null


// Sử dụng kí tự biên (\b)
function findDate(string) {
    var dateTime = /\b(\d{1,2})-(\d{1,2})-(\d{4})\b/;
    var match = dateTime.exec(string);
    if (!match) return null;
    return {
      day: match[1],
      month: match[2],
      year: match[3],
    };
  }
  var obj1 = findDate("30-1-2003");
  console.log(obj1);
  // => Object {day: "30", month: "1", year: "2003"}
  
  var obj2 = findDate("0030-1-200300");
  console.log(obj2);
  // => null
  
  var obj3 = findDate("Hello 30-1-2003 Haha");
  console.log(obj3);
  // => Object {day: "30", month: "1", year: "2003"}

//Tạo đối tượng RegExp JavaScript một cách linh động
var name = "lampv";
var text = "LamPV is a suspicious character.";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// => _LamPV_ is a suspicious character.