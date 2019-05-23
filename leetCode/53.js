/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    var maxSum = Number.MIN_SAFE_INTEGER;
    var currSum = 0;
    
    var maxStartIndex = 0;
    var maxEndIndex = nums.length-1;
    var currStartIndex = 0;
    
    nums.forEach((currNum, currIndex) => {
        currSum += currNum;
        
        if(currSum > maxSum){
            maxSum = currSum;
            maxStartIndex = currStartIndex;
            maxEndIndex = currIndex;
        }
        
        if(currSum < 0){
            currSum = 0;
            currStartIndex = currIndex + 1;
        }
    });
    
    return maxSum;
    
};
