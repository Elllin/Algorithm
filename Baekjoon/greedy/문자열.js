const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  const a = input[0];
  const b = input[1];
  let result = a.length;

  for (let i = 0; i <= b.length - a.length; i++) {
    let difference = 0;
    for (let j = 0; j < a.length; j++) {
      if (a.charCodeAt(j) !== b.charCodeAt(i + j)) {
        difference++;
      }
    }
    if (result > difference) {
      result = difference;
    }
  }

  console.log(result);

  process.exit();
});
