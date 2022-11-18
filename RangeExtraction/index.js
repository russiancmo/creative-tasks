function solution(list) {
  const groups = [];
  const currGroup = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] === list[i + 1] - 1) {
      if (list[i + 1] !== list[i + 2] - 1) {
        currGroup.push(list[i]);
        currGroup.push(list[i + 1]);
      } else {
        currGroup.push(list[i]);
      }
    } else {
      if (currGroup.length > 1) {
        if (currGroup.length <= 2) {
          groups.push(...currGroup);
        } else {
          groups.push(`${currGroup[0]}-${currGroup[currGroup.length - 1]}`);
        }
      } else {
        groups.push(list[i]);
      }
      currGroup.splice(0, currGroup.length);
    }
  }

  return groups.join(",");
}
