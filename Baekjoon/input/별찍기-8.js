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
  for (let i = 1; i <= input; i++) {
    answer = "";
    plusAnswer(i, "*");
    plusAnswer((input - i) * 2, " ");
    plusAnswer(i, "*");
    console.log(answer);
  }

  for (let i = input - 1; i >= 1; i--) {
    answer = "";
    plusAnswer(i, "*");
    plusAnswer((input - i) * 2, " ");
    plusAnswer(i, "*");
    console.log(answer);
  }

  function plusAnswer(n, x) {
    for (let i = 0; i < n; i++) {
      answer += x;
    }
  }

  process.exit();
});
