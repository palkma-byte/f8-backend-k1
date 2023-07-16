let email = `haongan.web@gmail.com`;

//Cat ra username cua email
console.log(email.slice(0, email.indexOf("@")));

let password = `HaangAn@F8`;

//Kiem tra do manh yeu cua mat khau

/*
- Độ dài >= 8 kí tự
- Có ít nhất 1 chữ hoa
- Có ít nhất 1 chữ thường 
- Có ít nhất 1 số
- Có ít nhất 1 ký tự đặc biệt: !@#$%^*
*/

let difficultPass = 0;

let checkLength = false,
  checkUpper = false,
  checkLower = false,
  checkNumber = false,
  checkSymbol = false;

  

for (let i = 0; i < password.length; i++) {
  let char = password.charAt(i);
  let number = "1234567890",
    symbol = "!@#$%^*";

  if (password.length >= 8) {
    checkLength = true;
  }
  if (number.includes(char)) {
    checkNumber = true;
  }
  if (symbol.includes(char)) {
    checkSymbol = true;
  }
  if (char >= "A" && char <= "Z") {
    checkUpper = true;
  }
  if (char >= "a" && char <= "z") {
    checkLower = true;
  }

  //if (symbol.indexOf(char) === -1) 
}

console.log(checkLength, checkNumber, checkSymbol, checkUpper);
if (checkLength && checkNumber && checkSymbol && checkUpper) {
  console.log("Mat khau manh");
} else console.log("Mat khau yeu");
