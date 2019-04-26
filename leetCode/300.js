//Given an unsorted array of integers, find the length of longest increasing subsequence.
// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// [2,3,7,101]

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    if(nums.length == 0){
        return 0;   
    }

    var arr = Array(nums.length).fill(1);

    var i = 1;
    var j = 0;

    while(i<nums.length){
        if(nums[i] > nums[j]){
            var newLength = arr[j] + 1;
            if(newLength > arr[i]){
                arr[i] = newLength;
            }
        }

        j++;

        if(j == i){
            j = 0;
            i++;
        }
    }

    var max = arr[0];
    for(var k=0; k<arr.length; k++){
        if(arr[k] > max){
            max = arr[k];
        }
    }

    return max;
};
