// 수의 범위가 정해진 경우 계수정렬이 유리하다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const length = input.shift();
  const MAX = 10000;

  const count = Array(MAX).fill(0);

  input.forEach((value) => count[value - 1]++);

  for (let i = 0; i < MAX; i++) {
    for (let j = 0; j < count[i]; j++) {
      console.log(i + 1);
    }
  }

  process.exit();
});
