function solution(numbers) {
  let answer = 0;
  for (let i = 1; i <= 9; i++) {
    if (!numbers.include(i)) {
      answer += i;
    }
  }
  return answer;
}

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
//numbers.reduce((acc, cur) => acc + cur, 0)
//acc: 지금까지 더해진 누적값
//cur: 현재 배열에서 꺼낸 이번 숫자
// 0: 시작 초기값

// 만약 중복이 있다면?
function solution(numbers) {
  const uniqueNumbers = [...new Set(numbers)]; //set을 이용해서 중복을 삭제해버리기
  const sum = uniqueNumbers.reduce((acc, cur) => acc + cur, 0);

  return sum;
}
