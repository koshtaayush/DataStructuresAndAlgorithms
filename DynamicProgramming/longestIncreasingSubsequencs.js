/** 
 * if j reaches position of i reset j=0 and increase i by 1
 * if element at i is greater than element at j => T[i] = T[j]+1
 * if element at i is less than element at j => increase j by 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

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

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
