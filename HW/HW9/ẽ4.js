var getCurrency = function (currency) {
    var strValue = String(this);
    //tạo mảng chứa các kí tự chỉ là số
    var numericChars = "0123456789";
    //tạo mảng lọc
    var filteredValue = "";
  
    //lọc nếu như trong quá trình lọc có kí tự không phải số thì cho ra lỗi còn không thì trả về mảng lọc với chuỗi hợp lệ
    for (var i = 0; i < strValue.length; i++) {
      if (numericChars.indexOf(strValue[i]) !== -1) {
        filteredValue += strValue[i];
      } else {
        throw new TypeError("Invalid input value!");
      }
    }
  
    //định dạng lại filterValue
    var formattedValue = "";
    var count = 0;
  
    //cứ sau 3 kí tự thì thêm vào một dấu phẩy ngăn cách
    for (var j = filteredValue.length - 1; j >= 0; j--) {
      count++;
      formattedValue = filteredValue[j] + formattedValue;
      if (count === 3 && j !== 0) {
        formattedValue = "," + formattedValue;
        count = 0;
      }
    }
  
    //trả ra đầu ra với chuỗi có dấu phẩy và thêm đơn vị đằng sau
    return formattedValue + " " + currency;
  };