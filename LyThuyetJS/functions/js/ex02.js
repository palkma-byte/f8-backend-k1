//Rest Parameter

let getTotal = function (msg, isShow = true, ...args) {
  console.log(msg);
  console.log(args);
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  if (isShow) {
    return `${msg}${total}`;
  } else return total;
};

let result = getTotal("Ket qua = ", false, 1, 3, 4, 5, 6);
console.log(result);

//Tim max

let max = function (...abc) {
  if (abc.length) {
    let max = abc[0];
    for (let i = 1; i < abc.length; i++) {
      if (abc[i] > max) max = abc[i];
    }
  }

  return max;
};

console.log(max(-1, 4, -3, 5, -6));
