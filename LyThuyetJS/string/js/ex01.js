// Khai báo kiểu chuỗi
// -Kiểu dữ liệu nguyên thủy
// Kiểm tra kiểu dữ liệu của 1 biến : dùng typeof
// Hàm tạo = Function Constructor
// Truy cập vào phương thức thuộc tính
//obj.thuoctinh
//obj.phuongthuc

let fullName = "Pham Nguyen Hoang"; // Gán = 1 chuỗi
let fullName2 = String("PNH"); // Gán thông qua hàm tạo => ít dùng
let fullName3 = new String("PPPNNNHHH");

// console.log(fullName);
console.log(fullName, typeof fullName);
console.log(fullName2, typeof fullName2);
console.log(fullName3, typeof fullName3);
// if (typeof fullName === "string"){
//     console.log("Đây la kiểu chuỗi");
// }

console.log(String.prototype);
console.log(fullName.length);

//length => trả về độ dài
//charAt() => Lấy kí tự trong chuỗi theo index (index bắt đầu từ 0)
//charCodeAt(index) => trả về mã ascii của kí tự
//slice(start, end) => Cắt chuỗi từ index = start đến index = end (Với end tính từ 1, start tính từ 0)


/*
Chú ý: Nếu start âm => Cắt từ chuỗi theo độ dài = start
Nếu end không được truyền đối số => Cắt từ start đến hết chuỗi

indexOf(subStr) => Tìm chuỗi subStr đầu tiên trong chuỗi cha, nếu tìm thấy trả về index, nếu không thấy trả về -1

lastIndexOf(subStr) => Tìm chuỗi cuối cùng

includes(subStr) => Tìm chuỗi trong chuỗi cha, trả về true false 

replace(search, with) => Thay thế chuỗi search thành with => Chỉ thay thế vị trí đầu tìm được

replaceAll(search, with) => Thay thế tất cả 

=> Lưu ý: Hàm search() có thể tìm theo Regex (Regular Expression)

toLowerCase()
toUpperCase()

trim() => Xóa khoảng trắng đầu và cuỗi chuỗi
trimStart() => Xóa khoảng trắng ở đầu chuỗi
trimEnd() => Xóa khoảng trắng ở đầu chuỗi

concat() => Nối chuỗi

split("char") => Chuyển chuỗi thành mảng

match() => Cắt chuỗi dựa vào biểu thức chính quy

toString() => chuyển cấc kiểu dữ liệu khác về String
*/

let str = "F8 Hoc lap trinh tai F8";
console.log(str);
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str.slice(0, -2));

console.log(str.concat(" Pham", " Nguyen"));

// let url = `https://backend-nodejs.fullstack.edu.vn/`

// console.log(url);
// console.log(url.replace(/$\/,"")); //Regrex Expression

let content = "Loasknd aksjdasj dkajs dak js dasdk as d 0123012030 asjdadakkskd 0213012301"
let patern = /0\d{9}/g;
let phone = content.match(patern);
console.log(phone);

let email ="hoangan14635.web@gmail.com"

console.log(email.split(".")[0]);