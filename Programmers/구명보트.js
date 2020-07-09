function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);

  let i = 0;
  let j = people.length - 1;
  while (j - i >= 0) {
    if (people[i] + people[j] <= limit) {
      i++;
      j--;
    } else {
      i++;
    }
    answer++;
  }

  return answer;
}
