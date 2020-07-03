const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  let max = 0;
  let result;
  input = input.toUpperCase();

  let count = Array(26).fill(0);

  [...input].forEach((value) => {
    const charCode = value.charCodeAt();
    count[charCode - 65]++;
    if (count[charCode - 65] > max) {
      max = count[charCode - 65];
      result = value;
    } else if (count[charCode - 65] === max) {
      result = "?";
    }
  });

  console.log(result);

  process.exit();
});
