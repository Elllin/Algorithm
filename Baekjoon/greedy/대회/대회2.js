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
  input = input.map((v) => parseInt(v));
  let result;
  let female = input[0];
  const male = input[1];
  let internship = input[2];

  result = female / 2 < male ? Math.floor(female / 2) : male;

  internship -= female + male - result * 3;

  while (internship > 0) {
    internship -= 3;
    result--;
  }

  console.log(result);

  process.exit();
});
