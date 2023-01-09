function findNumbers(nums) {
    return nums.reduce((acc, current)=>{
        String(current).length % 2 === 0 && acc++;
        return acc;
    }, 0);
}
console.log(findNumbers([
    12,
    345,
    12,
    6,
    7896,
    33
]));

//# sourceMappingURL=index.242b51c6.js.map
