// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(Array.isArray(a));
console.log(Array.isArray(b));
//TODO


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a.length; i++) {
  a[i] = a[i] *2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log("case 1:" + colors.join(" "));
console.log("case 2:" + colors.join("+"));
console.log("case 3:" + colors.join(","));


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

var compare = function (x, y) {//比较函数
  if (x < y) {
      return -1;
  } else if (x > y) {
      return 1;
  } else {
      return 0;
  }
}
console.log(a.sort(compare));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let obj = {};
for (let i = 0; i < a.length; i++) {
  const key = a[i];
  if (!obj[key]) {
    obj[key] = 1;
  }else{
    obj[key] ++;
  }
}
var maxCount = 0;
var maxElement = a[0];
for (const key in obj) {
  if (obj[key] > maxCount) {
    maxCount = obj[key];
    maxElement = key;
  }
}
console.log(maxCount);
console.log(maxElement);