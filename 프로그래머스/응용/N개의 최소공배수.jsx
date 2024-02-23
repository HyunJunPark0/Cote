// 문제 설명
// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

// 제한 사항
// arr은 길이 1이상, 15이하인 배열입니다.
// arr의 원소는 100 이하인 자연수입니다.
// 입출력 예
// arr	result
// [2,6,8,14]	168
// [1,2,3]	6

const gcd = (a, b) => {
  for (let i = Math.min(a, b); i > 0; i--) {
      if (a % i === 0 && b % i === 0) {
          return i;
      }
  }
  return 1; // 모든 수는 1로 나누어지므로 최소공약수는 최소 1
};

const lcm = (a, b) => (a * b) / gcd(a, b);

const solution = (arr) => {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
      answer = lcm(answer, arr[i]);
  }
  return answer;
};

// 예시 입력
const arr = [2, 6, 8, 14];
console.log(solution(arr)); // 출력: 168
