const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution(absolutes, signs) {
  let answer;
  answer = absolutes.reduce(
    (acc, crr, idx) => (signs[idx] ? acc + crr : acc - crr),
    0
  );
  return answer;
}

solution(absolutes, signs);
