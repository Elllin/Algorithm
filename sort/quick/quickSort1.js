const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
const arrLength = arr.length;

function quickSort(data, start, end) {
  if (start >= end) return;

  const key = start;
  let i = start + 1;
  let j = end;
  let temp;

  while (i <= j) {
    //엇갈릴 때까지 반복
    while (data[key] >= data[i] && i <= end) {
      //큰수를 찾는다
      i++;
    }
    while (data[key] <= data[j] && j > start) {
      //작은수를 찾는다
      j--;
    }
    if (i > j) {
      //엇갈렸으면 키값과 j를 교체 (엇갈렸다면 j가 더 작다는 뜻)
      temp = data[j];
      data[j] = data[key];
      data[key] = temp;
    } else {
      //엇갈리지 않았다면 i번째와 j번째를 교체
      temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
  }

  quickSort(arr, start, j - 1);
  quickSort(arr, j + 1, end);
}

function show(data) {
  data.forEach((v) => console.log(v));
}

quickSort(arr, 0, arrLength - 1);
show(arr);
