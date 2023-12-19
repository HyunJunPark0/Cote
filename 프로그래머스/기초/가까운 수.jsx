// 정수 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  array.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || a - b);
  return array[0];
}


- || a - b 를 붙이는 이유는 n = 5 array = [1, 6, 4] 일때 절대값이 1로 동일하기에 [4, 6, 1]을 만들어주기 위에 사용.