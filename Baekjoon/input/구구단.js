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
  for (let i = 1; i <= 9; i++) {
    let answer = `${input} * ${i} = ${input * i}`;
    console.log(answer);
  }

  function print(answer) {
    console.log(answer);
  }

  process.exit();
});
