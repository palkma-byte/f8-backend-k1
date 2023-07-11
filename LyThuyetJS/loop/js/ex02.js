let n = 10,
  i = 0,
  total = 0;

while (i < n) {
  total += i;
  i++;
}
console.log(total);

// key break
let start = 1,
  end = 10;
for (let i = start; i < end; i++) {
  if (i % 2 === 0) {
    console.log("So chan be nhat la " + i);
    break;
  }
}

//key continue
for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
    continue;
  }
}


