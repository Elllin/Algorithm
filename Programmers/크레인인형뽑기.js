function solution(board, moves) {
  var answer = 0;
  let basket = [];
  let newBoard = [...board];

  moves.forEach((index) => {
    let doll = pickupDoll(index - 1);
    if (!doll) return;

    if (basket[basket.length - 1] === doll) {
      basket.pop();
      answer += 2;
    } else {
      basket.push(doll);
    }
  });

  function pickupDoll(index) {
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i][index]) {
        let doll = newBoard[i][index];
        newBoard[i][index] = 0;
        return doll;
      }
    }
  }

  return answer;
}
