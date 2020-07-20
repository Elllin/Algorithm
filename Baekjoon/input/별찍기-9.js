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
  let answer;
  for (let i = input; i >= 1; i--) {
    answer = "";
    plusAnswer(input - i, " ");
    plusAnswer(i * 2 - 1, "*");
    console.log(answer);
  }

  for (let i = 2; i <= input; i++) {
    answer = "";
    plusAnswer(input - i, " ");
    plusAnswer(i * 2 - 1, "*");

    console.log(answer);
  }

  function plusAnswer(n, x) {
    for (let i = 0; i < n; i++) {
      answer += x;
    }
  }

  process.exit();
});
