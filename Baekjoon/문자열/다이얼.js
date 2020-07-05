const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
let result = 0;

rl.on("line", function (line) {
  input = line.split("");
  rl.close();
}).on("close", function () {
  input.forEach((value) => {
    switch (value) {
      case "A":
      case "B":
      case "C":
        result += 3;
        break;
      case "A":
      case "B":
      case "C":
        result += 3;
        break;
      case "D":
      case "E":
      case "F":
        result += 4;
        break;
      case "G":
      case "H":
      case "I":
        result += 5;
        break;
      case "J":
      case "K":
      case "L":
        result += 6;
        break;
      case "M":
      case "N":
      case "O":
        result += 7;
        break;
      case "P":
      case "Q":
      case "R":
      case "S":
        result += 8;
        break;
      case "T":
      case "U":
      case "V":
        result += 9;
        break;
      case "W":
      case "X":
      case "Y":
      case "Z":
        result += 10;
        break;
    }
  });
  console.log(result);
  process.exit();
});
