//Bai 1
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];

let same = arrA.reduce((prev, cur) => {
  return arrB.includes(cur) && prev.push(cur), prev;
}, []);

console.log(same);

//Bai 2

let arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
//let arr = 12;
let result = [];
function arrReduct(n) {
  if (Array.isArray(n)) {
    n.forEach((element) => {
      if (Array.isArray(element)) {
        arrReduct(element);
      } else result.push(element);
    });
    return result;
  } else return "Wrong Input";
}

console.log(arrReduct(arr));

//Bai 3

let arr1 = [["a", 1, true], ["b", 2, false], 31, ["c", false], [123, false]];
result = [];

let stringType = [],
  numType = [],
  booleanType = [];

function dataClassify(n) {
  if (Array.isArray(n)) {
    let arr2 = arrReduct(n);
    arr2.forEach((element) => {
      if (typeof element === "string") {
        stringType.push(element);
      } else if (Number.isInteger(element)) {
        numType.push(element);
      } else if (typeof element === "boolean") {
        booleanType.push(element);
      }
    });
    return [stringType, numType, booleanType];
  } else return "Wrong Input";
}

console.log(dataClassify(arr1));
