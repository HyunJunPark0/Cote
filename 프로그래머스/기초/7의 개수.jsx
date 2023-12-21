// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 
// 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.


function solution(array) {
  let answer = 0;
  let a = '';
  for (let i = 0; i < array.length; i++) {
    a += array[i];
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '7') {
      answer += 1;
    }
  }
  return answer;
}

##다른 풀이
function solution(array) {
  let answer = array
    .join('')
    .split('')
    .filter((el) => el === '7').length;
  return answer;
}

- join('') 배열을 문자열로
- split('') 다시 배열로
- filter() 필터로 걸러내기