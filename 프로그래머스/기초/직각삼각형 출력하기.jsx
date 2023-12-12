##문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.


function solution(my_string, n) {
  let answer = my_string
    .split('')
    .map((a) => a.repeat(n))
    .join('');
  return answer;
}


- split() 문자열을 배열로
- map(a => a.repeat(n)) 새로운 배열을 반환하는데 repeat(n번)메서드를 이용해서 여러번 반복.
- join()으로 다시 문자열로 변환