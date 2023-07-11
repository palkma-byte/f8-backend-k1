// console.log(Array.prototype);

// let customers = ["An", "Dat", "Tung", "Duong"];
// console.log(customers);
//at() => Lấy phần tử theo index
//fill() => Thay thế tất cả phần tử trong mảng thành 1 giá trị
//indexOf() => Tìm phần tử trong mảng và trả về index
//lastIndexOf() => Tìm phần tử cuối
//includes() => Tìm phần tử trong mảng và trả về true, false
//slice(start, end) => Cắt mảng
//toString() => chuyển mảng về chuỗi và nối với nhau bởi dấu ,
//join() => Chuyển mảng về chuỗi nối bởi kí tự bất kỳ truyền vào
//concat() => Nối mảng

// console.log(customers.join(", "));

// let newArr = [4, 5, 6];

// console.log(customers.concat(newArr));

//push() => Thêm phần tử vào cuối mảng
//- Trả về số lượng phần tử sau khi đã thêm
//- Thêm vào mảng ban đầu

//unshift() => Thêm phần tử vào đầu mảng
//- Trả về số lượng phần tử sau khi đã thêm
//- Thêm vào mảng ban đầu

//pop() => Xóa phần tử cuối mảng
//- Trả về giá trị phần tử vừa xóa
//- Thay đổi mảng ban đầu

//shift() => Xóa phần tử đầu mảng
//- Trả về giá trị vừa xóa
//- Thay đổi mảng ban đầu

//splice(index, number) => Xóa number phần tử từ phần tử index

// sort() => Sắp xếp tăng dần

// reverse() => Đảo ngược mảng
//console.log(customers.splice(1, 3));

let numbers = [1, 2, 34, 100];

numbers.sort(function (a, b) {
  if (b < a) {
    return 1;
  }
  return -1;
  //Âm đổi chỗ, dương dữ nguyên
});
console.log(numbers);

let customers = [
  "Ta Hoang An",
  "Nguyen Van Tuan",
  "Pham Anh Duong",
  "Ta Thi Lan",
];
customers.sort();

function getFirstName(fullName) {
  return fullName.split(" ").slice(-1)[0];
}

customers.sort(function (a, b) {
  //b => phần tử trước
  //a => phần tử sau
  //Để sắp xếp tăng dần => phần tử trước < phần tử sau

  if (getFirstName(a) < getFirstName(b)) {
    return -1;
  }
  return 1;
});

console.log(customers);
