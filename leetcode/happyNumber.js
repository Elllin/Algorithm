var isHappy = function (n, previousNum = []) {
  let result = false;

  const numArr = n
    .toString()
    .split("")
    .map((value) => value * value);

  const sum = numArr.reduce((acc, value) => acc + value, 0);

  if (sum === 1) return true;
  else if (previousNum.includes(sum)) return false;
  else {
    previousNum.push(sum);
    result = isHappy(sum, previousNum);
  }

  return result;
};
