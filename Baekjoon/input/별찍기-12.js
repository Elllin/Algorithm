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
  let answer = [];

  for (let i = 0; i < input; i++) {
    answer.push(" ");
  }

  for (let i = input - 1; i >= 0; i--) {
    answer[i] = "*";
    console.log(answer.join(""));
  }

  for (let i = 0; i < input - 1; i++) {
    answer[i] = " ";
    console.log(answer.join(""));
  }

  process.exit();
});
