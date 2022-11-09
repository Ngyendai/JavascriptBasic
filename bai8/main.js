// 1. Hàm alert -> alert(message);

alert("Say hello from kungfutech.edu.vn");

// 2. Hàm confirm -> result = confirm(message);
const result = confirm("Bạn muốn tiếp tục sử dụng chương trình?");
alert(result);

// result = true nếu người dùng bấm OK.
// result = false nếu người dùng bấm Cancel.

// 3. Hàm Prompt -> result = prompt(title, [defaultValue]);
const name = prompt("Nhập vào tên của bạn:", "Anonymous");
alert(name);