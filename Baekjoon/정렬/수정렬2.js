const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();

  const resultArr = mergeSort(input);

  function mergeSort(arr) {
    const length = arr.length;
    if (length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);

    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }

  function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
      if (left[0] > right[0]) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
    }

    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }

  resultArr.forEach((value) => console.log(value));
  process.exit();
});
