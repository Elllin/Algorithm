const readline = require("readline");
const { format } = require("path");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [month, day] = input.split(" ").map((v) => parseInt(v));

  let sum = 0;
  for (let i = 0; i < month - 1; i++) {
    sum += daysArr[i];
  }
  sum += day;
  const remainder = sum % 7;
  console.log(daysOfTheWeek[remainder]);

  process.exit();
});
