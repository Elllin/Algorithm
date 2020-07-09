const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  let replacedStr = input;

  croatian.forEach((value) => {
    function findCroatian(str, croatian) {
      let index = str.indexOf(croatian);

      if (index > -1) {
        replacedStr = str.replace(croatian, "a");
        findCroatian(replacedStr, croatian);
      }
    }
    findCroatian(replacedStr, value);
  });

  result = replacedStr.length;

  console.log(result);
  process.exit();
});

//2번째 방법
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input;
// rl.on("line", function (line) {
//   input = line;
//   rl.close();
// }).on("close", function () {
//   var regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
//   const result = input.replace(regex, " ");

//   console.log(result);

//   process.exit();
// });
