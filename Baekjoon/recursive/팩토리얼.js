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
  function factorial(n) {
    if (!n) return 1;
    return n * factorial(n - 1);
  }

  answer = factorial(input);
  console.log(answer);

  process.exit();
});
