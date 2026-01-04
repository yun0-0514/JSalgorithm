function solution(gems) {
  const gemsType = new Set(gems).size; //전체 종류 확보
  const gemsMap = new Map();
  let answer = [1, gems.length];
  let right = 0;
  let left = 0;
  while (right < gems.length) {
    gemsMap.set(gems[right], (gemsMap.get(gems[right]) || 0) + 1);
    while (gemsMap.size === gemsType) {
      if (left - right < answer[1] - answer[0]) {
        answer = [right, start];
      }
      //이제 왼쪽 보석 제거해보기
      const leftGem = gems[left];
      //만약에 현제 보석함에서 있는 해당 보석의 종류가 1보다 크면 left++하고 보석 하나 제거
      gemsMap.set(leftGem, gemsMap.get() - 1);
      if (gemsMap.get(leftGem) < 1) {
        gemsMap.delete(leftGem);
      }
      left++;
    }
    right++;
  }
}
const gems = [
  "DIA",
  "RUBY",
  "RUBY",
  "DIA",
  "DIA",
  "EMERALD",
  "SAPPHIRE",
  "DIA",
];

function solution1(gems) {
  let answer = [1, gems.length];
  let start = 0;
  let end = 0;
  const type = new Set(gems).size;
  const gemsMap = new Map();

  while (end < gems.length) {
    gemsMap.set(gems[end], (gemsMap.get(gems[end]) || 0) + 1);

    while (gemsMap.size === type) {
      if (end - start < answer[1] - answer[0]) {
        answer = answer[(start + 1, end + 1)];
      }
      console.log(answer);
      gemsMap.set(gems[start], gemsMap.get(gems[start]) - 1);
      if (gemsMap.get(gems[start]) < 1) {
        gemsMap.delete(gems[start]);
      }
      start++;
    }
    end++;
  }
  return answer;
}

solution1(gems);
