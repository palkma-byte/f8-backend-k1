//Nullish

var count = 0;
var defaultCount = 10;
var totalCount = count ?? defaultCount;
console.log(totalCount); // In ra 0


let a = 10
let check = a == "" ? 1 : 2
console.log(check);

//Chuyen nullish thanh 3 ngoi 

let b = a !== undefined && a !== null ? a : "default"
console.log(b);

// Toán tử &&

let result = a == 1 && "Gia tri truthy"
//falsy : false, 0, "", undefined, null, NaN
//truthy : cac truong hop con lai

let c = "" ?? "gia tri truthy"
console.log(c);
