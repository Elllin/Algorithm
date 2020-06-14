//퀵정렬 2번째 방법
//피벗을 중간 수로 지정

const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
const sortedArr = quickSort(arr, 0, arr.length - 1);

function quickSort(arr, start, end) {
  const length = arr.length;
  if (length <= 1) return;

  const index = partition(arr, start, end);

  if (start < index - 1) quickSort(arr, start, index - 1);
  if (index < end) quickSort(arr, index, end);

  return arr;
}

function partition(arr, start, end) {
  const key = Math.floor((start + end) / 2);

  let i = start;
  let j = end;

  while (i <= j) {
    while (arr[i] < arr[key]) {
      i++;
    }

    while (arr[j] > arr[key]) {
      j--;
    }

    if (i <= j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }

  return i;
}

console.log(sortedArr);
