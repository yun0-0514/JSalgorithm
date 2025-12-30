//버블 정렬은 인접한 두 값을 비교하여 교환하는 방법을 사용한다.
/**

 */

const swap = (array, indexA, indexB) => {
  let temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
};

//시간 복잡도 O(n^2)
//처음에 어떠한 인덱스의 값을 잡으면 그 값을 비교하면서 끌어올리는 것을 목표로 하는 게 맞음
//문제 1.버블 정렬의 Swap과 Pass 원리를 설명하고, 왜 $O(N^2)$ 복잡도를 가질 수밖에 없는지 반복문 구조를 통해 설명하십시오.

//배열 인덱스 1번부터 마지막 번까지 일대일로 비교하여 값을 직접 스왑하는 형식을 사용하기 때문에 O(n^2)의 시간 복잡도가 나온다.

const bubble = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      //버블정렬은 수행된 횟수 만큼 뒤부터 정렬
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; //인접한 두 값을 변경하는 정렬 방식
      }
    }
  }
};
