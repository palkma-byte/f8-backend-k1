//Bai 1
let n1 = 3;
if (n1 < 2) {
  console.log("Gia tri nhap sai");
} else {
  let evenList = "So chan: ",
    oddList = "So le: ";
  for (let i = 1; i < n1; i++) {
    if (i % 2 === 0) evenList += i + ", ";
    else oddList += i + ", ";
  }

  console.log(evenList.slice(0, -2));
  console.log(oddList.slice(0, -2));
}

//Bai 2
let n2 = 5,
  total = 0;
for (let i = 0; i <= n2; i++) {
  total += i * (i + 1);
}

console.log("S = " + total);

//Bai 3

let a = 5,
  b = 9;
let oddSum = 0;
evenSum = 0;
for (let i = a; i <= b; i++) {
  if (i % 2 === 0) evenSum += i;
  else oddSum += i;
}
console.log(`Tong so le: ${oddSum}`);
console.log(`Tong so chan: ${evenSum}`);

//Bai 4

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

//Bai 5

let total5 = 0;
function sum(n) {
  if (n < 1) {
    return;
  }
  total5 += 1 / n;
  sum(n - 1);
  return total5;
}
console.log("Kq bai 5: " + sum(4));
