// [문제] 0과 1로만 이루어진 배열 nums와 정수 k가 주어집니다. 당신은 최대 k개의 0을 1로 뒤집을 수 있습니다. 이때 1로만 이루어진 가장 긴 연속 부분 수열의 길이를 구하세요.

// 예시: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

// 답: 6

// 힌트: 0을 1로 바꾼다는 것은, 윈도우 안에 포함된 0의 개수가 k개를 넘지 않게 유지하며 right를 늘리고 left를 당기는 것입니다.--
const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

const func = (nums, k) => {
  let left = 0;
  let right = 0;
  let maxsize = 0;
  const maxWindow = [];
  let zeroCount = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left] === 0) {
        left--;
        zeroCount--;
      }
    }
  }
};
