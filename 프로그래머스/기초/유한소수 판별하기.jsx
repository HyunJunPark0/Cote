// 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

// 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

function solution(a, b) {
  // a, b의 최대공약수 구하는 함수
  const getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b));
	
  // 분모(b)를 최대공약수로 나누어 기약분수의 분모로 만들어 줌
  let denom = b / getGcd(a, b);

  // 분모(denom)의 소인수 배열
  let primeFactor = [];
  for (let i = 2; i <= denom; i++) {
    while (denom % i == 0) {
      denom /= i;
      primeFactor.push(i);
    }
  }

  // 분모의 소인수 배열에 2와 5 외의 수가 있는 경우 무한소수
  return [...new Set(primeFactor)].filter((v) => !(v == 2 || v == 5)).length
    ? 2
    : 1;
}


##다른 답안

function solution(a, b) {
  // a,b의 최대공약수(GCD) 구하기
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) gcd = i;
  }

  // 분모(b) 최대공약수로 나누어 기약분수의 분모로 만들기
  b /= gcd;

  // 분모를 2와 5로 각각 소인수 분해
  while (b % 2 == 0) b /= 2;
  while (b % 5 == 0) b /= 5;
  return b == 1 ? 1 : 2;
}