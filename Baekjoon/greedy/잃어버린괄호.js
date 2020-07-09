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
  let result = 0;
  input = input.split("");
  let inputArr = [];
  let number = "";

  input.forEach((value, index) => {
    if (value === "-" || value === "+") {
      inputArr.push(parseInt(number));
      number = "";
      inputArr.push(value);
    } else if (index === input.length - 1) {
      number += value;
      inputArr.push(parseInt(number));
    } else {
      number += value;
    }
  });

  let index = inputArr.indexOf("-");

  if (index === -1) {
    index = inputArr.length;
    plusNumber();
  } else {
    plusNumber();
    minusNumber();
  }

  function plusNumber() {
    for (let i = 0; i <= index; i += 2) {
      result += inputArr[i];
    }
  }

  function minusNumber() {
    for (let i = index + 1; i < inputArr.length; i += 2) {
      result -= inputArr[i];
    }
  }

  console.log(result);

  process.exit();
});
