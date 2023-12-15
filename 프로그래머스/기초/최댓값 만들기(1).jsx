// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.


function solution(numbers) {
  const num = numbers.sort((a,b) => b-a);
  return num[0] * num[1]
}


-sort((a,b) => b - a) 로 값이 큰 순대로 정렬.