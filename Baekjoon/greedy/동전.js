const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let result = 0;
  let [length, k] = input.shift().split(" ");

  let i = length - 1;
  k = parseInt(k);
  while (k || i >= 0) {
    let remainder;
    if (input[i] <= k) {
      result += Math.floor(k / input[i]);
      remainder = k % input[i];
      k = remainder;
    }
    i--;
  }

  console.log(result);

  process.exit();
});
