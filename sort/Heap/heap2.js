var Heap = (function () {
  function Heap() {
    this.arr = [];
  }
  function reheapUp(self, idx) {
    // 마지막 힙과 처음 힙을 바꾸고 다시 힙 정렬을 수행할 때 또는 노드를 추가하기 (마지막 배열에 추가)
    if (idx) {
      //인덱스가 최상위 루트가 아니면
      var parent = parseInt((idx - 1) / 2);
      if (self.arr[idx] > self.arr[parent]) {
        var temp = self.arr[idx];
        self.arr[idx] = self.arr[parent];
        self.arr[parent] = temp;
        reheapUp(self, parent);
      }
    }
  }

  //자식이 둘다 자기보다 작거나, 마지막 잎사귀에 도달했을경우 중지

  function reheapDown(self, idx) {
    //처음 힙구조를 만들때 또는 노드 꺼낼때 (힙정렬에서 최대값을 뺄때는 루트를 뺀뒤 루트가 비었을때 마지막 값을 루트로 올렸을 경우)
    var left = 0;
    var right = 0;
    var large;
    if (idx * 2 + 1 < self.arr.length) {
      //왼쪽 노드가 배열의 안쪽에 속해있을 경우( 자식 노드가 존재할 경우)
      left = self.arr[idx * 2 + 1];
      if (idx * 2 + 2 < self.arr.length - 1) {
        //오른쪽 노드 인덱스보다 배열의 마지막 인덱스가 더 큰경우 -> 오른쪽 노드가 마지막 인덱스가 아닌경우
        right = self.arr[idx * 2 + 2];
      }

      if (left > right) {
        //왼쪽과 오른쪽중 더 큰값을 찾는다.
        large = idx * 2 + 1;
      } else {
        large = idx * 2 + 2;
      }

      if (self.arr[idx] < self.arr[large]) {
        //루트보다 자식값이 더 큰경우 둘 위치를 바꾼다
        var temp = self.arr[idx];
        self.arr[idx] = self.arr[large];
        self.arr[large] = temp;
        reheapDown(self, large);
      }
    }
  }
  Heap.prototype.insert = function (number) {
    var last = this.arr.length;
    this.arr[last] = number;
    reheapUp(this, last);
    return true;
  };
  Heap.prototype.delete = function () {
    if (this.arr.length === 0) {
      return false;
    }
    var del = this.arr[0];
    this.arr[0] = this.arr.pop();
    reheapDown(this, 0);
    return del;
  };
  Heap.prototype.sort = function () {
    var sort = [];
    var count = this.arr.length;
    for (var i = 0; i < count; i++) {
      sort.push(this.delete());
    }
    return sort;
  };
  return Heap;
})();
