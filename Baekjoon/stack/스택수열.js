const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let answer = "";
  input = input.map((v) => parseInt(v));
  const length = input.shift();
  const stack = [];
  let n = 1;
  for (let i = 0; i < length; i++) {
    if (input[i] >= n) {
      while (input[i] >= n) {
        stack.push(n);
        answer += "+";
        n++;
      }
      answer += "-";
      stack.pop();
    } else {
      if (!stack.includes(input[i])) {
        answer = "NO";
        break;
      }
      while (input[i] !== stack[stack.length - 1]) {
        stack.pop();
        answer += "-";
      }
      stack.pop();
      answer += "-";
    }
  }

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }

  process.exit();
});
