const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let result = 0;
  input.shift();
  const meetingTime = input.map((value) => value.split(" "));
  meetingTime.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let endTime = 0;

  meetingTime.forEach((time) => {
    if (parseInt(time[0]) >= endTime) {
      endTime = parseInt(time[1]);
      result++;
    }
  });

  console.log(result);

  process.exit();
});
