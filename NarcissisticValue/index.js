function narcissistic(value) {
  const length = value.toString().length;

  const newNumber = value
    .toString()
    .split("")
    .map((item) => Math.pow(Number(item), length))
    .reduce((a, b) => a + b);

  return newNumber === value ? true : false;
}

narcissistic(4); // 4^1 = 4
narcissistic(371); // 3^3 + 7^3 + 1^3 = 371
