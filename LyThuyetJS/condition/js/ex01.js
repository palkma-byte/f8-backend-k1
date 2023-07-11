//Cau lenh re nhanh

//1. if else
// if ( condition ) {
//     //body
// }

var email = "",
  password = "";
if (email === "" && password === "") {
  if (email === "") {
    console.log("Nhap email: ");
  } else console.log("Nhap mat khau");
}

let luongCoBan = 15,
  luongThuc;
if (luongCoBan <= 5) {
  luongThuc = luongCoBan * 0.95;
} else if (luongCoBan >= 5 && luongCoBan <= 10) {
  luongThuc = luongCoBanq * 0.93;
} else luongThuc = luongCoBan * 0.9;

//2. switch case
// Chi chap nhan bieu thuc logic (===)
// Ap dung khi co qua nhieu nhanh, nhieu dieu kien OR

let action = "create";

switch (action) {
  case "create":
  case "add":
  case "insert":
    console.log("Tạo");
    break;
  case "update":
  case "edit":
    console.log("Sửa");
    break;
  case "delete":
  case "destroy":
  case "remove":
    console.log("Xóa");
    break;
  default:
    console.log("Check");
    break;
}

if (action === "create" || action === "add" || action === "insert") {
  console.log("Tạo");
} else if (action === "edit" || action === "update") {
  console.log("Thêm");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else console.log("Check");

let month = 2;
let year = 2016;
if ((year % 1 == 0 && month % 1 == 0 && month < 13 && year, month > 0)) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("Thang co 31 ngay");

      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("Thang co 30 ngay");

      break;

    case 2:
      if (year % 4 == 0 && year % 100 != 0) {
        console.log("Thang co 29 ngay");
      } else console.log("Thang co 28 ngay");

    default:
      break;
  }
} else console.log("Gia tri khong hop le");

if (Number.isInteger(a)) {
  console.log("So nguyen");
} else {
  console.log("Khong phai so nguyen");
}

if (a === parseInt(a)) {
  console.log("So nguyen");
} else {
  console.log("Khong phai so nguyen");
}

//Tim hieu for, while, do while
