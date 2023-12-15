function solution(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        arr.push(i);
      }
    }
  }
  return [...new Set(arr)].length;
}


- new Set() 중복값을 허용하지 않는 메서드.