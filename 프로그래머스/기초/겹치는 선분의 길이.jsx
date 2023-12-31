// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.


const solution = lines => {
  let num = 0;
  let arrAll = []
  
  lines = lines.map(([start, end]) => {
    const arr = []
    for (let i = start; i < end; i++) {
      arr.push(i)
    }
    return arr;
  })
  lines.forEach(line => {
    line.forEach(n => {
      arrAll.push(n)
    })
  })
  let obj = arrAll.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {}); // 각 원소가 몇개씩 들어 있는지 객체 형태로 만들기
  Object.keys(obj).forEach(key => {
    if (obj[key] > 1) num++; // 2번이든 3번이든 어쨌든 겹쳐진 길이가 몇개인지 구하기
  })
  return num;
}