let customers = ["An", "Tung", "Tuan", "Duong"];

customers.forEach(function (customer, index) {
  console.log(customer, index);
});

let fullName = "Hoang An";
Array.from(fullName).forEach(function (char) {
  console.log(char);
});

let newArr = customers.map(function (customer, index) {
  return `<h1>${customer}</h1>`;
});

console.log(newArr);

let html = newArr.join(" ");
document.write(html)
