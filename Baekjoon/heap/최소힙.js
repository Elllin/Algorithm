const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  input.shift();
  const arr = [];
  input.forEach((v) => setArr(v));

  function setArr(num) {
    if (!num) return printMinNode();
    arr.push(num);
    heapSort();
  }

  function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function siftDown(i, lastNode) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let min = i;

    if (left >= lastNode && arr[left] < arr[min]) {
      min = left;
    }
    if (right >= lastNode && arr[right] < arr[min]) {
      min = right;
    }

    if (arr[min] !== arr[i]) {
      swap(i, min, arr);
      siftDown(min, arr);
    }
  }

  function heapify(size) {
    let index = Math.floor(size / 2);
    while (index) {
      siftDown(index, arr);
      index--;
    }
  }

  function heapSort() {
    const length = arr.length;
    const root = 0;
    let lastNode = length - 1;

    heapify(length);

    while (lastNode > root) {
      swap(root, lastNode, arr);
      lastNode--;
      siftDown(root, lastNode);
    }
  }

  function printMinNode() {
    const length = arr.length;
    const root = 0;
    let lastNode = length - 1;

    if (!length) return console.log(root);
    console.log(arr[root]);
    swap(root, lastNode, arr);
    arr.pop();
    siftDown(root, lastNode);
  }

  process.exit();
});
