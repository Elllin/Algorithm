//시간복잡도(최악, 최선) : n^2
//필요할 때만 위치를 바꾸기 때문에 실질적으로는 버블, 선택보다 빠르다.
//어느정도 정렬된 상태에서는 가장 빠르다.

let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

for (let i = 0; i < arr.length - 1; i++) {
  let j = i;
  while (arr[j] > arr[j + 1]) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    j--;
  }
}

console.log(arr);
