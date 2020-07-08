function solution(answers) {
  let answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const numberOfCorrectAnswers = [first, second, third].map((value) =>
    getNumberOfCorrect(value)
  );

  numberOfCorrectAnswers.forEach((value, index) => {
    const maxNum = Math.max(...numberOfCorrectAnswers);
    if (value === maxNum) return answer.push(index + 1);
  });

  function getNumberOfCorrect(answer) {
    let numberOfCorrect = 0;
    let index = 0;

    answers.forEach((value) => {
      if (index === answer.length) index = 0;
      if (value === answer[index]) numberOfCorrect++;
      index++;
    });

    return numberOfCorrect;
  }

  return answer;
}
