function getSum(a, b) {
  if (a === b) {
    return a;
  }

  let isASmaller = a < b;

  let res = 0;

  if (isASmaller) {
    for (let i = a; i <= b; i++) {
      res += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      res += i;
    }
  }

  return res;
}
