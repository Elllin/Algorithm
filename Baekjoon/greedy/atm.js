const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let result = 0;

  const length = input.shift();
  const time = input[0]
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);

  time.reduce((acc, value) => {
    const sum = acc + value;
    result += sum;
    return sum;
  }, 0);

  console.log(result);

  process.exit();
});
