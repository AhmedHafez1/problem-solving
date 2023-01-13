/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  const indexOfZero = nums1.findIndex((x) => x === 0);

  nums1.splice(indexOfZero > -1 ? indexOfZero : 0, n);
}

const a1 = [1, 4, 5, 9, 0, 0, 0];
const a2 = [2, 6, 8];

merge(a1, 4, a2, 3);

console.log(a1);
