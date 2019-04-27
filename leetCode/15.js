/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    if(nums.length < 3){
        return [];
    }
    
    //sorting the array 
    nums.sort((a,b) => {
        return a - b;
    });

    var res = [];

    for(var i=0; i<nums.length-2; i++){
        
        var j=i+1;
        var k=nums.length-1;
        if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}

        while(j<k){
            if(nums[i] + nums[j] + nums[k] == 0){
                var arr = [nums[i], nums[j], nums[k]];
                res.push(arr);
                j++;
                k--;
            }
    
            if(nums[i] + nums[j] + nums[k] > 0){
                k--;
            }

            if(nums[i] + nums[j] + nums[k] < 0){
                j++;
            }
        }
    }

    var temp = [];
    var ans = res.filter((v) => {
        if(temp.indexOf(v.toString()) < 0){
            temp.push(v.toString());
            return v;
        }
    })
    
    return ans;

};
