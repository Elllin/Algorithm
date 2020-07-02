const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", function (line) {
  arr.push(line);
}).on("close", function () {
  const inputNum = arr[1].split("");
  const result = inputNum.reduce(
    (acc, value) => parseInt(acc) + parseInt(value)
  );
  console.log(result);

  process.exit();
});
