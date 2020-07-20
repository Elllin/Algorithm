const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  answer = input
    .split(" ")
    .map((v) => parseInt(v))
    .reduce((value, acc) => value + acc);

  console.log(answer);

  process.exit();
});
