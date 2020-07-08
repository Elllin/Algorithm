function solution(n, lost, reserve) {
  let answer = 0;

  let newLost = [...lost].sort((a, b) => a - b);
  let newReserve = reserve
    .filter((value) => {
      if (isLend(value)) return false;
      else return true;
    })
    .sort((a, b) => a - b);

  newReserve.forEach((value) => {
    const previous = value - 1;
    if (isLend(previous)) return;

    const next = value + 1;
    if (isLend(next)) return;
  });

  function isLend(target) {
    let index = newLost.indexOf(target);

    if (index > -1) {
      newLost.splice(index, 1);
      return true;
    } else return false;
  }

  answer = n - newLost.length;

  return answer;
}
