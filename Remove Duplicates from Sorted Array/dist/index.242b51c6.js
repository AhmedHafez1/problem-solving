function removeDuplicates(nums) {
    let i = 0;
    while(i < nums.length)if (nums[i] === nums[i + 1]) nums.splice(i + 1, 1);
    else i++;
    return nums.length;
}
const a1 = [
    1,
    3,
    5,
    6,
    6,
    8,
    9,
    9,
    9,
    10
];
const k = removeDuplicates(a1);
console.log(k);

//# sourceMappingURL=index.242b51c6.js.map
