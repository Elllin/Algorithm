const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  const inputArr = input.split(" ");
  const reversedArr = inputArr.map((value) =>
    value.split("").reverse().join("")
  );

  const result = Math.max(...reversedArr);
  console.log(result);
  process.exit();
});
