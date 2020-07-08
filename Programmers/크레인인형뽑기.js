function solution(board, moves) {
  let answer = 0;
  const basket = [];
  const newBoard = [...board];

  moves.forEach((index) => {
    const doll = pickupDoll(index - 1);
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
        const doll = newBoard[i][index];
        newBoard[i][index] = 0;
        return doll;
      }
    }
  }

  return answer;
}
