//Bai 1

let ex1 = [111, 4, 7, 9, 23, 34];
let max = ex1[0],
  min = ex1[0];
let maxKey = 0,
  minKey = 0;

for (ex1Key in ex1) {
  if (ex1[ex1Key] > max) {
    max = ex1[ex1Key];
    maxKey = ex1Key;
  }
  if (ex1[ex1Key] < min) {
    min = ex1[ex1Key];
    minKey = ex1Key;
  }
}

console.log(
  `So Min: ${min} o vi tri ${minKey}, Max: ${max} o vi tri ${maxKey}`
);

//Bai 2

let ex2 = [0, 1, 12, 17, 20, 31, 1231];
let primeNums = [];
let sumPrime = 0;

function isPrime(n) {
  if (Number.isInteger(n) === false) return false;
  if (n === 0 || n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (ex2Element of ex2) {
  if (isPrime(ex2Element)) primeNums.push(ex2Element);
}

for (primeNum of primeNums) {
  sumPrime += primeNum;
}

if (primeNums.length > 0) {
  console.log(
    `Trung binh cong cac so nguyen to: ${sumPrime / primeNums.length}`
  );
} else {
  console.log(`Khong co so nguyen to`);
}

//Bai 3

let ex3 = [1, 1, 1, 2, 2, 3, 12, 31, 31, 31, 0, 0];
let nonDuplicateNums = [];

for (ex3Element of ex3) {
  nonDuplicateNums.push(ex3Element);
  for (nonDupKey in nonDuplicateNums) {
    if (nonDuplicateNums[nonDupKey - 1] === ex3Element) nonDuplicateNums.pop();
  }
}

console.log(`Mảng sau khi lọc trùng: ${nonDuplicateNums}`);

//Bai 4

let numbers = [1, 3, 93, 8, 100];
let element = 14;

let arr1 = [];
let arr2 = [];

//sap xep mang theo thu tu tang dan
numbers.sort((a, b) => a - b);
let sortedNumber = [];

//them 1 so vao mang
for (let numKey in numbers) {
  if (numbers[numKey] > element) {
    arr1 = numbers.slice(0, numKey);
    arr1.push(element);
    arr2 = numbers.slice(numKey);

    break;
  } else if (
    numbers.every((num) => {
      return num < element;
    })
  ) {
    arr1 = numbers;
    arr2 = element;
  }
}
sortedNumber = sortedNumber.concat(arr1, arr2);
console.log(`Mảng đã sắp xếp: ` + sortedNumber);
