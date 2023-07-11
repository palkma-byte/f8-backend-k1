/* Giải thuật đệ quy
    - Áp dụng với hàm 
    - Gọi lại hàm đang định nghĩa
    Chú ý thay đổi đối số => Không bị vòng lặp vô hạn
*/

function showNumber(n) {
  console.log(n);

  if (n > 1) {
    showNumber(n - 1);
  }
}
showNumber(10);

// let total = 0;
// function sum(n) {
//   if (n > 0) {
//     total += n;
//     sum(n - 1);
//   }

//   return total;
// }

function sum(n) {
  if (n === 1) return n;

  n += sum(n - 1);
  return n;
}
console.log(sum(100));

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(13));
