// function getA(func, ...args) {
//   setTimeout(() => {
//     console.log(`Func A`);
//     func(...args);
//   }, 1000);
// }

// function getB(msg, type, sdko, sdfko) {
//   console.log(`Func B ${msg} ${type} ${sdko} ${sdfko}`);
// }

// getA(getB, "F8", "success", "a", "b");

function showLog(msg, type) {
  console.log(`Noi dung ham setTimeOut ${msg} ${type}`);
}
setTimeout(showLog, 1000, "F8", "success");

let count = 0;
let myInterval = setInterval(() => {
  count++;
  console.log(`count = ${count}`);
  if (count === 5) {
    clearInterval(myInterval);
  }
}, 1000);
