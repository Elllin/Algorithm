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
  const female = Math.floor(input[0] / 2);
  const male = input[1];
  const internship = input[2];

  let remnantFemale = input[0] % 2;
  let remnantmale = 0;

  if (female > male) {
    remnantFemale += (female - male) * 2;
    result = male;
  } else {
    remnantmale = male - female;
    result = female;
  }

  const remnantStudent = remnantFemale + remnantmale;
  if (internship > remnantStudent) {
    result -= Math.ceil((internship - remnantStudent) / 3);
  }

  console.log(result);

  process.exit();
});
