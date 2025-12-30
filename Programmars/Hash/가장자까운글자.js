const s1 = "banana";
const s2 = "foobar";

function solution(s) {
  const answer = [];
  const arrMap = new Map();
  [...s].forEach((char, idx) => {
    answer.push(arrMap.has(char) ? idx - arrMap.get(char) : -1);
    arrMap.set(char, idx);
  });
  return answer;
}

console.log(solution(s1));
