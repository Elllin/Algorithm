function solution(number, k) {
  let answer;
  const greatestNumbers = [];

  [...number].forEach((value, i) => {
    while (k > 0 && greatestNumbers[greatestNumbers.length - 1] < value) {
      greatestNumbers.pop();
      k--;
    }

    greatestNumbers.push(value);
  });

  if (k) greatestNumbers.splice(greatestNumbers.length - k, k);

  answer = greatestNumbers.join("");

  return answer;
}
