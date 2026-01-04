const phone = ["119", "97674223", "1195524421"];

function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}

function solution2(phone_book) {
  return !phone_book.sort().some((num, i) => {
    if (i === phone_book.length - 1) return false;
    return phone_book[i + 1].startsWith(num);
  });
}
// sone 메서드
// 배열 안의 어떤(some) 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
// 조건을 만족하는 요소를 찾는 즉시 순회를 중단하고 true를 반환, 끝까지 다 돌아도 없으면 false를 반환
solution(phone);
