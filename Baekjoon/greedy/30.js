const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line.split("");
  rl.close();
}).on("close", function () {
  input = input.map((v) => parseInt(v));
  if (input.indexOf(0) === -1) {
    result = -1;
  } else {
    const sum = input.reduce((acc, value) => acc + value);
    if (sum % 3) {
      result = -1;
    } else {
      input.sort((a, b) => b - a);
      result = input.join("");
    }
  }

  console.log(result);

  process.exit();
});
