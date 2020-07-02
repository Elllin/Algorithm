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
  let arr = [];
  //소문자 a ~ z까지 배열 생성
  const a = 97;
  const z = 122;
  for (let i = a; i <= z; i++) {
    arr.push(String.fromCharCode(i));
  }

  const result = arr.reduce(
    (acc, alphabet) => (acc += input.indexOf(alphabet) + " "),
    ""
  );
  console.log(result);
  process.exit();
});
