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
  for (let i = 1; i <= input; i++) {
    let answer = "";
    for (let j = 0; j < input - i; j++) {
      answer += " ";
    }

    for (let k = 0; k < i * 2 - 1; k++) {
      if (i === input) answer += "*";
      else if (k === 0 || k === i * 2 - 2) answer += "*";
      else answer += " ";
    }
    console.log(answer);
  }

  process.exit();
});
