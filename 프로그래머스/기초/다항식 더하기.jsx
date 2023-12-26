function solution(polynomial) {
  let X = 0;
  let number = 0;
  let e = '+';
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
  return X + 'x' + e + 'number';
}

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
