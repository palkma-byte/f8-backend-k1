// // Định nghĩa hàm
// function getMessage(name, msg) {
//   // Nội dung hàm
//   console.log(`Hello ${name}`);
//   console.log(msg);
// }

// function setMessage() {
//   // Nội dung hàm
//   console.log("Welcome");
// }

// // Gọi hàm
// getMessage("Holy", "Far n Beyond");

// function division(a, b = 0) {
//   if (b !== 0) {
//     return a / b;
//   }

//   return "Khong co ket qua";
// }

// console.log(division(12, 0));

let msg = "F8 Hoc lap trinh";

console.log(`Tra ${getMessage()}`);

function getMessage(msg) {
  return msg;
}

const A = function () {
  console.log("A Func");
};

const B = function (fn) {
  fn();
};

B(A);

const makeTotal = function () {
  console.log(arguments);
};

makeTotal(1, 2, 3, 4, 5);

// Tinh tong cac so prime tu 1 -> n

function checkPrime(soNguyen) {
  let laSoNguyenTo = true;
  if (soNguyen < 2) {
    laSoNguyenTo = false;
  } else {
    for (let i = 2; i <= soNguyen / 2; i++) {
      if (soNguyen % i === 0) laSoNguyenTo = false;
    }
  }
  return laSoNguyenTo;
}

function sumPrime(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (checkPrime(i) === true) sum += i;
  }
  return sum;
}

console.log(`tong prime = ${sumPrime(10)}`);

//
