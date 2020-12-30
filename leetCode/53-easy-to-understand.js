/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let sum = 0;
    let max = nums[0];
    
    for(let i = 0;i < nums.length; i++){
        sum = sum + nums[i];
        if(sum > max){
            max = sum;
        }
        //no point of taking a number which is negative forward, it will only decrease the sum
        if(sum < 0){
           sum = 0;
        }
    }
    
    return max
};
