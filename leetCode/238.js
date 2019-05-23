/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
var left = [];
    var right = [];
 
    var left = [];
    var right = [];
    
    var l = nums.length;
    
    left [0] = 1;
    for(let i=2; i<=l; i++){
        left[i-1] = left[i-2] * nums[i-2];
    }
    
    right[l-1] = 1;
    for(let j=l-2; j>=0; j--){
        right[j] = right[j+1] * nums[j+1];
    }
    
    var prod = [];
    for(let k=0; k<l; k++){
        prod[k] = left[k] * right[k];
    }

    return prod;
    
};
