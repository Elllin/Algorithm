const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputNum;
rl.on("line", function (line) {
  inputNum = line;
  rl.close();
}).on("close", function () {
  console.log(inputNum.charCodeAt());
  process.exit();
});
