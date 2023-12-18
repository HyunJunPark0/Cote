// 문자열 배열 strlist가 매개변수로 주어집니다. 
// strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.


function solution(strlist) {
  return strlist.map(a=> a.length)
} 


- map() 새로운 배열을 반환하는 메서드를 사용해서 콜백함수로 각 원소의 길이를 반환