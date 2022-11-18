var maxSequence = function (arr) {
  if (arr.length === 0 || !arr.some((item) => item > 0)) {
    return 0;
  }

  let s = 0;
  const maxSums = [];
  let lastIndex = 0;
  let currIndex = 0;
  let minus_pos = -1;

  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
    if (s < 0) {
      s = 0;
      minus_pos = i;
    } else {
      lastIndex = minus_pos + 1;
      currIndex = i;
      maxSums.push(
        arr.slice(lastIndex, i === arr.length - 1 ? arr.length : currIndex + 1)
      );
    }
  }

  return Math.max(...maxSums.map((item) => item.reduce((a, b) => a + b, 0)));
};
