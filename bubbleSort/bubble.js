//시간복잡도(최악, 최선) : n(n-1)/2  => n**2 
//선택정렬과 같지만 버블정렬은 교환이 계속 일어나기때문에 실질적으로는 가장 느리다.

let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

const length = arr.length - 1;
for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr)