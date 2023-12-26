// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 
// 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.


첫번쨰 답. 실패
function solution(polynomial) {
  let X = 0;
  let number = 0;
  const a = polynomial.split(' ');
  for (let i = 0; i < a.length; i++) {
    if (a[i].split('').includes('x') && a[i] !== 'x') {
      X += parseInt(a[i].split('')[0]);
    } else if (a[i] === 'x') {
      X += 1;
    } else if (a[i] !== '+') {
      number += parseInt(a[i]);
    }
  }
  if (number !== 0) {
    return `${X}x + ${number}`;
  } else return `${X}x`;
}

참고 답안 1.
function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
}

참고 답안 2.

function solution(p) {
    var [x, c] = p.split('+').reduce(([a,b],s) => {
        if (s.includes('x')) {
            return [a + Number(s.trim().replace('x','') || 1), b];
        }
        return [a, b + Number(s)];
    }, [0, 0]);

    if (!x && !c) return '0';
    if (!x) return c.toString();
    x = `${x==1?'':x}x`;
    if (!c) return x;
    return `${x} + ${c}`;
}

참고 답안 3.

function solution(polynomial) {
    let coefficient = 0
    let constant = 0
    polynomial = polynomial.split(" + ")
    for(let i = 0; i<polynomial.length; i++){
        if(polynomial[i].includes("x")) coefficient += parseInt(polynomial[i]) || 1
        else constant += +polynomial[i]
    }
    if(coefficient == 1) coefficient = ""
    const answer = [coefficient+"x",constant.toString()]
    return answer.filter(v=>v[0]!=0).join(" + ")
}