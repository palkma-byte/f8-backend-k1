//Bai 1

let categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

let results = [];

let nestedCategories = function (categories, parentId = 0) {
  let nested = [];
  categories.forEach((category) => {
    if (category.parent === parentId) {
      let children = nestedCategories(categories, category.id);
      if (children.length > 0) {
        category.children = children;
      }
      nested.push(category);
    }
  });
  return nested;
};

results = nestedCategories(categories);
console.log(results);

//Bai 2

Array.prototype.reduce2 = function (callback, initialValue) {
  if (!this.length) {
    return "Wrong input";
  }

  let result = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    result = callback(result, this[i]);
  }
  return result;
};

let arr2 = [`Welcome`, `to`, `the`, `city`];
let result2 = arr2.reduce2(function (pre, cur) {
  return pre + " " + cur;
}, "You are");
console.log(result2);

//Bai 3

Array.prototype.filter2 = function (condition) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (condition(this[i]) === true) {
      result.push(this[i]);
    }
  }
  return result;
};

let arr3 = [12, 32, 21];
let result3 = arr3.filter2(function (element) {
  return element % 2 === 0;
});

console.log(result3);

//Bai 4
Object.prototype.getCurrency = function (params) {
  if (isNaN(this) || !params) {
    return "Wrong input";
  } else {
    let stringValue = this.toString();
    result = [];
    for (let i = stringValue.length - 1; i > 0; i--) {
      if (i % 3 === 0) {
        result.push(stringValue.slice(0, stringValue.length - i));
        stringValue = stringValue.slice(-i);
      }
    }
    result.push(stringValue);
    return result + params;
  }
};

console.log("123456789".getCurrency(" sad"));
