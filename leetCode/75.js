/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let low = 0;
    let mid = 0;
    let high = nums.length-1;
    
    while(mid <= high){
        if(nums[mid] == 0){
            let temp1 = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp1;
            low++;
            mid++;
        } else if(nums[mid] == 1){
            mid++;
        }else if(nums[mid] == 2){
            let temp2 = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp2;
            high--;
        }        
    }
};
