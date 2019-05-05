/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    var start = 0;
    var end = nums.length - 1;

    var res = -1;

    while(start <= end){

        let mid = Math.floor((start + end)/2);

        if(nums[mid] == target){
            res = mid;
            break;
            // return mid;
        }else if(nums[mid] < target){
            start = mid+1;
        }else{
            end = mid - 1;
        }
    }


    if(res == -1){
        return [-1, -1];
    }else{
        var s = res;
        var e = res;
        if(nums[s-1] == target){
            while(nums[s-1] == target){
                s--;
            }
        }
        if(nums[e+1] == target){
            while(nums[e+1] == target){
                e++;
            }
        }
        return [s, e];
    }
};
