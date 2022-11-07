// Khai báo strict mode toàn cục

  // Khai báo đầu file
//   "use strict";

  // Đoạn code này lỗi vì biến message chưa được khởi tạo
  message = "Học lập trình JavaScript cơ bản!";

  // In ra màn hình
  document.write(message);


  
  // Khai báo strict mode trong cục bộ
  function print_message() {
    // Khai báo đầu function
    "use strict";
  }
  print_message();
  message = "Phạm vi ngoài hàm print_message";
  document.write(message);


  // Lưu í 
  function print_message() {
    // Khai báo đầu function
    "use strict";
    // Đoạn code này lỗi vì biến message chưa được khởi tạo
    message = "Học lập trình JavaScript cơ bản!1111";

    // In ra màn hình
    document.write(message);
  }
  print_message();
  message = "Phạm vi ngoài hàm print_message";
  document.write(message);