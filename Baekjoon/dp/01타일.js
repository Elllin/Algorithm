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
  const dp = [];

  function fib(n) {
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
    }
    return dp[n];
  }

  console.log(fib(input));
  process.exit();
});
