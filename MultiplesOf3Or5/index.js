function solution(number) {
  if (number <= 0) {
    return 0;
  }

  const numsArr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numsArr.push(i);
    }
  }

  return numsArr.length > 0 ? numsArr.reduce((a, b) => a + b) : 0;
}
