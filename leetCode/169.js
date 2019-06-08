/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var map = new Map();
    
    for(let i=0;i<nums.length; i++){
        if(map.has(nums[i])){
            var n = map.get(nums[i]);
            n = n+1;
            map.set(nums[i], n);
        }else{
            map.set(nums[i], 1);
        }
    }
    
    for(var [key, value] of map.entries()){
        if(value > Math.floor(nums.length/2)){
            return key;
        }
    }
    
};
