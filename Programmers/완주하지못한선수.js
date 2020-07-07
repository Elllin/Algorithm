function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();
  answer = participant.find((value, index) => value !== completion[index]);

  return answer;
}
