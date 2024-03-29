// 1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

// 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
// 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 이전에 등장했던 단어는 사용할 수 없습니다.
// 한 글자인 단어는 인정되지 않습니다.
// 다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

// tank → kick → know → wheel → land → dream → mother → robot → tank

// 위 끝말잇기는 다음과 같이 진행됩니다.

// 1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
// 2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
// 3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
// 1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
// (계속 진행)
// 끝말잇기를 계속 진행해 나가다 보면, 3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

// 사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.

function solution(n, words) {
  const usedWords = new Set(); // 사용된 단어를 저장할 Set
  let lastWord = words[0][words[0].length - 1]; // 첫 번째 단어의 마지막 글자
  usedWords.add(words[0]); // 첫 번째 단어를 사용된 단어 목록에 추가

  for (let i = 1; i < words.length; i++) {
      const currentWord = words[i]; // 현재 단어
      const firstChar = currentWord[0]; // 현재 단어의 첫 번째 글자

      // 이전 단어의 마지막 글자와 현재 단어의 첫 번째 글자가 다르거나
      // 이미 사용된 단어인 경우
      if (lastWord !== firstChar || usedWords.has(currentWord)) {
          // 탈락자의 번호와 차례를 반환
          return [(i % n) + 1, Math.floor(i / n) + 1];
      }

      // 단어를 사용된 단어 목록에 추가
      usedWords.add(currentWord);
      // 현재 단어의 마지막 글자를 다음 단어에서 사용하기 위해 저장
      lastWord = currentWord[currentWord.length - 1];
  }

  // 모든 단어를 사용하여 탈락자가 없는 경우 [0, 0] 반환
  return [0, 0];
}
