/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    var xor = 0, i = 0;
	for (i = 0; i < nums.length; i++) {
		xor = xor ^ i ^ nums[i];
	}

	return xor ^ i;
    
};
