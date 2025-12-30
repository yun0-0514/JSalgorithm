//선택 정렬
//가잔 작은 값을 맨앞에 인덱스에 넣으면서 진행하는 정렬 방식
//시간 복잡도 n^2->모든 자리의 값을 다른 값들과 한번씩 비교해야하기 떄문

const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[temp] > arr[j]) {
        temp = j;
      }
    }
    if (temp !== i) [arr[i], arr[temp]] = [arr[temp], arr[i]];
  }
};

const arr = [1, 4, 2, 3, 7, 4, 9];

SelectionSort(arr);
console.log(arr);
