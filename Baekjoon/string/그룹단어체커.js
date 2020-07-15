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
  input.forEach((str) => {
    let gruopWord = true;
    let strArr = [str[0]];
    for (let i = 1; i < str.length; i++) {
      if (strArr[strArr.length - 1] === str[i]) continue;
      else {
        if (strArr.includes(str[i])) {
          gruopWord = false;
          break;
        } else {
          strArr.push(str[i]);
        }
      }
    }

    if (gruopWord) answer++;
  });

  console.log(answer);

  process.exit();
});
