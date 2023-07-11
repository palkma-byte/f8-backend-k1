// Tính tiền taxi

let quangDuong = 121,
  tienCuoc;
if (quangDuong <= 1) {
  tienCuoc = 15000 * quangDuong;
} else if (quangDuong > 1 && quangDuong <= 5) {
  tienCuoc = 13500 * (quangDuong - 1) + 15000;
} else if (quangDuong > 5) {
  tienCuoc = 11000 * (quangDuong - 5) + 4 * 13500 + 15000;
  if (quangDuong > 120) {
    tienCuoc *= 0.9;
  }
}

console.log("Tien taxi: " + tienCuoc);

// Tính tiền điện

let soDien = 417,
  tienDien;
if (soDien <= 50) {
  tienDien = soDien * 1.678;
} else if (soDien >= 51 && soDien <= 100) {
  tienDien = (soDien - 50) * 1.734 + 1.678 * 50;
} else if (soDien >= 101 && soDien <= 200) {
  tienDien = (soDien - 100) * 2.014 + 1.734 * 50 + 1.678 * 50;
} else if (soDien >= 201 && soDien <= 300) {
  tienDien = (soDien - 200) * 2.536 + 2.014 * 100 + 1.734 * 50 + 1.678 * 50;
} else if (soDien >= 301 && soDien <= 400) {
  tienDien =
    (soDien - 300) * 2.834 +
    2.536 * 100 +
    2.014 * 100 +
    1.734 * 50 +
    1.678 * 50;
} else {
  tienDien =
    (soDien - 400) * 2.927 +
    2.834 * 100 +
    2.536 * 100 +
    2.014 * 100 +
    1.734 * 50 +
    1.678 * 50;
}
console.log("Tien dien: " + tienDien);

// Tính giai thừa

let N = 15;
for (let i = N - 1; i > 0; i--) {
  N *= i;
}
console.log("N! = " + N);

// Kiểm tra số nguyên tố

let soNguyen = 2,
  laSoNguyenTo = true;
for (let i = 2; i <= soNguyen / 2; i++) {
  if (soNguyen % i === 0) laSoNguyenTo = false;
}

laSoNguyenTo
  ? console.log("La so nguyen to")
  : console.log("Khong phai so nguyen to");
