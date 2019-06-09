/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    var res = [];
    
    for(let i=1; i<=nums.length; i++){
        if(nums.indexOf(i) == -1){
            res.push(i);
        }
    }
    
    return res;
    
};
