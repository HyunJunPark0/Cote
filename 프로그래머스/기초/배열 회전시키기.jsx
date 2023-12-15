// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else numbers.push(numbers.shift());
  return numbers;
}


-.pop()배열의 마지막 요소를 제거하고 저장
-.unshift()배열의 맨 앞쪽에 새로운 요소를 추가하고 반환.
-.shift()배열의 맨 앞쪽을 제거하고 저장
-.push() 배열의 마지막에 새로운 요소를 추가하고 반환.

480 27