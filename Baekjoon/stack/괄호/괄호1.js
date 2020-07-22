const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let answer = 0;
  input.shift();
  input.forEach((v) => {
    const stack = [];
    stack.push(v[0]);
    for (let i = 1; i < v.length; i++) {
      if (!stack.length) stack.push(v[i]);
      else if (stack[stack.length - 1] + v[i] === "()") {
        stack.pop();
      } else stack.push(v[i]);
    }
    if (stack.length) console.log("NO");
    else console.log("YES");
  });

  process.exit();
});
