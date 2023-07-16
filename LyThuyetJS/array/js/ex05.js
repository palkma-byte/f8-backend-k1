let numbers = [1, 3, 5, 7, 9];

//Tìm phần tử có giá trị bằng 3

// let result = numbers.filter((number) => {
//   return number > 3;
// });

//4 vong lap
//find()
//findLast()
//findIndex()
//findLastIndex()

console.log(Array.prototype);
// let result = numbers.findIndex((number) => {
//   return number > 2;
// });
// console.log(result);
// let result1 = numbers.findLast((number) => {
//   return number < 2;
// });
// let result2 = numbers.findIndex((number) => {
//   return number === 7;
// });
// let result3 = numbers.findLastIndex((number) => {
//   return number > 3;
// });

let content = `Laborum Lorem laborum consequat eu veniam ex. Commodo ea excepteur magna excepteur sunt. Ipsum laborum voluptate fugiat et non. Tempor aliquip do qui do officia proident amet adipisicing et veniam labore deserunt dolore. Pariatur fugiat eiusmod aute veniam quis ullamco ea anim commodo dolore. Sint cillum enim deserunt amet non et deserunt in do aliquip et nisi pariatur reprehenderit.`;
let length = 20;

let arr = content.split(" "),
  result = arr.slice(-length);

console.log("... " + result.join(" "));


