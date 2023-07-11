//Callback function
let getA = function (func) {
  setTimeout(function () {
    console.log(`Function A`);
    func();
  }, 1000);
};

function getB() {
  console.log(`Function B`);
}
function getC(msg) {
  console.log(`Function C ${msg}`);
}

function handleGetC() {
  getC("F8");
}

getA(handleGetC); // getA chay => handleGetC chay => getC chay 

