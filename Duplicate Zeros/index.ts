/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let x = 0;

  while (x < arr.length) {
    if (arr[x] === 0) {
      arr.splice(x, 1, 0, 0);
      arr.splice(arr.length - 1);
      x += 2;
    } else {
      x++;
    }
  }
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
