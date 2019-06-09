/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    var n = x ^ y;
    
    var count = 0; 
    while (n > 0) 
    { 
        n &= (n - 1) ; 
        count++; 
    } 
    return count; 
    
};
