// 문자열 my_string이 매개변수로 주어집니다. 
// my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.


function solution(my_string) {
  let arr = [...my_string];
  let answer = arr.reverse().join('');
  return answer;
}


- 전개연산자 외에도 .split('')메서드를 이용해서 문자열을 배열로 변경가능 -> my_string.split('').reverse().join('');