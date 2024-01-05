// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
// 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
  let 총합 = score.map((v) => v[0] + v[1]);
  let 정렬된배열 = 총합.slice().sort((a, b) => b - a);
    
  console.log('총합:', 총합);
  console.log('정렬된배열:', 정렬된배열);
    
  return 총합.map((v) => 정렬된배열.indexOf(v) + 1);
}
