##정수 num1, num2가 매개변수로 주어질 때, 
num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.


function solution(num1, num2) {
  let anwser = Math.floor(num1 / num2);
  return anwser;
}


- Math.floor() 정수만 반환하는 메서드를 사용