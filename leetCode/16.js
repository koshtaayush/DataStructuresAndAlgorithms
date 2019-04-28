/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    if(nums.length < 3){
        return [];
    }

    //sorting the array 
    nums.sort((a,b) => {
        return a - b;
    });

    var res = [];
    var diff = Math.pow(2, 31) - 1;
    var minSum = 0;

    for(var i=0; i<nums.length-2; i++){

        var j = i+1;
        var k = nums.length-1;

        while(j<k){
            var sum = nums[i] + nums[j] + nums[k];
            var newDiff = Math.abs(sum - target);
            if(newDiff <= diff){
                diff = newDiff;
                minSum = sum;
            }

            if(sum > target){
                k--;
            }

            if(sum < target){
                j++;
            }

            if(sum == target){
                return minSum;
            }
        }
    }

    return minSum;
};

console.log(threeSumClosest([1,1,1,0], -100));
