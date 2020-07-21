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
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= input; i++) {
    let a = input,
      b = input,
      c = input;
    if (i % 3 === 0) a = dp[Math.floor(i / 3)];

    if (i % 2 === 0) b = dp[Math.floor(i / 2)];

    c = dp[i - 1];

    dp[i] = Math.min(a, b, c) + 1;
  }
  console.log(dp[input]);

  process.exit();
});
