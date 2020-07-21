const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let answer;

  input.shift();
  input.forEach((str) => {
    answer = "";
    const stack = [];
    str.split("").forEach((v) => {
      if (v === " ") {
        popStack(stack);
        answer += " ";
      } else stack.push(v);
    });
    popStack(stack);
    console.log(answer);
  });

  function popStack(stack) {
    const length = stack.length;
    for (let i = 0; i < length; i++) {
      answer += stack.pop();
    }
  }

  process.exit();
});
