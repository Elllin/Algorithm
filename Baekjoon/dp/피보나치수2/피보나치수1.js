const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  const arr = [];

  function getFibonacci(num) {
    if (num <= 1) return num;
    if (arr[num]) return arr[num];
    return (arr[num] = getFibonacci(num - 1) + getFibonacci(num - 2));
  }

  let result = getFibonacci(input);
  console.log(result);
  process.exit();
});
