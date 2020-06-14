const arr = [1, 3, 5, 0, 1, 2, 4, 0, 2, 3, 4, 4];

function counting(arr, max) {
  const count = [];
  const result = [];

  for (let i = 0; i <= max; i++) {
    count[i] = 0; //count 배열 초기 값 0 넣어줌
  }

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (let i = 0; i <= max; i++) {
    if (count[i]) {
      //count값이 0이 아니면
      for (let j = 0; j < count[i]; j++) {
        result.push(i);
      }
    }
  }

  return result;
}

console.log(counting(arr, 5));
