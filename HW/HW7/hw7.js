//Bai 1
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];

let same = arrA.reduce((prev, cur) => {
  return arrB.includes(cur) && prev.push(cur), prev;
}, []);

console.log(same);

//Bai 2
let arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
console.log(arr[0][0]);