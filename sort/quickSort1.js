// 1.왼쪽에서 오른쪽으로 이동시에는 피벗보다 더 큰값을 찾는다
// 2.오른쪽에서 왼쪽으로 이동시에는 피벗보다 더 작은값을 찾는다
// 3. 찾은 수의 자리를 바꾼다.
// 4. 계속 바꾸다 작은 값과 큰 값이 서로 엇갈린 상황이 온다면 작은 값과 피벗의 자리를 바꾼다.
// 5. 자리를 바꾼 피벗을 기준으로 왼쪽은 피벗보다 작은 값 들이고 오른쪽은 피벗보다 큰 값 외 위치하게 된다.

//평군 시간복잡도 : N * logN
//최악 시간복잡도 : N^2
//일반적으로는 가장 빠른 정렬이지만 거의 정렬이 되어있는 경우는 최악의 시간복잡도가 나올 수 있다.
//중간정도 위치 수가 정렬이 되어있을 경우 가장 빠르게 정렬이 가능하다.
//선택, 버블, 삽입은 데이터가 10만 개만 넘어도 사용하기 어렵다
//정렬을 두개 그룹으로 분리하기 때문에 10개의 배열이라고 한다면
// 5 * 5 = 25, 5 * 5 = 25 => 25 + 25 => 50이 된다

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
