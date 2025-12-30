const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  const answer = [];
  console.log("실행");
  commands.forEach((item) => {
    const [i, j, k] = item;
    console.log(i, j, k);
    const newArr = array.slice(i, j + 1);
    newArr.sort((a, b) => a - b);
    answer.push(newArr[k - 1]);
  });
  return answer;
}
solution(array, commands);
function solution2(array, commands) {
  return commands.map(
    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
  );
}
