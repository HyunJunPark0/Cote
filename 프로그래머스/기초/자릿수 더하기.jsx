// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요


function solution(n) {
  let answer = n
    .toString()
    .split('')
    .map((a) => parseInt(a))
    .reduce((acc, cur) => acc + cur, 0);
    return answer
}


- .toString() 문자열로 변환.
- .split('') 문자열을 배열로 반환
- .map((a) => parseInt(a)) 정수로 재 배열
- reduce(acc,cur=> acc+ cur, 0) 배열데이터들을 다 더하기.
