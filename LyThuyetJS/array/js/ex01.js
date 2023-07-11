// Object, Function => Reference type

// Array được phát triển từ object

// Xây dựng hàm tạo array

console.log(Array.prototype);
console.log([Array]);

/**
 * Mảng là kiểu dữ liệu phức hợp
 * Chứa nhiều giá trị
 * Mỗi giá trị là một Element
 * Địa chỉ của giá trị đó là Index
 */

// Khai báo mảng
let users = [];
let customers = new Array(); // Khởi tạo giống 1 object

let customer = ["Quan", "Duong", "An", 1, 2, 3]; //Khai báo mảng có giá trị ban đầu

console.log(customer);
console.log(users);

// Lấy số lượng phần tử mảng
let customerCount = customer.length;
console.log(`So luong phan tu: ${customerCount}`);

// Kiểm tra 1 biến có phải mảng hay không?
let services = [];
console.log(Array.isArray(services));

// services !== null && services.constructor.name == "Array"

// Thêm phần tử vào mảng
customer[6] = "Indas";
customer[customer.length] = "Midal";
console.log(customer);

// Sửa phần tử
customer[0] = "Ma Giam Thi";
//console.log(customer);

delete customer[3];
//console.log(customer);

// Duyệt mảng
// 1. Dùng for
// for (let i = 0; i < customer.length; i++) {
//   console.log(customer[i]);
// }

// //2. Dùng for of

// for (element of customer) {
//   console.log(element);
// }

// //3. Dùng for in

// for (const index in customer) {
//   console.log(index, customer[index]);
// }

// Xóa mảng

console.log(customer);
let index = 5;

let newArr = [];
for (i in customer) {
  if (parseInt(i) === parseInt(index)) continue;

  newArr[newArr.length] = customer[i];
}

customer = newArr;
console.log(customer);

//Chuỗi
let content = `Adipisicing est duis est aliqua ut. Consequat aliquip mollit culpa magna voluptate aute amet sit duis incididunt magna eu ullamco duis. Minim ut esse ullamco dolore adipisicing tempor reprehenderit sint sint ea id. Voluptate elit ullamco nisi anim labore adipisicing quis ullamco culpa amet. In et cupidatat anim deserunt.`;
// Hiển thị số lần xuất hiện của từng kí tự
let result = [];
for (let i = 0; i < content.length; i++) {
  let char = content.charAt(i);
  if (char === " ") continue;
  console.log(char);

  if (result[char] === undefined) {
    result[char] = 1;
  } else {
    result[char]++;
  }
}

for (char in result) {
    console.log(`Ky tu ${char} xuat hien ${result[char]} lan`);
}
