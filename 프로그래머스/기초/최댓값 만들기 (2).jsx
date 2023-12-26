// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let a = numbers.slice().sort((a, b) => a - b);
  let b = numbers.slice().sort((a, b) => b - a);
  if (a[0] * a[1] > b[0] * b[1]) {
    return a[0] * a[1];
  } else {
    return b[0] * b[1];
  }
}

- slice()메서드를 이용해서 원본을 냅두고 새로운 배열을 얻음. 
이렇게 하지 않으면 sort()메서드는 기본적으로 문자열로 변환하여 정렬하기 때문에 음수를 올바르게 처리하지 못한다.