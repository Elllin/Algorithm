const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach((value) => {
    const splited = value.split(" ");
    const length = splited[0];
    const inputStr = splited[1];
    let result = "";

    if (!inputStr) return;
    for (let i = 0; i < inputStr.length; i++) {
      for (let j = 0; j < length; j++) {
        result += inputStr[i];
      }
    }
    return console.log(result);
  });
  process.exit();
});
