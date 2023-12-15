// 문자열 str1, str2가 매개변수로 주어집니다.
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.


function solution(str1, str2) {
  let answer = 0;

  if (str1.includes(str2)) {
      answer = 1;
  } else {
      answer = 2;
  }

  return answer;
}


- .includes() 배열안에 특정요소가 있는지 확인하는 메서드