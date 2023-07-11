// for (let index = 0; index < 15; index++) {
//     console.log("Lap den so " + index);

// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 3; j > 0; j--) {
//         for (let k = 50; k > 15; k -= 5) {
//             console.log(`i - ${i} - j - ${j} - k - ${k} `);

//         }
//     }

// }

let n = 19,
  S = 0;
for (let index = 1; index <= n; index += 2) {
  S += index;
}
console.log("Kq bai 2: " + S);

let x = 5,
  total = 0,
  factorial = 1;

for (let index = 1; index <= x; index++) {
  factorial *= index;
  total += factorial;
}

console.log("Ket qua bai 3: " + total);

//Kiem tra N co phai so nguyen to
// check true false => kĩ thuật cắm cờ 

isPrime = true;
N = 10 ;
if (N < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= N / 2; i++) if (N % i === 0) isPrime = false;
}
console.log("N is prime number: " + isPrime);


