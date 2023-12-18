// 문자열 my_string이 매개변수로 주어집니다.
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let answer = '';
  for (let i = 0; i < my_string.length; i++) {
    if (!answer.includes(my_string[i])) {
      answer += my_string[i];
    }
  }
  return answer;
}

- .includes()메서드를 이용해서 포함하고 있는지 확인.


## 다른풀이
function solution(my_string) {
    return [...new Set(my_string)].join('');
}
- 전개연산자로 배열로 만든 후
- new Set() 메서드로 중복을 허용하지않음.
- join('')으로 다시 문자열로