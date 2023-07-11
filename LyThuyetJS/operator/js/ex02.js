//Toan tu so sanh
// !=
// !==
// == : so sanh ve gia tri
// === : so sanh gia tri va kieu du lieu 

var b = '10'
const a = 10

console.log(a !== b);
console.log(10 === b)

//Toan tu dieu kien
// && => AND
// || => OR
// ! => NOT

let c = 15, d = 2, e = 1
let check = ((!( c < 20 || c > 35 ) && a <= b) && d < 5) && e > 20
console.log("dieu kien: " + check);

//Toan tu 3 ngôi : điều kiện ? giá trị đúng : giá trị sai

a > 5 ? console.log(1) : console.log(2);





