const score1 = [10, 100, 20, 150, 1, 100, 200];
const score2 = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

function solution(k, score) {
  let answer = [];
  const scorebord = [];

  score.forEach((s) => {
    scorebord.push(s);
    scorebord.sort((a, b) => b - a);
    if (scorebord.length > k) {
      scorebord.pop();
    }
    answer.push(scorebord[scorebord.length - 1]);
  });

  return answer;
}

console.log(solution(score1));
