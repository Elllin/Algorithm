const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const answer = input
    .map((v) => parseInt(v))
    .reduce((value, acc) => value + acc);

  console.log(answer);

  process.exit();
});
