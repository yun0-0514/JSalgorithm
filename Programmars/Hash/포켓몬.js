// 포켓몬이 n마리 주어진다
// N/2마리를 가져가도 좋다고 말했음
// 그러면 N/2마리를 가져갔을때 가장 많은 종류의
// 포켓몬을 가져갈 수 있는 방법은??

// 6마리가 있고, [리자몽, 토게키스, 엠페르트, 토게키스, 리자몽, 꼬부기]을 가지고 있다고 하면

// 종류는 4종류, 마리는 6마리 이때 n/2마리 즉 3마리를 가져갈때 최대한 많은 종류를 가져가려고 함
// (배틀에 유리함 ㅋㅋ) 그렇다면 가장 많은 종류의 포켓몬을 가져갈때 몇 종류 들고 갈 수 있냐?
// ->당연히 3마리겠지?

function solution(nums) {
  const monsterBall = nums.length / 2;
  const PokemonMap = new Map();

  nums.forEach((num) => {
    PokemonMap.set(num, (PokemonMap.get(num) || 0) + 1);
  });
  let answer = Math.min(monsterBall, PokemonMap.size);
  return answer;
}

function solution1(nums) {
  const maxSelect = nums.length / 2;
  const kindCount = new Set(nums).size; // 배열로 변환 없이 바로 크기 측정!
  //spreed연산자를 사용하여 배열을 반환하는 풀이도 가능함
  // 삼항 연산자나 Math.min을 사용
  return kindCount > maxSelect ? maxSelect : kindCount;
}
