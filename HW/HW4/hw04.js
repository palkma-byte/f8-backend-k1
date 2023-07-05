//Bai 1

let fibonacciNum = "Day so fibonacci: ";
function fibonacci(n) {
  if (n === 1 || n === 2) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
function returnFibo(n) {
  if (n > 0) {
    fibonacciNum += fibonacci(n) + "  ";
    returnFibo(n - 1);
  }
  return fibonacciNum;
}

console.log(returnFibo(15));

//Bai 2

let k = 1;

function calIndex(n) {
  if (n >= 10) {
    k++;
    calIndex((n /= 10));
  }
  return k;
}

console.log(reverseNum(10205));

function reverseNum(n) {
  if (n < 0) {
    return "So da nhap khong thoa man";
  }
  let a = 0;
  const alt = calIndex(n);
  for (let i = 0; i < alt; i++) {
    a = (n % 10) + a * 10;
    n = (n - (n % 10)) / 10;
  }
  return a;
}

//Bai 3

function numToLet(n) {
  let a = n % 10,
    a10 = ((n % 100) - a) / 10,
    a100 = ((n % 1000) - a10 * 10 - a) / 100,
    a1000 = (n - a100 * 100 - a10 * 10 - a) / 1000;

  let thousand, hundred, dozen, num;
  if (n > 9999 || n < 0) return "So da nhap khong thoa man";
  switch (a) {
    case 1:
      num = "một";
      break;
    case 2:
      num = "hai";
      break;
    case 3:
      num = "ba";
      break;
    case 4:
      num = "bốn";
      break;
    case 5:
      num = "lăm";
      break;
    case 6:
      num = "sáu";
      break;
    case 7:
      num = "bảy";
      break;
    case 8:
      num = "tám";
      break;
    case 9:
      num = "chín";
      break;
    case 0:
      num = "";
      break;
  }

  switch (a10) {
    case 1:
      dozen = "mười";
      break;
    case 2:
      dozen = "hai mươi";
      break;
    case 3:
      dozen = "ba mươi";
      break;
    case 4:
      dozen = "bốn mươi";
      break;
    case 5:
      dozen = "năm mươi";
      break;
    case 6:
      dozen = "sáu mươi";
      break;
    case 7:
      dozen = "bảy mươi";
      break;
    case 8:
      dozen = "tám mươi";
      break;
    case 9:
      dozen = "chín mươi";
      break;
    case 0:
      dozen = "linh";
      break;
  }

  switch (a100) {
    case 1:
      hundred = "một trăm";
      break;
    case 2:
      hundred = "hai trăm";
      break;
    case 3:
      hundred = "ba trăm";
      break;
    case 4:
      hundred = "bốn trăm";
      break;
    case 5:
      hundred = "năm trăm";
      break;
    case 6:
      hundred = "sáu trăm";
      break;
    case 7:
      hundred = "bảy trăm";
      break;
    case 8:
      hundred = "tám trăm";
      break;
    case 9:
      hundred = "chín trăm";
      break;
    case 0:
      hundred = "không trăm";
      break;
  }

  switch (a1000) {
    case 1:
      thousand = "một nghìn";
      break;
    case 2:
      thousand = "hai nghìn";
      break;
    case 3:
      thousand = "ba nghìn";
      break;
    case 4:
      thousand = "bốn nghìn";
      break;
    case 5:
      thousand = "năm nghìn";
      break;
    case 6:
      thousand = "sáu nghìn";
      break;
    case 7:
      thousand = "bảy nghìn";
      break;
    case 8:
      thousand = "tám nghìn";
      break;
    case 9:
      thousand = "chín nghìn";
      break;
    case 0:
      thousand = "";
      break;
  }
  if (a10 !== 0 && a === 1) num = "mốt";
  if (a10 === 0 && a === 5) num = "năm";
  if (n % 100 === 0) return `${thousand} ${hundred}`;
  if (n < 100 && n > 10) return `${dozen} ${num}`;
  if (n < 10) return `${num}`;

  return `${thousand} ${hundred} ${dozen} ${num}`;
}

console.log(numToLet(3105));
