var uniqueInOrder = function (iterable) {
  const res = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      res.push(iterable[i]);
    }
  }

  return res;
};
