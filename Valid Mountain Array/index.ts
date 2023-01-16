function validMountainArray(arr: number[]): boolean {
  const length = arr.length;

  if (length < 3) return false;

  const max = Math.max(...arr);

  const maxIndex = arr.indexOf(max);

  if (maxIndex === length - 1 || maxIndex === 0) return false;

  for (let k = 0; k < maxIndex; k++) {
    if (arr[k] >= arr[k + 1]) return false;
  }

  for (let k = maxIndex; k < length; k++) {
    if (arr[k] <= arr[k + 1]) return false;
  }

  return true;
}

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
