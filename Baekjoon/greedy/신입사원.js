const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const length = input.shift();

  for (let i = 0; i < length; i++) {
    const score = [];
    const scoreLength = input.shift();
    for (let j = 0; j < scoreLength; j++) {
      score.push(
        input
          .shift()
          .split(" ")
          .map((v) => parseInt(v))
      );
    }
    getResult(score);
  }

  function getResult(score) {
    const sortedArr = score.sort((a, b) => a[0] - b[0]);
    let result = 1;
    let bound = sortedArr[0][1];

    for (let i = 1; i < sortedArr.length; i++) {
      if (sortedArr[i][1] < bound) {
        result++;
        bound = sortedArr[i][1];
      }
    }

    console.log(result);
  }
  process.exit();
});
