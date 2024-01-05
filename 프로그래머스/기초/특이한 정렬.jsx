// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 
// 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
// 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numlist, n) {
  numlist.sort((a,b) => Math.abs(a-n) - Math.abs(b-n) || b - a)
  return numlist
}

-Math.abs 로 음수를 양수로 전환시켜 -n이 0에 가까울수록 앞으로 + 같은값일때 큰값순으로 정렬