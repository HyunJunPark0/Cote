function solution(num, k) {
  if (num.includes(k)) {
    return num.index(k);
  } else return -1;
}
