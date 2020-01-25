//선택정렬
//시간복잡도(최악, 최선) : n^2

const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
    }

    if (min !== i) {
        let temp;
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}

console.log(arr);
