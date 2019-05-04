/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    // variable to keep track of the portion of list in which duplicates have
    // been removed
    let length = 1;
    for (let i = 1; i < nums.length; i++) {
        // if we encounter a element in the sorted array that is different from
        // the previous one, we update the start of the array
        if (nums[i] !== nums[i-1]) {
            nums[length++] = nums[i];
        }
    }
    return length;
};
