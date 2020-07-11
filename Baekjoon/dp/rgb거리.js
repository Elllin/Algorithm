const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line.split(" ").map((v) => parseInt(v)));
}).on("close", function () {
  input.shift();
  let costArr = [...input[0]];
  input.forEach((arr, i) => {
    if (!i) return;

    let temp = [];
    arr.forEach((cost, j) => {
      temp[j] = Math.min(
        ...costArr.filter((_, i) => i !== j).map((v) => cost + v)
      );
    });
    costArr = temp;
  });

  const answer = Math.min(...costArr);
  console.log(answer);
  process.exit();
});
