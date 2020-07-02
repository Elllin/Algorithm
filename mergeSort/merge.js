const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

function mergeSort(arr) {
  const length = arr.length;
  if (length <= 1) return arr; //배열의 원소가 한개로 분할됐으면 종료한다

  const mid = Math.floor(length / 2);

  const left = arr.slice(0, mid); //0 ~ mid - 1까지 분할
  const right = arr.slice(mid, length); // mid ~ 마지막 원소까지 분할
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    //left, right 하나라도 0개면 종료
    if (left[0] < right[0]) {
      // 오른쪽 배열 원소가 더크다면
      result.push(left.shift()); // 왼쪽 배열 원소를 넣는다
    } else {
      result.push(right.shift()); // 왼쪽 배열 원소가 더 크다면 오른쪽 배열 원소를 넣는다
    }
  }

  while (left.length) {
    //만약 왼쪽 배열 원소가 남았다면
    result.push(left.shift()); // 왼쪽 배열 남은 원소들을 모두 넣는다
  }

  while (right.length) {
    // 오른쪽 배열 원소가 남았을경우
    result.push(right.shift());
  }
  return result;
}

console.log(mergeSort(arr));
