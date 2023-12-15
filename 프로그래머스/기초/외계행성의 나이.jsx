// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. 
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.


function solution(age) {
  let pro = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  return age
    .toString()
    .split('')
    .map((a) => pro[a])
    .join('');
}


- toString()메서드로 문자열로 변환 52 => '52'
- split('')메서드로 문자열을 배열로 변환 '52' => ['5','2']
- map()메서드의 콜백함수로 pro[인덱스]를 이용해서 ['5','2'] => ['pro[5]', 'pro[2]']
- join('') 배열을 다시 문자열로 변환 ['pro[5]', 'pro[2]']=> 'pro[5]pro[2]'

 
.map((a) => "abcdefghij"[a])
문자열 자체도 인덱스[] 접근 가능.