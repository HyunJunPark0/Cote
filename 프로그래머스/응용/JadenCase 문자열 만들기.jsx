// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// 입출력 예
// s	return
// "3people unFollowed me"	"3people Unfollowed Me"
// "for the last week"	"For The Last Week"

function solution(s) {
  let answer = ''
  const a = s.split('')
  for(let i =0; i<a.length; i++){
      if(i === 0 || a[i - 1] === ' '){
          answer.slice(-1)
          answer += a[i].toUpperCase()
      }else answer +=a[i].toLowerCase()
  }
  return answer
}

-split()으로 문자열을 배열로 변환
-slice(-1)로 마지막 인덱스 삭제
-toUpperCase()와 toLowerCase()로 대문자 소문자 변환.