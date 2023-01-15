function checkIfExist(arr: number[]): boolean {
  let doubleExist = false;

  arr.forEach((x, i) => {
    if (arr.some((y, j) => (x === 2 * y || (x === 0 && y === 0)) && i !== j)) {
      doubleExist = true;
    }
  });

  return doubleExist;
}

console.log(checkIfExist([1, -2, 9, 3, 7, 11, 5, 0]));
