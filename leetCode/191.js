/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(x) {
    var count = 0;
    while(x){
        x &= (x-1);
        count++;
    }
    
    return count;
    
};
