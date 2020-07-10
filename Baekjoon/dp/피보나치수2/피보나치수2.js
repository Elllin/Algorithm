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
  function fib(n) {
    if (n <= 1) return n;
    let a = 1;
    let b = 1;
    let c;
    for (let i = 2; i < n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }

  let result = fib(input);
  console.log(result);
  process.exit();
});
