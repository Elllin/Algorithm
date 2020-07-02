const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();

  const sorted = input.sort((a, b) => a - b);

  sorted.forEach((value) => console.log(value));
  process.exit();
});

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [];
// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   const length = input[0];
//   const arr = input.slice(1);

//   for (let i = 0; i < length - 1; i++) {
//     let j = i;
//     while (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       j--;
//     }
//   }

//   arr.forEach((value) => console.log(value));
//   process.exit();
// });

// const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((num) => parseInt(num));

// input.shift();
// const sorted = input.sort((a, b) => a - b);

// for (let num of sorted) {
//   console.log(num);
// }
