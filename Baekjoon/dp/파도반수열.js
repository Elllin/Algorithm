const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  input.shift();
  const dp = [1, 1, 1, 2, 2];
  function padoban(n) {
    if (dp[n]) return dp[n];
    return (dp[n] = padoban(n - 5) + padoban(n - 1));
  }

  input.forEach((v) => console.log(padoban(v - 1)));
  process.exit();
});
