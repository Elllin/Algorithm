const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  input.shift();
  const arr = [];
  let a;
  let b;

  input.forEach((v) => {
    a = 0;
    b = 0;
    getFibonacci(v);
    console.log(a + " " + b);
  });

  function getFibonacci(num) {
    if (num === 0) {
      a++;
      return 0;
    } else if (num === 1) {
      b++;
      return 1;
    }
    if (arr[num]) return arr[num];
    return (arr[num] = getFibonacci(num - 1) + getFibonacci(num - 2));
  }

  process.exit();
});
