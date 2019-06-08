/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    if (nums == null || nums.length == 0) return;        

    var insertPos = 0;
    nums.forEach(num => {
        if (num != 0) nums[insertPos++] = num;
    })

    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
    
};
