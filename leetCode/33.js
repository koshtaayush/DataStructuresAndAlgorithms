/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    var n = nums.length;
    var i = 0;
    
    for(i=n-2; i>=0;i--){
        if(nums[i] > nums[i+1]){
           break;
        }
    }
    
    if(i == -1){
        i = nums.length - 1;
    }

    var start = 0;
    var end = nums.length - 1;

    if(target < nums[0]){
        start = i+1;
        end = nums.length - 1;
    }else{
        start = 0;
        end = i;
    }

    while(start <= end){

        let mid = Math.floor((start + end)/2);

        if(nums[mid] == target){
            return mid;
        }else if(nums[mid] < target){
            start = mid+1;
        }else{
            end = mid - 1;
        }
    }

    return -1;
    
};
