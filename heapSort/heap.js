function heapSort(arr) {
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function siftDown(arr, index, lastNode) {
    const left = 2 * index + 1; //왼쪽 자식 노드
    const right = 2 * index + 2; //오른쪽 자식 노드
    let largest = index;

    if (left <= lastNode && arr[largest] < arr[left]) {
      largest = left;
    }

    if (right <= lastNode && arr[largest] < arr[right]) {
      largest = right;
    }

    if (largest !== index) {
      swap(arr, index, largest);
      siftDown(arr, largest, size);
    }
  }

  function heapify(arr, size) {
    let currentIndex = Math.floor(size / 2);
    const root = 0;

    while (currentIndex >= root) {
      siftDown(arr, currentIndex, size);
      currentIndex--;
    }
  }

  const size = arr.length;
  heapify(arr, size);
  let endNode = size - 1;
  const root = 0;

  while (endNode > root) {
    swap(arr, root, endNode);
    endNode--;
    siftDown(arr, root, endNode);
  }
}

const arr = [1, 3, 2, 4, 9, 7];
heapSort(arr);
console.log(arr);
