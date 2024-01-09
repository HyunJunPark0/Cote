// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때,
// 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(bin1, bin2) {
  // 두 이진수를 뒤집어서 덧셈을 수행하기 편하게 함
  const reversedBin1 = bin1.split('').reverse();
  const reversedBin2 = bin2.split('').reverse();

  let result = ''; // 덧셈 결과를 저장할 문자열
  let carry = 0; // 자리올림을 나타내는 변수

  for (let i = 0; i < Math.max(reversedBin1.length, reversedBin2.length); i++) {
    // 현재 자리의 숫자와 carry를 더함
    const sum =
      (parseInt(reversedBin1[i]) || 0) +
      (parseInt(reversedBin2[i]) || 0) +
      carry;

    // 덧셈 결과를 문자열에 추가
    result += (sum % 2).toString();

    // 자리올림 갱신
    carry = Math.floor(sum / 2);
  }

  // 최종 자리올림이 있는 경우 처리
  if (carry > 0) {
    result += carry.toString();
  }

  // 결과 문자열을 뒤집어서 반환
  return result.split('').reverse().join('');
}
