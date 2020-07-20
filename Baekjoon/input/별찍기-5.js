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
  let n = 1;
  let answer = "";
  for (let i = 1; i <= input; i++) {
    answer = "";
    let m = input - i;
    plusAnswer(m, " ");
    plusAnswer(n, "*");
    console.log(answer);
    n += 2;
  }

  function plusAnswer(n, x) {
    for (let i = 0; i < n; i++) {
      answer += x;
    }
  }

  process.exit();
});
