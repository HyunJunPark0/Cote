// 문제 설명
// 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

// (), [], {} 는 모두 올바른 괄호 문자열입니다.
// 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
// 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
// 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// s의 길이는 1 이상 1,000 이하입니다.
// 입출력 예
// s	result
// "[](){}"	3
// "}]()[{"	2
// "[)(]"	0
// "}}}"	0
function solution(s) {
  let answer = 0;
  const n = s.length;

  // 주어진 문자열을 회전하여 모든 경우에 대해 올바른 괄호 문자열인지 확인
  for (let i = 0; i < n; i++) {
    if (isCorrect(s)) {
      answer++;
    }
    // 문자열을 왼쪽으로 1칸 회전
    s = s.slice(1) + s[0];
  }

  return answer;
}

// 주어진 문자열이 올바른 괄호 문자열인지 확인하는 함수
function isCorrect(s) {
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };

  for (let char of s) {
    if (char in pairs) {
      stack.push(char);
    } else {
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
