const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line.split(" ").map((v) => parseInt(v)));
}).on("close", function () {
  const length = input.shift();
  let dp = [input[0][0]];

  for (let i = 1; i < length; i++) {
    let newDp = [];
    for (let j = 0; j < input[i].length; j++) {
      if (!j) {
        newDp.push(dp[0] + input[i][j]);
      } else if (i === j) {
        newDp.push(dp[j - 1] + input[i][j]);
      } else {
        newDp.push(Math.max(dp[j - 1] + input[i][j], dp[j] + input[i][j]));
      }
    }
    dp = newDp;
  }

  const answer = Math.max(...dp);
  console.log(answer);

  process.exit();
});
