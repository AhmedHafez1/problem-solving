function removeElement(nums, val) {
    let x = 0;
    while(x < nums.length)if (nums[x] === val) nums.splice(x, 1);
    else x++;
    return nums.length;
}
const a1 = [
    1,
    6,
    6,
    9,
    6,
    0,
    9,
    6,
    4
];
const val = 6;
const k = removeElement(a1, val);
console.log(k);

//# sourceMappingURL=index.242b51c6.js.map
