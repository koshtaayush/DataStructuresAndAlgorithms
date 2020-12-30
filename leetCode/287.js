/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let myset = new Set();
    let ans;
    nums.forEach((v) => {
        if(myset.has(v)){
            ans = v;
        }else{
            myset.add(v);
        }
    })
    return ans
};
