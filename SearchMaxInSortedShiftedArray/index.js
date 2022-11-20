const arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];

function sort(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (end - start > 1) {
    let middle = Math.round((end + start) / 2);

    if (arr[start] > arr[middle]) {
      end = middle;
    }

    if (arr[middle] > arr[end]) {
      start = middle;
    }
  }

  const maxElement = arr[start] > arr[end] ? arr[start] : arr[end];

  return maxElement;
}

console.log(sort(arr));
