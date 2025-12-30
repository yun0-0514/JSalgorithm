function solution(s) {
  let answer;
  let keword = [""];
  let value = 0;
  const spall = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const entrise = Object.entries(spall); //객체를 순회 가능한 데이터로 변환->[char,num]배열의 2차원배열로 반환
  entrise.forEach(([word], num) => {
    s = s.split(word).join(num);
  });
  return Number(s);
}
