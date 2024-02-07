// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// carpet.png

// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 입출력 예
// brown	yellow	return
// 10	2	[4, 3]
// 8	1	[3, 3]
// 24	24	[8, 6]

function solution(brown, yellow) {
  // 전체 격자 수 (갈색 + 노란색)
  const total = brown + yellow;

  // 카펫의 가로 길이를 3부터 노란색 + 갈색의 제곱근까지 반복
  for (let width = 3; width <= Math.sqrt(total); width++) {
      // 현재 가로 길이로 전체 격자 수가 나누어 떨어지면
      if (total % width === 0) {
          // 해당 가로 길이로 세로 길이를 계산
          const height = total / width;

          // 주어진 갈색 격자의 수와 일치하는지 확인
          if ((width - 2) * (height - 2) === yellow) {
              // 가로와 세로의 크기를 배열로 반환
              return [Math.max(width, height), Math.min(width, height)];
          }
      }
  }
}
