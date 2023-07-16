// Vòng lặp Reduce

// let numbers = [1, 3, 5, 7, 9];

// let result = numbers.reduce((preValue, currentValue) => {
//   console.log(preValue, currentValue);
//   return preValue + currentValue;
// }, 0);
// console.log(result);

/**
 * element 5
 * prevalue = result = 4
 * current value = 5
 * result = prevalue + current value = 9
 */

//Tim max min su dung reduce

let numbers = [2, 5, 40, 1, 8];

let min = numbers.reduce((pre, cur) => {
  return pre > cur ? cur : pre;
});

console.log(min);

let max = numbers.reduce((pre, cur) => {
  return pre < cur ? cur : pre;
});

console.log(max);

//Tìm phần tử khác nhau giữa mảng 1 và mảng 2

let arr1 = [1, 2, 5, 9];

let arr2 = [2, 5, 3];

// for (arr1Key in arr1) {
//   for (arr2E of arr2) {
//     if (arr1[arr1Key] === arr2E) {
//       arr1.;
//     }
//   }
// }

let diff = arr1.reduce((pre, cur) => {
  return !arr2.includes(cur) && pre.push(cur), pre;
}, []);

console.log(diff);

console.log(Array.prototype);
