//방법1

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [];
// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   input.shift();

//   const sorted = input.sort((a, b) => a - b);

//   sorted.forEach((value) => console.log(value));
//   process.exit();
// });

//방법2
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

  for (let i = 0; i < input.length - 1; i++) {
    let j = i;
    while (input[j] > input[j + 1]) {
      let temp = input[j];
      input[j] = input[j + 1];
      input[j + 1] = temp;
      j--;
    }
  }

  input.forEach((value) => console.log(value));
  process.exit();
});
