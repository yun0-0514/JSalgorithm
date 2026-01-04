function solution(k, tangerine) {
  let answer;
  const count = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const pcounts = Object.values(count).sort((a, b) => b - a);
  for (const count of pcounts) {
    answer++; // 종류 하나 추가!
    k -= count; // 그 종류의 귤을 다 담음

    if (k <= 0) break; // k개를 다 채웠으면 종료!
  }
  return answer;
}
