// 문자열 my_string이 매개변수로 주어질 때, 
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.


function solution(my_string) {
  const regex = /^[0-9]+$/;
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    if (regex.test(my_string[i])) {
      answer.push(Number(my_string[i]));
    }
  }
  return answer.sort((a, b) => a - b);
}


- 정규식을 이용한 풀이.

- .sort((a,b) => a -b )로 오름차순 정렬