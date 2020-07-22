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
    let answer = "YES";
    const stack = [];
    const length = v.length;
    for (let i = 0; i < length; i++) {
      if (v[i] === "(") {
        stack.push(v[i]);
      } else {
        if (!stack.pop()) {
          answer = "NO";
          break;
        }
      }
    }
    if (stack.length) answer = "NO";

    console.log(answer);
  });

  process.exit();
});
