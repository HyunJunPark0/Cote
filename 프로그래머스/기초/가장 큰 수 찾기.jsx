// 정수 배열 array가 매개변수로 주어질 때,
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  let maxNum = 0;
  let maxIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
      maxIndex = i;
    }
  }
  return [maxNum, maxIndex];
}


##다른 풀이

function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}

- Math.max() 전개연산자로 배열 밖으로 빼내고 메서드로 큰값찾기.
- indexOf() 인덱스번호 찾기.