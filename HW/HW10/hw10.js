//Bai 1
function sum(...args) {
  let total = 0;
  for (let arg of args) {
    if (typeof arg !== "number") {
      return "Wrong Input";
    }
    total += arg;
  }
  return total;
}

//Bai 2

function openFile(fn) {
  setTimeout(() => {
    console.log("File đã được mở");
    fn();
  }, 2000);
}

function readFile(fn) {
  setTimeout(() => {
    console.log("F8-Học lập trình để đi làm");
    fn();
  }, 1000);
}

function closeFile() {
  setTimeout(() => {
    console.log("File đã đóng");
  }, 1000);
}

// openFile(() => {
//   readFile(() => {
//     closeFile();
//   });
// });

//Promise

function open() {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("File đã được mở");
    }, 2000);
  });

  return myPromise;
}

function read() {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("F8-Học lập trình để đi làm");
    }, 1000);
  });

  return myPromise;
}

function close() {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("File đã được đóng");
    }, 1000);
  });

  return myPromise;
}

open().then(function (response) {
  console.log(response);
  read().then(function (response) {
    console.log(response);
    close().then(function (response) {
      console.log(response);
    });
  });
});
