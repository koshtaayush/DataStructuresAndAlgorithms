/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    function reverse (start, end) {
        var temp;
        while (start < end) {
            temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    
    var n = nums.length;
    var k = 0;
    var l = 0;
    
    for (k = n - 2; k >= 0; k--) {
        if (nums[k] < nums[k + 1]) {
            break;
        }
    }
    
    if (k < 0) {
        nums.reverse();
    } else {
        for (l = n - 1; l > k; l--) {
            if (nums[l] > nums[k]) {
                break;
            }
        } 
        var temp;
        temp = nums[k]
        nums[k] = nums[l];
        nums[l] = temp;
        
        reverse(k + 1, nums.length-1);
    }
    
};
