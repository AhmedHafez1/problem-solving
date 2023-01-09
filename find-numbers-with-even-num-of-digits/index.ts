function findNumbers(nums: number[]): number {
  return nums.reduce((acc: number, current: number): number => {
    String(current).length % 2 === 0 && acc++;
    return acc;
  }, 0);
}

console.log(findNumbers([12, 345, 12, 6, 7896, 33]));
