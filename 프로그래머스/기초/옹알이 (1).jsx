// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.

// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때,

// 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(babbling) {
  var answer = 0;
  let can = ['aya', 'ye', 'woo', 'ma'];

  for (let i = 0; i < babbling.length; i++) {
    let init = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (babbling[i].includes(can[j])) {
        init = init.replaceAll(can[j], 'X'); // 할 수 있는 단어는 X로 치환
      }
    }

    init = init.replaceAll('X', ''); // X를 모두 공백으로 치환하고 나서
    if (init.length === 0) {
      // 공백이 되면 answer에 추가
      answer += 1;
    }
  }
  return answer;
}