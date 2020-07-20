const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();
  input.forEach((v) => {
    const answer = v.split(" ").map((v) => parseInt(v));
    console.log(answer[0] + answer[1]);
  });

  process.exit();
});
