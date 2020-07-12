function solution(s) {
  var answer = [];

  const tuple = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((v) => v.split(","));

  tuple.sort((a, b) => a.length - b.length);

  answer.push(tuple[0][0]);

  for (let i = 1; i < tuple.length; i++) {
    answer.push(tuple[i].filter((v) => !tuple[i - 1].includes(v))[0]);
  }

  answer = answer.map((v) => parseInt(v));
  return answer;
}
