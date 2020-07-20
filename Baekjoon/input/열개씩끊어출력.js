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
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    if (answer.length === 10) {
      print(answer);
      answer = "";
    }
    answer += input[i];
  }

  print(answer);

  function print(answer) {
    console.log(answer);
  }

  process.exit();
});
