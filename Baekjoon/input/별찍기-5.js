const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  let n = 1;
  let answer = "";
  for (let i = 1; i <= input; i++) {
    answer = "";
    let m = input - i;
    repeatBlank(m, " ");
    repeatBlank(n, "*");
    // repeatBlank(m, " ");
    console.log(answer);
    n += 2;
  }

  function repeatBlank(n, x) {
    for (let i = 0; i < n; i++) {
      answer += x;
    }
  }

  process.exit();
});
