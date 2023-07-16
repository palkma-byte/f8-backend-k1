console.log(Array.prototype);

//Vòng lặp every => Tất cả
//Trả về true nếu tất cả các lần lặp trả về true

let numbers = [1, 3, 5, 7];

let check = numbers.every(function (number) {
  //kiểm tra xem mảng numbers có phải tất cả đều là số lẻ không?

  // if(number % 2 !== 0){
  //     return true;
  // }

  // return false;

  return number % 2 !== 0;
});

console.log(check);

//Kiểm tra 1 mảng có số lẻ hay không
// Yeu cau dung every

let num = [3, 5, 7, 1];

// let checkEven = num.every(function (number) {
//   return number % 2 === 0;
// });

// console.log(checkEven ? `Mang khong co so le` : `Mang co so le`);

//Bai tren co the dung some

// let checkOdd = num.some(function (number) {
//   return number % 2 !== 0;
// });

// console.log(checkOdd);

//Kiem tra 1 mang so xem tat ca cac phan tu la so le khong? Dung some()

let checkEven = num.some(function (number) {
  return number % 2 === 0;
});

let ketqua = checkEven ? `Mang co so chan` : `Mang chi co so le`;

console.log(ketqua);

//Vong lap filter:

// let users = [
//   "Hoang An",
//   "Duong Nguyen ",
//   "Son Dang",
//   "Hoang Anh",
//   "Van Quan",
//   "Anh Quan",
// ];

// let keyword = "QuAn";

// let result = users.filter(function (user) {
//   return user.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(result);

let customers = [
  [`Nguyen Van A`, 30],
  [`Nguyen Van B`, 29],
  [`Nguyen Van C`, 25],
  [`Nguyen Van D`, 24],
];
customers.sort()
customers.reverse()

//Loc tat ca khach hang co tuoi tu 25 den 30

let minAge = 25,
  maxAge = 26;

let result = customers.filter(function (customerInfo) {
  return customerInfo[1] >= minAge && customerInfo[1] <= maxAge;
});

console.log(result);
