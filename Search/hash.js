//js에서 map,set사용 시 해시/압축 함수를 내부적으로 처리해줌
//직접 연산을 짜지는 않음
//충돌 해결방법은 꼭 알고갈 것 체이닝 vs 개방 주소 방법

//js에서 재해싱
//map에 데이터를 계속 넣으면 엔진이 알아서 배열 크기를 키움->이때 비용은 분할 상환의 핵심
// 문자열 해싱도 js 문자열은 이미 최적화된 해싱 알고리즘이 있어 편리하게 사용 가능

function solution(participant, completion) {
  let map = new Map();
  participant.forEach((name) => {
    map.set(name, (map.get(name) || 0) + 1);
  });
  completion.forEach((name) => {
    if (map.get(name) === 1) {
      map.delete(name);
    } else {
      map.set(name, map.get(name) - 1);
    }
  });
  return map.keys().next().value;
}
