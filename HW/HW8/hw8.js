//Bai 1

function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

let a = new Customer("Nguyễn Văn A", 11, "Ha Noi");
let b = new Customer("Nguyễn Văn B", 2, "Hai Phong");
let c = new Customer("Nguyễn Văn C", 12, "TP.HCM");

const customers = [a, b, c];

function createCustomers(customers) {
  customers.forEach((customer) => {
    let nameArr = customer.name.split(" ");
    customer.shortName = nameArr[0] + " " + nameArr[nameArr.length - 1];
  });
  return customers.sort((a, b) => a.age - b.age);
}

let result = createCustomers(customers);
console.log(result);

//Bai 2

let data = [];
function User(name, email, password) {
  this.name = name;
  this.password = password;
  this.email = email;
}

function handleRegister(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;

  let result = data.filter(function (user) {
    return user.email === email;
  });

  if (name === undefined || password === undefined || email === undefined) {
    return "Khong du du lieu, dang ky khong thanh cong";
  }
  else if(result.length !== 0){
    return "Tai khoan da ton tai";
  } 
  else {
    console.log("Dang ky thanh cong");
    let user = new User(name, email, password);
    user.role = "User";
    data.push(user);
    return data;
  }
}

console.log(handleRegister("asda", 123123));
console.log(handleRegister("Minh Khai", "Asjdpok@gmai.conm", 64678465));
console.log(handleRegister("Toan La", "asdqkwje@jester.conm", 5465646));
console.log(handleRegister("Minasdai", "Asjdpok@gmai.conm", 565656));

function handleLogin(email, password) {
  this.email = email;
  this.password = password;

  let result = data.filter(function (user) {
    return user.email === email && user.password === password;
  });

  if (result.length === 0) {
    return "Thong tin dang nhap khong hop le";
  } else return result;
}

console.log(handleLogin("asdqkwje@jester.conm", 5465646));
console.log(handleLogin("asdqkwje@jester.conm", 6565));
